import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const CareerObjective = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].career;

  return (
    <section id="career-objective">
      <div className="container reveal">
        <div style={boxStyle}>
          <h2 style={titleStyle}>{text.title}</h2>
          <p style={objStyle}>"{text.objective}"</p>
        </div>
      </div>
    </section>
  );
};

const boxStyle = {
  backgroundColor: 'var(--primary-color)',
  color: '#ffffff',
  padding: '4rem 2rem',
  borderRadius: '1rem',
  textAlign: 'center',
  boxShadow: 'var(--shadow)'
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  fontWeight: 'bold'
};

const objStyle = {
  fontSize: '1.5rem',
  fontWeight: '300',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.8',
  fontStyle: 'italic',
  color: '#f8fafc'
};

export default CareerObjective;
