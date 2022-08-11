import { Autocomplete, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
// import * as tickers from "../../db/tickers.json";

const style = {
  backgroundColor: "#212224ff",
  padding: "20px",
  borderRadius: "10px",
};

const someActionOnClick = async (setShowResults, val) => {
  setShowResults(true);
  console.log(val);

  // // --------------------------------
  // // Broadcasting code
  // // --------------------------------
  // if (window.fdc3 !== undefined) {
  //   const context = {
  //     type: "fdc3.instrument",
  //     name: "Tesla Inc",
  //     id: {
  //       ticker: "TSLA",
  //       ISIN: "US88160R1014",
  //     },
  //   };
  //   const systemChannel = await fdc3.getCurrentChannel();
  //   if (systemChannel !== null) {
  //     console.log(
  //       "broadcasting on " +
  //         systemChannel.type +
  //         " channel: " +
  //         systemChannel.id,
  //       context
  //     );
  //     fdc3.broadcast(context);
  //   } else {
  //     console.log("You are not bound to a system channel");
  //   }
  // }
  // // --------------------------------
  // // Listening code
  // // --------------------------------
  // if (window.fdc3 !== undefined) {
  //   const systemHandler = (ctx) => {
  //     console.log("System Context Received: ", ctx);
  //   };
  //   const systemListener = fdc3.addContextListener(null, systemHandler);
  // }
};

export default function SearchBar({ setShowResults }) {
  const [tickerValue, setTickerValue] = useState("");

  return (
    <Stack spacing={2} sx={{ width: 300 }} style={style}>
      <Autocomplete
        freeSolo
        onInputChange={(event) => {
          setTickerValue(event.target.value);
        }}
        options={tickers.map((option) => option.ticker)}
        renderInput={(params) => <TextField {...params} label="ticker" />}
      />
      <Button
        variant="outlined"
        onClick={() => {
          someActionOnClick(setShowResults, this.value);
        }}
      >
        {console.log(tickers)}
        Search
      </Button>
    </Stack>
  );
}

const tickers = [
  { ticker: "AAPL.US", price: 12.32 },
  { ticker: "TSLA.US", price: 141.21 },
  { ticker: "BMO.CA", price: 251.23 },
];
