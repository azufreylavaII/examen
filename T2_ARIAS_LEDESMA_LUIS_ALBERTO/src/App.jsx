import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Collection from './components/Collection';
import TestimonialsContainer from './components/TestimonialsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collection />
      <TestimonialsContainer />
      <Footer />
    </div>
  );
}

export default App;
