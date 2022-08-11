import "./search.css";
import { Autocomplete, Stack, TextField, Button } from "@mui/material";
import * as tickers from "../../db/tickers.json";

const style = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
};

const actionOnClick = async (setShowResults, tickerValue) => {
  setShowResults(true);
  broadcastContext(tickerValue);
};

const broadcastContext = async (tickerValue) => {
// --------------------------------
  // Broadcasting code
  // --------------------------------
  if (window.fdc3 !== undefined) {
    console.log("ticker object: ", tickerValue);
    const context = {
      type: "instrument",
      name: "Symbol Name",
      id: {
        ticker: tickerValue,
        ISIN: "US88160R1014",
      },
    };
    const systemChannel = await window.fdc3.getCurrentChannel();
    if (systemChannel !== null) {
      console.log(
        "broadcasting on " +
          systemChannel.type +
          " channel: " +
          systemChannel.id,
        context
      );
      window.fdc3.broadcast(context);
    } else {
      console.log("You are not bound to a system channel");
    }
  }
  // --------------------------------
  // Listening code
  // --------------------------------
  if (window.fdc3 !== undefined) {
    const systemHandler = (ctx) => {
      console.log("System Context Received: ", ctx);
    };
    // eslint-disable-next-line no-unused-vars
    const systemListener = window.fdc3.addContextListener(null, systemHandler);
  }
};

export default function SearchBar({ ticker, setTicker, setShowResults }) {
  return (
    <Stack spacing={2} sx={{ width: 300 }} style={style}>
      <Autocomplete
        freeSolo
        onInputChange={(event) => {
          setTicker(event.target.value || event.target.innerText);
        }}
        options={Array.from(tickers).map((option) => option.ticker)}
        renderInput={(params) => <TextField {...params} label="ticker" />}
      />
      <Button
        variant="outlined"
        onClick={() => {
          actionOnClick(setShowResults, ticker);
        }}
      >
        Search
      </Button>
    </Stack>
  );
}
