import React from 'react';

const SidebarContact = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      fontFamily: 'Arial, sans-serif',
    }}>
      <a
        href="mailto:contact@example.com"
        style={{
          backgroundColor: '#6a4fbb',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px',
          borderBottom: '1px solid #5a3f9b',
        }}
        title="Contact Us"
      >
        &#9993; Contact Us
      </a>
      <a
        href="https://wa.me/919363093634"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '20px',
          borderBottom: '1px solid #3e8e41',
        }}
        title="WhatsApp"
      >
        &#128241;
      </a>
      <a
        href="tel:+919363093634"
        style={{
          backgroundColor: '#2e7d32',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
        title="Call Us"
      >
        &#9742;
      </a>
    </div>
  );
};

export default SidebarContact;
