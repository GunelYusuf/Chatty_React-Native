import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../config/constants'

const Cell = ({title,icon,tintColor,style,onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.cell,style]}
      >
        <View style={[styles.containerRow,{backgroundColor:tintColor}]}>
          <Ionicons name={icon} size={24} color={"white"} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name='chevron-forward-outline' size={20} />
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  cell: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  containerRow: {
    width: 32,
    height: 32,
    backgroundColor: colors.red,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },
});
export default Cell;
