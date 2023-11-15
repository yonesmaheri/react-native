import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"

export const Screen1 = ({ navigation }) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [MyList, setMyList] = useState([]);

  
  const MyStyle = StyleSheet.create({
    Container: {
      margin: 10
    },
    FlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    FlexItem: {
      width: '50%'
    },
    Card: {
      backgroundColor: '#cacaca',
      borderColor: 'black',
      borderRadius: 50,
      borderWidth: 3,
      margin: 10,
      padding:10,
      height:150
    }
  })

  const GetData = () => {
    setIsLoading(true);
    const url = "https://apitester.ir/api/Categories";
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
  }

const ShowDetils = (id)=>{
  console.log(id);
  navigation.navigate("Screen2",{id:id})
}

  return (
    <>
      <View style={MyStyle.Container}>
        <Button title="Get" color={"green"} onPress={() => {
          GetData();
        }} />
      </View>
      <View>
        {(IsLoading) ? (<Text>Please Wait</Text>) : (<></>)}
      </View>
      <View style={MyStyle.FlexContainer}>
        {MyList.map((item, index) => (<>
          <View style={MyStyle.FlexItem}>
            <View style={MyStyle.Card}>
              <Text>
                categoryId: {item.categoryId}
              </Text>
              <Text>
              categoryName: {item.categoryName}
              </Text>
              <Button title="Detail" color={"red"} onPress={()=>{
                ShowDetils(item.categoryId);
              }} />
            </View>
          </View>
        </>))}
      </View>
    </>
  )
}