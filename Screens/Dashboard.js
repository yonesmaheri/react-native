import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation, route }) {

  const Mystyle = StyleSheet.create({
    App: {
      width: '100%',
      height: '100%',
      padding: 10,
      backgroundColor: '#3b3b3b'
    },
    Header: {
      color: 'white',
      marginBottom: 30
    },
    users: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: 'wrap'
    },
    Btn: {
      margin: 10,
      width: 100
    },
  })

  const [MyUsers, setMyUsers] = useState([]);

  useEffect(() => {
    if (route.params?.UserList) {
      setMyUsers(route.params.UserList)
    }
  }, [route.params?.UserList])

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  

  return (
    <>
      <ScrollView style={Mystyle.App}>
        <Text style={Mystyle.Header}>Welcome {route.params.User}</Text>
        <View>
          <View>
            <Button title='Show Products' onPress={() => {
              navigation.navigate("ProductsList")
            }} />
          </View>
        </View>

        <View style={{
          borderColor: '#333',
          borderWidth: 1,
          margin: 20
        }}></View>

        <View style={Mystyle.users}>
          <View style={Mystyle.Btn}>
            <Button title='Show List' color={'green'} onPress={() => {
              navigation.navigate("UserList", { UserList: MyUsers });
            }} />
          </View>
          <View style={Mystyle.Btn}>
            <Button title='add' color={'blue'} onPress={() => {
              navigation.navigate("AddUser", { UserList: MyUsers });
            }} />
          </View>
          <View style={Mystyle.Btn}>
            <Button title='edit' color={'brown'} onPress={() => {
              navigation.navigate("Edit", { UserList: MyUsers });
            }} />
          </View>
          <View style={Mystyle.Btn}>
            <Button title='remove' color={'red'} onPress={() => {
              navigation.navigate("Remove", { UserList: MyUsers });
            }} />
          </View>
          <View style={Mystyle.Btn}>
            <Button title='search' color={'chocolate'} onPress={() => {
            }} />
          </View>
        </View>
      </ScrollView>
    </>
  )
}
