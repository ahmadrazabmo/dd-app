import { Autocomplete, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import * as tickers from "../../db/tickers.json";

const style = {
  backgroundColor: "#212224ff",
  padding: "20px",
  borderRadius: "10px",
};

const actionOnClick = async (setShowResults, tickerValue) => {
  setShowResults(true);
  // --------------------------------
  // Broadcasting code
  // --------------------------------
  if (window.fdc3 !== undefined) {
    console.log("ticker object: ", tickerValue);
    const context = {
      type: "instrument",
      name: "Tesla Inc",
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
    const systemListener = window.fdc3.addContextListener(null, systemHandler);
  }
};

export default function SearchBar({ setShowResults }) {
  const [tickerValue, setTickerValue] = useState("");
  return (
    <Stack spacing={2} sx={{ width: 300 }} style={style}>
      <Autocomplete
        freeSolo
        onInputChange={(event) => {
          setTickerValue(event.target.innerText);
        }}
        options={Array.from(tickers).map((option) => option.ticker)}
        renderInput={(params) => <TextField {...params} label="ticker" />}
      />
      <Button
        variant="outlined"
        onClick={() => {
          actionOnClick(setShowResults, tickerValue);
        }}
      >
        Search
      </Button>
    </Stack>
  );
}
