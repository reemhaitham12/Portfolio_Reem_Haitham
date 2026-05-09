import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Testimonials = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].testimonials;

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>
        <div style={gridStyle}>
          {text.items.map((item) => (
            <div key={item.id} style={cardStyle} className="hover-card">
              <div style={quoteIconStyle}>"</div>
              <p style={feedbackStyle}>{item.feedback}</p>
              <div style={authorWrapStyle}>
                <div style={avatarStyle}>{item.name.charAt(0)}</div>
                <div>
                  <h4 style={nameStyle}>{item.name}</h4>
                  <p style={roleStyle}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
};

const cardStyle = {
  backgroundColor: 'var(--background)',
  padding: '2.5rem',
  borderRadius: '1rem',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--border-color)',
  position: 'relative'
};

const quoteIconStyle = {
  fontSize: '4rem',
  color: 'var(--primary)',
  opacity: 0.2,
  position: 'absolute',
  top: '1rem',
  right: '2rem',
  fontFamily: 'serif',
  lineHeight: '1'
};

const feedbackStyle = {
  fontSize: '1.1rem',
  color: 'var(--text)',
  fontStyle: 'italic',
  marginBottom: '2rem',
  position: 'relative',
  zIndex: 1,
  lineHeight: '1.8'
};

const authorWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary)',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold'
};

const nameStyle = {
  fontSize: '1rem',
  color: 'var(--text)',
  marginBottom: '0.2rem'
};

const roleStyle = {
  fontSize: '0.85rem',
  color: 'var(--text-muted)'
};

export default Testimonials;
