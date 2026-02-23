"use client"
import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./data";
import WorkItems from "./workitems";

export default function Works() {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) => project.category === item.name
            );
            setProjects(newProjects);
        }
    }, [item]);

    function handleClick(e, index) {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        onClick={(e) => handleClick(e, index)}
                        className={`work__item ${active === index ? 'active__work' : ''}`}
                        key={index}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>


            <div className="work__container container grid">
                {projects.map((item) => (
                    <WorkItems item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}
