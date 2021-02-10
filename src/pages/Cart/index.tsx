import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'

import CartItems from '../../components/CartItems'
import Feather from '@expo/vector-icons/build/Feather'
import { useCart } from '../../context/cart'

export default function Cart() {

  const { cart, remove, totalValue, increase, redunction } = useCart();

  const badge = cart.reduce((total, valor) => total + valor.count, 0)

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: '3%', marginTop: '5%', color: '#06070d' }}>Meu carrinho</Text>
      </View>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((product, index) => (
            <CartItems
              key={product._id}
              product={{ ...product }}
              increase={() => increase(product)}
              redunction={() => redunction(product, index)}
              remove={() => remove(product)}
            />
          ))}
          <View>
            <View style={styles.line}></View>
            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Text style={styles.text}>Subtotal ({badge} items)</Text>
                <Text style={styles.text}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(totalValue))}</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.text}>Taxa de entrega</Text>
                <Text style={styles.text}>Grátis</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.priceFooter}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(totalValue))}</Text>
              </View>
              <TouchableOpacity style={styles.buttonCheckout}>
                <Text style={styles.textButton}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
