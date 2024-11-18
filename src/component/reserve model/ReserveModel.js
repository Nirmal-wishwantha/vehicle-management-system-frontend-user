import * as React from 'react';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReserveModel = ({ visible, hideDialog, handleReserve }) => {
  const [reservationDate, setReservationDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const [pickupTime, setPickupTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [reservationEmail, setReservationEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || reservationDate;
    setShowDatePicker(false);
    setReservationDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || pickupTime;
    setShowTimePicker(false);

    // Format time to "HH:mm"
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    setPickupTime(`${hours}:${minutes}`);
  };

  const reservationData = {
    reservationDate: reservationDate.toISOString().split('T')[0], // Date only in "YYYY-MM-DD" format
    reservationEmail,
    pickupTime, // Already formatted as "HH:mm"
    phoneNumber
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Reservation Details</Dialog.Title>
        <Dialog.Content>

          <Button onPress={() => setShowDatePicker(true)} style={{ marginBottom: 10, backgroundColor: '#99d6ff' }}>
            Select Reservation Date
          </Button>
          <TextInput
            label="Reservation Date"
            value={reservationDate.toLocaleDateString()}
            disabled
            style={{ marginBottom: 10 }}
          />
          {showDatePicker && (
            <DateTimePicker
              value={reservationDate}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}

          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={reservationEmail}
            onChangeText={setReservationEmail}
            keyboardType="email-address"
            style={{ marginBottom: 10 }}
          />

          <Button onPress={() => setShowTimePicker(true)} style={{ marginBottom: 10, backgroundColor: '#99d6ff' }}>
            Select Pickup Time
          </Button>

          <TextInput
            label="Pickup Time"
            value={pickupTime}
            disabled
            style={{ marginBottom: 10 }}
          />
          {showTimePicker && (
            <DateTimePicker
              value={pickupTime}
              mode="time"
              display="default"
              onChange={onChangeTime}
            />
          )}

          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={{ marginBottom: 10 }}
          />
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={hideDialog}>Close</Button>
          <Button onPress={() => handleReserve(reservationData)} mode="contained" style={{ marginLeft: 10 }}>
            Confirm Reservation
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ReserveModel;
