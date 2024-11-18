import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Modal, Text } from 'react-native-paper';
import ReserveModel from '../reserve model/ReserveModel';
// import { Button, Card, Text, Dialog, Portal, Provider as PaperProvider } from 'react-native-paper';


export default function VehicleCard({ brand, model, image, price, id, description,reserve }) {

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
     
    return (
        <View style={styles.vehicleCardBody}>
            <Card style={styles.cardContainer}>

                <Card.Cover source={{uri:'http://192.168.43.162:8080/vehicle/get/image/'+id}} style={styles.cardImg} />

                <Card.Content>
                    <Text variant="titleLarge">ID: {id}</Text>
                    <Text variant="titleLarge">Brand: {brand}</Text>
                    <Text variant="bodyMedium">Model: {model}</Text>
                </Card.Content>

                <Card.Actions>
                    <Text variant="bodyMedium" style={styles.priceText}>Price: {price}</Text>

                       <View>
                       <Button mode="contained" onPress={showDialog}
                       >Reserve</Button>
                       </View>
                  
                    
                </Card.Actions>

                <Card.Content>
                    <Text variant="bodyMedium">Description: {description}</Text>
                </Card.Content>
            </Card>
            <ReserveModel visible={visible} hideDialog={hideDialog} handleReserve={reserve} />

        
        </View>
    );
}





const styles = StyleSheet.create({
    vehicleCardBody: {
        marginVertical: 15,
        marginHorizontal: 10,
        // marginBottom:75 
    },
    cardContainer: {
        margin: 10,
        borderRadius: 8,  // Add some rounded corners
    },
    cardImg: {
        marginVertical: 10,
        height: 150,  // Adjust the image size for consistency
    },
    priceText: {
        flex: 1,  // Take up available space
        fontWeight: 'bold',
    },
});
