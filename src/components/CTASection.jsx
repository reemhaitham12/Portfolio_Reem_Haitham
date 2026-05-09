import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import '../css/cta.css';

const CTASection = () => {
  const { language } = useContext(LanguageContext);
  const data = content[language].cta;

  return (
    <section className="cta-section">
      <h3 className="cta-heading">{data.heading}</h3>
      <Link to="/pricing" className="cta-btn">
        <i className="fa-solid fa-tags cta-icon"></i>
        <span>{data.buttonText}</span>
      </Link>
    </section>
  );
};

export default CTASection;
