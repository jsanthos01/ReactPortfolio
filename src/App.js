import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from'./components/Navbar';
import AboutPage from'./components/AboutPage/AboutInfo';
import PortfolioPage from'./components/Portfolio/PortfolioPage';
import ContactPage from'./components/Contact/ContactForm';

function App() {
  return (
      <Router >
        <div className="App">
          <Navbar />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route exact path="/resume" component={ContactPage} />
          <Route exact path={["/","ReactPortfolio/"]} component={AboutPage} />
        </div>
      </Router>
  );
}

export default App;
