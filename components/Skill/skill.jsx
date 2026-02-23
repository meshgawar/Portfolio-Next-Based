import "./skill.css";
import Backend from "./backend";
import Frontend from "./frontend";
import Language from "./language";
import Tools from "./tools";

export default function Skill() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Language/>
                <Tools/>
            </div>
        </section>
    )
}