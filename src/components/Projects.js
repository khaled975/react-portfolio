import {React} from "react";
import {Col, Nav,Tab,Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Contact from "./Contact"
import Works from "./Works"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function Projects(){
    return(
        <section className="projects-sec" id="projects">
                <Row>
                    <Col className="heading-sec">
                        <h1>Projects</h1>
                        <p>You Can See My Works Here</p>
                    </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="projects-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className="first-tab">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Works/>}/>
                                </Routes>
                            </BrowserRouter> 
                       </Tab.Pane>
                        <Tab.Pane eventKey="second" className="second-tab">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Contact/>}/>
                                </Routes>
                            </BrowserRouter>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<p>Lorem</p>}/>
                                </Routes>
                                <Routes>
                                    <Route path="/" element={<Contact/>}/>
                                    hi
                                </Routes>
                            </BrowserRouter>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
        </section>
    )
}
export default Projects