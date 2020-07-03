import React from "react"
import {Container,Col,Row,Button} from "react-bootstrap"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {increaseItemByOne,removeCartItem,decreaseItemByOne} from "../Actions/index"

class AddRemoveCart extends React.Component{



    onIncreaseCartItemByOne=()=>{
        this.props.increaseItemByOne({user_id:this.props.user_id,product_id:this.props.product_id})
        console.log(this.props.product_id)
    }

    ondecreaseCartItemByOne=()=>{
        this.props.decreaseItemByOne({user_id:this.props.user_id,product_id:this.props.product_id})
        console.log(this.props.product_id)
    }

    onRemoveCartItem=()=>{
        this.props.removeCartItem(this.props.user_id,this.props.product_id)
        console.log(this.props.product_id)
    }

    saveLaterAndRemoveButtons=()=>{
        if(this.props.SHOWSAVEFORLATER===true){
           return (<div>
                        <Col md="auto"><Button variant="info" size="sm" style={{marginTop:"10px"}} >Save for later</Button></Col>
                        <Col><Button variant="danger" size="sm"  style={{marginTop:"10px"}} onClick={this.onRemoveCartItem}>Remove</Button></Col> 
                    </div>)

        }
        return <Col><Button variant="danger" size="sm" block style={{marginTop:"10px"}} onClick={this.onRemoveCartItem}>Remove</Button></Col>

    }
     
    render(){
        return (
            <Container fluid="true">
                <Row>
                    <Col ><Button variant="primary" size="sm" onClick={this.onIncreaseCartItemByOne}>+</Button> </Col>
                    <Col> <div >4</div> </Col>
                    <Col ><Button variant="primary" size="sm" onClick={this.ondecreaseCartItemByOne}>-</Button> </Col>
                    
                </Row>
                <Row >
                {this.saveLaterAndRemoveButtons()}
                </Row>
            </Container>

        )
    }



}
const mapStateToProps=(state)=>{
    return ({CartItems:state.CartItems})
}

export default withRouter(connect(mapStateToProps,{increaseItemByOne:increaseItemByOne,removeCartItem:removeCartItem,decreaseItemByOne})(AddRemoveCart))