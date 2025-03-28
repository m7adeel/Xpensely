import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <SafeAreaView>
      <Text className='h-40 w-40 bg-blue-400'>Hello</Text>
      <Link href={'/(tabs)'} >
        <Text>Go to Tabs</Text>
      </Link>
    </SafeAreaView>
  )
}