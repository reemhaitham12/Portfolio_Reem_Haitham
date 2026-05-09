import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section style={notFoundSectionStyle}>
      <div className="container" style={containerStyle}>
        <h1 style={titleStyle} className="reveal glitch-text">
          4<span style={{ color: 'var(--primary)', textShadow: '0 0 30px var(--primary)' }}>0</span>4
        </h1>
        <h2 style={{ ...subtitleStyle, transitionDelay: '0.1s' }} className="reveal">Page Not Found</h2>
        <h3 style={{ ...greetingStyle, transitionDelay: '0.2s' }} className="reveal">
          Oops! This page went missing.
        </h3>
        <p style={{ ...paragraphStyle, transitionDelay: '0.3s' }} className="reveal">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps it never existed. Let's get you back on track.
        </p>
        <div style={{ ...btnGroupStyle, transitionDelay: '0.4s' }} className="reveal">
          <Link to="/" style={greenBtnStyle} className="btn btn-primary">Go Back Home</Link>
          <a href="/#contact" style={outlineBtnStyle} className="btn btn-outline">Contact Support</a>
        </div>
      </div>
    </section>
  );
};

// Styles
const notFoundSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--background)',
  textAlign: 'center',
  padding: '2rem'
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
  maxWidth: '650px'
};

const titleStyle = {
  fontSize: 'clamp(8rem, 20vw, 12rem)',
  fontWeight: '900',
  color: 'var(--text)',
  lineHeight: '1',
  margin: 0
};

const subtitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: 'var(--primary)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  margin: '1rem 0',
  padding: '0.5rem 1.5rem',
  border: '2px solid var(--primary)',
  borderRadius: '50px',
  backgroundColor: 'rgba(126, 216, 87, 0.1)',
  display: 'inline-block'
};

const greetingStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: 'var(--text)',
  marginBottom: '0.5rem'
};

const paragraphStyle = {
  fontSize: '1.1rem',
  color: 'var(--text-muted)',
  lineHeight: '1.7',
  marginBottom: '2rem'
};

const btnGroupStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const greenBtnStyle = {
  backgroundColor: '#7ed857',
  color: '#0f172a',
  border: 'none',
  padding: '0.85rem 2.5rem',
  fontSize: '1.05rem',
  fontWeight: '700',
  borderRadius: '0.6rem',
  boxShadow: '0 10px 15px -3px rgba(126, 216, 87, 0.3)',
  textDecoration: 'none'
};

const outlineBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.85rem 2.5rem',
  borderRadius: '0.6rem',
  fontWeight: '600',
  fontSize: '1.05rem',
  backgroundColor: 'transparent',
  color: 'var(--text)',
  border: '2px solid var(--border-color)',
  textDecoration: 'none'
};

export default NotFound;