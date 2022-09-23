import React,{useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';

const Chats = ({navigation}) => {
  useEffect(() => {
   const isLoggedIn = false;
   if(!isLoggedIn){
    navigation.navigate("Signup");
   }
},[])

    return (
      <SafeAreaView>
        <ContactRow
          name="Gunel Yusubova"
          subtitle="React Native Developer"
          onPress={() => {
            alert("Hi, Gunel Yusubova");
          }}
        />
        <Separator />
        <ContactRow
          name="Sabina Quliyeva"
          subtitle="Graphic Designer"
          onPress={() => {
            alert("Hi, Sabina Quliyeva");
          }}
        />
        <Separator />
        <ContactRow
          name="Tabriz Habiyev"
          subtitle="Full Stack Developer"
          onPress={() => {
            alert("Hi, Tabriz Habiyev");
          }}
        />
        <Separator />
        <ContactRow
          name="Nazrin Namazova"
          subtitle="UX/UI Designer"
          onPress={() => {
            alert("Hi, Nazrin Namazova");
          }}
        />
      </SafeAreaView>
    );
}


export default Chats;
