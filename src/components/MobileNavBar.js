import {useState} from "react";
import {HiMenu, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from '../assets/img/DSLogo.png';


export const MobileNavBar = () => {
    console.log("Hello World");
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="mobile__navbar">
        <div className="mobile__navbar-logo">
            <img src={logo} alt="logo" width="80%" height = 'auto'/>
        </div>
        <div className="mobile__navbar-menu">
            <HiMenu onClick={() => setToggle(true)} />
            {toggle && (
                <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {['home', 'skills', 'project', 'connect'].map((item) => (
                        <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                        </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}
