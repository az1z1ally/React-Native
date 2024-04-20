import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url)
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Want to learn how to build mobile apps using reactnative&#63;</Text>
        </View>

        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D2CAQHIoEoPFB94Vg/comment-image-shrink_8192_1280/0/1713468767074?e=1714129200&v=beta&t=WfFprOMO54bxFBnOq6xhPFqqZkM4ZXf4zRrH_PU1ksQ'
          }} 
          alt='Linked post about reactnative'
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text numberOfLines={2} style={styles.cardDesc}>
            I posted a link on linkedIn sharing may journey about learning reactnative.
            You will also find the link to the youtube playlist taught by Hitesh Choudhary
            where he covered in detail how to build apps using react native. 
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/posts/azizi-ally_reactnative-kilimanjaro-javascript-activity-7186810036285820928-FceU')}
          >
            <Text style={styles.footerText}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/azizi-ally')}
          >
            <Text style={[styles.footerText, styles.socialLink]}>Follow Me 🤗</Text>
          </TouchableOpacity>
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
    paddingVertical: 16,
    paddingHorizontal: 12
  },

  card: {
    borderRadius: 4,
    margin: 12
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

  headerContainer: {
    marginBottom: 4.8,
    padding: 10
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
  },

  cardImage: {
    height: 180,
    objectFit: 'cover',
    marginBottom: 8,
  },
  cardBody: {
    padding: 16,
    backgroundColor: '#222'
  },
  cardDesc: {
    fontSize: 14.5,
    fontWeight: '300',
    lineHeight: 24, 
    letterSpacing: .975,
    color: '#ccc',
    marginBottom: 4.8,
  },

  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#222',
  },

  footerText: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: .95,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#218f76',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },

  socialLink: {
    backgroundColor: '#2f363f'
  }
})