import React from "react"
//import {fetchCatogories,fetchProducts} from "../Actions/index"
import {connect} from "react-redux"
import CarogoriesComp from "./Catogories"
import { Container, Row ,Col} from "react-bootstrap";
import  "../Styles/Layout.css"
import Products from "./Products"
import NavBar from "./NavBar"
import {Switch,Route,withRouter, Router} from "react-router-dom"
import Login from "./Login"
import Cart from "./Cart"



class App extends React.Component {

    

   

    mainContainer=()=>{
        return(
            <div>
            
                <Row >
                    <Col>
                    <NavBar></NavBar>
                    </Col>
                </Row>
                
                    
                
                
                <Row >
                    <CarogoriesComp ></CarogoriesComp>
                    <Products props={this.props.id}></Products>
                </Row>
                </div>
            
             

        );
    }
    render(){
        
        return(
            <Container fluid="true">
            <Switch>
                <Route path="/" exact component={this.mainContainer}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/cart" exact component={Cart}></Route>
               
            </Switch>
            </Container>
            
            
               
           
            
        )
    }
            
            

   
}
const mapStateToProps=(state)=>{
    return ({id:state.CatId,UserData:state.LoginData})
    

}
export default withRouter((connect(mapStateToProps)(App)));