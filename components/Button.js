import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

export default function Button({title,varient}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: varient === "primary" ? "#000000" : "transparent",
          paddingHorizontal: varient==='primary' ? 16:0 },
      ]}
    >
      <Text style={[styles.buttonLabel,{color: varient === "primary" ? "white" : "black"}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 18,
  },
});
