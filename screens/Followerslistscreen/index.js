import React from "react";
import { Text, StyleSheet, View, TextInput, Image, ScrollView } from "react-native";

const FollowersList = params => {
  return <ScrollView>
      <View style={styles.container}>
        <View style={{
        left: 0,
        top: 0
      }}>
          <Text style={{}}>Hey!</Text>
          <Text style={{
          left: 0,
          top: 16,
          width: 189,
          height: 20
        }}><Text style={{
            color: "#637976"
          }}>Welcome</Text> Back!</Text>
          <View style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#C4C4C4",
          flexDirection: "row",
          alignItems: "center",
          left: 25,
          top: 0,
          width: 149,
          height: 30
        }}>
            <View style={{
            width: "90%"
          }}>
              <Input placeholder="Search here..." />
            </View>
            <Image source="" />
          </View>
        </View>
        <View>
          
        </View>
        <View style={{
        height: 55,
        borderColor: "#000000",
        left: 0
      }}>
          <View style={{
          position: "absolute",
          height: 50,
          width: 47,
          left: 10,
          top: 5,
          backgroundColor: "#637976",
          borderRadius: 6
        }}><Text style={{
            position: "absolute",
            fontSize: 10,
            textAlign: "center",
            top: 28
          }}>Home Assists</Text></View>
          <View style={{
          position: "absolute",
          height: 50,
          width: 45,
          borderRadius: 6,
          left: 121,
          top: 5,
          borderWidth: 1,
          borderColor: "#acabab"
        }}><Text style={{
            position: "absolute",
            textAlign: "center",
            top: 30,
            fontSize: 10,
            left: -1,
            width: 42,
            height: 14
          }}>Footware</Text></View>
          <View style={{
          position: "absolute",
          height: 50,
          width: 46,
          borderRadius: 6,
          left: 68,
          top: 5,
          borderWidth: 1,
          borderColor: "#acabab"
        }}><Text style={{
            position: "absolute",
            textAlign: "center",
            top: 34,
            fontSize: 10,
            left: 3,
            width: 36,
            height: 15
          }}>Bags</Text></View>
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
      <TextInput style={{
      left: 0,
      top: 0,
      width: 132,
      height: 32
    }} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor='#ddd' editable={props.editable !== false} />
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