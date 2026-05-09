import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import '../css/education.css';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].education;

  return (
    <section id="education" className="education-section">
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>

        <div className="education-grid">
          {/* Academic Education */}
          <div className="education-column">
            <h3><span>🎓</span> {text.academic.title}</h3>
            <div className="education-cards">
              {text.academic.items.map((item, index) => (
                <div key={index} className="edu-card">
                  <div className="edu-university">{item.university}</div>
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-meta">
                    <span className="edu-duration">📅 {item.duration}</span>
                    {/* <span className="edu-grade">⭐ {language === 'ar' ? 'التقدير' : 'Grade'}: {item.grade}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="education-column">
            <h3><span>📜</span> {text.certifications.title}</h3>
            <div className="education-cards">
              {text.certifications.items.map((item, index) => (
                <div key={index} className="edu-card cert-card-horizontal">
                  <div className="cert-icon-box">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="icon-img"
                    />
                  </div>
                  <div className="cert-content">
                    <div className="edu-title">{item.title}</div>
                    <div className="edu-org">{item.org}</div>
                    <div className="edu-duration">📅 {item.duration}</div>
                  </div>
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="edu-cert-link horizontal-link"
                      title={language === 'ar' ? 'عرض الشهادة' : 'View Certificate'}
                    >
                      <i className="fa-solid fa-share-from-square"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
