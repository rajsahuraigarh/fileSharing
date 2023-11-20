import mongoose from "mongoose";



const DBConnection =async ()=>{



     const DB_URL=`mongodb://twiz0949:raj123@ac-faib2uk-shard-00-00.3daxkf3.mongodb.net:27017,ac-faib2uk-shard-00-01.3daxkf3.mongodb.net:27017,ac-faib2uk-shard-00-02.3daxkf3.mongodb.net:27017/?ssl=true&replicaSet=atlas-149o29-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

       await mongoose.connect(DB_URL,{ useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(err){
        console.error(`Error while connecting with database`,err.massage);
    }
}

export default DBConnection;