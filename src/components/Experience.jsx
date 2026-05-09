import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import '../css/experience.css';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].experience;

  return (
    <section id="experience" className="experience-section">
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>

        <div className="experience-grid">
          {text.items.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-card hover-card">
                <div className="exp-header">
                  <span className="exp-duration">{exp.duration}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-wrapper">
                    {exp.logo && <img src={exp.logo} alt={exp.company} className="exp-logo" />}
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                </div>

                <div className="exp-sections">
                  {/* Challenge */}
                  <div className="exp-section challenge">
                    <div className="exp-section-title">
                      <span>⚡</span> {language === 'ar' ? 'التحدي' : 'Challenge'}
                    </div>
                    <p>{exp.challenge}</p>
                  </div>

                  {/* Action */}
                  <div className="exp-section action">
                    <div className="exp-section-title">
                      <span>🛠️</span> {language === 'ar' ? 'الإجراء' : 'Action'}
                    </div>
                    <ul>
                      {exp.actions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="exp-section result">
                    <div className="exp-section-title">
                      <span>📈</span> {language === 'ar' ? 'النتيجة' : 'Result'}
                    </div>
                    <ul>
                      {exp.results.map((result, i) => (
                        <li key={i}>
                          <span className="result-text">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
