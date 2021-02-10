import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
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
      borderRadius: 50
    },
  
    name: {
      fontWeight: '700',
      marginLeft: '5%',
      fontSize: 16,
      color: '#06070d'
    },
  
    cartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    main: {
      flex: 1,
      marginTop: '10%'
    },
  
    titleContainer: {
      paddingRight: '20%'
    },
  
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#06070d'
    },
  
    containerList: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '5%'
    }
  });