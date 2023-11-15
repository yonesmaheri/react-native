import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export const Screen2 = ({ navigation,route }) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [MyList, setMyList] = useState({});
  useEffect(()=>{
    setIsLoading(true);

    const url = "https://apitester.ir/api/Categories/" + route.params.id;
    
    fetch(url)
      .then(Response => Response.json())
      .then(Json => {
        setIsLoading(false);
        console.log(Json);
        setMyList(Json);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      })
      ;
  },[])

  return (
    <>
      <Text>
        {route.params.id}
      </Text>
      <View>
        {(IsLoading) ? (<Text>Please Wait</Text>) : (<></>)}
      </View>
      <Text>
        {MyList.categoryName} - {MyList.description}
      </Text>
      <Button
        title='Go Back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </>
  )
}
