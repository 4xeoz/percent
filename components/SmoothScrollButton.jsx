import React from 'react';

const SmoothScrollButton = ({ children }) => {
  const scrollToSection = () => {
    const section = document.getElementById('target-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection} className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
};

export default SmoothScrollButton;
