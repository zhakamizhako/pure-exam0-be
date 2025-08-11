import routes from './routes/records'
import recordInstance from './utils/records'
const express = require('express')

let recordInstanced = new recordInstance();

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
