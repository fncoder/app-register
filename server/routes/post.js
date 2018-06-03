const express = require('express');
const router = express.Router();

let index = 0;
const posts = [];

router.post('/', (req, res) =>{
  const name = req.body.name;
  const textarea = req.body.textarea;
  const postStatus = req.body.postStatus;

  if(textarea.length <=0){
    res.json({
      text: 'Your message cannot be empty',
      message: true
    })
  }

  else{
    if(postStatus){
      const post = {
        id: index,
        name: name,
        text: textarea,
        date: new Date().toLocaleString('en-GB'),
        status: 'post'
      }

      posts.push(post)
      res.json(post)
      index++;
    }

    else{
      res.json({
        text: '',
        message: true
      })
    }
  }
})

module.exports = {router, posts}
