import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = ({navigation}) => {
  console.log('navigation => ', navigation)

  const onSignUp = () => {
      navigation.navigate('Signup')
  }

  const onSignIn = () => {
      navigation.navigate('Signin')
  }

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require("../../../assets/Splash_image.png")} />
      <View stlye={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button onPress={onSignUp} title="Sign Up" />

      <Pressable onPress={onSignIn} hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;