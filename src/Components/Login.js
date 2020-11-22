import React from "react"
import {Form,Button,Row,Col} from "react-bootstrap"
import "../Styles/Layout.css"
import {loginUser} from "../Actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"





 class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={email:"", password:"",LogginedIn:false}
        
    }


    componentDidMount(){
        const value="12345a"
        for(let i=0;i<=value.length;i++){
            console.log(value[i]); 
            if(value[i]=== 1 || 2 || 3 || 4){
                console.log("number");
            }


        }



    }


    OnSubmit1=(e)=>{
       e.preventDefault();
       this.props.loginUser(this.state)
       



    }

    emailOnChange=(e)=>{
        this.setState({email:e.target.value})
        
        

    }

    passwordOnChange=(e)=>{
        this.setState({password:e.target.value})
        



    }
    componentDidUpdate(){
            
        if ( this.props.userData && this.props.userData.status===200 && this.state.LogginedIn===false) {
                this.setState({LogginedIn:true})
                this.props.history.push("/");

               

            
        }
        
            
            
        
        
        
    }


    render(){


        if(this.state.LogginedIn===false){
        
        return(
            <Row className="center">
                <Col >
                    <Form onSubmit={this.OnSubmit1}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email}  onChange={this.emailOnChange} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordOnChange} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        )

        }

        
    }

    


 }
 

 const mapStatetoProps=(state,ownProps)=>{
  
    return ({userData:state.LoginData})

}

 export default withRouter(connect(mapStatetoProps,{loginUser:loginUser}) (Login))