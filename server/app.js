import express from 'express';
import routers from './server/routes/parties';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1/parties',routers);
// app.use('/offices',routers);

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`You are on port ${port}`)
})

export default app;