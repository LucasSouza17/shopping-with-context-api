import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

import { Badge as BadgeElement } from 'react-native-elements'
import Feather from '@expo/vector-icons/build/Feather'

type BadgeProps = {
  onPress: () => void
  totalValue: Number
  value: Number
}

export default function Badge({ onPress, totalValue, value }: BadgeProps) {
  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
        <Text style={{ fontWeight: 'bold' }}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(totalValue))}</Text>
        <Feather name="shopping-cart" size={30} color="#06070d" />
        {!!value && (
          <BadgeElement value={value} status="primary" badgeStyle={{ padding: '10%', width: 30 }} containerStyle={{ position: 'absolute', top: -5, right: -10 }} />
        )}
      </TouchableOpacity>
    </View>
  )
}