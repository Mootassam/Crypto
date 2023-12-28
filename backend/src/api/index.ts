import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { Server } from "ws";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const wss = new Server({ server });
app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ origin: true }));

const routes = express.Router();

app.get("/api/coins", async (req, res) => {
  try {
    const response = await axios.get(
      "https://coinranking.com/api/v2/coins?offset=0&orderBy=marketCap&limit=50&orderDirection=desc&referenceCurrencyUuid=6mUvpzCc2lFo&timePeriod=1h&search="
    );

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Price Coins

app.get("/api/coins/price/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://coinranking.com/api/v2/coin/${id}?referenceCurrencyUuid=6mUvpzCc2lFo&timePeriod=24h`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// About Coins

app.get("/api/coins/about/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://coinranking.com/api/v2/coin/${id}/content`
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
    const response = await axios.get(
      `https://coinranking.com/api/v2/coin/${id}/markets?offset=0&orderDirection=desc&referenceCurrencyUuid=6mUvpzCc2lFo&limit=50
      `
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
      `https://coinranking.com/api/v2/coin/${id}/exchanges?offset=0&orderDirection=desc&referenceCurrencyUuid=6mUvpzCc2lFo&search=${search}`
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
      `https://coinranking.com/api/v2/exchange/${id}?referenceCurrencyUuid=6mUvpzCc2lFo`
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
      `https://coinranking.com/api/v2/exchange/${id}/coins?referenceCurrencyUuid=6mUvpzCc2lFo&limit=50&offset=0&orderDirection=desc`
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
      `https://coinranking.com/api/v2/exchange/${id}/coins?referenceCurrencyUuid=6mUvpzCc2lFo&limit=50&offset=0&orderDirection=desc&search=${search}`
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
      `https://coinranking.com/api/v2/exchange/${id}/markets?offset=0&orderDirection=desc&referenceCurrencyUuid=6mUvpzCc2lFo&limit=50`
    );
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Working on the detaills
app.get("/api/topic/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://coinmarketcap.com/academy/_next/data/nD9fmJNJDqGlUB4iXiXJq/en/categories/${id}.json?slug=${id}&page=0`
    );
    res.status(200).json({
      total: response.data.pageProps.response.pages.total,
      data: response.data.pageProps.response.pages.data,
    });
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/explore/topic/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://coinmarketcap.com/academy/_next/data/nD9fmJNJDqGlUB4iXiXJq/en/article/${id}.json?slug=${id}`
    );
    res.status(200).json(response.data.pageProps.article);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/explore/news/", async (req, res) => {
  try {
    const data = {
      mode: "LATEST",
      page: 1,
      size: 20,
      newsTypes: ["NEWS", "ALEXANDRIA"],
    };
    const response = await axios.post(
      `https://api.coinmarketcap.com/aggr/v4/content/user`,
      data
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Top markets //

app.get("/api/topmarket/:id", async (req, res) => {
  try {
    const id = req?.params?.id;
    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/-zdvbieRdZ/markets?offset=0&referenceCurrencyUuid=6mUvpzCc2lFo&limit=5`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// TopCurrenciesby volume
app.get("/api/topcurrenciesbyvolume/:id", async (req, res) => {
  try {
    const id = req?.params?.id;
    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=6mUvpzCc2lFo&limit=5&offset=0&orderDirection=desc`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// topCurrenciesByMarket
app.get("/api/topcurrenciesbymarket/:id", async (req, res) => {
  try {
    const id = req?.params?.id;
    const response = await axios.get(
      `https://coinranking.com/api/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=6mUvpzCc2lFo&limit=5&offset=0&orderBy=numberOfMarkets&orderDirection=desc`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
