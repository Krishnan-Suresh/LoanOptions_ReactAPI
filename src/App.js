import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

function App() {
  const [data, setData] = React.useState([]);

  const loadData = async () => {
    const result = await axios('http://universities.hipolabs.com/search?country=Australia');
    setData(result.data);
  };

  const addData = () => {
    if (data.length) {
      setData([...data, data[0]]);
    }
  };

  const deleteData = () => {
    if (data.length) {
      setData((data) => data.filter((_,i) => i !== data.length - 1));
    }
  };

  const useStyles = makeStyles({
    table: {
      border: '4px solid #000000',
      width: 'auto',
      margin: 'auto',
      marginBottom: '10px'
    },
    bold: {
      fontWeight: 900
    }
   });

   const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='right'><Typography className={classes.bold}>Domains</Typography></TableCell>
              <TableCell align='right'><Typography className={classes.bold}>Web pages</Typography></TableCell>
              <TableCell align='right'><Typography className={classes.bold}>State</Typography></TableCell>
              <TableCell align='right'><Typography className={classes.bold}>Name</Typography></TableCell>
              <TableCell align='right'><Typography className={classes.bold}>Country</Typography></TableCell>
              <TableCell align='right'><Typography className={classes.bold}>Country Code</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, key) => {
              return (
                <TableRow key={key}>
                  <TableCell align='right'>{val.domains.map((d, k) => {
                    return (
                      <div>{d}</div>
                    )
                  })}</TableCell>
                  <TableCell align='right'>{val.web_pages.map((w, k) => {
                    return (
                      <div>{w}</div>
                    )
                  })}</TableCell>
                  <TableCell align='right'>{val.state_province}</TableCell>
                  <TableCell align='right'>{val.name}</TableCell>
                  <TableCell align='right'>{val.country}</TableCell>
                  <TableCell align='right'>{val.alpha_two_code}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography align='center'>
        <Button
          color='primary'
          size='large'
          type='submit'
          variant='contained'
          onClick={loadData}
        >
          LOAD
        </Button>
        <Button
          color='primary'
          size='large'
          type='submit'
          variant='contained'
          onClick={addData}
        >
          ADD
        </Button>
        <Button
          color='primary'
          size='large'
          type='submit'
          variant='contained'
          onClick={deleteData}
        >
          DELETE
        </Button>
      </Typography>
    </div>
  );
}

export default App;
