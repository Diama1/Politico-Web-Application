import express from 'express';
import routers from './server/routes/parties';
import officeRouter from './server/routes/offices';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1/parties',routers);
app.use('/api/v1/offices',officeRouter);



const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`You are on port ${port}`)
})

export default app;