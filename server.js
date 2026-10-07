import express from "express";

const port = 3000;

const app = express();

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get("/send",(req, res) =>{
    res.json({msg:"hello"})
})  