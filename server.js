// NODE EXPRESS MONGODB SERVER
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

//to run express as a server
const app = express();
app.use(bodyParser.json());//when a new request comes into this server and it will read the body as json and run as json

mongoose.connect("mongodb://localhost/react-shopping-cart-professional-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//responsible for creating a model. Takes two params
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    //when you create a new item in db a new id will generate
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  //send back to client
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  //creates a new product inside the db
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
