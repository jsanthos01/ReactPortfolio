import React from 'react'

function Cards(props) {
    console.log("Card Comp.", props);
    const tech = props.technologies;
    const link = props.links;
    return (
        <div class="projectInfo">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 textStuff">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <ul>
                        {tech.map(name => <li>{name}</li>)}
                    </ul>
                    <div class="linksDiv">
                        <a href={link.heroku} class="links" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                        <a href={link.github} class="links" target="_blank"><i class="fab fa-github-alt"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 ">
                <img src={process.env.PUBLIC_URL + `public/assets/${props.image}`} alt="" class="img-fluid"/>
                </div>
            </div>
        </div> 
    )
}

export default Cards
