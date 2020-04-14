import React from 'react'
import Header from './Header'
import Icons from './Icons'
import Footer from '../Footer/Footer'
import "../styles/AboutPage.css"


function AboutInfo() {

    return (
        <div className="container-fluid">
            <Header />
            <div className="container about-para">
                <div className="row">
                    <div className="col-lg-6 about-textBox " >
                        <hr />
                        <h1>About Me</h1>
                        <h3>My Passion</h3>
                        <p>"Success is not final; failure is not fatal: It is the courage to continue that counts." -- Winston S. Churchill</p>
                        <div>
                            <p>
                                Hi! I'm an undergraduate student at the University of Waterloo currently pursuing an Electrical Engineering degree.
                                I developed a small passion for programming after joining a mini web development bootcamp and decided to delve deep into it. 
                            </p>
                            <p>   
                                I'm passionate about bringing to life creativity through design. 
                                Apart from coding, my hobbies include arts, music (playing the piano or singing), and 
                                poetry. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 image">
                        
                    <img src={`/assets/me.jpg`} alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 skills">
                        <h1>My Skill Set</h1>
                        <h4>What I bring to the table</h4>
                        <section>
                            <Icons />
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutInfo
