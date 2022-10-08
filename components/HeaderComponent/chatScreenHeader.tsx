import { StyleSheet,Image, Text, View,SafeAreaView, Dimensions } from 'react-native'
import React from 'react';
import { Foundation,FontAwesome,Feather } from '@expo/vector-icons';

const chatScreenHeader = ({ ...props }): JSX.Element => {
    console.log(props);
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.personInfoContainer}>
              <Image source={{
                  uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
              }}
                  style={ styles.personImage} />
              <Text style={styles.personName}>{props.children}</Text>
          </View> 
          <View style={styles.iconContainer}>
              <Foundation name="video" size={24} color="white" />
              <FontAwesome name="phone" size={24} color="white" />
              <Feather name="more-vertical" size={24} color="white" />

          </View>

    </SafeAreaView>
  )
}

export default chatScreenHeader

const styles = StyleSheet.create({
    container: {width:Dimensions.get("window").width, flex: 1,flexDirection:"row",alignItems:"center",justifyContent:'space-between', backgroundColor:"#3777f0"},
    personInfoContainer:{ flex:4,flexDirection:"row", alignItems:"center", marginLeft:40},
    personImage: { height: 40, width: 40, borderRadius: 20, },
    personName: {color:"white", marginLeft: 10, fontSize: 20, fontWeight: 'bold'},
    iconContainer:{ marginRight:100,flex:1,flexDirection:"row",justifyContent:"space-between"}
    
})