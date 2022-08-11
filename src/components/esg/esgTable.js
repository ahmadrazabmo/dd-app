import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import Rating from "@mui/material/Rating";

function createData(esg, env, social, gov, lifestyle, rate, sentiment) {
  return { esg, env, social, gov, lifestyle, rate, sentiment };
}

const rows = [createData(8.2, 7.6, 7.5, 8.5, "V", 3.6, "Positive")];

export default function EsgTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.esg}</TableCell>
              <TableCell align="right">{row.env}</TableCell>
              <TableCell align="right">{row.social}</TableCell>
              <TableCell align="right">{row.gov}</TableCell>
              <TableCell align="right">{row.lifestyle}</TableCell>
              <TableCell align="right"><Rating
                  name="read-only"
                  defaultValue={row.rate}
                  precision={0.1}
                  readOnly
                /></TableCell>
              <TableCell align="right">{row.sentiment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
