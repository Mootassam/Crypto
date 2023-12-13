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

app.get("/api/coins/markets/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const response = await axios.get(
      `https://coinranking.com/api/v2/coin/${id}/markets?offset=0&orderDirection=desc&referenceCurrencyUuid=${id}`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/coins/exchanges/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const search = req.query.search || "";

    const response = await axios.get(
      `https://coinranking.com/api/v2/coin/${id}/exchanges?offset=0&orderDirection=desc&referenceCurrencyUuid=${id}&search=${search}`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Detaill_exchange
app.get("/api/exchange/overview/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/${id}?referenceCurrencyUuid=yhjMzLPhuIDl`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// showing the exchangedetaill about the market currencies

app.get("/api/exchange/cryptocurrencies/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/${id}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderDirection=desc`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// showing the echangedetaill about the Cruptocurrencies
app.get("/api/exchanges/detail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const search = req.query.search || "";

    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/${id}/coins?referenceCurrencyUuid=hi8n6hTOv12f&limit=50&offset=0&orderDirection=desc&search=${search}`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Showing the echangedetaill about the markets currencies
app.get("/api/exchanges/market/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/${id}/markets?offset=0&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&limit=50`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
