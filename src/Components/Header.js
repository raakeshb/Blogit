import React from "react";
import { Link } from "react-router-dom";
class Head extends React.Component {


render(){
    return(
        <header className="Heading">
            <Link to="/">Home</Link>
            <Link to="/create"  >CreateBlog</Link>
            <p className="rightside">Blog it!</p>
        </header>
    )
}




}
export default Head;