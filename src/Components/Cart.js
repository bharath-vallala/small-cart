import React from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {Col, Card, Row,Container} from "react-bootstrap"
import AddRemoveCart from "./addRemoveCart"
import NavBar from "./NavBar"
import Total from "./Total"



class Cart extends React.Component{

    componentDidMount(){
        console.log(this.props.CartItems)
        console.log(this.props.loginData.data.userData.user_id)

    }

    CartItems=(list)=>{
        return list.map((element)=>{
            console.log(element)

            return(
                <Col  style={{padding:'10px'}}>
                    
                       
                <Card key={element.product_id} style={{ width: '600px'}}>
                <Row>
                <Col>
                    <Card.Img src={element.image_url}/>
                </Col>
                <Col>
                    <div>
                        <Card.Body>
                            <Card.Title> {element.name}</Card.Title>
                            <Card.Text>
                                price {element.price}
                            </Card.Text>
                        
                        </Card.Body>
                        <Card.Body>
                            
                            <AddRemoveCart SHOWSAVEFORLATER={true} product_id={element.product_id} user_id={this.props.loginData.data.userData.user_id}></AddRemoveCart>
                            
                        </Card.Body>
                    </div>
                </Col>
                </Row>
                </Card>
               
               
            </Col>
            )
        })
    }
    
    render(){
        return (
        <div>
        <Container style={{marginLeft:"100px"}} fluid="true">
             <NavBar></NavBar>
             <Row>
           
             </Row>
            <Row> 
                <Col>
                    {this.CartItems(this.props.CartItems.message)}
                </Col>
                <Col>
                     <Total list={this.props.CartItems.message}></Total>
                </Col>
            </Row>
            <Row>
           
            </Row>

            </Container>
           
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{CartItems:state.CartItems,loginData:state.LoginData}

}

export default withRouter(connect(mapStateToProps) (Cart));