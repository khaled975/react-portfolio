import { Container , Figure , Row ,  Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import '../App.css'
import landing from '../imgs/header-img.svg'
import arrow from '../imgs/arrow2.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
function Landing(){
    return(
        <section className='landing-sec' id='home'>
            <Container>
                <Row className='landing-text'>
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>
                            <h3>Welcome All In My Portfolio</h3>
                            <h1 className="animate__animated animate__fadeInLeft">Hi! I'm Khaled Abd El-Mohsen,</h1>
                        </TrackVisibility>
                        <h2 className='moving-text'>
                            <Typewriter 
                                options={{
                                    strings: ['FrontEnd Developer', 'BackEnd Developer','FullStack Developer'],
                                    autoStart: true,
                                    loop: true,
                                    cursor:	"|",
                                }}/>
                        </h2>
                        <span className='desc'>Hallo Everyone . I Have 1 Years Of Experience In Web Development</span>
                        <div className='contact-btn'>
                            <button>Let's Contact</button>
                            <img src={arrow} alt="img"/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                                <Figure>
                                    <Figure.Image
                                        width="max-width"
                                        // height={180}
                                        alt="171x180"
                                        src={landing}
                                        className="animate__animated animate__fadeInDown"
                                        />
                                </Figure>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Landing