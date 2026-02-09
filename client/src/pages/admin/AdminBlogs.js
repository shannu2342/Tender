import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await api.get('/api/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await api.delete(`/api/blogs/${id}`);
                fetchBlogs();
            } catch (error) {
                console.error('Error deleting blog:', error);
            }
        }
    };

    const handleToggleStatus = async (id, currentStatus) => {
        try {
            await api.put(`/api/blogs/${id}`, {
                enabled: !currentStatus
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error updating blog status:', error);
        }
    };

    if (loading) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div className="loading"></div>
                <p style={{ marginTop: '20px', color: '#718096' }}>Loading blogs...</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#2d3748' }}>Manage Blogs</h1>

            <div style={{ marginBottom: '20px' }}>
                <Link
                    to="/admin/blogs/new"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                    + Add New Blog
                </Link>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f3f4f6' }}>
                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Title</th>
                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Category</th>
                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Date</th>
                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Status</th>
                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '12px', color: '#1f2937', fontSize: '0.9rem' }}>{blog.title}</td>
                            <td style={{ padding: '12px', color: '#1f2937', fontSize: '0.9rem' }}>{blog.category}</td>
                            <td style={{ padding: '12px', color: '#1f2937', fontSize: '0.9rem' }}>{new Date(blog.date).toLocaleDateString()}</td>
                            <td style={{ padding: '12px' }}>
                                <span
                                    style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '500',
                                        backgroundColor: blog.enabled ? '#d1fae5' : '#fee2e2',
                                        color: blog.enabled ? '#065f46' : '#991b1b'
                                    }}
                                >
                                    {blog.enabled ? 'Enabled' : 'Disabled'}
                                </span>
                            </td>
                            <td style={{ padding: '12px' }}>
                                <Link
                                    to={`/admin/blogs/${blog._id}`}
                                    style={{
                                        marginRight: '10px',
                                        padding: '6px 12px',
                                        backgroundColor: '#3b82f6',
                                        color: 'white',
                                        borderRadius: '5px',
                                        textDecoration: 'none',
                                        fontSize: '0.8rem',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleToggleStatus(blog._id, blog.enabled)}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: blog.enabled ? '#ef4444' : '#10b981',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s',
                                        marginRight: '10px'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = blog.enabled ? '#dc2626' : '#059669'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = blog.enabled ? '#ef4444' : '#10b981'}
                                >
                                    {blog.enabled ? 'Disable' : 'Enable'}
                                </button>
                                <button
                                    onClick={() => handleDelete(blog._id)}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminBlogs;