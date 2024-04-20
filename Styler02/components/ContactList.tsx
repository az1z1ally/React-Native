import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Contact } from '../types/contact.interface'

export default function ContactList() {
  const contacts: Contact[] = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image 
              source={{
                uri: imageUrl
              }}
              alt='User Avatar'
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
    backgroundColor: '#333',
    margin: 12,
  },

  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#222'
  },
  userImage: {
    width: 72,
    height: 72,
    objectFit: 'cover',
    borderRadius: 100 / 2
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ccc',
    letterSpacing: 1.75
  },
  userStatus: {
    fontSize: 12,
    letterSpacing: 1.25
  }
})