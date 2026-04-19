const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let loans = [];

app.post("/apply",(req,res)=>{
  const loan = {
    id: Date.now(),
    ...req.body,
    status:"pending"
  };
  loans.push(loan);
  res.json(loan);
});

app.get("/loans",(req,res)=>{
  res.json(loans);
});

app.listen(process.env.PORT || 5000);
