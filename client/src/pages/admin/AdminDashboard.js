import { useState, useEffect } from 'react';
import { BarChart3, FileText, Briefcase, FileBox, MessageSquare, Users, TrendingUp, Clock } from 'lucide-react';
import { enquiriesService, tendersService, usersService, servicesService } from '../../services/api';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalTenders: 0,
        activeTenders: 0,
        pendingEnquiries: 0,
        totalUsers: 0,
        premiumUsers: 0,
        activeTenderAccess: 0,
        totalServices: 0,
        activeServices: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [
                    tendersStats,
                    usersStats,
                    servicesRes,
                    enquiriesStats
                ] = await Promise.all([
                    tendersService.getStats(),
                    usersService.getStats(),
                    servicesService.getServices(),
                    enquiriesService.getStats()
                ]);

                setStats({
                    totalTenders: tendersStats.data.total,
                    activeTenders: tendersStats.data.active,
                    pendingEnquiries: enquiriesStats.data.pending,
                    totalUsers: usersStats.data.total,
                    premiumUsers: usersStats.data.premium,
                    activeTenderAccess: usersStats.data.activeTenderAccess,
                    totalServices: servicesRes.data.length,
                    activeServices: servicesRes.data.filter(service => service.isEnabled).length
                });
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total Tenders',
            value: stats.totalTenders,
            icon: FileBox,
            color: '#007bff',
            bgColor: '#e3f2fd'
        },
        {
            title: 'Active Tenders',
            value: stats.activeTenders,
            icon: Clock,
            color: '#28a745',
            bgColor: '#d4edda'
        },
        {
            title: 'Pending Enquiries',
            value: stats.pendingEnquiries,
            icon: MessageSquare,
            color: '#ffc107',
            bgColor: '#fff3cd'
        },
        {
            title: 'Total Users',
            value: stats.totalUsers,
            icon: Users,
            color: '#17a2b8',
            bgColor: '#d1ecf1'
        },
        {
            title: 'Premium Users',
            value: stats.premiumUsers,
            icon: TrendingUp,
            color: '#6610f2',
            bgColor: '#e2e3f3'
        },
        {
            title: 'Active Tender Access',
            value: stats.activeTenderAccess,
            icon: Briefcase,
            color: '#dc3545',
            bgColor: '#f8d7da'
        },
        {
            title: 'Total Services',
            value: stats.totalServices,
            icon: FileText,
            color: '#fd7e14',
            bgColor: '#fff3e0'
        },
        {
            title: 'Active Services',
            value: stats.activeServices,
            icon: BarChart3,
            color: '#20c997',
            bgColor: '#d1fae5'
        }
    ];

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

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#2c3e50'
                }}>
                    Dashboard
                </h1>
                <div style={{
                    backgroundColor: '#e3f2fd',
                    color: '#007bff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                }}>
                    {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
            }}>
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="card">
                            <div className="card-body">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start',
                                    marginBottom: '15px'
                                }}>
                                    <div>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            marginBottom: '5px'
                                        }}>
                                            {stat.title}
                                        </p>
                                        <h3 style={{
                                            fontSize: '1.8rem',
                                            fontWeight: '700',
                                            color: '#2c3e50'
                                        }}>
                                            {stat.value}
                                        </h3>
                                    </div>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: stat.bgColor,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: stat.color
                                    }}>
                                        <Icon style={{ width: '24px', height: '24px' }} />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontSize: '0.85rem'
                                }}>
                                    <span style={{ color: '#28a745' }}>↑</span>
                                    <span style={{ color: '#6c757d' }}>12%</span>
                                    <span style={{ color: '#6c757d' }}>from last month</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts and Tables Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
            }}>
                {/* Recent Activity */}
                <div className="card">
                    <div className="card-header">
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#2c3e50'
                        }}>
                            Recent Activity
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{
                            maxHeight: '300px',
                            overflowY: 'auto'
                        }}>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr style={{
                                        borderBottom: '1px solid #e9ecef'
                                    }}>
                                        <th style={{
                                            textAlign: 'left',
                                            padding: '10px 0',
                                            fontSize: '0.9rem',
                                            color: '#6c757d'
                                        }}>
                                            Activity
                                        </th>
                                        <th style={{
                                            textAlign: 'right',
                                            padding: '10px 0',
                                            fontSize: '0.9rem',
                                            color: '#6c757d'
                                        }}>
                                            Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <tr key={item} style={{
                                            borderBottom: '1px solid #f8f9fa'
                                        }}>
                                            <td style={{
                                                padding: '12px 0',
                                                fontSize: '0.9rem'
                                            }}>
                                                <span style={{ color: '#007bff' }}>New tender</span> created by Admin
                                            </td>
                                            <td style={{
                                                padding: '12px 0',
                                                fontSize: '0.85rem',
                                                color: '#6c757d',
                                                textAlign: 'right'
                                            }}>
                                                2 hours ago
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card">
                    <div className="card-header">
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#2c3e50'
                        }}>
                            Quick Actions
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '15px'
                        }}>
                            {[
                                { title: 'Add New Tender', icon: FileBox, color: '#007bff' },
                                { title: 'Add New Service', icon: FileText, color: '#28a745' },
                                { title: 'Add New Blog', icon: FileText, color: '#ffc107' },
                                { title: 'View Enquiries', icon: MessageSquare, color: '#dc3545' }
                            ].map((action, index) => {
                                const Icon = action.icon;
                                return (
                                    <button key={index} style={{
                                        padding: '20px',
                                        backgroundColor: '#f8f9fa',
                                        border: '1px solid #e9ecef',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <Icon style={{
                                            width: '30px',
                                            height: '30px',
                                            color: action.color,
                                            marginBottom: '10px'
                                        }} />
                                        <span style={{
                                            display: 'block',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            color: '#2c3e50'
                                        }}>
                                            {action.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="card">
                <div className="card-header">
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#2c3e50'
                    }}>
                        System Status
                    </h3>
                </div>
                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { name: 'API Service', status: 'online', color: '#28a745' },
                            { name: 'Database', status: 'online', color: '#28a745' },
                            { name: 'Email Service', status: 'online', color: '#28a745' },
                            { name: 'Payment Gateway', status: 'online', color: '#28a745' },
                            { name: 'Tender API', status: 'online', color: '#28a745' }
                        ].map((service, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 15px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '6px'
                            }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: service.color,
                                    borderRadius: '50%'
                                }}></div>
                                <span style={{ fontSize: '0.9rem', color: '#2c3e50' }}>
                                    {service.name}
                                </span>
                                <span style={{
                                    fontSize: '0.8rem',
                                    backgroundColor: service.color,
                                    color: 'white',
                                    padding: '2px 8px',
                                    borderRadius: '4px'
                                }}>
                                    {service.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;