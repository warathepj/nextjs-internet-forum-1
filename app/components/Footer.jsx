import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div style={styles.corgidev}>
        <h3>CorgiDev</h3>
        <img
          src="https://warathepj.github.io/js-ai-gallery/public/image/corgi/2.jpg"
          alt="CorgiDev"
          style={styles.image}
        />
      </div>
      <footer style={styles.footer}>
        <p>© {currentYear} CorgiDev. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  footer: {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },

  corgidev: {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor: 'white',
    color: '#fff',
  },

  image: {
    width: '100px',
    height: '100px',
  }
};

export default Footer;
