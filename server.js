const express = require("express");
const app = express();
const userRoutes = require('./Routes/user.routes');
const productRoutes = require('./Routes/product.routes');

app.use(express.json());
app.get("/", (req, res)=>{
    res.end("")
});

app.use("/user-api", userRoutes);
app.use("/product", productRoutes );
app.listen(3000,()=>console.log("O servidor está rolando"));