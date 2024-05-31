import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000fff',
  },

  area: {
    flex: 1,
   flexDirection: 'row',
   padding:10
     
  },

  control: {
    flexDirection: 'row',
    gap: 20,
    margin: 20,
    alignItems: 'center',
  },

  controlText: {
    color: '#fff',
  },

  controlButton: {
    flex: 1,
    height: 80,
    backgroundColor: '#0061ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
   flexDirection: 'row',
   justifyContent: 'center',
   gap: 140,
  }
})
