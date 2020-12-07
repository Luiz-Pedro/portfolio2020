import React from 'react';

import { AiOutlineShopping } from 'react-icons/ai';
import { GiChemicalDrop, GiLightSabers, GiSpeedometer, GiPopcorn} from 'react-icons/gi';
import { FaChalkboardTeacher, FaCocktail } from 'react-icons/fa';
import { RiVirusLine } from 'react-icons/ri';
import { IoFastFoodOutline, IoBookSharp } from 'react-icons/io5';

export const projects =[
    {
        title: "Matheus Roscoe",
        icon: <IoBookSharp size={40}/>,
        date: "2020",
        link: "https://www.matheusroscoe.com.br/"
    },
    {
        title: "JB Alimentos",
        icon: <IoFastFoodOutline size={40}/>,
        date: "2020",
        link: "http://jbalimentos.com.br/"
    },
    {
        title: "Novo coronavírus (SARS-CoV-2)",
        icon: <RiVirusLine size={40}/>,
        date: "2020",
        link: "https://www.palmas.to.gov.br/portal/noticias/testagem-covid-19-pesquisadores-coletam-amostras-para-rastrear-e-combater-o-coronavirus/25707/"
    },
    {
        title: "Cocktail Recipes",
        icon: <FaCocktail size={40}/>,
        date: "2020",
        link: "https://cocktails-recipes.netlify.com"
    },
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