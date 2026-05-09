import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Achievements = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].achievements;

  return (
    <section id="achievements">
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>
        <div style={gridStyle}>
          {text.items.map((item) => (
            <div key={item.id} style={cardStyle} className="hover-card">
              <div style={iconStyle}>{item.icon}</div>
              <div style={countStyle}>{item.count}</div>
              <p style={labelStyle}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
};

const cardStyle = {
  backgroundColor: 'var(--card-bg)',
  padding: '2.5rem 1rem',
  borderRadius: '1rem',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--border-color)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const iconStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem'
};

const countStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'var(--primary)',
  marginBottom: '0.5rem'
};

const labelStyle = {
  fontSize: '1rem',
  color: 'var(--text-main)',
  fontWeight: '500'
};

export default Achievements;
