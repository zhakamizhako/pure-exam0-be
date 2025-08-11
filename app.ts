import express, { Application } from "express";

import routes from "./src/routes/index"

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

