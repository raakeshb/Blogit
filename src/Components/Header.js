import React from "react";
import { Link } from "react-router-dom";
import blogcontext from "../Context/Classblog";
class Head extends React.Component {
static contextType = blogcontext;

render(){
    return(
        <header className="Heading">
            <Link to="/" onClick={()=>{this.context.updateblog({'update':false});this.context.clearfields();}}>Home</Link>
            <Link to="/create"  onClick={()=>{this.context.updateblog({'update':false});this.context.clearfields();}} >CreateBlog</Link>
            <p className="rightside">Blog it!</p>
        </header>
    )
}




}
export default Head;