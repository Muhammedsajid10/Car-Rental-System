import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h4 style={styles.heading}>About Us</h4>
        <h2 style={styles.subheading}>Welcome to Car Rent Service</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur explicabo nobis repellendus vero repudiandae, enim delectus saepe reprehenderit velit.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhcnN8ZW58MHx8MHx8fDA%3D"
          alt="Car rental service"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginTop: '100px'
  },
  content: {
    flex: 1,
    marginRight: '20px',
  },
  heading: {
    fontSize: '24px',
    color: 'white',
    textAlign: 'justify',
  },
  subheading: {
    fontSize: '36px',
    color: 'white',
    marginTop: '10px',
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: '16px',
    color: 'rgb(131 128 128)',
    textAlign: 'justify',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '74%',
    height: '233px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};


export default AboutUs;
