
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.1rem', color: '#718096', lineHeight: '1.8', marginBottom: '40px' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s',
                    marginBottom: '20px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
                Go to Home Page
            </Link>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>
                If you believe you have reached this page in error, please contact us at <a href="mailto:info@example.com" style={{ color: '#2563eb', textDecoration: 'none' }}>info@example.com</a>
            </p>
        </div>
    );
};

export default NotFound;