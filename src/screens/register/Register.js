import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Register() {

  const navigation = useNavigation();

  return (
    <View>

      <View style={styles.titleBody}>
        <Text style={styles.title}>Register page</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.btnBody} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>
            Go to Login
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  titleBody: {
      marginTop: 20,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  title: {
      color: 'black',
      fontSize: 35,
  },

  btnBody: {
      backgroundColor: 'red',
      padding: 10,
      marginTop: 30,
      width: '40%',
      alignItems: 'center',
      display: 'flex',
      borderRadius: 4,
  },

  btnText: {
      fontSize: 20,
      color: 'white',
  }
});

