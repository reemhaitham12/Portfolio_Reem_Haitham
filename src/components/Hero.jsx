import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].hero;

  return (
    <section id="hero" style={heroSectionStyle}>
      <div className="container" style={heroContainerStyle}>

        {/* Left Column */}
        <div style={leftColStyle} className="reveal active">
          <h1 style={nameStyle}>{text.name}</h1>
          <h2 style={titleStyle}>{text.title}</h2>
          <p style={statementStyle}>{text.subheading}</p>

          <div style={btnGroupStyle}>
            <a href="#projects" className="btn btn-primary">{text.buttons.viewProjects}</a>
            {/* <a href="#contact" className="btn btn-outline">{text.buttons.contact}</a> */}
            <a href="./public/assets/cv/reemhaitham124.pdf" download className="btn btn-outline">
              {text.buttons.downloadCV}
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div style={rightColStyle} className="reveal active">
          <div style={imageWrapperStyle} className="floating-img">
            {/* Soft background shape */}
            <div style={bgShapeStyle}></div>
            <img
              src="src/assets/personImg.jpg"
              alt={text.name}
              style={profileImgStyle}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%237ed857' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='3rem' fill='%237ed857'%3ERH%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const heroSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '80px', // Offset for sticky navbar
  background: 'linear-gradient(135deg, var(--background) 0%, var(--card-bg) 100%)', // subtle background gradient
  position: 'relative'
};

const heroContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3rem',
  width: '100%'
};

const leftColStyle = {
  flex: '1 1 500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const rightColStyle = {
  flex: '1 1 400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const nameStyle = {
  fontSize: '3.5rem',
  fontWeight: 800,
  marginBottom: '0.5rem',
  color: 'var(--text)',
  lineHeight: '1.2'
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: 'var(--primary)'
};

const statementStyle = {
  fontSize: '1.3rem',
  color: 'var(--text-muted)',
  marginBottom: '2rem',
  maxWidth: '80%'
};

const btnGroupStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
};

/* Circular Image specific */
const imageWrapperStyle = {
  position: 'relative',
  width: '350px',
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const bgShapeStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--primary)',
  opacity: 0.1,
  borderRadius: '50%',
  filter: 'blur(30px)',
  transform: 'scale(1.1)',
  zIndex: 0
};

const profileImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
  border: '4px solid var(--primary)',
  zIndex: 1,
  backgroundColor: 'var(--card-bg)'
};

export default Hero;
