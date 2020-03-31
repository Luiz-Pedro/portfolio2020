import React from 'react';
import { MdMovieFilter } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { GiChemicalDrop, GiLightSabers, GiSpeedometer, GiPopcorn} from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';

export const projects =[
    {
        title: "Movie Night",
        icon: <GiPopcorn size={40}/>,
        date: "2020",
        link: "https://movienight-luiz.firebaseapp.com/"
    },
    {
        title: "Obabox Layout Approach",
        icon: <AiOutlineShopping size={40}/>,
        date: "2020",
        link: "https://obabox-luizpedromaciel.firebaseapp.com/"
    },
    {
        title: "Breaking Bad Wiki",
        icon: <GiChemicalDrop size={40}/>,
        date: "2019",
        link: "https://breaking-bad-luiz.firebaseapp.com/"
    }, 
    {
        title: "Star Wars Wiki",
        icon: <GiLightSabers size={40}/>,
        date: "2019",
        link: "https://luiz-starwars.firebaseapp.com/"
    }, 
    {
        title: "Me Ensina Landing Page",
        icon: <FaChalkboardTeacher size={40}/>,
        date: "2018",
        link: "https://luiz-meensina.firebaseapp.com/"
    }, 
    {
        title: "Speed Stats",
        icon: <GiSpeedometer size={40}/>,
        date: "2016",
        link: "https://luiz-speedstats.firebaseapp.com/"
    }, 
];