import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerProduct: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },

  image: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain'
  },

  info: {
    width: '55%',
    marginLeft: '3%',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 16,
    marginTop: '4%'
  },

  actionButtons: {
    alignItems: "center",
    flexDirection: 'row',
    marginTop: '5%'
  },

  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: '1%',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: '6%'
  },
})