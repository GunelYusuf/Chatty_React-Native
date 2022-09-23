import React,{useEffect,useState} from 'react';
import { SafeAreaView,View,StyleSheet, TouchableOpacity,Alert} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Ionicons} from "@expo/vector-icons";
import { colors } from '../config/constants';


const Chats = ({navigation}) => {

useEffect(() => {
   firebase.auth().onAuthStateChanged((user) =>{
    if(!user){
      navigation.navigate("Signup");
    }
   });
},[])

const [chats, setChats] = useState([]);
    useEffect(() =>{
     firebase
     .firestore()
     .collection("chats")
     .onSnapshot((snapshot) => {
      setChats(snapshot.docs);
    });
    },[])

    const handleFabPress = () =>{
      Alert.prompt('Email','Enter user email',(email) =>{
        firebase.firestore().collection('chats').add({
          users:[firebase.auth()?.currentUser?.email,email],
          messages:[],
        }).then((doc) =>{
          navigation.navigate("Chat",{id:doc.id})
        })
      })
    }
    return (
      <SafeAreaView style={styles.container}>
        {chats.map((chat) => {
          <React.Fragment key={chat.id}>
            <ContactRow
              name={chat
                .data()
                .users.find((x) => x !== firebase.auth()?.currentUser?.email)}
              subtitle="No message yet"
              onPress={() => {
                navigation.navigate("Chat", { id: chat.id });
              }}
            />
            <Separator />
          </React.Fragment>;
        })}
        <TouchableOpacity style={styles.fab} onPress={handleFabPress}>
          <View style={styles.fabContainer}>
            <Ionicons name="add" size={21} color="white" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabContainer: {
    width: 56,
    height: 56,
    backgroundColor: colors.pink,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chats;
