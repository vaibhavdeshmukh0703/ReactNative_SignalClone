import { StyleSheet,Image, Text, View,SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import { Foundation,FontAwesome,Feather } from '@expo/vector-icons';

const chatScreenHeader = ({ ...props }): JSX.Element => {
    const onPress=()=>{
        alert("This Feature Under Costruction");
    }
     const onPress1=()=>{
        alert("This Feature Under Costruction");
    }
     const onPress2=()=>{
        alert("This Feature Under Costruction");
    }
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
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <Foundation name="video" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress1}>
              <FontAwesome name="phone" size={24} color="white" style={{marginLeft:20}} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}onPress={onPress2}>
              <Feather name="more-vertical" size={24} color="white" style={{marginLeft:10}}/>
              </TouchableOpacity>
          </View>

    </SafeAreaView>
  )
}

export default chatScreenHeader

const styles = StyleSheet.create({
    container: {width:Dimensions.get("window").width, flex: 1,flexDirection:"row",alignItems:"center",justifyContent:'space-between', backgroundColor:"#3777f0"},
    personInfoContainer:{ flex:2,flexDirection:"row",marginLeft:0,alignItems:"center"},
    personImage: { height: 40, width: 40, borderRadius: 20, },
    personName: {color:"white", marginLeft: 10, fontSize: 20, fontWeight: 'bold'},
    iconContainer:{ marginRight:80,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
    
    
})