const express = require('express');
const mongodb = require('mongodb').MongoClient;
/* Used in deleting a specific object from the collection */
//const ObjectID = require('mongodb').ObjectID;

const router = express.Router();

//Connect to MONGODB Get whole document
async function loadPostsCollection() {
              //mongodb+srv://posts_user:<password>@learningcluster-5qutw.azure.mongodb.net/test?retryWrites=true&w=majority
  const uri = "mongodb+srv://posts_user:adminp@learningcluster-5qutw.azure.mongodb.net/test?retryWrites=true&w=majority";
  const client = new mongodb(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();

  //Load DB "vuefullstack" and table "posts"
  return client.db("vuefullstack").collection("posts");
}

//Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();

  let result = await posts.find({}).toArray();
  
  res.send(result);
});

//Add Posts
router.post('/', async (req, res) => {

  const posts = await loadPostsCollection();

  await posts.insertOne(req.body);

  console.log(req.body);

  res.sendStatus(200);
  
});


/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
*/

//Send delete request to delete one
/*
router.delete('/admin/:id', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.json({
        token: false
      });
    } else {
      const posts = await loadScoresCollection();

      const deleteID = new ObjectID(req.params.id);

      console.log("Delete ID", deleteID);
  
      posts.deleteOne({_id: deleteID});

      res.status(200).send();
    }
  });
});
*/

module.exports = router;