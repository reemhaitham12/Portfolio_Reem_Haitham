import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].projects;

  const [activeProject, setActiveProject] = useState(null);

  const openCard = (proj) => {
    setActiveProject(proj);
    document.body.style.overflow = 'hidden'; 
  };

  const closeCard = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>
        
        {/* Grid of Custom Image Cards */}
        <div style={gridStyle}>
          {text.items.map((proj) => (
            <div 
              key={proj.id} 
              style={outerCardStyle} 
              className="proj-outer-card"
            >
              {/* Top Image block - triggers Modal on Click */}
              <div className="proj-img-wrap" onClick={() => openCard(proj)}>
                <div style={imgPlaceholderStyle}>
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem 1rem 0 0' }} />
                  ) : (
                    /* Default simple placeholder graphic using absolute icon */
                    <span style={{fontSize: '5rem', opacity: 0.2}}>{proj.icon}</span>
                  )}
                </div>
                {/* Hover Overlay explicitly states instructions */}
                <div className="proj-hover-overlay">
                  <h4>Click to View Details</h4>
                </div>
              </div>

              {/* Bottom Card Info & Direct Links */}
              <div style={outerInfoStyle}>
                <h3 style={outerTitleStyle}>{proj.title}</h3>
                
                <div style={outerLinksStyle}>
                  <button 
                    onClick={() => openCard(proj)} 
                    className="btn btn-outline" 
                    style={{padding: '0.4rem 1rem', fontSize: '0.9rem', cursor: 'pointer', borderWidth: '1px'}}
                  >
                    {language === 'ar' ? 'التفاصيل' : 'Details'}
                  </button>
                  {proj.links.demo !== "#" && (
                     <a href={proj.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{padding: '0.4rem 1rem', fontSize: '0.9rem'}}>Demo</a>
                  )}
                  {proj.links.github !== "#" && (
                    <a href={proj.links.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.4rem 1rem', fontSize: '0.9rem'}}>GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal (Interactive Case Study) */}
      {activeProject && (
        <div style={overlayStyle} onClick={closeCard}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()} className="modal-content">
            <button style={closeBtnStyle} onClick={closeCard}>&times;</button>
            
            <div style={modalHeaderStyle}>
              <div style={metaStyle}>
                <span style={sourceBadgeStyle}>{activeProject.source}</span>
                <span style={roleBadgeStyle}>{activeProject.role}</span>
              </div>
              <h3 style={projTitleStyle}>{activeProject.title}</h3>
            </div>
            
            <div style={modalBodyStyle}>
              <div style={caseStudyStyle}>
                <div>
                  <h4 style={{color: 'var(--primary)', marginBottom: '0.3rem'}}>Challenge</h4>
                  <p>{activeProject.description.challenge}</p>
                </div>
                <div>
                  <h4 style={{color: 'var(--primary)', marginBottom: '0.3rem'}}>Action</h4>
                  <p>{activeProject.description.action}</p>
                </div>
                <div>
                  <h4 style={{color: 'var(--primary)', marginBottom: '0.3rem'}}>Result</h4>
                  {Array.isArray(activeProject.description.result) ? (
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {activeProject.description.result.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3rem' }}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{activeProject.description.result}</p>
                  )}
                </div>
              </div>

              <div style={featuresWrapStyle}>
                <h4 style={featuresTitleStyle}>Key Features:</h4>
                <ul style={featuresListStyle}>
                  {activeProject.features.map((feat, i) => (
                    <li key={i} style={featureItemStyle}>✓ {feat}</li>
                  ))}
                </ul>
              </div>
              
              <div style={techIconsWrapStyle}>
                <h4 style={featuresTitleStyle}>Technologies:</h4>
                <div style={techGridStyle}>
                  {activeProject.techIcons.map((tech, i) => (
                     <span key={i} style={techBadgeStyle}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={modalFooterStyle}>
              {activeProject.links.demo !== "#" && (
                 <a href={activeProject.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
              )}
              {activeProject.links.github !== "#" && (
                <a href={activeProject.links.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Repo</a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal-content {
          animation: slideUp 0.3s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

// --- Outer Grid Styles ---
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2.5rem',
  marginTop: '3rem'
};

const outerCardStyle = {
  backgroundColor: 'var(--card-bg)',
  borderRadius: '1rem',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow)',
  display: 'flex',
  flexDirection: 'column'
};

const imgPlaceholderStyle = {
  width: '100%',
  height: '240px',
  backgroundColor: 'var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(45deg, var(--background), var(--card-bg))',
};

const outerInfoStyle = {
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
};

const outerTitleStyle = {
  fontSize: '1.3rem',
  color: 'var(--text)',
  marginBottom: '1rem'
};

const outerLinksStyle = {
  display: 'flex',
  gap: '0.8rem',
  marginTop: 'auto', // Pushes to bottom
  flexWrap: 'wrap'
};

// --- Overlay Modal Styles ---
const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(5px)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflowY: 'auto',
  padding: '4rem 1rem'
};

const modalStyle = {
  backgroundColor: 'var(--background)',
  width: '100%',
  maxWidth: '800px',
  borderRadius: '1rem',
  border: '1px solid var(--border-color)',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
};

const closeBtnStyle = {
  position: 'absolute',
  top: '1rem', right: '1.5rem',
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  zIndex: 10
};

const modalHeaderStyle = {
  padding: '2rem',
  borderBottom: '1px solid var(--border-color)',
  backgroundColor: 'var(--card-bg)',
  borderRadius: '1rem 1rem 0 0'
};

const metaStyle = {
  display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap'
};

const sourceBadgeStyle = {
  fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--primary)', color: '#fff', borderRadius: '1rem', fontWeight: 'bold'
};

const roleBadgeStyle = {
  fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--border-color)', color: 'var(--text)', borderRadius: '1rem'
};

const projTitleStyle = {
  fontSize: '1.8rem', color: 'var(--text)'
};

const modalBodyStyle = {
  padding: '2rem',
  display: 'flex', flexDirection: 'column', gap: '2rem'
};

const caseStudyStyle = {
  fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6',
  display: 'flex', flexDirection: 'column', gap: '1.2rem'
};

const featuresWrapStyle = {};

const featuresTitleStyle = {
  fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text)'
};

const featuresListStyle = {
  listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem'
};

const featureItemStyle = {
  fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem'
};

const techIconsWrapStyle = {};

const techGridStyle = {
  display: 'flex', flexWrap: 'wrap', gap: '0.5rem'
};

const techBadgeStyle = {
  fontSize: '0.85rem', padding: '0.4rem 1rem', borderRadius: '0.5rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text)'
};

const modalFooterStyle = {
  padding: '2rem',
  borderTop: '1px solid var(--border-color)',
  display: 'flex', gap: '1rem', flexWrap: 'wrap',
  backgroundColor: 'var(--card-bg)',
  borderRadius: '0 0 1rem 1rem'
};

export default Projects;
