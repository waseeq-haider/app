import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Home, MessageSquare, FileText, Briefcase, DollarSign } from 'lucide-react';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDark]);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 0',
            zIndex: 100,
            backdropFilter: 'blur(10px)',
            transition: 'background-color var(--transition-normal)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <img
                        src="/favicon.png"
                        alt="Apex Logo"
                        style={{
                            width: '32px',
                            height: '32px',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--color-text-main)'
                    }}>
                        Apex
                    </span>
                </Link>
                <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link to="/" style={{
                        color: 'var(--color-text-main)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.95rem'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >
                        <Home size={16} />
                        <span>Home</span>
                    </Link>
                    <Link to="/chat" style={{
                        color: 'var(--color-text-main)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.95rem'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >
                        <MessageSquare size={16} />
                        <span>AI Assistant</span>
                    </Link>
                    <Link to="/services" style={{
                        color: 'var(--color-text-main)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.95rem'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >
                        <Briefcase size={16} />
                        <span>Services</span>
                    </Link>
                    <Link to="/pricing" style={{
                        color: 'var(--color-text-main)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.95rem'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >
                        <DollarSign size={16} />
                        <span>Pricing</span>
                    </Link>
                    <Link to="/book" className="btn btn-primary" style={{
                        padding: '0.5rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        fontSize: '0.95rem'
                    }}>
                        <FileText size={16} />
                        <span>Get Quote</span>
                    </Link>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--color-surface)',
                            color: 'var(--color-text-main)',
                            border: '1px solid var(--color-border)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                            e.currentTarget.style.color = 'var(--color-text-main)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
