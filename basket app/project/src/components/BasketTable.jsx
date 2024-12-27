import React, { useContext } from 'react';
import { BasketContext } from '../context/BasketContext'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'; 
import { styled } from '@mui/material/styles'; 
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BasketTable() {
  const { basket, clearBasket, removeFromBasket } = useContext(BasketContext); // Using context to get the basket data

  const handleClearAll = () => {
    clearBasket();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClearAll}>
        Clear All
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {basket.map((product, index) => (
    <StyledTableRow key={`${product.id}-${index}`}> {/* Combine product id and index for unique key */}
      <StyledTableCell component="th" scope="row">
        {product.title}
      </StyledTableCell>
      <StyledTableCell align="right">${product.price}</StyledTableCell>
      <StyledTableCell align="right">{product.category}</StyledTableCell>
      <StyledTableCell align="right">
        <img src={product.image} alt={product.title} width={50} />
      </StyledTableCell>
      <StyledTableCell align="right">{product.quantity}</StyledTableCell>
      <StyledTableCell align="right">
        <Button
          variant="contained"
          color="error"
          onClick={() => removeFromBasket(product.id)}
        >
          Delete
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}
