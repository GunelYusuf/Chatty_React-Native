import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../config/constants';

const ContactRow = ({name,subtitle,onPress}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <View style={styles.avatar}>
           <Text style={styles.avatarLabel}>
               {name.split(' ').reduce((prev, current) =>`${prev}${current[0]}`,'')}
           </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <Ionicons name="chevron-forward-outline" size={20} />
      </TouchableOpacity>
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
    backgroundColor: colors.primary,
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
});

export default ContactRow;
