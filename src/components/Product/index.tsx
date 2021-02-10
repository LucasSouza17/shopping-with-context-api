import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ProductProps } from '../../@types/product';
import { styles } from './styles'

type ProductComponentProps = {
  product: Pick<ProductProps, 'imagelink' | 'price' | 'title'>,
  onPress: () => void;
}

export default function Product({product, onPress}: ProductComponentProps) {
  return (
    <View style={styles.containerProductMain}>
      <TouchableOpacity style={styles.containerProduct} onPress={onPress}>
        <Image source={{ uri: product.imagelink }} style={styles.productImage} />
        <View style={{ marginBottom: '5%', marginTop: '-5%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.nameProduct}>{product.title}</Text>
          <Text style={styles.price}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}