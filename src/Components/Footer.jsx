import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Instagram, X } from 'lucide-react';
import { Logo } from '@/icons/Logo';
import { Separator } from './ui/separator';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BiLogoFacebook, BiLogoInstagram, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { Link } from 'react-router';

const Footer = () => {
  /* const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling up or at the top/bottom of the page
      if (currentScrollY < lastScrollY || 
          currentScrollY < 10 || 
          window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); */

  return (
    <div className=''>
      <footer 
      className={` py-12 bg-[#003A39] text-white p-4 transition-transform duration-300`}
      >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Left section */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold">Patient.ng</span>
          </div>

          {/* Middle section */}
          <div className="flex items-center gap-6">
            <Link to="/advocacy" className="hover:text-[#00DC8A] transition-colors">Advocacy</Link>
            <Link to="/campaigns" className="hover:text-[#00DC8A] transition-colors">Campaign</Link>
            <Link to="/resources" className="hover:text-[#00DC8A] transition-colors">Resources</Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61563453420792&mibextid=LQQJ4d&_rdc=2&_rdr" target="_blank" className="hover:text-[#00DC8A] transition-colors">
              <BiLogoFacebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/patientdotng" target="_blank" className="hover:text-[#00DC8A] transition-colors">
              <BiLogoLinkedin size={20} />
            </a>
            <a href="https://x.com/patientdotng?s=11&t=WDXKro3kSag6ImoNjJ85tw" target="_blank" className="hover:text-[#00DC8A] transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/patientdotng?igsh=eGgxbWN4Z3ZhaHZn&utm_source=qr" target="_blank" className="hover:text-[#00DC8A] transition-colors">
              <BiLogoInstagram size={20} />
            </a>
          </div>
        </div>

        <Separator  />

        {/* Bottom section */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div>© 2025 Patient.ng. All rights reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/contact" className="hover:text-[#00DC8A] transition-colors">Contact us</Link>
            <span>•</span>
            <a href="#private policy" className="hover:text-[#00DC8A] transition-colors">Privacy policy</a>
            <span>•</span>
            <a href="#private policy" className="hover:text-[#00DC8A] transition-colors">Privacy policy</a>
            
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;