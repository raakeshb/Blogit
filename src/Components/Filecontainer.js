import React from "react";

class FileC extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            
        }}


        render(){

            return(
                <>
                {this.props.type === 'input' && <><label>{this.props.labelname}</label><br></br>                    
               <input  type="text"  placeholder={this.props.value} value={this.props.value} onChange={(e)=>{this.props.sett(e.target.value);}}></input>
              <br></br> </>}
               {this.props.type === 'text' && <><label>{this.props.labelname}</label><br></br>
               <textarea type="text" placeholder={this.props.value} value={this.props.value} onChange={(e)=>{this.props.sett(e.target.value)}}></textarea>
               <br></br>  </>}
               {this.props.type === 'file' && <><label>{this.props.labelname}</label><br></br>
               <input type="file"   onChange={(e)=>{this.props.sett({file:e.target.files})}}></input>
               <br></br> </>}   </>
            )
        }
    }

export default FileC;
