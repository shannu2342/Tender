import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    FileText,
    Briefcase,
    FileBox,
    MessageSquare,
    Users,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { admin, logout } = useAuth();

    const menuItems = [
        {
            title: 'Dashboard',
            icon: LayoutDashboard,
            path: '/admin/dashboard'
        },
        {
            title: 'Pages',
            icon: FileText,
            path: '/admin/pages'
        },
        {
            title: 'Services',
            icon: Briefcase,
            path: '/admin/services'
        },
        {
            title: 'Tenders',
            icon: FileBox,
            path: '/admin/tenders'
        },
        {
            title: 'Blogs',
            icon: FileText,
            path: '/admin/blogs'
        },
        {
            title: 'Enquiries',
            icon: MessageSquare,
            path: '/admin/enquiries'
        },
        {
            title: 'Users',
            icon: Users,
            path: '/admin/users'
        },
        {
            title: 'Settings',
            icon: Settings,
            path: '/admin/settings'
        }
    ];

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: '#f8f9fa'
        }}>
            {/* Sidebar */}
            <div style={{
                width: sidebarOpen ? '250px' : '0',
                backgroundColor: '#2c3e50',
                color: 'white',
                overflowX: 'hidden',
                transition: 'width 0.3s ease',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: 1000
            }}>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#1a252f',
                    borderBottom: '1px solid #34495e'
                }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0' }}>
                        Admin Dashboard
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: '#bdc3c7', marginTop: '5px' }}>
                        Welcome, {admin?.name}
                    </p>
                </div>

                <div style={{ padding: '15px 0' }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '12px 20px',
                                    color: isActive(item.path) ? '#3498db' : '#bdc3c7',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    borderLeft: isActive(item.path) ? '4px solid #3498db' : '4px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive(item.path)) {
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.color = '#ecf0f1';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive(item.path)) {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#bdc3c7';
                                    }
                                }}
                            >
                                <Icon style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '15px'
                                }} />
                                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '15px',
                    borderTop: '1px solid #34495e'
                }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            padding: '10px',
                            backgroundColor: 'transparent',
                            color: '#e74c3c',
                            border: '1px solid #e74c3c',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                    >
                        <LogOut style={{ width: '18px', height: '18px' }} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: sidebarOpen ? '250px' : '0',
                transition: 'margin-left 0.3s ease'
            }}>
                {/* Header */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '15px 20px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#34495e'
                        }}
                    >
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#3498db',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '1.2rem'
                        }}>
                            {admin?.name?.charAt(0) || 'A'}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                color: '#2c3e50'
                            }}>
                                {admin?.name}
                            </span>
                            <span style={{
                                fontSize: '0.8rem',
                                color: '#7f8c8d'
                            }}>
                                {admin?.role}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div style={{ padding: '20px' }}>
                    {children}
                </div>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                        onClick: () => setSidebarOpen(false)
                    }}
                />
            )}

            {/* Responsive Styles */}
            <style jsx>{`
        @media (min-width: 768px) {
          .sidebar {
            width: 250px !important;
            position: static !important;
          }
          
          .main-content {
            margin-left: 250px !important;
          }
          
          .menu-toggle {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
};

export default AdminLayout;