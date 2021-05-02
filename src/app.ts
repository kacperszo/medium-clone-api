import express from 'express';

const app = express();
export const port = process.env['port'] || 8080;

console.log(`starting app, listening on port ${port}`);
app.get('/', (_req, res) => {
    res.send('hello world');
});

app.listen(port);
export default app;
