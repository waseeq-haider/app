import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingChat = () => {
    return (
        <Link to="/chat" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-floating)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            zIndex: 1000,
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <div style={{ position: 'relative' }}>
                <MessageCircle size={24} />
                <span style={{
                    position: 'absolute',
                    top: -2,
                    right: -2,
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#34c759',
                    borderRadius: '50%',
                    border: '2px solid var(--color-primary)'
                }}></span>
            </div>
            <span style={{ fontWeight: '600' }}>Ask Apex AI</span>
        </Link>
    );
};

export default FloatingChat;
