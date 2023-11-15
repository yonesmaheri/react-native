import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddUser = ({ route, navigation }) => {
  const MyStyle = StyleSheet.create({
    App: {
      margin: 5
    },
    Welcome: {
      textAlign: 'center',
      marginTop: 20
    },
    Inputs: {
      display: 'flex',
      flexDirection: 'column',
    },
    TextInput: {
      backgroundColor : '#3f3f3f',
      borderColor: 'black',
      color : 'white',
      borderWidth: 1,
      borderRadius: 7,
      margin: 5,
      padding: 5
    },
    MyBtn: {
      width: 130,
      margin: 10,
    },
    flex: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    InputContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    label: {
      fontSize: 20,
      marginLeft: 10,
      color : 'white',
    },
    MyView: {
      backgroundColor : '#333'
    }
  })

  const [Name, setName] = useState();
  const [Family, setFamily] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState()
  const [MyList, setMyList] = useState([]);
  
  useEffect(() => {
    setMyList(route.params.UserList)

  }, [])

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      console.log(jsonValue)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ScrollView style={MyStyle.MyView}>
      <View style={MyStyle.App}>
        <View>
          <Text style={MyStyle.label}>NAME : </Text>
          <TextInput style={MyStyle.TextInput} value={Name} onChangeText={(e) => {
            setName(e)
          }} />
        </View>
        <View>
          <Text style={MyStyle.label}>FAMILY : </Text>
          <TextInput style={MyStyle.TextInput} value={Family} onChangeText={(e) => {
            setFamily(e)
          }} />
        </View>
        <View>
          <Text style={MyStyle.label}>AGE : </Text>
          <TextInput style={MyStyle.TextInput} value={Age} onChangeText={(e) => {
            setAge(e)
          }} />
        </View>
        <View>
          <Text style={MyStyle.label}>Email : </Text>
          <TextInput style={MyStyle.TextInput} value={Email} onChangeText={(e) => {
            setEmail(e)
          }} />
        </View>
      </View>
      <View style={MyStyle.InputContainer}>
        <View style={MyStyle.MyBtn}>
          <Button title='add' onPress={() => {
            var obj = { name: Name, family: Family, age: Age, Email: Email };
            setMyList(MyList.concat(obj));
            setAge();
            setFamily();
            setName();
            setEmail();
            storeData(MyList);            
          }} />
        </View>
        <View style={MyStyle.MyBtn}>
          <Button title='go back' color='red' onPress={() => {
            navigation.navigate({
              name: 'Dashboard',
              params: { UserList: MyList }
            })
          }} />
        </View>
      </View>
    </ScrollView>
  )
}

export default AddUser
