import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        whatsappNumber: '',
        phoneNumber: '',
        email: '',
        tenderAccessEnabled: true
    });
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await api.get('/api/settings');
            setSettings(response.data);
        } catch (error) {
            console.error('Error fetching settings:', error);
            setErrorMessage('Failed to fetch settings');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put('/api/settings', settings);
            setSettings(response.data);
            setSuccessMessage('Settings updated successfully');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error updating settings:', error);
            setErrorMessage('Failed to update settings');
            setTimeout(() => setErrorMessage(''), 3000);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    if (loading) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div className="loading"></div>
                <p style={{ marginTop: '20px', color: '#718096' }}>Loading settings...</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#2d3748' }}>Settings</h1>

            {successMessage && (
                <div style={{
                    backgroundColor: '#d1fae5',
                    color: '#065f46',
                    padding: '12px 20px',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div style={{
                    backgroundColor: '#fee2e2',
                    color: '#991b1b',
                    padding: '12px 20px',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#374151', fontSize: '0.9rem', fontWeight: '500' }}>
                        WhatsApp Number:
                    </label>
                    <input
                        type="text"
                        name="whatsappNumber"
                        value={settings.whatsappNumber}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #d1d5db',
                            borderRadius: '5px',
                            fontSize: '0.9rem',
                            transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        required
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#374151', fontSize: '0.9rem', fontWeight: '500' }}>
                        Phone Number:
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={settings.phoneNumber}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #d1d5db',
                            borderRadius: '5px',
                            fontSize: '0.9rem',
                            transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        required
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#374151', fontSize: '0.9rem', fontWeight: '500' }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #d1d5db',
                            borderRadius: '5px',
                            fontSize: '0.9rem',
                            transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        required
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', color: '#374151', fontSize: '0.9rem', fontWeight: '500' }}>
                        <input
                            type="checkbox"
                            name="tenderAccessEnabled"
                            checked={settings.tenderAccessEnabled}
                            onChange={handleChange}
                            style={{
                                marginRight: '10px',
                                width: '16px',
                                height: '16px',
                                cursor: 'pointer'
                            }}
                        />
                        Enable paid tender access
                    </label>
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button
                        type="submit"
                        style={{
                            padding: '12px 30px',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontWeight: '500',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                    >
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminSettings;