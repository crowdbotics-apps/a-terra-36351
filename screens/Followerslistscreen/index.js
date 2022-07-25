import React from "react";
import { Text, StyleSheet, View, TextInput, Image, ScrollView } from "react-native";

const FollowersList = params => {
  return <ScrollView>
      <View style={styles.container}>
        <View style={{
        left: 0,
        top: 0
      }}>
          <Text style={styles.searchText}>Search for product</Text>
          <View style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#C4C4C4",
          flexDirection: "row",
          alignItems: "center",
          left: 25,
          top: 0,
          width: 149,
          height: 41
        }}>
            <View style={{
            width: "90%"
          }}>
              <Input placeholder="Enter" />
            </View>
            <Image source="" />
          </View>
        </View>
        <View>
          <Text style={styles.text}>4513 Products found</Text>
        </View>
        <View style={styles.frequently}>
          <Text style={styles.frequentlyText}>Frequently</Text>
        </View>
        <View>
          <Follower name='cody' bgcolor='#D9DADD' />
          <Follower name='Johnny watson' bgcolor='#FCF1D6' follow={true} />
          <Follower name='Jenny Wilson' bgcolor='#F9D8D9' follow={true} />
        </View>
        <View style={styles.frequently}>
          <Text style={styles.frequentlyText}>A</Text>
        </View>
        <View>
          <Follower name='Anthony' bgcolor='#D9DADD' />
          <Follower name='Andres' bgcolor='#F9D8D9' />
          <Follower name='Ander' bgcolor='#FCF1D6' />
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  searchBar: {
    padding: 20
  },
  searchText: {
    marginLeft: 10,
    marginBottom: 10
  },
  text: {
    marginLeft: 30,
    marginBottom: 10
  },
  frequently: {
    height: 50,
    width: "100%",
    backgroundColor: "#DADADA",
    flexDirection: "column",
    justifyContent: "center"
  },
  frequentlyText: {
    marginLeft: 30,
    color: "#8F8D86"
  }
});
export default FollowersList;

const Follower = props => {
  return <View style={FollowerStyles.follower}>
      <View style={FollowerStyles.main}>
        <View style={[FollowerStyles.image, {
        backgroundColor: props.bgcolor
      }]}>
          <Image source="" />
        </View>
        <Text>{props.name}</Text>
      </View>
      {props.follow && <Text>Follow</Text>}
    </View>;
};

const FollowerStyles = StyleSheet.create({
  follower: {
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  main: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Input = props => {
  return <View>
      <TextInput style={textStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor='#ddd' editable={props.editable !== false} />
      {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 10
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});