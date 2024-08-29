// app/components/GotoTop.jsx
'use client'

const GotoTop = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return (
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px',
          cursor: 'pointer'
        }} 
        onClick={scrollToTop}
      >
        GotoTop
      </div>
    );
  };
  export default GotoTop;