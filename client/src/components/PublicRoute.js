import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';

const PublicRoute = ({ element, isAdminRoute = false }) => {
    const { admin, loading } = useAuth();

    if (loading) {
        return (
            <div className="loading">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #e0e0e0',
                        borderTop: '2px solid #007bff',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    // If accessing admin login page and already authenticated, redirect to dashboard
    if (isAdminRoute && admin) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    // If accessing admin login page, show without header/footer
    if (isAdminRoute) {
        return element;
    }

    // For public pages, show with header and footer
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                {element}
            </main>
            <Footer />
        </div>
    );
};

export default PublicRoute;