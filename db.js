const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connection à la Database avec succès");
    }catch (error){
        console.log(error);
        console.log("Connection fail à la Database");
    }
}