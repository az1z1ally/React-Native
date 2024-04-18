import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        alt='Mount Kilimanjaro in Tanzania'
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>The Mount Kilimanjaro</Text>
            <Text style={styles.cardSubtitle}>Kilimanjaro, Tanzania</Text>
            <Text style={styles.cardDescription}>Exited to be at the highest point that you can reach in Africa?</Text>
            <Text style={styles.cardDescription}>
                Mount Kilimanjaro is a dormant volcano located in Kilimanjaro Region, Northen Highland of Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa and the highest single free-standing mountain above sea level in the world: 5,895 m (19,341 ft) above sea level and about 4,900 m (16,100 ft) above its plateau base. It is the highest volcano in Africa and the Eastern Hemisphere. 
            </Text>
            <Text style={styles.cardLabel}>5 mins away</Text>
        </View>
      </View>

      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://images.pexels.com/photos/19212061/pexels-photo-19212061/free-photo-of-dubai-frame-in-dubai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        alt='Mount Kilimanjaro'
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Museum of the future in Dubai</Text>
            <Text style={styles.cardSubtitle}>Dubai, UAE</Text>
            <Text style={styles.cardDescription}>
                The Museum of the Future welcomes people of all ages to see, touch, and shape our shared future. Go on a journey through possible futures and bring hope and knowledge back to the present. 
            </Text>
            <Text style={styles.cardLabel}>10 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '500',
        letterSpacing: 1.2,
        padding: 16
    },
    
    card: {
        // width: 350,
        // height: 360,
        padding: 8,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        elevation: 3,
        backgroundColor: '#333',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#ccc'
    },
    cardImage: {
        objectFit: 'cover',
        height: 180,
        marginBottom: 8,
        borderRadius: 4,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        padding: 8,
    },
    cardTitle: {
        letterSpacing: 1.1,
        fontSize: 20,
    },
    cardSubtitle: {
        fontSize: 14,
        fontStyle: 'italic',
        letterSpacing: .8,
        marginBottom: 8
    },
    cardDescription: {
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 1,
        color: '#ccc',
        marginBottom: 4.8
    },
     cardLabel: {
        fontSize: 12,
        letterSpacing: .8
     }
})