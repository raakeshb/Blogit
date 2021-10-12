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
    deleteblog=(position,versionid)=>{
        console.log(position);
        console.log(versionid)

        fetch(`https://blog-it-demo-backend.herokuapp.com/deleteblog/${versionid}`,{ method:'DELETE'}).then((res)=>{return res.json()}).then((json)=>{
            alert(` Blog data ${json.message}`);
            fetch("https://blog-it-demo-backend.herokuapp.com/getblogs").then(res=>res.json()).then(dbdata=>{
   
                this.context.updateblog({'data':[...dbdata]});
                console.log(this.context.data)}
              ) 
        })
   
    
}
        //update blog
    updateblog=()=>{
        fetch(`https://blog-it-demo-backend.herokuapp.com/updateblog/${this.context.edit}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "blogname":this.context.blogname,
                "description":this.context.description,
                "links":this.context.links,
                "author":this.context.author
            })
        }).then((res)=>{return res.json()}).then(json=>{
            alert(json.message)
            fetch("https://blog-it-demo-backend.herokuapp.com/getblogs").then(res=>res.json()).then(dbdata=>{
   
                this.context.updateblog({'data':[...dbdata]});
                console.log(this.context.data)}
              ) 
        })

        
}
    //create new blog

    createblog=()=>{
        if(this.regexcheck()){
            fetch('https://blog-it-demo-backend.herokuapp.com/addblog', {
            fetch('/addblog', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "blogname":this.context.blogname,
                    "description":this.context.description,
                    "links":this.context.links,
                    "author":this.context.author
                })
            }).then((res) => { 
                return res.json() })
            .then((json) => {
                if(json.message === 'blog added successfully'){
                    fetch("https://blog-it-demo-backend.herokuapp.com/getblogs").then(res=>res.json()).then(dbdata=>{
   
                        this.context.updateblog({'data':[...dbdata]});
                        this.context.clearfields();
                        this.props.history.push("/");
                        console.log(this.context.data)}
                      )
          
            }});
      
         
        
    }
}

render() {return(
<>
{this.context.update === true && <button className="buttons" onClick={()=>{this.context.updateblog({"update":!this.context.update});this.context.clearfields()}}>Cancel</button>}
<br></br>
{this.context.update === false ? <button className="buttons" onClick={()=>{this.createblog()}}>Add</button>:<button className="buttons" onClick={()=>{this.updateblog(this.context.edit)}}>Update</button>}

{this.context.data.length >0 && <table className="tables">
                <tr>
                    <th>Blog</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Links</th>      
                </tr>
                {this.context.data.map((item,index)=><tr>{Object.keys(item).map((key)=> (key !== '_id'&& key !== '__v') && <td>{item[key]}</td>)}<button className="buttons" type="button" onClick={() => {this.context.loadfiledata(item);this.context.updateblog({'edit':item['_id'],'update':true,'updateid':index}) }}>Edit!</button><button className="buttons" type="button" onClick={() => { this.deleteblog(index,item['_id']);this.context.clearfields();this.context.updateblog({'update':false})}}>X</button></tr>) }

            </table>}
</>
)

}}

export default withRouter(Table);
