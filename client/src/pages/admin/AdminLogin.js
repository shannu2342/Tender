import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await login(email, password);

            if (response.success) {
                navigate('/admin/dashboard');
            } else {
                setError(response.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred while logging in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '40px'
            }}>
                {/* Logo and Title */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        G
                    </div>
                    <h1 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: '#2c3e50',
                        marginBottom: '10px'
                    }}>
                        Admin Login
                    </h1>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '0.9rem'
                    }}>
                        Government e-Marketplace Services
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '10px',
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        color: '#721c24'
                    }}>
                        <AlertCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.9rem' }}>{error}</span>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            <Mail style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            className="form-control"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            <Lock style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="form-control"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '25px'
                    }}>
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            disabled={loading}
                        />
                        <label htmlFor="remember" style={{
                            fontSize: '0.9rem',
                            color: '#6c757d',
                            cursor: 'pointer'
                        }}>
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', marginBottom: '20px' }}
                        disabled={loading}
                    >
                        {loading ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    width: '18px',
                                    height: '18px',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    borderTop: '2px solid white',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                }}></div>
                                <span>Logging in...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>

                {/* Footer Links */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '0.85rem',
                        marginBottom: '10px'
                    }}>
                        Don't have an account?{' '}
                        <Link to="/contact" style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}>
                            Contact Support
                        </Link>
                    </p>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '0.85rem'
                    }}>
                        Forgot your password?{' '}
                        <Link to="/contact" style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}>
                            Reset Password
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;