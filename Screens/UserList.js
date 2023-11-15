import { Text, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function UserList({ navigation, route }) {

  const MyStyle = StyleSheet.create({
    UserList: {
      backgroundColor: '#3b3b3b',
    },
    App: {
      margin: 5,
    },
    Welcome: {
      textAlign: 'center',
      width: '100%',
      fontSize: 20,
      color: 'white'
    },
    Inputs: {
      display: 'flex',
      flexDirection: 'column',
    },
    TextInput: {
      color: 'white',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 7,
      margin: 5,
      padding: 5,
      backgroundColor: '#333',
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
    ListItem: {
      fontSize: 15,
      color: 'white'
    }
  })

  const [MyList, setMyList] = useState([]);

  useEffect(() => {
    setMyList(route.params.UserList)
  }, [MyList])



  return (
    <>
      <ScrollView style={MyStyle.UserList}>
        <View style={MyStyle.App}>
          <Text style={MyStyle.Welcome}>My List</Text>
          {
            MyList.map((info, index) => {
              return (
                <View key={index}>
                  <View style={MyStyle.TextInput}>
                    <Text style={MyStyle.ListItem}>
                      Name : {info.name} {"\n"}
                      Family : {info.family} {"\n"}
                      Age : {info.age} {"\n"}
                      Email : {info.Email}
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </>
  )
}
