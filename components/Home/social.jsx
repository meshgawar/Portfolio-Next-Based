// import { useState } from "react"

export default function Social() {
    // const [getIcon, setIcon] = useState('sun');

    // function changeIcon() {
    //     setIcon(getIcon === 'sun' ? 'moon' : 'sun');
    // }
    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/meshgawar24/" className="home__social-icon" target="_blank">
                <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/meshgawar/" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://leetcode.com/u/meshgawar24/" className="home__social-icon" target="_blank">
                <i className="bxl  bx-leetcode"></i>
            </a>
        
            {/* <button onClick={changeIcon}><i className={`bx  bx-${getIcon}`}></i></button> */}

        </div>
    )
}