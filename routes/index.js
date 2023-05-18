const { isUtf8 } = require('buffer');
var express = require('express');
var router = express.Router();
var fs=require ("fs")

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        const user = {name: "Tom", age: 28};
        const result = await collection.insertOne(user);
        console.log(result);
        console.log(user);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express' });
});




router. get("/toTxt", function(req,res){
fs.appendFileSync("laptop.txt", req.query.autoName+','+req.query.year+','+req.query.prise+';')
res.render ("laptop.hbs",{})
})

router.get("/listOfLaptop", function (req,res){

  let laptoplist=fs.readFileSync("laptop.txt", "utf8")
  res.render("laptopsList.hbs",{})
  key1: laptopList
})



module.exports = router;
