import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';


const LoginScreen: React.FC = () => {
  const handleLogin = () => {
    // Implemente a lógica de login aqui
  };

  return (
    <View style={styles.container}>
      <InputField placeholder="Email" />
      <InputField placeholder="Senha" secureTextEntry />
      <LoginButton onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;