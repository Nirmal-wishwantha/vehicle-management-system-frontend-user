import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.titleBody}>
                <Text style={styles.title}>Login page</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnBody} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.btnText}>
                        Go to Register
                    </Text>
                </TouchableOpacity>
            </View>

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
    titleBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
