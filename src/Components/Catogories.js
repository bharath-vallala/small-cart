import React from "react"
import {fetchCatogories,selectedCarogery} from "../Actions/index"
import {connect} from "react-redux"
import { ListGroup,Col} from "react-bootstrap"
import  "../Styles/Layout.css"


class Catogories extends React.Component{

    componentDidMount(){
        this.props.fetchCatogories();
        console.log("mounted")

        
    }

    componentDidUpdate(){
        //console.log(this.props)

    }




    CatogeryClick(e,element) {
        this.props.selectedCarogery(element.category_id)
        //console.log(this.props.id);
        
      }

    renderList(){

        if(this.props.catogories){
            //console.log(this.props.catogories)


        return this.props.catogories.map((element)=>{
            //console.log(element)
            return (
               <ListGroup.Item  key={element.category_id} action onClick={(e)=>{
                   this.CatogeryClick(e,element)
               }}>
                   {element.name}
                   </ListGroup.Item>  
                );
        })
    }else{
        return (
            <div>error</div>
        )
    }
    }
    
    render(){
        
        return (
            <Col xs={2} className="gridLay">
                <ListGroup >
                    <ListGroup.Item active >Catogories</ListGroup.Item>
                    {this.renderList()}
                </ListGroup>
            </Col>
                            

        );
    }
}
const mapStatetoProps=(state)=>{
    return ({catogories:state.Catogories,id:state.CatId});

}


export default connect(mapStatetoProps,{fetchCatogories:fetchCatogories,selectedCarogery:selectedCarogery})(Catogories);