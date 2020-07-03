import React from "react"
import {Card,ListGroup,Button} from "react-bootstrap"

class Total extends React.Component{


    SinglePrices=()=>{
       return this.props.list.map((element)=>{
         return <ListGroup.Item>{element.name}  {element.price} ₹</ListGroup.Item>

        })
    }

    render(){
        return (
            <Card style={{ width: '18rem' }}>
                
                <ListGroup variant="flush">
                <ListGroup.Item active>Total</ListGroup.Item>
                    {this.SinglePrices()}
                    
                   
                </ListGroup>
                <Button variant="success">Place Order</Button>

            </Card>

        )
    }
}

export default Total;