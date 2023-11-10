
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Header = () => {
  return (
    <LinearGradient
      colors={['#44226E', '#8B6Cb1']}
      style={styles.header}
    >      <Text style={styles.headerText}>Approved Loan</Text>

      <Text style={styles.headerText}>  ₹5,0000</Text>
    </LinearGradient>
  );
};

const Home = () => {
  return (
    <View>
      <Header />
      <Text style={styles.mainText}>Select Loan Amount</Text>
      <Text style={styles.secondaryText}>
        Move the slider to select your Loan Amount
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  secondaryText: {
    color: '#555',
    fontSize: 14,
    marginTop: 10,
  },
});

export default Home;
