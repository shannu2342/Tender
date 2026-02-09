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
                <div className="btn-loading">
                    <span className="spinner" />
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    if (isAdminRoute && admin) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    if (isAdminRoute) {
        return element;
    }

    return (
        <div className="main-shell">
            <Header />
            <main style={{ flex: 1 }}>{element}</main>
            <Footer />
        </div>
    );
};

export default PublicRoute;
