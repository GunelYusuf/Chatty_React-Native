import React from 'react';
import {SafeAreaView, Text,View,StyleSheet, TextInput} from 'react-native'
import { colors } from '../config/constants';
import Button from '../components/Button';

const Signup = () => {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Create New Account</Text>
            <TextInput placeholder="Enter your username" style={styles.input} />
            <TextInput
              placeholder="Enter your email address"
              style={styles.input}
            />
            <TextInput placeholder="Enter your password" style={styles.input} />
            <View style={styles.buttonsContainer}>
             <Button title="Login" varient="secondary"/>
             <Button title="Signup" varient="primary"/>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles= StyleSheet.create({
container:{
    backgroundColor:colors.primary,
    flex:1,
},
title:{
   color:'white',
   fontSize:36,
   fontWeight:"800",
   marginBottom:16

},
contentContainer:{
     padding:32
},
input:{
    paddingHorizontal:16,
    paddingVertical:14,
    backgroundColor:'white',
    marginTop:16,
    borderRadius:6,
    fontSize:15
},
buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:32

},


})

export default Signup;
