import { Text, ScrollView, StyleSheet, View, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const Remove = ({ navigation, route }) => {
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
  }, [])

  return (
    <>
      <ScrollView style={MyStyle.App}>
        <Button title='Go Back' color='blue' onPress={() => {
          navigation.navigate({
            name: 'Dashboard',
            params: { UserList: MyList }
          })
        }} />
        {
          MyList.map((info, index) => {
            return (
              <View key={index}>
                <View style={MyStyle.TextInput}>
                  <Text>{index + 1} - Name : {info.name} - Family : {info.family} - Age : {info.age} - Email : {info.Email}</Text>
                  <View style={MyStyle.flex}>
                    <View style={MyStyle.MyBtn}>
                      <Button title='remove' color='red' onPress={() => {
                        console.log(MyList)
                        Alert.alert(
                          'Remove?',
                          'Are You Sure To Remove?'
                          ,
                          [
                            { text: 'no', onPress: () => { } },
                            {
                              text: 'Yes', onPress: () => {
                                var rmName = info.name
                                let index = MyList.findIndex(item => item.name == rmName);
                                let obj = MyList.slice(index, index + 1);
                                setMyList(MyList.filter(item => item != obj[0]))
                                console.log(MyList)
                              }
                            },
                          ]
                        )
                      }} />
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </>
  )
}

export default Remove
