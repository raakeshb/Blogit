import React from "react";
import Addblog from "./Components/Addblog";
import Homepage from "./Components/Homepage";
import Head from "./Components/Header";
import Classblog from "./Context/Classblog";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      blogname:"",
      description:"",
      links:"",
      author:"",
      data: [],
      update:false,
      temp:[],
      edit:""
    }
    this.setState = this.setState.bind(this);
  }
 
  //Set the state of the blogs


    updateblog=(e)=>{
      this.setState({
        blogname:e,
       
      })
    }   
    
    updatedesc=(e)=>{
      this.setState({
        description:e
      })
    }
    
    updatelinks=(e)=>{
      this.setState({
        links:e
      })
    } 

    updateauthor=(e)=>{
      this.setState({
        author:e
      })
    }

    updatedata=(e)=>{
      this.setState({
        data:e
      })
    }
    
    update=(e)=>{
      this.setState({
        update:e
      })}


      updateedit=(e)=>{ 
        this.setState({
          edit:e

        })
      }

    loadfiledata=(arr)=>{
      this.setState({
       blogname:arr[0],
       description:arr[1],
       links:arr[2],
       author:arr[3]
      })
    }

    clearfields=()=>{
      this.setState({
        blogname:"",
        description:"",
        links:"",
        author:""
    });

  }
  //Set the state of the blogs
    render(){
      
      return(
       <Router>
         <Classblog.Provider value={{blogs: this.state.blogs,data:this.state.data,updatedata:this.updatedata, updateedit:this.updateedit,edit:this.state.edit,updatedisplay: this.updatedisplay, blogname:this.state.blogname,updateblog:this.updateblog,description:this.state.description,author:this.state.author,links:this.state.links,updateauthor:this.updateauthor,updatedesc:this.updatedesc,updatelinks:this.updatelinks,update:this.state.update,updateit:this.update,clearfields:this.clearfields,loadfiledata:this.loadfiledata}}>
         <Head></Head>
         <Switch>
         <Route exact path="/">
                  <Homepage ></Homepage>
                </Route>
                <Route exact path="/create">
                  <Addblog ></Addblog>
                </Route>
  </Switch>
  </Classblog.Provider>
  </Router>
  
  
    )}
}
export default App;