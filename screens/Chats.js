import React from 'react';
import { SafeAreaView,Text,TouchableOpacity,StyleSheet,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Chats = () => {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>UN</Text>
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.name}>User Name</Text>
            <Text style={styles.subtitle}>Hi, I am waiting you for dinner</Text>
          </View>

          <Ionicons name="chevron-forward-outline" size={20} />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.subtitle}>Hi, I am waiting you for dinner</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.subtitle}>Hi, I am waiting you for dinner</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.subtitle}>Hi, I am waiting you for dinner</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textsContainer: {
    flex: 1,
    marginStart: 16,
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: "#2196f3",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLabel: {
    fontSize: 20,
    color: "#fff",
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: "#565656",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    color: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
