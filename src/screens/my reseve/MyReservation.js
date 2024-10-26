import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Table from '../../common/reserve table/Table';
import instance from '../../services/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';

export default function MyReservation() {
  const [id, setId] = useState();
  const [reserve, setReserve] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getid();
      await getReseve();
    };

    fetchData();
  }, []);

  const getid = async () => {
    const storedUserId = await AsyncStorage.getItem('userId');
    setId(storedUserId);
    console.log(storedUserId);
  };

  const getReseve = async () => {
    if (!id) return; 
    try {
      const res = await instance.get(`/user/reservation/${id}`);
      setReserve(res.data);
      console.log(" reservation data " + res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Reservations</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>No</Text></DataTable.Title>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>Date</Text></DataTable.Title>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>Email</Text></DataTable.Title>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>Time</Text></DataTable.Title>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>Mobile</Text></DataTable.Title>
            <DataTable.Title style={styles.column}><Text style={styles.colomnText}>Response</Text></DataTable.Title>
          </DataTable.Header>

          {reserve.map((val, index) => (
            <Table
              key={index}
              no={index + 1}
              date={val.reservationDate}
              email={val.reservationEmail}
              time={val.pickupTime}
              mobile={val.phoneNumber}
              response={val.reservationStatus}
            />
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#6e8efb',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  column: {
    minWidth: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colomnText: {
    color: 'black',
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
  },
});
