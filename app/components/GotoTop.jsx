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
        padding: '.6rem',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

      }}
      onClick={scrollToTop}
    >
      GotoTop
    </div>
  );
};
export default GotoTop;