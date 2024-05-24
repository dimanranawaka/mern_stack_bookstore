import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to mongodb

try {

    mongoose.connect(MONGO_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    });

    console.log('MongoDB connected successfully')

} catch (error) {
    console.log('Error while connecting to MongoDB', error)
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})