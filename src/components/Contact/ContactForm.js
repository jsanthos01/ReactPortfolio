import React from 'react'
import Footer from '../Footer/Footer'
import "../styles/Contacts.css"

function ContactForm() {
    return (
    <div class="container-fluid main">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 info-area">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-area">
                        <h1>Get in Touch</h1>
                        <p> Thanks for stopping by! I am currently looking for a co-op placement or internship in the fall of 2020.
                            Feel free to message me if you are interested in building something together or have any positions opening up, 
                        I'm best reached via LinkedIn and email.</p>
                        <p class="special">– I’d love to hear from you.
                        </p>
                    </div>
                    <h1 class="connect">Connect With Me</h1>
                    <div class="col-lg-6 col-md-12 col-sm-12 contact-info" >
                        <div class="card">
                            <a href="mailto:joanna.santhosh@edu.uwaterloo.ca">
                                <i class="card-icon far fa-envelope"></i>
                                <p>Email</p>
                            </a>
                        </div>
                        <div class="card">
                            <i class="card-icon fas fa-phone"></i>
                            <p>6472234412</p>
                        </div>
                        <div class="card">
                            <a href="https://github.com/jsanthos01/" target="_blank">
                                <i class="card-icon fab fa-github-alt"></i>
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="https://www.linkedin.com/in/joannasanthosh/" target="_blank">
                                <i class="card-icon fab fa-linkedin-in"></i>
                                <p>Linkedin</p>
                            </a>     
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 message-area">
                
                <form action="" method="POST" class="right" data-aos="fade-left">
                    <label class="hide" for="name">name</label>
                    <input type="text" name="name" id="name" placeholder="name*"autocomplete="off" required/>
        
                    <label class="hide" for="email">email</label>
                    <input type="email" name="email" id="email" placeholder="email*" autocomplete="off" required/>
        
                    <label class="hide" for="message" autocomplete="off" >Message:</label>
                    <textarea name="message" id="message" placeholder="message*" required></textarea>
        
                    <div class="submitBtn">
                        <button class="send" type="submit">Send Message</button>
                    </div>
            </form>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default ContactForm
