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
      edit:"",
      updateid:""
    }
    this.setState = this.setState.bind(this);
  }
 
  componentDidMount(){
  fetch("https://blog-it-demo-backend.herokuapp.com/getblogs").then(res=>res.json()).then(dbdata=>{
   
    this.setState({
    data:dbdata
    })
  })
}


  

 
// update state of the blogs
  updateblogitems = (object) => {
    this.setState(
      object);
  }


    
// loads data into form fields when user clicks on edit button
    loadfiledata=(arr)=>{
      this.setState({
       blogname:arr.blogname,
       description:arr.description,
       links:arr.links,
       author:arr.author
      })
    }

    // clears the form fields
    clearfields=()=>{
      this.setState({
        blogname:"",
        description:"",
        links:"",
        author:""
    });

  }

    render(){
      const {blogs,blogname,description,author,links,data,update,temp,edit,updateid} = this.state;
      return(
       <Router>
         
         <Classblog.Provider value={{blogs,blogname,description,author,links,data,update,temp,edit,updateid,loadfiledata:this.loadfiledata,clearfields:this.clearfields,updateblog:this.updateblogitems}}>
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
