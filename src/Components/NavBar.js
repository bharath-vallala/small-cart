import React from "react"
import {Navbar,Nav,Form,Image,Badge,FormControl, Button,Card,NavDropdown} from "react-bootstrap"
import "../Images/.."
import {Switch,Route,withRouter, Router,NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../Actions"
import Cart from "./Cart"


class NavBar extends React.Component{


  
   
  onlogout=async()=>{
     
    await  this.props.logout(this.props.UserData.data.userData.user_id)
    this.props.history.push("/");
      
      window.location.reload();


      
     

  }

 onCart=()=>{
    this.props.history.push("/cart");

  }
navbarbar=()=>{
    if( this.props.UserData && this.props.UserData.status===200){
        return(

            <Card>
            <Navbar fixed="top" bg="light" >
                <Navbar.Brand>Small cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Form inline style={{ marginLeft:"20px"}}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
    
                        </Form>
    
                    </Nav>
                    <Form inline>
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                       <NavDropdown.Item>{this.props.UserData.data.userData.name}</NavDropdown.Item>
                       <NavDropdown.Item onClick={this.onlogout}>logout</NavDropdown.Item>

      
                    </NavDropdown>
                    
                    
                    <Button variant="light" onClick={this.onCart}>
                    <Image src={require("../Images/CartIcon.png")}/>
                    Cart <Badge variant="info">9</Badge>
                    
                    </Button>
    
    
                    </Form>
                </Navbar.Collapse>
    
            </Navbar>
        </Card>
          
        
                    
                 
                           
        )
        }else{

            return (
                <Card>
            <Navbar fixed="top" bg="light" >
                <Navbar.Brand>Small cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Form inline style={{ marginLeft:"20px"}}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
    
                        </Form>
    
                    </Nav>
                    <Form inline>
    
                    <NavLink to="/login" activeClassName="active">hello</NavLink>
                    
                    <Button variant="light">
                    <Image src={require("../Images/CartIcon.png")}/>
                    Cart <Badge variant="info">9</Badge>
                    
                    </Button>
    
    
                    </Form>
                </Navbar.Collapse>
    
            </Navbar>
        </Card>
            );
            
        }
}

    render(){
        return(
            <div>
                {this.navbarbar()}
            </div>
        )
   
    }

}

const mapStateToProps=(state)=>{
    return ({UserData:state.LoginData,LogoutData:state.LogoutData})
}

export default  withRouter(connect(mapStateToProps,{logout:logout}) (NavBar))