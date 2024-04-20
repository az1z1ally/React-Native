import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '500',
        letterSpacing: 1.2,
        paddingVertical: 16,
        paddingHorizontal: 12
    },

    container: {
        // padding: 8,
    },
    card: {
        flex:1, // divide the available space of the container for each card evenly.
        width: 100,
        height: 100,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    cardElevated: {
        // backgroundColor: '#cad5e2',
        backgroundColor: '#333',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#ccc',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})