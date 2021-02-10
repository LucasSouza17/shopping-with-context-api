import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Badge from '../../components/Badge';
import Feather from '@expo/vector-icons/build/Feather'

import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles'

import { useCart } from '../../context/cart'
import { ProductProps } from '../../@types/product';


type ProductDetailProps = {
  product: ProductProps
}

export default function ProductDetail() {

  const { add, cart, totalValue } = useCart();

  const navigation = useNavigation();

  const route = useRoute();
  const { product } = route.params as ProductDetailProps
  const numbers = product.numbers

  const badgeValue = Object.keys(cart).length

  function handleAddToCart(product: ProductProps) {
    const check = cart.every(item => {
      return item._id !== product._id
    })

    if (check) {
      add(product)
    } else {
      Alert.alert(
        "Este item já foi adicionado ao carrinho",
        `Quer mais de um ${product.title}, pois então é só entrar no carrinho e aproveitar o botão (+)`,
        [
          {
            text: "Carrinho",
            onPress: () => handleNavigateToCart()
          },
          {
            text: "Fechar",
            style: "cancel"
          }
        ],
        { cancelable: false }
      )
    }
  }

  function handleGoBack() {
    navigation.goBack()
  }

  function handleNavigateToCart() {
    navigation.navigate("Cart")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
        {!!badgeValue && (
          <Badge value={badgeValue} totalValue={totalValue} onPress={handleNavigateToCart} />
        )}
      </View>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{ uri: product.imagelink }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%' }}>Estoque: {product.stock}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {numbers.map((number, index) => (
                <TouchableOpacity key={index} style={styles.numbers}>
                  <Text style={styles.number}>{number}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.buttonCart} onPress={() => handleAddToCart(product)}>
              <Text style={styles.textButton}>Adicionar ao carrinho - {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

