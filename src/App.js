import './App.css';
import { useEffect, React } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


import { Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar/index.js'
import Announcement from './Components/Announcement/index.js';
import Footer from './Components/Footer/Footer.js';

import Home from './Pages/Home'
import FTC from './Pages/FTC'
import RoboCamp from './Pages/RoboCamp'
import SIAB from './Pages/SIAB'
import Sponsors from './Pages/Sponsors'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop';

function App() {

  let announcementProps = {
    text: "Our 2022 RoboCamp signups are now officially open!",
    button_text: "Learn More",
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Announcement {...announcementProps} />
      <NavBar />
      <div className='container' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FTC" element={<FTC />} />
          <Route path="/RoboCamp" element={<RoboCamp />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/SIAB" element={<SIAB />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
