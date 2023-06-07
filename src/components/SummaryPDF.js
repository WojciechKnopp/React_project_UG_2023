import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const SummaryPDF = ({order, cartItems, summary}) => {
  return (
    <Document>
        <Page style={styles.page}>
            <View style={styles.title}>
                <Text>Potwierdzenie zamówienia</Text>
            </View>
            <View style={styles.section}>
            <Text>Produkty:</Text>
            {cartItems.map((item, index) => (
                <Text key={index}>
                    - {item.name}
                </Text>
            ))}
            </View>
            <View style={styles.section}>
                <Text>Suma: {summary}zl</Text>
            </View>
            <View style={styles.section}>
                <Text>Sposób platnosci: {order.paymentMethod}</Text>
            </View>
            {order.deliveryData.city ? (
                <View style={styles.section}>
                    <Text>
                        Adres dostawy: {order.deliveryData.street} {order.deliveryData.buildingNumber}, 
                            {order.deliveryData.postalCode} {order.deliveryData.city}
                    </Text>
                </View>
            ) : ( order.tableNumber.tableNumber ? (
                <View style={styles.section}>
                    <Text>Stolik numer {order.tableNumber.tableNumber}</Text>
                </View>
            ) : (
                <View style={styles.section}>
                    <Text>Odbiór osobisty</Text>
                </View>
            ))}
        </Page>
    </Document>
  );
};

export default SummaryPDF;
