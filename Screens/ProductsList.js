import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';


export default function ProductsList({ navigation, route }) {

  const MyStyle = StyleSheet.create({
    App: {
      backgroundColor: '#3a3a3a'
    },
    Container: {
      margin: 10
    },
    FlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      textAlign: 'center'
    },
    Wait: {
      width: '100%',
      display: 'flex',

      alignItems: 'center',
      marginTop: 250
    },
    Card: {
      backgroundColor: '#cacaca',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      margin: 10,
      padding: 10,
      width: 300,
      textAlign: 'center'
    },
    AlertText: {
      color: 'white'
    }
  })


  const [MyList, setMyList] = useState([]);
  const [IsLoading, setIsLoading] = useState()

  useEffect(() => {
    const url = "https://apitester.ir/api/Categories";
    setIsLoading(true)
    console.log('loading')
    fetch(url)
      .then(Response => Response.json())
      .then(Json => {
        setMyList(Json);
        console.log(Json);
        setIsLoading(false)
      })
      .catch(error => {
        console.log("error")
      })
      ;
  }, [])

  return (
    <>
      <ScrollView style={MyStyle.App}>
        {
          IsLoading ?
            <View style={MyStyle.Wait}>
              <Text style={MyStyle.AlertText}>Please Wait...</Text>
              <PacmanIndicator color='white'/>
            </View>
            :
            <View style={MyStyle.FlexContainer}>
              {MyList.map((item, index) => (<>
                <View style={MyStyle.FlexItem}>
                  <View key={index} style={MyStyle.Card}>
                    <Text>
                      Category Id: {item.categoryId}
                    </Text>

                    <View style={{
                      borderColor: '#333',
                      borderWidth: 1,
                      margin: 20
                    }}></View>

                    <Text>
                      Category Name: {item.categoryName}
                    </Text>

                    <View style={{
                      borderColor: '#333',
                      borderWidth: 1,
                      margin: 20
                    }}></View>

                    <Text>
                      Description: {item.description}
                    </Text>
                  </View>
                </View>
              </>))}
            </View>
        }
      </ScrollView>
    </>

  )
}
