import routes from './routes/records'
import cors from 'cors';
import express, {Request} from 'express'
const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json());

app.use("/", routes);
app.use(cors<Request>());
// app.use(cors({
//     origin: 'http://localhost:5173', // change to your Vue dev server address
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   }));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
