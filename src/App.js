import Navbar from "./components/navbar/Navbar.jsx";
import './App.css';
import Intro from "./components/intro/Intro.jsx";
import Services from "./components/services/Services.jsx";
import Experience from "./components/experience/Experience.jsx";
import Work from "./components/works/Work.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  // after index.js comletion we will import themecontext & useContext
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode ? 'black' : '',
        color : darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// to add animation install yarn add framer-motion
