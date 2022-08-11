import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import Rating from "@mui/material/Rating";

function createData(esg, env, social, gov, rate, lifestyle) {
  return { esg, env, social, gov, rate, lifestyle };
}

const rows = [createData(3.6, 7.6, 7.5, 8.5, "rate", "V")];

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
            <TableCell align="right">Star Rating</TableCell>
            <TableCell align="right">Lifestyle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Rating
                  name="read-only"
                  defaultValue={row.esg}
                  precision={0.1}
                  readOnly
                />
              </TableCell>
              <TableCell align="right">{row.env}</TableCell>
              <TableCell align="right">{row.social}</TableCell>
              <TableCell align="right">{row.gov}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.lifestyle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
