import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(user, type, qty, price ) {
  return { user, type, qty, price };
}

const rows = [
  createData("A", "Buy", 6, 24 ),
  createData("B", "Buy" , 6, 24),
  createData("C", "Sell" , 3, 24),
  createData("D", "Buy" , 2, 24),
  createData("E", "Sell" , 6, 14),
];

const TransactionHistory = () => {
  return (
    <>
      <TableContainer sx={{ maxWidth: 650 }}  component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell> 
              <TableCell align="right">Order type</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Price</TableCell>
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
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.price}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
    </>
  );
};

export default TransactionHistory;
