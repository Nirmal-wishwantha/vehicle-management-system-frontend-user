import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import instance from '../../services/Axios';


const Register = () => {
    const navigation = useNavigation();


    const[useNmae,setUserName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[comPassword,setComPassword]=useState();


    const registerPage=()=>{
        const data ={
            name:useNmae,
            email:email,
            password:password,
        }
        instance.post('/user/register',data)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
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
                onChange={setUserName}
            />

            {/* Email */}
            <TextInput
                label="Email"
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                onChange={setEmail}
            />

            {/* Password */}
            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChange={setPassword}
            />

            {/* Confirm Password */}
            <TextInput
                label="Confirm Password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChange={setComPassword}
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
