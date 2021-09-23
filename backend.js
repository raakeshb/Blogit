const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3005;
const mong = require('mongoose');
const config = require('./js/config');
const blogmodal = require('./Modal/blogsmodal');
const cors = require('cors');
const path = require('path');

mong.connect(config.dbconn, { useNewUrlParser: true, useUnifiedTopology: true }); //connect to database

app.use(express.static(path.join(__dirname, 'build')));
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
    console.log(req.body);
    var blog = new blogmodal({
        blogname:req.body.blogname,
        description:req.body.description,
        links:req.body.links,
        author:req.body.author
    });
    blog.save().then(()=>{
        res.send({"message":'blog added successfully'});
    }).catch((err)=>{
        console.log(err);
        res.send({"message":'Error while creating new Blog'});
    });
})

// PUT request to update a blog.
app.put('/updateblog/:id',(req,res)=>{
 console.log(req.body);
})

//DELETE request to delete a blog.
app.delete('/deleteblog/:id',(req,res)=>{
    console.log(req.body);
})



// GET request for homepage i.e display all the blogs
app.get("/getblogs",(req,res)=>{
    blogmodal.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
            console.log(data);
        }
    })
})



