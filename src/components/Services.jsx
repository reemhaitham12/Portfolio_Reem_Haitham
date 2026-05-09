import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].services;

  return (
    <section id="services" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>
        <div style={gridStyle}>
          {text.items.map((svc) => (
            <div key={svc.id} style={cardStyle} className="hover-card">
              <div style={iconStyle}>{svc.icon}</div>
              <h3 style={nameStyle}>{svc.title}</h3>
              <p style={descStyle}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
};

const cardStyle = {
  backgroundColor: 'var(--card-bg)',
  padding: '2.5rem 2rem',
  borderRadius: '1rem',
  textAlign: 'center',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const iconStyle = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
  color: 'var(--primary)',
  background: 'linear-gradient(135deg, rgba(126, 216, 87, 0.1) 0%, rgba(126, 216, 87, 0) 100%)', // subtle #7ed857 background
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const nameStyle = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
  color: 'var(--text)'
};

const descStyle = {
  color: 'var(--text-muted)',
  lineHeight: '1.6'
};

export default Services;
