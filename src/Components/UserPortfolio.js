import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
function createData(user, stocks, fiat) {
  return { user, stocks, fiat };
}

const rows = [
  createData("A",   10, 2000 ),
  createData("B", 10, 2000 ),
  createData("C", 10, 2000),
  createData("D", 10, 2000),
  createData("E", 10, 2000),
];

const UserPorfolio = () => {
  return (
    <>
      <TableContainer sx={{ maxWidth: 450 }}  component={Paper}>
        <Table sx={{ maxWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell> 
              <TableCell align="right">Stocks</TableCell>
              <TableCell align="right">Fiat</TableCell> 
              <TableCell align="right"> </TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.user}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell align="right">{row.stocks}</TableCell>
                <TableCell align="right">{row.fiat}</TableCell> 
                <TableCell align="right"><Button>Edit</Button></TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
    </>
  );
};

export default UserPorfolio;
