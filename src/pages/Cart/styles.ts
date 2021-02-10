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
      alignItems: 'flex-start',
    },
  
    main: {
      flex: 1,
      marginTop: '5%',
    },
  
    line: {
      marginTop: '10%',
      width: '100%',
      height: 1,
      backgroundColor: '#ebebeb'
    },
  
    footerContainer: {
      marginTop: '5%'
    },
  
    footer: {
      marginTop: '3%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    text: {
      fontSize: 16,
      color: '#b3b2b2',
    },
  
    priceFooter: {
      fontSize: 16,
      color: '#06070d',
      fontWeight: 'bold'
    },
  
    buttonCheckout: {
      marginBottom: '5%',
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
      fontSize: 18
    }
  });