import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import * as tickers from "../../db/tickers.json";

const tickerArr = Array.from(tickers);

const getTickerInfo = (ticker) => {
  for (let i = 0; i < tickerArr.length; i++) {
    let curr = tickerArr[i];
    if (curr.ticker === ticker) return curr;
  }
};

export default function EsgTable({ ticker }) {
  let row = getTickerInfo(ticker);
  if (row === undefined) return;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ESG Score</TableCell>
            <TableCell align="right">Environment</TableCell>
            <TableCell align="right">Social</TableCell>
            <TableCell align="right">Governance</TableCell>
            <TableCell align="right">Lifestyle</TableCell>
            <TableCell align="right">Morning Star Rating</TableCell>
            <TableCell align="right">Net Sentiment Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            <TableRow
              key={row.ticker}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.esg.overall}
              </TableCell>
              <TableCell align="right">{row.esg.environment}</TableCell>
              <TableCell align="right">{row.esg.social}</TableCell>
              <TableCell align="right">{row.esg.governance}</TableCell>
              <TableCell align="right">{row.lifestyle}</TableCell>
              <TableCell align="right">
                <Rating
                  name="read-only"
                  defaultValue={row.morningstar}
                  precision={0.1}
                  readOnly
                />
              </TableCell>
              <TableCell align="right">{row.sentiment}</TableCell>
            </TableRow>
          }
          <TableRow rowSpan={1} align="right">
            <TableCell align="right" colSpan={5} class="legend">
              H - Halal{" "}
            </TableCell>
          </TableRow>
          <TableRow rowSpan={1} align="right">
            <TableCell align="right" colSpan={5} class="legend">
              V - Vegan{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
