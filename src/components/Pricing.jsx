import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import '../css/pricing.css';

const Pricing = () => {
  const { language } = useContext(LanguageContext);
  const data = content[language].pricing;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <div className="back-btn-container">
        <Link to="/" className="back-btn">
          <i className={`fa-solid ${language === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
          {data.backButton}
        </Link>
      </div>

      <header className="pricing-header">
        <span className="pricing-badge">{data.badge}</span>
        <h1 className="pricing-title">{data.title}</h1>
        <p className="pricing-subtitle">{data.subtitle}</p>
        
        <div className="pricing-info-box">
          <i className="fa-solid fa-circle-info info-icon"></i>
          <p className="info-text">{data.infoBox}</p>
        </div>
      </header>

      <div className="pricing-grid">
        {data.plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
          >
            {plan.label && <span className="card-label">{plan.label}</span>}
            <div className="card-icon">{plan.icon}</div>
            <h3 className="plan-name">{plan.name}</h3>
            
            <div className="plan-price">
              <span className="price-value">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            
            <p className="plan-desc">{plan.desc}</p>
            
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`feature-item ${!feature.enabled ? 'disabled' : ''}`}>
                  {feature.enabled ? (
                    <i className="fa-solid fa-circle-check feature-check"></i>
                  ) : (
                    <i className="fa-solid fa-circle-xmark feature-cross"></i>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <button className="plan-btn">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
