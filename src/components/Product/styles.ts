import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerProductMain: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,
        marginTop: '5%',
        backgroundColor: '#f4f4f4',
      },
    
      containerProduct: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: '10%'
      },
    
      productImage: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
      },
    
      nameProduct: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: '5%',
        color: '#06070d'
      },
    
      price: {
        fontSize: 20,
        fontWeight: '100',
        marginTop: '1%',
        color: '#06070d'
      }
})