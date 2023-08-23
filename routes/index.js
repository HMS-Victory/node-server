const myController=require("../controlers");
const routes=require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/TTechIsAwesome", myController.TTechIsAwesome)

module.exports=routes;
