"use client"
import { useState } from "react"
import "./qualification.css"

export default function Qualification() {
    const [getToggleState, setToggleState] = useState(1);

    const toggleLine = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={getToggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => {toggleLine(1)}}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className={getToggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => {toggleLine(2)}}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* For Education */}
                    <div className={getToggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* First Data */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.tech</h3>
                                <span className="qualification__subtitle">BSA College Of Engg. & Tech.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* Second Data */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Secondary</h3>
                                <span className="qualification__subtitle">G.S.A.S. Inter College Mursan, Hathras</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>
                        </div>

                        {/* Third Data */}
                        <div className="qualification__data">
                            
                            <div>
                                <h3 className="qualification__title">Secondary</h3>
                                <span className="qualification__subtitle">R.M.P Inter College Mursan, Hathras</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div> {/* Middle Line  */} 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div> {/* Empty div for alignment */}
                        </div>

                    </div>

                    {/* For Experience */}
                    <div className={getToggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering Intern</h3>
                                <span className="qualification__subtitle">Seoulix Technologies (OPC) Private Limited</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"> Nov 2025 - Present</i> 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* Second Data */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineering Intern</h3>
                                <span className="qualification__subtitle">Yuga Yatra Retail (OPC) Private Limited</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">  Sep 2025 - Nov 2025</i> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>


    )
}