
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tenure = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowPress = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const renderMonths = () => {
    const headers = ['Months', 'EMI', 'Total'];
    const values = [
      [3, 500, 1000],
      [6, 900, 2000],
      [9, 1500, 1235],
    ];

    // Render headers outside the loop
    return (
      <View>
        <Text style={styles.selectTenureText}>
          Select tenure:
        </Text>
        <Text style={styles.chooseTenureText}>
          Choose your preferred tenure in months
        </Text>
        <View style={[styles.rowContainer, styles.columnHeaderContainer]}>
          {headers.map((header, index) => (
            <Text key={index} style={[styles.cell, styles.columnHeader]}>
              {header}
            </Text>
          ))}
        </View>
        {values.map((row, rowIndex) => (
          <TouchableOpacity
            key={rowIndex}
            style={[
              styles.rowContainer,
              selectedRow === rowIndex && styles.selectedRow,
            ]}
            onPress={() => handleRowPress(rowIndex)}
          >
            {row.map((column, columnIndex) => (
              <Text
                key={columnIndex}
                style={[
                  styles.cell,
                  styles.dataCell,
                  selectedRow === rowIndex && styles.selectedCell,
                ]}
              >
                {column}
              </Text>
            ))}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View>
      {renderMonths()}
      {selectedRow !== null && (
        <View style={styles.tickMarkContainer}>
          <Text style={styles.tickMark}>&#10004;</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  columnHeaderContainer: {
    backgroundColor: '#f0f0f0',  },
  columnHeader: {
    backgroundColor: '#f0f0f0', 
  },
  dataCell: {
    backgroundColor: '#ffffff', 
  },
  selectedRow: {
    backgroundColor: 'yellow',
  },
  selectedCell: {
    backgroundColor: 'yellow',
  },
  tickMarkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  tickMark: {
    fontSize: 20,
    color: 'green',
  },
  selectTenureText: {
    color: 'blue', 
    fontSize: 16,
  },
  chooseTenureText: {
    color: 'black', 
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Tenure;

