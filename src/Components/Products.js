import React from "react"
import {connect} from "react-redux"
import {fetchProducts,addToCart,getCartItems} from "../Actions/index"
import {Col, Card,Button, Container, Row,Alert} from "react-bootstrap"
import  "../Styles/Layout.css"
import {withRouter,NavLink} from "react-router-dom"
import AddRemoveCart from "./addRemoveCart"

class Products extends React.Component{

    constructor(props){
        super(props)
        this.state={cartClick:false,addedToCart:false,clickedId:null}
    }

componentDidMount(){

     if(this.props.UserData){
        console.log(this.props.UserData.data.userData.user_id)
        this.props.getCartItems(this.props.UserData.data.userData.user_id)
    }

    
}

componentDidUpdate(prevProps, prevState, snapshot){
    
    
    if(prevProps.id!==this.props.id){
        this.props.fetchProducts(this.props.id).then(()=>{
          

          
        })

    }

    console.log(this.props.CartItems);

  


   
    
}

loginWarning=()=>{
    if(this.state.cartClick && ! this.props.UserData){
        return <Alert variant="warning" onClose={() =>{this.setState({cartClick:false})}} dismissible>
            please
        
        <NavLink to="/login" activeClassName="active"> Login </NavLink>
        to add product to cart
  </Alert>
    }

}

onAddtoCart=(id)=>{
    this.setState({cartClick:true})
    this.setState({addedToCart:true,clickedId:id});
    //console.log(this.props.UserData)
    //console.log(this.props.UserData.data.userData.user_id)
   
    if( this.props.UserData && this.props.UserData.status===200 ){
        
       
            this.props.addToCart({user_id:this.props.UserData.data.userData.user_id,product_id:id})
        
       
    }
    
    //make action call
    
    

}

cartButtons=(element)=>{
   
    console.log(this.props.CartItems.message)
       
            if(this.props.UserData && this.props.CartItems.message && this.checkProductId(element.product_id).includes(element.product_id) ){
                return <AddRemoveCart product_id={element.product_id} user_id={this.props.UserData.data.userData.user_id}></AddRemoveCart>


            }else{
                return   <Button onClick={(e)=> this.onAddtoCart(element.product_id)}>add to cart</Button> 


            }


}

checkProductId(id){
    
    if(this.props.CartItems.message){
       return this.props.CartItems.message.map((product)=>{
            if(product.product_id===id){
                //console.log(id)
                return id
            }
            return -1

    })

}else{
    return false
}
}



renderCards(list){
   return list.map((element)=>{
       //console.log(element)
        
        return (
            <Col  style={{padding:'10px'}}>
                <Card key={element.product_id} style={{ width: '18rem'  ,padding:'10px'}}>
                    <Card.Img src={element.image_url}/>
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                    
                    </Card.Body>
                    <Card.Body>
                         
                  {this.cartButtons(element)}
                        
                    </Card.Body>
                </Card>
            </Col>
            
        );
    })


}
    

  

    render(){
        if(this.props.products!==null){
           
     return(
         <Col className="gridLay" >
             <Container>
             {this.loginWarning()}
                 <Row>
                     
                    {this.renderCards(this.props.products.message) }
                </Row>
            </Container>
        </Col>

        );

    }
    return (
        <Col xs={4} className="gridLay">select a catogery</Col>
    )
}
}


const mapStatetoProps=(state,ownProps)=>{
  
    return ({products:state.Products,id:state.CatId,UserData:state.LoginData,CartItems:state.CartItems,AccessToken:state.AccessToken})

}


export default  withRouter(connect(mapStatetoProps,{fetchProducts:fetchProducts,addToCart:addToCart,getCartItems:getCartItems})(Products))