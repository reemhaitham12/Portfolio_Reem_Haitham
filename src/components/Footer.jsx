import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const data = content[language];
  const text = data.footer;
  const contact = data.contact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        
        <div style={{ ...topGridStyle, direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          
          {/* Left Column */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>{text.leftHeading}</h3>
            <p style={textStyle}>{text.leftText}</p>
          </div>

          {/* Middle Column */}
          <div style={{ ...columnStyle, alignItems: 'center', textAlign: 'center' }}>
            <h2 style={logoStyle}>{text.logo}</h2>
            <div style={socialRowStyle}>
              {contact.info.social.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" className="social-icon-footer">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>{text.rightHeading}</h3>
            <p style={textStyle}>{text.rightText}</p>
          </div>
          
        </div>

        {/* Bottom Row */}
        <div style={bottomRowStyle}>
          <p style={copyStyle}>{text.copyright}</p>
          <button onClick={scrollToTop} style={topBtnStyle}>
            ↑ {text.backToTop}
          </button>
        </div>

      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#0f172a',
  color: 'var(--text)',
  padding: '4rem 0 2rem',
  marginTop: '2rem',
  borderTop: '1px solid var(--border-color)'
};

const topGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem',
  marginBottom: '3rem'
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'start'
};

const headingStyle = {
  color: 'var(--text)',
  fontSize: '1.05rem',
  fontWeight: '800',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const textStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  fontWeight: '500'
};

const logoStyle = {
  fontSize: '2.5rem',
  fontWeight: '900',
  color: '#7ed957',
  marginBottom: '0.25rem'
};

const socialRowStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '0.5rem'
};

const bottomRowStyle = {
  paddingTop: '2rem',
  borderTop: '1px solid var(--border-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem'
};

const copyStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.85rem',
  fontWeight: '600'
};

const topBtnStyle = {
  padding: '0.6rem 1.2rem',
  fontSize: '0.85rem',
  backgroundColor: 'rgba(126, 217, 87, 0.1)',
  border: '1px solid rgba(126, 217, 87, 0.2)',
  color: '#7ed957',
  borderRadius: '2rem',
  cursor: 'pointer',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'all 0.3s ease'
};

export default Footer;
