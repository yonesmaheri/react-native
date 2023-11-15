import React, { useState } from 'react'
import { ActivityIndicator, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login({ navigation }) {
  const Mystyle = StyleSheet.create({
    App: {
      width: '100%',
      height: '100%',
      padding: 10,
      backgroundColor: '#3b3b3b'
    },
    ColumnApp: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    LogoContainer: {
      marginBottom: 70,
      marginTop: -100
    },
    Logo: {
      width: 150,
      height: 52
    },
    Input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 7,
      margin: 10,
      color: 'white',
      backgroundColor: '#333',
      height: 40,
      padding: 10
    },
    InputContainer: {
      width: '75%',
      margin: 10
    },
    ButtonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',

    },
    Btn: {
      marginLeft: 5,
      marginRight: 5,
      width: 100
    },
  })

  const [Username, setUsername] = useState()
  const [Password, setPassword] = useState()
  const [Incorrectuser, setIncorrectuser] = useState('none')

  return (
    <>
      <View style={Mystyle.App}>
        <View style={Mystyle.ColumnApp}>
          <View style={Mystyle.LogoContainer}>
            <Image style={Mystyle.Logo} source={require('./../images/Logo.png')} />
          </View>
          <View style={Mystyle.InputContainer}>
            <TextInput value={Username} style={Mystyle.Input} placeholder='Username...'
              onChangeText={(e) => {
                setUsername(e)
              }}
            />
            <TextInput value={Password} style={Mystyle.Input} placeholder='Password...'
              onChangeText={(e) => {
                setPassword(e)
              }}
            />
          </View>
          <View>
            <View style={Mystyle.ButtonContainer}>
              <View style={Mystyle.Btn}>
                <Button title='LOGIN' color={'green'} onPress={() => {
                  if (Username == 'Admin' && Password == '1234') {                 
                    navigation.navigate("Dashboard", { User: Username })
                    setPassword()
                    setUsername()

                  }
                  else {
                    setIncorrectuser('flex')
                  }
                }} />
              </View>

              <View style={Mystyle.Btn}>
                <Button title='CLEAR' color={'red'} onPress={() => {
                  setPassword('');
                  setUsername('')
                }} />
              </View>
              
            </View>
          </View>
          <Text style={{display : Incorrectuser}}>username or password is incorrect</Text>
        </View>
      </View>
    </>
  )
}
