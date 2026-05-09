import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const About = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].about;
  const achievements = content[language].achievements;

  return (
    <section id="about" style={aboutSectionStyle}>
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        
        <div style={aboutContainerStyle}>
          {/* Left Side: Intro + Stats */}
          <div style={leftColStyle}>
            <div className="reveal active">
              <h1 style={{ ...headingStyle, fontSize: '2.2rem', whiteSpace: 'pre-line' }}>{text.heading}</h1>
              <div style={paragraphContainerStyle}>
                {text.paragraphs.map((p, i) => (
                  <p key={i} style={paragraphStyle}>
                    {p.split(/(\d+)/).map((part, index) => 
                      /\d+/.test(part) ? <span key={index} style={{ color: '#7ed957', fontWeight: 'bold' }}>{part}</span> : part
                    )}
                  </p>
                ))}
              </div>

              <div style={statsGridStyle}>
                {achievements.items.map((item) => (
                  <div key={item.id} style={statCardStyle} className="hover-card">
                    <span style={statIconStyle}>{item.icon}</span>
                    <div style={statCountStyle}>{item.count}</div>
                    <div style={statLabelStyle}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div style={rightColStyle}>
            <div style={featuresGridStyle} className="reveal active">
              {text.features.map((feature, i) => (
                <div key={i} style={featureCardStyle} className="hover-card">
                  <div style={featureIconStyle}>{feature.icon}</div>
                  <h3 style={featureTitleStyle}>{feature.title}</h3>
                  <p style={featureDescStyle}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutSectionStyle = {
  padding: '120px 0',
  backgroundColor: 'var(--bg)',
  position: 'relative',
  overflow: 'hidden'
};

const aboutContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5rem',
  flexWrap: 'wrap',
  alignItems: 'flex-start'
};

const leftColStyle = {
  flex: '1 1 500px',
  textAlign: 'left'
};

const rightColStyle = {
  flex: '1 1 450px'
};

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 800,
  color: 'var(--text-h)',
  marginBottom: '2.5rem',
  lineHeight: '1.2'
};

const paragraphContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginBottom: '3rem'
};

const paragraphStyle = {
  fontSize: '1.15rem',
  color: 'var(--text-muted)',
  lineHeight: '1.8',
  maxWidth: '600px'
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem'
};

const statCardStyle = {
  padding: '1.8rem 1rem',
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #eee',
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
};

const statIconStyle = {
  fontSize: '1.8rem',
  display: 'block',
  marginBottom: '0.8rem'
};

const statCountStyle = {
  fontSize: '1.8rem',
  fontWeight: 800,
  color: '#7ed957',
  marginBottom: '0.3rem'
};

const statLabelStyle = {
  fontSize: '0.85rem',
  color: '#475569',
  fontWeight: '500'
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.5rem'
};

const featureCardStyle = {
  padding: '2.5rem 1.5rem',
  backgroundColor: '#fff',
  borderRadius: '24px',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.8rem',
  transition: 'all 0.4s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  position: 'relative',
  overflow: 'hidden'
};

const featureIconStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem'
};

const featureTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#1e293b'
};

const featureDescStyle = {
  fontSize: '0.95rem',
  color: '#475569',
  lineHeight: '1.6'
};

export default About;
