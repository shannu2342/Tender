import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Crown, ShieldCheck, Smartphone } from 'lucide-react';
import { paymentsService } from '../services/api';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { useSiteSettings } from '../hooks/useSiteSettings';

const normalizeMobile = (value) => String(value || '').replace(/[^\d]/g, '').slice(-10);

const loadRazorpayScript = () => {
    if (window.Razorpay) return Promise.resolve(true);
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const PremiumAccessModal = ({ open, onClose, onActivated }) => {
    const site = useSiteSettings();
    const { user, isPremium, isLoggedIn, requestOtp, verifyOtp, setUser, refreshProfile } = useCustomerAuth();
    const [step, setStep] = useState(isLoggedIn ? 2 : 0);
    const [mobile, setMobile] = useState(user?.mobile || '');
    const [name, setName] = useState(user?.name || '');
    const [requestId, setRequestId] = useState('');
    const [otp, setOtp] = useState('');
    const [devOtp, setDevOtp] = useState('');
    const [busy, setBusy] = useState(false);
    const [message, setMessage] = useState('');
    const bodyRef = useRef(null);

    const amountText = useMemo(() => {
        const price = Number(site.premium.price || 0);
        return `${site.premium.currency} ${price.toLocaleString('en-IN')}`;
    }, [site.premium.currency, site.premium.price]);

    useEffect(() => {
        if (!open) return undefined;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [open]);

    useEffect(() => {
        if (!open || !bodyRef.current) return;
        bodyRef.current.scrollTop = 0;
    }, [open]);

    if (!open) return null;

    const closeAndReset = () => {
        setStep(isLoggedIn ? 2 : 0);
        setRequestId('');
        setOtp('');
        setDevOtp('');
        setMessage('');
        onClose?.();
    };

    const handleSendOtp = async () => {
        const normalizedMobile = normalizeMobile(mobile);
        if (normalizedMobile.length !== 10) {
            setMessage('Enter a valid 10-digit mobile number.');
            return;
        }

        try {
            setBusy(true);
            setMessage('');
            const data = await requestOtp(normalizedMobile);
            setRequestId(data.requestId);
            setDevOtp(data.devOtp || '');
            setStep(1);
            setMessage('OTP sent successfully.');
        } catch (error) {
            setMessage(error?.response?.data?.message || 'Unable to send OTP right now.');
        } finally {
            setBusy(false);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            setBusy(true);
            setMessage('');
            const payload = await verifyOtp({
                requestId,
                mobile: normalizeMobile(mobile),
                otp,
                name
            });
            setUser(payload.user);
            setStep(2);
            setMessage('Login successful.');
        } catch (error) {
            setMessage(error?.response?.data?.message || 'OTP verification failed.');
        } finally {
            setBusy(false);
        }
    };

    const handlePayNow = async () => {
        try {
            setBusy(true);
            setMessage('');

            const orderResponse = await paymentsService.createOrder({ planCode: 'premium_tender_access' });
            const order = orderResponse.data;
            const loaded = await loadRazorpayScript();

            const completePayment = async (paymentId, signature) => {
                const verifyResponse = await paymentsService.verifyOrder({
                    orderId: order.orderId,
                    paymentId,
                    signature
                });
                await refreshProfile();
                if (verifyResponse?.data?.user) {
                    setUser(verifyResponse.data.user);
                }
                setStep(3);
                onActivated?.();
            };

            if (loaded && window.Razorpay && order.keyId) {
                const options = {
                    key: order.keyId,
                    amount: Number(order.amount) * 100,
                    currency: order.currency || 'INR',
                    name: site.name,
                    description: order.planName || site.premium.planName,
                    order_id: order.orderId,
                    prefill: {
                        name: user?.name || name,
                        email: user?.email || '',
                        contact: normalizeMobile(user?.mobile || mobile)
                    },
                    theme: { color: '#15803d' },
                    handler: async function (response) {
                        await completePayment(response.razorpay_payment_id, response.razorpay_signature);
                    }
                };
                const razorpay = new window.Razorpay(options);
                razorpay.on('payment.failed', (resp) => {
                    setMessage(resp?.error?.description || 'Payment failed. Please try again.');
                    setBusy(false);
                });
                razorpay.open();
                return;
            }

            await completePayment(`mock_pay_${Date.now()}`, 'mock_signature');
        } catch (error) {
            setMessage(error?.response?.data?.message || 'Payment could not be completed.');
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="premium-modal" role="dialog" aria-modal="true" aria-label="Premium access">
            <button type="button" className="premium-modal__backdrop" aria-label="Close premium access" onClick={closeAndReset} />
            <div className="premium-modal__panel">
                <div className="premium-modal__head">
                    <div className="chip-row">
                        <span className="chip chip--premium"><Crown size={14} /> Premium Access</span>
                        {isPremium ? <span className="chip chip--sky"><CheckCircle2 size={14} /> Active</span> : null}
                    </div>
                    <button type="button" className="mobile-nav__close" onClick={closeAndReset} aria-label="Close premium access">X</button>
                </div>

                <div className="premium-modal__body" ref={bodyRef}>
                    <h3 className="section-title title-sm">{site.premium.planName}</h3>
                    <p className="section-subtitle">Unlock all premium tenders, complete details, and fast-track opportunity discovery.</p>

                    <div className="premium-price">{amountText} <span>/ {site.premium.durationDays} days</span></div>

                    <div className="list-clean mt-12">
                        <div><ShieldCheck size={16} /> Unlimited premium tender visibility</div>
                        <div><Crown size={16} /> Priority opportunity access</div>
                        <div><Smartphone size={16} /> OTP-secured account login</div>
                    </div>

                    {message ? <div className="notice mt-14">{message}</div> : null}
                    {devOtp ? <div className="notice mt-12"><strong>Dev OTP:</strong> {devOtp}</div> : null}

                    {isPremium || step === 3 ? (
                        <div className="notice notice--success mt-14">
                            <strong>Premium is active.</strong>
                            <p>You can now view all premium tenders.</p>
                        </div>
                    ) : null}

                    {!isLoggedIn && step === 0 ? (
                        <div className="grid gap-8 mt-14">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="10-digit mobile" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                            </div>
                            <button type="button" className="btn btn-primary" disabled={busy} onClick={handleSendOtp}>
                                {busy ? 'Sending OTP...' : 'Send OTP'}
                            </button>
                        </div>
                    ) : null}

                    {!isLoggedIn && step === 1 ? (
                        <div className="grid gap-8 mt-14">
                            <div className="form-group">
                                <label>Enter OTP</label>
                                <input className="form-control" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="6-digit OTP" />
                            </div>
                            <button type="button" className="btn btn-primary" disabled={busy} onClick={handleVerifyOtp}>
                                {busy ? 'Verifying...' : 'Verify & Continue'}
                            </button>
                        </div>
                    ) : null}

                    {(isLoggedIn && !isPremium && step >= 2) ? (
                        <div className="grid gap-8 mt-14">
                            <button type="button" className="btn btn-success" disabled={busy || !site.premium.enabled} onClick={handlePayNow}>
                                {busy ? 'Processing...' : `Pay ${amountText} with Razorpay`}
                            </button>
                            {!site.premium.enabled ? <p className="section-subtitle">Premium access is currently disabled by admin.</p> : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default PremiumAccessModal;
