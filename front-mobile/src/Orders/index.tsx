import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrdersCard';

function Orders() {
   
  return (
    <>
      <Header />
        <ScrollView style={styles.container}>
            <OrdersCard />
            <OrdersCard />
            <OrdersCard />
            <OrdersCard />
            <OrdersCard />
            
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
      paddingRight: '5%',
      paddingLeft: '5%' 
  }
});

export default Orders;