import React from "react";
import Classblog from "../Context/Classblog";
import { Link } from "react-router-dom";

class Home extends React.Component {

   static contextType = Classblog;

    render() {
        return (
            <div>
                {this.context.data.length > 0 ?this.context.data.map((items, index) => <div className="listin"><h1>{items[0]}<p style={{float:'right'}}>{items[3]}</p></h1><p>{items[1]}</p><p>{items[2]}</p><Link className="buttonss" to="/create" onClick={() => {this.context.loadfiledata(items);this.context.updateit(true);this.context.updateedit(index) }}>Edit</Link></div>):<Link className="buttonss" to="/create">Click Me to Create Blog</Link>}
            </div>
        );
    }




}
export default Home;