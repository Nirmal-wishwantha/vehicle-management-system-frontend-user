import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import instance from '../../services/Axios';


const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginPage = () => {

        const data = {
            email: email,
            password: password
        };
        instance.post('/user/login', data)

            .then((res) => {
                console.log(" login succes " + res);
            })

            .catch((err) => {
                console.log("login error " + err);
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
                onChange={(e) => setEmail(e.target.value)}

            />

            <TextInput
                label="password"
                mode="outlined"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon name="eye" />}
                onChange={(e) => setPassword(e.target.value)}

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



            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnBody} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={styles.btnText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>



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
