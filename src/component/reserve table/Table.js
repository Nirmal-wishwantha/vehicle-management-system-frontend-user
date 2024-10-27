import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

const Table = ({ no, date, email, mobile, response, time }) => {
  return (
    <DataTable.Row style={[styles.row, no % 2 === 0 ? styles.evenRow : styles.oddRow]}>

      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{no}</Text></DataTable.Cell>
      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{date}</Text></DataTable.Cell>
      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{email}</Text></DataTable.Cell>
      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{time}</Text></DataTable.Cell>
      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{mobile}</Text></DataTable.Cell>
      <DataTable.Cell style={styles.column}><Text style={styles.cellText}>{response}</Text></DataTable.Cell>

    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,  // Light border to separate rows.
    borderBottomColor: '#dddddd',
    // paddingVertical: 1,
  },
  evenRow: {
    backgroundColor: '#f9f9f9',  // Light background for even rows.
  },
  oddRow: {
    backgroundColor: '#ffffff',  // White background for odd rows.
  },
  cellText: {
    minWidth:80,
    fontSize: 14,
    color: '#333333',
    display:'flex',  
    flexWrap:'wrap',
    textAlign: 'center', 
    justifyContent:'center'
  },
  column: {
    flex: 1,  // Ensures columns align by setting consistent flex for all cells.
    alignItems: 'center',  // Centers content within each cell.
    justifyContent: 'center',
  },
});

export default Table;
