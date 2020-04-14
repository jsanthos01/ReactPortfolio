import React from 'react'
function MiniCards(props) {
    console.log("[MiniCards]", props);
    let link = props.links;
    console.log(props.image)

    return (
        <div class="col-lg-4 col-md-6 col-12 opCards">
            <div class="opBody">
                {/* <img src={process.env.PUBLIC_URL + `public/assets/${props.image}`} alt="" class="img-fluid"/> */}
                <h4 class="opTitle">{props.name}</h4>
                <p>{props.description}</p>
                <div class="linksDiv">
                    <a href={link.heroku} class="links" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    <a href={link.github} class="links" target="_blank"><i class="fab fa-github-alt"></i></a>
                </div>
            </div>
        </div>
    )
}

export default MiniCards
