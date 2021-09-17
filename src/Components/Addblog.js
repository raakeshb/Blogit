import React from "react";
import FileC from "./Filecontainer";
import Table from "./Table";
import Classblog from "../Context/Classblog";

class Blogs extends React.Component{

  static contextType = Classblog;

    render(){return(<>
    
        <form className="forms">
    <FileC type={'input'}  labelname={'Blogname'} value={this.context.blogname}  sett={this.context.updateblog} ></FileC>
    <FileC type={'text'}  labelname={'Description'} value={this.context.description} sett={this.context.updatedesc}></FileC>
    <FileC type={'input'}  labelname={'Reference Links'} value={this.context.links} sett={this.context.updatelinks}></FileC>
    <FileC type={'input'}  labelname={'Author'} value={this.context.author} sett={this.context.updateauthor}></FileC>

      </form>
      <Table clr={this.context.clearfields} load={this.context.loadfiledata}/>
      </> 
    )}
}
export default Blogs;