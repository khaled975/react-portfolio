import {Navbar , Container, Nav , NavDropdown,Button} from "react-bootstrap";
import {useState,useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import '../App.css'
function Header(){
    const [headerBg,setheaderBg]=useState(false)
    useEffect(()=>{
        const scroll =()=>{
            if(window.scrollY>50){
                setheaderBg(true)
            }else{
                setheaderBg(false)
            }
        }
        window.addEventListener("scroll",scroll)
    })


    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" className={headerBg?"changeBg":""}>
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />           
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <div className="icons">
                        <div className="header-icon">
                            <a href="https://www.linkedin.com/in/khaled-abd-el-mohsen-aa7985270/" target="_blank"><span><FontAwesomeIcon icon={faLinkedinIn}/></span></a>
                            <a href="#"><span><FontAwesomeIcon icon={faFacebookF}/></span></a>
                            <a href="#"><span><FontAwesomeIcon icon={faInstagram}/></span></a>
                        </div>
                        <Button variant="primary"><span>Let's Contact</span></Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;
