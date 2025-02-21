require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9njqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const db = client.db('task-management')
    const userCollection = db.collection('users');
    const taskCollection = db.collection('tasks');

    // save users in db
    app.post('/users',async(req,res)=>{
        const user = req.body;
        // save google user
        const query = {email: user.email};
        const isExist = await userCollection.findOne(query);
        if(isExist){
            return res.send({message: 'user already exist', insertedId: null})
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
    })

    // get all user
    app.get('/users', async(req,res)=>{
        const result = await userCollection.find().toArray();
        res.send(result);
    })

    // save tasks in db
    app.post('/tasks', async(req,res)=>{
        const task = req.body;
        const result = await taskCollection.insertOne(task);
        res.send(result);
    })

    // app.post('/tasks', (req, res) => {
    //     const { title, description, category } = req.body;
    
    //     // Input Validation
    //     if (!title || title.length > 50) {
    //         return res.status(400).json({ error: "Title is required and must be within 50 characters." });
    //     }
    //     if (description && description.length > 200) {
    //         return res.status(400).json({ error: "Description must be within 200 characters." });
    //     }
    
    //     // Create New Task
    //     const newTask = {
    //         id: tasks.length + 1, // Simple unique ID
    //         title,
    //         description: description || "",
    //         timestamp: new Date().toISOString(),
    //         category: category || "To-Do",
    //     };
    
    //     tasks.push(newTask);
    //     res.status(201).json(newTask);
    // });

    // get all tasks
    app.get('/tasks', async(req,res)=>{
        const result = await taskCollection.find().toArray();
        res.send(result);
    })

    // update task
    app.put("/tasks/:id", async (req, res) => {
        const { id } = req.params;
        const { category } = req.body;
    
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
            $set: { category: category }
        };
    
        const result = await taskCollection.updateOne(filter, updateDoc);
        res.send(result);
    });

    // get all Task a specific user
    app.get('/tasks/:email',async(req,res)=>{
        const email = req.params.email;
        const query = {agentEmail: email};
        const result = await taskCollection.find(query).toArray();
        res.send(result);
    })


    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('task-management is running')
})

app.listen(port,()=>{
    console.log(`task-management running on port: ${port}`)
})