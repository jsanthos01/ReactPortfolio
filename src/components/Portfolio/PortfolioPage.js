import React from 'react';
import Footer from '../Footer/Footer';
import Cards from './Cards';
import MiniCards from './MiniCards';
import '../styles/Portfolio.css';
import projects from "../projects.json";
import miniProjects from "../miniProjects.json";

function PortfolioPage() {
    
    return (
        <div>
            <div class="jumbotron jumbotron-fluid headStyle">
                <div class="container textStyle">
                    <h1 class="display-4">My Portfolio</h1>
                    <h2 class="lead">Check out my latest projects</h2>
                </div>
            </div>
            <div  class="container featuredWork"> 
                {projects.map((project) => <Cards {...project}/>)}
            </div>
            <div class="jumbotron jumbotron-fluid miniStyle">
                <div class="container opInfo miniTextStyle">
                    <h1 class="display-4">Other Mini Projects</h1>
                </div>
            </div>
            <div className="container opInfo">
                <div class="row">
                    {miniProjects.map(projects => <MiniCards {...projects}/>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PortfolioPage
