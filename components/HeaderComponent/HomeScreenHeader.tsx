import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import React, { useMemo } from "react";

const HomeScreenHeader = ({ ...props }): JSX.Element => {
  console.log("Which Props we receive from navigator", props);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{props.children}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="camera-outline"
          size={30}
          color="black"
          style={{ marginRight: 5 }}
        />
        <Feather name="edit-2" size={25} color="black" />
      </View>
    </View>
  );
}


export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flex:1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: 10,
    
    //border: "1px solid black",
  },
  imageContainer: {},
  image: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 25,
  },
  headerTitleContainer: {
    flex: 3,
    //border: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "Black",
    textAlign:"center"  
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
   // border: "1px solid black",
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});
