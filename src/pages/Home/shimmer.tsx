import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

export default function Home(): JSX.Element {

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <ShimmerPlaceholder style={styles.image} />
          <ShimmerPlaceholder style={styles.name} />
        </View>
        <ShimmerPlaceholder style={styles.badge} />
      </View>
      <View style={styles.main}>
        <ShimmerPlaceholder style={styles.title} />
        <ShimmerPlaceholder style={[styles.title, { marginTop: '3%' }]} />

        <View style={styles.containerProductMain}>
          <View style={styles.containerProduct}>
            <ShimmerPlaceholder style={styles.product} />
            <ShimmerPlaceholder style={styles.productName} />
            <ShimmerPlaceholder style={styles.price} />
          </View>
        </View>
        <View style={styles.containerProductMain}>
          <View style={styles.containerProduct}>
            <ShimmerPlaceholder style={styles.product} />
            <ShimmerPlaceholder style={styles.productName} />
            <ShimmerPlaceholder style={styles.price} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    padding: '6%',
    paddingBottom: '0%'
  },

  header: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#f0eeee'
  },

  name: {
    width: '55%',
    height: '40%',
    marginLeft: '5%',
    borderRadius: 3,
    backgroundColor: '#f0eeee'
  },

  badge: {
    width: '20%',
    height: '40%',
    borderRadius: 10,
    backgroundColor: '#f0eeee'
  },

  main: {
    flex: 1,
    marginTop: '10%'
  },

  title: {
    width: '70%',
    height: '7%',
    backgroundColor: '#f0eeee',
    borderRadius: 5
  },

  containerProductMain: {
    justifyContent: 'center',
    height: '50%',
    borderRadius: 10,
    marginTop: '5%',
    backgroundColor: '#f4f4f4',
  },

  containerProduct: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '5%'
  },

  product: {
    width: '90%',
    height: '55%',
    borderRadius: 10
  },

  productName: {
    width: '70%',
    height: '18%',
    marginTop: '3%',
    borderRadius: 5
  },

  price: {
    marginTop: '3%',
    borderRadius: 5,
    width: '25%',
    height: '13%'
  }
});
