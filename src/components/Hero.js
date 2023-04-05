import React, { useState, useEffect} from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';
import '../glitch.css'; // import the glitch.css file

const Hero = () => {
  const [season, setSeason] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const month = new Date().getMonth();

    if (month >= 2 && month <= 4) {
      setSeason("Spring");
      setBgColor("#7FFF00"); // lime green
    } else if (month >= 5 && month <= 7) {
      setSeason("Summer");
      setBgColor("#FFA500"); // orange
    } else if (month >= 8 && month <= 10) {
      setSeason("Fall");
      setBgColor("#9400D3"); // dark purple
    } else {
      setSeason("Winter");
      setBgColor("#00BFFF"); // light blue
    }
  }, []);

  return (
    <section className="h-screen flex justify-center items-center" style={{ backgroundColor: bgColor }}>
      <div className="text-9xl font-bold uppercase transform rotate-90">
        <span className="glitch" data-text={season}>{season}</span>
      </div>
    </section>
  );
};

export default Hero;
