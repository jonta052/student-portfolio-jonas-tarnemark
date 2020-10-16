import React from "react"
import logo from "../assets/logo.svg"
import { NavWrapper, NavCenter, NavHeader, Img, Button, NavLinks } from "../elements"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <NavWrapper>
      <NavCenter>
        <NavHeader>
          <Img src={logo} alt="logo"></Img>
            <Button>
              <FaAlignRight></FaAlignRight>
            </Button>
            
        </NavHeader>
        <PageLinks></PageLinks>
     
        </NavCenter>
    </NavWrapper>
    //<nav className="navbar">
      //</nav><div className="nav-center">
        //<div className="nav-header">
          //<img src={logo} alt="logo" />
          //<button type="button" className="toggle-btn">
            //<FaAlignRight></FaAlignRight>
          //</button>
        //</div>
        //<PageLinks styleClass="nav-links"></PageLinks>
      //</div>
    //</nav>
  )
}

export default Navbar
