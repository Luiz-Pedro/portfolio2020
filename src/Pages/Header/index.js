import React from 'react';
import { NavLink } from 'react-router-dom';

import { Header, Menus } from './style';

export default function Home(){

    return(
        <Header>
            <NavLink to="/" >Luiz Maciel</NavLink>
            <Menus>
                <li>
                    <NavLink to="/eu" activeClassName="menuClicado">Quem sou eu</NavLink>
                </li>
                <li>
                    <NavLink to="/projetos" activeClassName="menuClicado">Meus Projetos</NavLink>
                </li>
            </Menus>
        </Header>
    );
}