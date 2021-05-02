import express from 'express';
import mongoose from 'mongoose';
const app = express();
export const port = process.env['port'] || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    'mongodb://localhost:27017/medium',
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log('connected to the mangodb database');
    },
);

app.listen(port, () => {
    console.log(`starting app, listening on port ${port}`);
});
