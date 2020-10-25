const express = require("express");

const app = express();

app.get("/", function(request,response){
  response.send("Hello");
});

app.get("/contact", function(request, response){
  response.send("Contact me at: harshgoel0012@gmail.com");
});

app.get("/about", function(request, response){
  response.send("Hi, this is Harsh Goel Founder of DressDoc");
})

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
