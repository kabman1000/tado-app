import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'

import { API, graphqlOperation } from 'aws-amplify'
import { createPrices } from '../src/graphql/mutations'
import { listPrices } from '../src/graphql/queries'

const initialState = { currentLocation: '', destination: '', price:'' }

const CreateScreen = () => {
  const [formState, setFormState] = useState(initialState)
  const [prices, setPrices] = useState([])

  useEffect(() => {
    fetchPrices()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchPrices() {
    try {
      const priceData = await API.graphql(graphqlOperation(listPrices))
      const prices = priceData.data.listTodos.items
      setPrices(prices)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addPrice() {
    try {
      const price = { ...formState }
      setPrices([...prices, price])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPrices, {input: price}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={val => setInput('currentLocation', val)}
        style={styles.input}
        value={formState.currentLocation}
        placeholder="Current Location"
      />
      <TextInput
        onChangeText={val => setInput('destination', val)}
        style={styles.input}
        value={formState.destination}
        placeholder="Destination"
      />
      <TextInput
        onChangeText={val => setInput('price', val)}
        style={styles.input}
        value={formState.price}
        placeholder="Price"
      />
      <Button title="Create Price" onPress={addPrice} />
      {
        prices.map((price, index) => (
          <View key={price.id ? price.id : index} style={styles.todo}>
            <Text style={styles.todoName}>{price.currentLocation}</Text>
            <Text>{price.price}</Text>
            <Text>{price.destination}</Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 }
})

export default CreateScreen;