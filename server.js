   
const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3005;
const mong = require('mongoose');
const config = require('./js/config');
const blogmodal = require('./modal/blogmodel');
const cors = require('cors');
const path = require('path');

mong.connect(config.dbconn, { useNewUrlParser: true, useUnifiedTopology: true }); //connect to database


app.use(cors({ origin:true, credentials:true })); // for cross origin
app.use(express.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});


// POST request to create a new blog.
app.post('/addblog',(req,res)=>{
    
    var blog = new blogmodal({
        blogname:req.body.blogname,
        description:req.body.description,
        links:req.body.links,
        author:req.body.author
    });
    blog.save().then(()=>{
        res.send({"message":'blog added successfully'});
    }).catch((err)=>{
        
        res.send({"message":'Error while creating new Blog'});
    });
})

// PUT request to update a blog.
app.put('/updateblog/:id',(req,res)=>{

    var id = req.params.id;
    var blog = {
        blogname:req.body.blogname,
        description:req.body.description,
        links:req.body.links,
        author:req.body.author}
    blogmodal.findByIdAndUpdate(id,blog,{new:true},(err,result)=>{
        if(err){
            res.send({"message":'Error while updating blog'});
        }
        else{
            res.send({"message":'blog updated successfully'});
        }
    });
})

//DELETE request to delete a blog.
app.delete('/deleteblog/:id',(req,res)=>{
   

   blogmodal.deleteOne({'_id':req.params.id},(err)=>{
       if (err)
       {
            console.log(err);
            res.send({"message":"error while deleting"})
       }
       else
       {
           res.send({'message':'delete successful'})
       }
   })
})



// GET request for homepage i.e display all the blogs
app.get("/getblogs",(req,res)=>{
    blogmodal.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
            
        }
    })
})

app.get("/",(req,res)=>{
    res.send({"message":"hello welcome to backend"})
})