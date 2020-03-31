import React from 'react';

import Header from '../Header';
import { ProjectsWrapper, ProjectsUl, Project} from './style';

import { projects } from '../../listaProjetos';

export default function Projetos(){
    return(
        <>
            <Header />
            <ProjectsWrapper>
                <ProjectsUl>
                    {projects.map((project, index) => (
                            <Project key={index}>
                                <a href={project.link} target="_blank">
                                    {project.icon}
                                    <div>
                                        <h2>{project.title}</h2>
                                        <p>{project.date}</p>
                                    </div>
                                </a>
                            </Project>
                        ))
                    }
                </ProjectsUl>
            </ProjectsWrapper>
        </>
    );
}