const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
let express = require("express");
let app = express();
let cors = require("cors");
let port = process.env.PORT || 5000;


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// MONGOCLIENT 
const uri = "mongodb+srv://sajaninda:OHJawuylsfxy94rV@cluster0.ruhvmdy.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });

        const coffeeCollection = client.db("coffeesDB").collection("coffees");

        app.post("/coffees", async (req, res) => {
            const coffee = req.body;
            const result = await coffeeCollection.insertOne(coffee);
            res.send(result);
        });

        app.get("/coffees", async (req, res) => {
            let result = await coffeeCollection.find().toArray();
            res.send(result);
        })
        app.get("/coffees/:id", async (req, res) => {
            let id = req.params.id;
            const query = { _id: new ObjectId(id) };
            let result = await coffeeCollection.findOne(query);
            res.send(result);
        })
        app.delete("/coffees/:id", async (req, res) => {
            let id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        });
        app.put("/coffees/:id", async (req, res) => {
            let id = req.params.id;
            let coffeeData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateCoffee = {
                $set: {
                    name: coffeeData.name,
                    chef: coffeeData.chef,
                    price: coffeeData.price,
                    taste: coffeeData.taste,
                    category: coffeeData.category,
                    details: coffeeData.details,
                    imgUrl: coffeeData.imgUrl,

                },
            }
            const result = await coffeeCollection.updateOne(filter, updateCoffee, options);
            res.send(result);
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get("/", (req, res) => {
    res.send("Server Running");
})

app.listen(port);