import React from 'react'
import "../styles/AboutPage.css"

function Header() {
    return (
        <div class="jumbotron jumbotron-fluid aboutStyle" >
            <div class="container textStyle">
                <h1 class="display-4">I'm Joanna Santhosh</h1>
                <h3 class="display-7">An Enthusiastic Coder!</h3>
                <p class="lead">I'm a first year student that has a strong passion for creating exceptional, user-interactive and simple websites/application.</p>
                <hr />
                <div className="iconStyle">
                    <i class="fab fa-2x fa-github-alt"></i>
                    <i class="fab fa-2x fa-linkedin"></i>
                    <i class="fas fa-2x fa-envelope"></i>
                    <i class="far fa-2x fa-file"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
