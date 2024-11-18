import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import instance from '../../services/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';
import Table from '../../component/reserve table/Table';

export default function MyReservation() {
  const [id, setId] = useState(null);
  const [reserve, setReserve] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    setIsRefreshing(true); // Start refreshing
    try {
      const storedUserId = await AsyncStorage.getItem('userId');
      setId(storedUserId);
      if (storedUserId) {
        await getReseve(storedUserId);
      }
    } catch (error) {
      console.error("Failed to get user ID:", error);
    } finally {
      setIsRefreshing(false); // Stop refreshing
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch on component mount
  }, []);

  const getReseve = async (userId) => {
    try {
      const res = await instance.get(`/user/reservation/${userId}`);
      setReserve(res.data);
      console.log("Reservation data:", res.data);
    } catch (err) {
      console.error("Failed to fetch reservations:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Reservations</Text>
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />
        }
      >
        <ScrollView 
          style={styles.verticalScroll}
          showsVerticalScrollIndicator={false}
        >
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
  scrollContainer: {
    flex: 1,
  },
  verticalScroll: {
    flexGrow: 1, // Allow vertical scroll to take up available space
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
