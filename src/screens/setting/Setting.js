import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, List, Dialog, Portal, MD3Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function Setting() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const navigation = useNavigation();


  const id = AsyncStorage.getItem('userId');

  const logOut = async (id) => {


    if (id=!'') {

      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      console.log("User logged out");
      hideDialog();

      Toast.show({
        text1: 'Login Out Successful..!',
        text2: 'Thank You',
        type: 'success',
      });

      setTimeout(() => {
        navigation.navigate('Login');
      }, 1000)

    } else {

      Toast.show({
        text1: 'Logout Failed',
        text2: 'An error occurred while logging out. Please try again.',
        type: 'error',
      });
      console.log("Logout error: ");


    }



  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Logout Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Log Out</Text>
        <Button
          mode="contained"
          onPress={showDialog}
          style={styles.logoutButton}
          color={MD3Colors.error50}
        >
          Log Out
        </Button>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.sectionContent}>Customize your notification preferences.</Text>
      </View>

      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Text style={styles.sectionContent}>Manage your privacy settings.</Text>
      </View>

      {/* Confirmation Dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirm Logout</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to log out?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={logOut} color={MD3Colors.error50}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    alignItems: 'center',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#6e8efb',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: MD3Colors.primary60,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  logoutButton: {
    marginTop: 10,
    width: '100%',
  },
});
