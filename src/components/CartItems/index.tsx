import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ProductProps } from '../../@types/product';
import { styles } from './styles'
import Feather from '@expo/vector-icons/build/Feather'

type CartItemsComponentProps = {
    product: Pick<ProductProps, 'imagelink' | 'title' | 'price' | 'count'>,
    redunction: () => void,
    increase: () => void,
    remove: () => void,
}

export default function CartItems({product, redunction, increase, remove}: CartItemsComponentProps) {
    return (
        <View style={styles.containerProduct}>
            <Image source={{ uri: product.imagelink }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Text>
                <View style={styles.actionButtons}>
                    <TouchableOpacity onPress={redunction}>
                        <Feather name="minus-circle" color="red" size={25} />
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text>{product.count}</Text>
                    </View>
                    <TouchableOpacity onPress={increase}>
                        <Feather name="plus-circle" color="green" size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.delete} onPress={remove}>
                    <Text>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}