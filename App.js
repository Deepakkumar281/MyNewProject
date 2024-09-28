import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacknavigation from './src/navigation/Stacknavigation'

const App = () => {
  return (
    <NavigationContainer>
      <Stacknavigation></Stacknavigation>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})   