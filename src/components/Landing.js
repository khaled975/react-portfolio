import { Container , Figure , Row ,  Col } from 'react-bootstrap'
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import '../App.css'
import landing from '../imgs/header-img.svg'
import arrow from '../imgs/arrow2.svg'
function Landing(){
    return(
        <section className='landing-sec' id='home'>
            <Container>
                <Row className='landing-text'>
                    <Col xs={12} md={6} xl={7} >
                        <h3>Welcome All In My Portfolio</h3>
                        <h1>Hi! I'm Khaled Abd El-Mohsen,</h1>
                        <h1>
                            <Typewriter 
                                options={{
                                    strings: ['FrontEnd Developer', 'BackEnd Developer','FullStack Developer'],
                                    autoStart: true,
                                    loop: true,
                                    cursor:	"|",
                                }}/>
                        </h1>
                        <span className='desc'>Hallo Everyone . I Have 1 Years Of Experience In Web Development</span>
                        <div className='contact-btn'>
                            <button>Let's Contact</button>
                            <img src={arrow} alt="img"/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Figure >
                            <Figure.Image
                                width="max-width"
                                // height={180}
                                alt="171x180"
                                src={landing}
                            />
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Landing