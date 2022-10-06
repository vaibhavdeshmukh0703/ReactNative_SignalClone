import { Text, View, StyleSheet, Image ,FlatList,Dimensions} from "react-native";
import PersonMessage from "../components/PersonMessage";
import PersonData from '../assets/dummy-data/ChatRooms'
const userOne = PersonData[0];
const userTwo = PersonData[1];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <PersonMessage data={userOne}/>
      <PersonMessage data={userTwo}/> */}
      <FlatList data={PersonData} renderItem={({ item }): JSX.Element => (<PersonMessage data={item} />)}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
   height: Dimensions.get("window").height
  },
});
