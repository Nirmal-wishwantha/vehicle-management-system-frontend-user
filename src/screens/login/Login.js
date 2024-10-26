import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import instance from '../../services/Axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginPage = () => {

       
            const data = {
                email: email,
                password: password
            };
            console.log(data);
            instance.post('/user/login', data)

                .then(async (res) => {
                    const { token, id } = res.data;

                    await AsyncStorage.setItem('token', token);
                    await AsyncStorage.setItem('userId', id.toString());
                    Toast.show({
                        text1: 'Login Successful',
                        text2: 'Welcome back!',
                        type: 'success',
                    });

                    setTimeout(() => {
                        navigation.navigate('Drawer');

                    }, 1000);

                    console.log(" login succes " + res.data.token);
                })

                .catch((err) => {

                    Toast.show({
                        text1: 'Login Failed',
                        text2: 'Please check your credentials.',
                        type: 'error',
                    });
                    console.log("login error" + err);
                })
        



    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                label="email"
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}

            />

            <TextInput
                label="password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChangeText={(text) => setPassword(text)}

            />


            <View style={styles.buttonBody}>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={loginPage}
                >
                    Login
                </Button>
            </View>


            <Text style={styles.registerText}>
                Don't have an account? <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
            </Text>

        </View>

    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 50,
        backgroundColor: '#f3f4f6',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#6e8efb',
    },
    input: {
        marginBottom: 20,
    },
    button: {
        paddingVertical: 2,
        backgroundColor: '#6e8efb',
        width: '50%'
    },

    buttonBody: {
        display: 'flex',
        alignItems: 'center'
    },
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#777',
    },
    registerLink: {
        color: '#6e8efb',
        fontWeight: 'bold',
    },
});
