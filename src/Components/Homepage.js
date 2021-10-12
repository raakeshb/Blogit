import React from "react";
import Classblog from "../Context/Classblog";
import { Link } from "react-router-dom";

class Home extends React.Component {

   static contextType = Classblog;

    render() {
        return (
            <div>
                {this.context.data.length > 0 ?this.context.data.map((items,index) => <div className="listin"><h1>{items.blogname}<p style={{float:'right'}}>{items.author}</p></h1><p>{items.description}</p><p>{items.links}</p><Link className="buttonss" to="/create" onClick={() => {this.context.loadfiledata(items);this.context.updateblog({'update':true,'edit':items._id,'updateid':index});}}>Edit</Link></div>):<Link className="buttonss" to="/create">Click Me to Create Blog</Link>}
            </div>
        );
    }




}
export default Home;