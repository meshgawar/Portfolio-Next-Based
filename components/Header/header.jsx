"use client"
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [Toggle, showMenu] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <a href="/" className={styles.nav__logo}>Mesh</a>

                <div className={Toggle ? `${styles.nav__menu} ${styles.show_menu}` : styles.nav__menu}>
                    <ul className={styles.nav__list + " grid"}>
                        <li className={styles.nav__itme}>
                            <a href="#home" className={styles.nav__link}>
                                <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
                            </a>
                        </li>

                        <li className={styles.nav__itme}>
                            <a href="#about" className={styles.nav__link}>
                                <i className={`uil uil-user ${styles.nav__icon}`}></i> About
                            </a>
                        </li>

                        <li className={styles.nav__itme}>
                            <a href="#skills" className={styles.nav__link}>
                                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> Skills
                            </a>
                        </li>

                        <li className={styles.nav__itme}>
                            <a href="#qualification" className={styles.nav__link}>
                                <i className={`uil uil-graduation-cap ${styles.nav__icon}`}></i> Qualification 
                            </a>
                        </li>

                        <li className={styles.nav__itme}>
                            <a href="#project" className={styles.nav__link}>
                                <i className={`uil uil-lightbulb-alt ${styles.nav__icon}`}></i> Portfolio
                            </a>
                        </li>

                        <li className={styles.nav__itme}>
                            <a href="#contact" className={styles.nav__link}>
                                <i className={`uil uil-message ${styles.nav__icon}`}></i> Contact 
                            </a>
                        </li>
                    </ul>

                    <i className={`uil uil-times ${styles.nav__close}`} onClick={() => {showMenu(!Toggle)}}></i>
                </div>

                <div className={styles.nav__toggle} onClick={() => {showMenu(!Toggle)}}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}