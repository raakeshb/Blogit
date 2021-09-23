import React from "react";
import FileC from "./Filecontainer";
import Table from "./Table";
import Classblog from "../Context/Classblog";

class Blogs extends React.Component{

  static contextType = Classblog;


  
  

    render(){return(<>

        <form className="forms">
    <FileC type={'input'}  labelname={'Blogname'} value={this.context.blogname} onchange={this.context.updateblog} keyval={'blogname'}></FileC>
    <FileC type={'text'}  labelname={'Description'} value={this.context.description} onchange={this.context.updateblog} keyval={'description'}  ></FileC>
    <FileC type={'input'}  labelname={'Reference Links'} value={this.context.links} onchange={this.context.updateblog} keyval={'links'}  ></FileC>
    <FileC type={'input'}  labelname={'Author'} value={this.context.author} onchange={this.context.updateblog} keyval={'author'}  ></FileC>

      </form>
      <Table clr={this.context.clearfields} load={this.context.loadfiledata}/>
      </> 
    )}
}
export default Blogs;