import { View, Text, StyleSheet, Button, TextInput, ScrollView,Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const Edit = ({ navigation, route }) => {
  const MyStyle = StyleSheet.create({
    App: {
      backgroundColor: '#3f3f3f'
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
      backgroundColor: '#3f3f3f',
      borderColor: 'black',
      color: 'white',
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
      fontSize: 13,
      marginLeft: 10,
      color: 'white',
    },
    MyView: {
      backgroundColor: '#333'
    }
  })

  const [isEdit, setIsEdit] = useState(false);
  const [Index, setIndex] = useState();
  const [Name, setName] = useState();
  const [Family, setFamily] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState()
  const [MyList, setMyList] = useState([]);

  useEffect(() => {
    setMyList(route.params.UserList)
  }, [])

  return (
    <>
      <ScrollView style={MyStyle.App}>
        <View>
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
            <Button title={!isEdit ? 'select item' : 'Update'} onPress={() => {
              var item = [...MyList];
              item[Index].name = Name;
              item[Index].family = Family;
              item[Index].age = Age;
              item[Index].Email = Email;
              setMyList(item);
              setAge();
              setFamily();
              setName();
              setEmail();
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

        <View style={MyStyle.App}>
          {
            MyList.map((info, index) => {
              return (
                <Pressable  key={index}>
                  <View>
                    <View style={MyStyle.TextInput}>
                      <Text style={MyStyle.label}>{index + 1} - Name : {info.name} - Family : {info.family} - Age : {info.age} - Email : {info.Email}</Text>
                      <View style={MyStyle.flex}>
                        <View style={MyStyle.MyBtn}>
                          <Button title='edit' color='green' onPress={() => {
                            setIsEdit(true)
                            setAge(info.age)
                            setFamily(info.family)
                            setName(info.name)
                            setEmail(info.Email)
                            setIndex(index)
                          }} />
                        </View>
                      </View>
                    </View>
                  </View>
                </Pressable>

              )
            })
          }
        </View>
      </ScrollView>

    </>
  )
}

export default Edit