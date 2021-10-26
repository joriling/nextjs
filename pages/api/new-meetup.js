import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://jollyann_dolloso:D9Hi1HlSMt0l0XbH@cluster0.ncnbu.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log('Result', result);

    client.close();

    res.status(201).json({
        message: 'Meetup Inserted!'
    });
  }
}

export default handler;
