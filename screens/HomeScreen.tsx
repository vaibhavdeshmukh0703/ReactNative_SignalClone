import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import PersonMessage from "../components/PersonMessage";
import PersonData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PersonData}
        renderItem={({ item }): JSX.Element => <PersonMessage data={item} />}
        showsVerticalScrollIndicator={true}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
  },
});
