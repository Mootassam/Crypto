import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ origin: true }));


const routes = express.Router();

app.get("/api/coins", async (req, res) => {
  try {
    const response = await axios.get(
      "https://coinranking.com/api/v2/coins?offset=0&orderBy=marketCap&limit=50&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search="
    );

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
