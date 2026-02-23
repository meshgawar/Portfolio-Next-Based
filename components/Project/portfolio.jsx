import "./portfolio.css";
import Works from "./works.jsx"

export default function Portfolio() {
    return (
        <div className="project section" id="project">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My work experience</span>
            <Works/>
        </div>
    );
}