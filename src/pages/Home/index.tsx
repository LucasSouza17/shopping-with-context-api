import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { ProductProps } from '../../@types/product';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import Product from '../../components/Product';
import Shimmer from './shimmer'
import ImageProfile from '../../assets/profile.jpg';

import { useCart } from '../../context/cart';
import api from '../../services/api';
import Badge from '../../components/Badge';

export default function Home(): JSX.Element {

  const { cart, totalValue } = useCart()

  const badgeValue = Object.keys(cart).length

  const navigation = useNavigation();

  const [shimmer, setShimmer] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        await api.get("/products").then((response) => {
          setProducts(response.data);
          setShimmer(true);
        })
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  function handleNavigateToProduct(
    product: ProductProps
  ) {
    navigation.navigate("ProductDetail", {
      product: product
    });
  }

  function handleNavigateToCart() {
    navigation.navigate("Cart")
  }

  return (
    <>
      {!shimmer ? (
        <Shimmer />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.profileContainer}>
              <Image source={ImageProfile} style={styles.image} />
              <Text style={styles.name}>Olá, Lucas!</Text>
            </View>
            <Badge value={badgeValue} totalValue={totalValue} onPress={handleNavigateToCart} />
          </View>

          <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Encontre seu tênis perfeito</Text>
              </View>

              <View style={styles.containerList}>
                {products.map((product) => (
                  <Product
                    key={product._id}
                    product={{...product}}
                    onPress={() => handleNavigateToProduct({...product})} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
}
