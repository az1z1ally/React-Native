import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        {/* <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View> */}
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 1.2,
    paddingVertical: 16,
    paddingHorizontal: 12
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 2,
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },

  card: {
    // flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  cardOne: {
    backgroundColor: '#ef5354'
  },

  cardTwo: {
    backgroundColor: '#50dbb4'
  },

  cardThree: {
    backgroundColor: '#5da3fa'
  }
})