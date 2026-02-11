import { useEffect, useMemo, useState } from 'react';
import api from '../services/api';
import { site } from '../config/site';

let settingsCache = null;
let settingsPromise = null;

const loadSettings = async () => {
    if (settingsCache) return settingsCache;
    if (settingsPromise) return settingsPromise;

    settingsPromise = api
        .get('/settings')
        .then((res) => {
            settingsCache = res.data || {};
            return settingsCache;
        })
        .catch(() => {
            settingsCache = {};
            return settingsCache;
        })
        .finally(() => {
            settingsPromise = null;
        });

    return settingsPromise;
};

const normalizePhone = (value) => String(value || '').replace(/[^\d+]/g, '');
const normalizeWhatsApp = (value) => String(value || '').replace(/[^\d]/g, '');

export const useSiteSettings = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        let mounted = true;
        loadSettings().then((data) => {
            if (mounted) setSettings(data);
        });
        return () => {
            mounted = false;
        };
    }, []);

    return useMemo(() => {
        const phoneRaw = settings?.phoneNumber || site.contact.phoneDisplay;
        const whatsappRaw = settings?.whatsappNumber || site.contact.whatsappNumber;
        const premiumPrice = Number(settings?.premiumPrice ?? 1999);
        const freeVisibleTenders = Number(settings?.freeVisibleTenders ?? 5);
        const premiumPreviewTenders = Number(settings?.premiumPreviewTenders ?? 2);
        const premiumDurationDays = Number(settings?.premiumDurationDays ?? 30);

        return {
            ...site,
            contact: {
                ...site.contact,
                phoneDisplay: phoneRaw,
                phoneTel: normalizePhone(phoneRaw) || site.contact.phoneTel,
                email: settings?.email || site.contact.email,
                whatsappNumber: normalizeWhatsApp(whatsappRaw) || site.contact.whatsappNumber
            },
            tenderAccessEnabled: settings?.tenderAccessEnabled ?? true,
            premium: {
                enabled: settings?.premiumEnabled ?? settings?.tenderAccessEnabled ?? true,
                planName: settings?.premiumPlanName || 'Premium Tender Access',
                price: Number.isFinite(premiumPrice) ? premiumPrice : 1999,
                currency: settings?.premiumCurrency || 'INR',
                durationDays: Number.isFinite(premiumDurationDays) ? premiumDurationDays : 30,
                freeVisibleTenders: Number.isFinite(freeVisibleTenders) ? freeVisibleTenders : 5,
                premiumPreviewTenders: Number.isFinite(premiumPreviewTenders) ? premiumPreviewTenders : 2,
                razorpayKeyId: settings?.razorpayKeyId || ''
            }
        };
    }, [settings]);
};
