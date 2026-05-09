import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import '../css/skills.css';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].skills;
  const [activeTab, setActiveTab] = useState('frontend');

  const filteredItems = text.items.filter(item => item.category === activeTab);

  const getIcon = (iconName) => {
    const icons = {
      html5: <i className="fa-brands fa-html5"></i>,
      css3: <i className="fa-brands fa-css3-alt"></i>,
      javascript: <i className="fa-brands fa-js"></i>,
      react: <i className="fa-brands fa-react"></i>,
      nextjs: <i className="fa-solid fa-n"></i>,
      bootstrap: <i className="fa-brands fa-bootstrap"></i>,
      tailwindcss: <i className="fa-solid fa-wind"></i>,
      jquery: <i className="fa-solid fa-code"></i>,
      nodejs: <i className="fa-brands fa-node-js"></i>,
      mysql: <i className="fa-solid fa-database"></i>,
      sqlserver: <i className="fa-solid fa-server"></i>,
      git: <i className="fa-brands fa-git-alt"></i>,
      github: <i className="fa-brands fa-github"></i>,
      api: <i className="fa-solid fa-gears"></i>,
      responsive: "📱",
      oop: "🧩",
      ds: <i className="fa-solid fa-diagram-project"></i>,
      patterns: "📐",
      communication: <i className="fa-solid fa-comments"></i>,
      teamwork: <i className="fa-solid fa-people-group"></i>,
      "problem-solving": <i className="fa-solid fa-lightbulb"></i>,
      adaptability: <i className="fa-solid fa-arrows-rotate"></i>,
      "time-management": <i className="fa-solid fa-clock"></i>
    };
    return icons[iconName] || "✨";
  };

  // Map category IDs to icons for the tabs
  const categoryIcons = {
    frontend: "💻",
    backend: "⚙️",
    tools: "🛠️",
    soft: "🤝"
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>

        <div className="skills-filter">
          {text.categories.map((cat) => {
            const count = text.items.filter(item => item.category === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{categoryIcons[cat.id]}</span> {cat.name}
                <span className="skill-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="category-details-card">
          <div className="category-header">
            <span className="category-icon">{categoryIcons[activeTab]}</span>
            <div className="category-text">
              <h3>{text.categories.find(c => c.id === activeTab)?.name}</h3>
              <p>{language === 'ar' ? `اكتشف مهاراتي في ${text.categories.find(c => c.id === activeTab)?.name}` : `Explore my ${text.categories.find(c => c.id === activeTab)?.name} technical expertise`}</p>
            </div>
          </div>

          <div className="skills-grid">
            {filteredItems.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="skill-card">
                <div className="skill-icon-box">
                  {skill.icon.length <= 2 ? skill.icon : getIcon(skill.icon)}
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  {/* <p>{skill.desc}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
