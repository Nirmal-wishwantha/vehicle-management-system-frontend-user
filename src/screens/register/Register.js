import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import instance from '../../services/Axios';


const Register = () => {
    const navigation = useNavigation();


    const [useName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [comPassword, setComPassword] = useState();


    const registerPage = () => {

        const data = {
            name: useName,
            email: email,
            password: password,
        }
        instance.post('/user/register', data)
            .then((res) => {

                Toast.show({
                    text1: 'Register Successful',
                    text2: 'Welcome Login..!',
                    type: 'success',
                });

                setTimeout(() => {
                    navigation.navigate('Login')
                }, 2000);

                console.log("register success full"+ res);

            })
            .catch((err) => {

                Toast.show({
                    text1: 'Register Successful',
                    text2: 'Welcome Login..!',
                    type: 'success',
                });
                console.log("register success full"+ err);
            })


    }






    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            {/* Username */}
            <TextInput
                label="Username"
                mode="outlined"
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(text) => setUserName(text)}
            />

            {/* Email */}
            <TextInput
                label="Email"
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
            />

            {/* Password */}
            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChangeText={(text) => setPassword(text)}
            />

            {/* Confirm Password */}
            <TextInput
                label="Confirm Password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChangeText={(text) => setComPassword(text)}
            />

            <View style={styles.buttonBody}>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={registerPage}
                >
                    Register
                </Button>
            </View>

            <Text style={styles.registerText}>
                Already have an account? <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}>Login here</Text>
            </Text>
        </View>
    );
};

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
        width: '50%',
    },
    buttonBody: {
        display: 'flex',
        alignItems: 'center',
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

export default Register;
