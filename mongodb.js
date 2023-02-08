const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
//Database Name
const dbName = 'users';

async function main(users) {
    await client.connect();
    //console.log('Connected successfully to serve');
    const db = client.db(dbName);
    console.log('Connected successfully to serve');
    const collection = db.collection('documents');
    return db.collection(users);
}
const db=require("./db")
const insert = async(users,fname,lname,email,password)=>{
    await(
        await main(users)
    ).insertOne({fname,lname,email,password}).then(()=>console.log("data enter successfull"));
}
module.exports=insert
//main()
  // .then(console.log)
   //.catch(console.error)
  // .finally(() => client.close());