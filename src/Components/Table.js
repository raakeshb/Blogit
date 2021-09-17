import React from "react";
import Classblog from "../Context/Classblog";
import {withRouter} from "react-router-dom";
class Table extends React.Component {

    static contextType = Classblog;
//regex check for fields
  regexcheck(){
        const regex = /^[^-\s][a-zA-Z0-9_\s-]+$/;
        const urlregex = /^(?:http(s)?:\/\/)?[\w.-]+(?:[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+$/;
        if(urlregex.test(this.context.links) && regex.test(this.context.blogname) && regex.test(this.context.author) && regex.test(this.context.desc)){
            return true;
        }
        alert("Please check the fields only AlphaNumerics are Allowed");
            return false;
        
    }

  
// delete blog
    deleteblog=(position)=>{

        let temp = this.context.data;
        temp.splice(position, 1);
      this.context.updatedata(temp);
  
        
     
    
}
        //update blog
    updateblog=(position)=>{

        if(this.regexcheck()){
            let temp = this.context.data;
            temp[position] = [this.context.blogname,this.context.description,this.context.links,this.context.author];
            this.context.updatedata(temp);
    
           
            
        
    }
}
    //create new blog

    createblog=()=>{
        if(this.regexcheck()){
            this.context.updatedata([...this.context.data,[this.context.blogname,this.context.description,this.context.links,this.context.author]]);
            this.context.clearfields();
            this.props.history.push("/");
         
        
    }
}

render() {return(
<>
{this.context.update === true && <button className="buttons" onClick={()=>{this.context.updateit(!this.context.update);this.context.clearfields()}}>Cancel Edit</button>}
{this.context.update === false ? <button className="buttons" onClick={()=>{this.createblog()}}>Add</button>:<button className="buttons" onClick={()=>{this.updateblog(this.context.edit)}}>Update</button>}

{this.context.data.length >0 && <table className="tables">
                <tr>
                    <th>Blog</th>
                    <th>Description</th>
                    <th>Links</th>
                    <th>Author</th>      
                </tr>
        
                {this.context.data.map((items, index) => <tr>{items.map(i => <td>{i}</td>)}<button className="buttons" type="button" onClick={() => {this.context.loadfiledata(items);this.context.updateit(true);this.context.updateedit(index) }}>Edit!</button><button className="buttons" type="button" onClick={() => { this.deleteblog(index)}}>X</button></tr>)}

            </table>}
</>
)

}
}

export default withRouter(Table);