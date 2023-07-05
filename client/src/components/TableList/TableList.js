import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'learningTime', label: 'Learning Time', minWidth: 100 },
  {
    id: 'courses',
    label: 'Courses',
    minWidth: 170
  },
  {
    id: 'completion',
    label: 'Completion',
    minWidth: 170
  },
  {
    id: 'score',
    label: 'Score',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'viewProfile',
    label: 'View Profile',
    minWidth: 170
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Ana', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Rom', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Oue', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Tuw', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Dkk', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Sam', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Wow', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Lal', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Oue', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Bla', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Bne', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Inn', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Pow', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Slw', '42 min','46%','92',
  <a>viewProfile</a>),
  createData('Uow', '42 min','46%','92',
  <a>viewProfile</a>),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
