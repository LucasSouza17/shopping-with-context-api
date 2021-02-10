import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      padding: '6%',
      paddingBottom: '0%'
    },
  
    header: {
      marginTop: StatusBar.currentHeight,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    main: {
      flex: 1,
      marginTop: '10%',
    },
  
    productImage: {
      alignSelf: 'center',
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginTop: '-20%'
    },
  
    productInfo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5%'
    },
  
    title: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: '-10%',
      color: '#06070d'
    },
  
    description: {
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 20,
    },
  
    numbers: {
      marginTop: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#06070d',
      marginHorizontal: 13
    },
  
    number: {
      color: '#f4f4f4',
      fontWeight: 'bold',
      fontSize: 18
    },
  
    buttonCart: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%',
      width: '100%',
      padding: '5%',
      backgroundColor: '#06070d',
      borderRadius: 50
    },
  
    textButton: {
      color: '#f4f4f4',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    }
  
  });