// app.get("/", (req,res)=>{
//     res.send("Hello World!")
// });
const awesomeFunction=(req,res)=>{
    res.send("Hello World");
}
const TTechIsAwesome=(req,res)=>{
    res.send("Tooele Tech is Awesome");
}

module.exports={awesomeFunction, TTechIsAwesome};