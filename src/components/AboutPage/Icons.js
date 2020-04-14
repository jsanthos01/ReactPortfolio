import React from 'react'
import "../styles/AboutPage.css"

function Icons() {
    return (
        <div class="wrapper">
            <ul class="skill-icons">
                <li>
                    <i aria-hidden class="fab fa-6x fa-html5"></i>
                    <p>HTML5</p>
                </li>
                <li>
                    <i aria-hidden class="fab fa-6x fa-css3-alt"></i>
                    <p>CSS3</p>
                </li>
                <li>
                    <i aria-hidden class="fab fa-6x fa-node"></i>
                    <p>NodeJS</p>
                </li>
                <li>
                    <i aria-hidden class="fab fa-6x fa-js"></i>
                    <p>JavaScript</p>
                </li>
                <li>
                    <i aria-hidden class="fab fa-6x fa-react"></i>
                    <p>React</p>
                </li>
                <li>
                    <i aria-hidden class="fas fa-6x fa-mobile-alt"></i>
                    <p >Responsive Design</p>
                </li>
                <li>
                    <i aria-hidden class="fas fa-6x fa-database"></i>
                    <p>MySQL</p>
                </li>
                <li>
                    <i aria-hidden class="fab fa-6x fa-git-alt"></i>
                    <p>Git</p>
                </li>
                <li>
                    {/* <img src={process.env.PUBLIC_URL + 'public/assets/mongodb.png'} style={{width: "10vh"}}/> */}
                    <p>mongoDB</p>
                </li>
            </ul>
        </div>
    )
}

export default Icons
