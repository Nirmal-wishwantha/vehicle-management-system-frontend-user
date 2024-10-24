import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Text } from 'react-native-paper';

export default function VehicleCard({ brand, model, image, price, reserve, id, description }) {
    return (
        <View style={styles.vehicleCardBody}>
            <Card style={styles.cardContainer}>
                {/* Add the image */}
                <Card.Cover source={{ uri: image }} style={styles.cardImg} />

                <Card.Content>
                    <Text variant="titleLarge">ID: {id}</Text>
                    <Text variant="titleLarge">Brand: {brand}</Text>
                    <Text variant="bodyMedium">Model: {model}</Text>
                </Card.Content>

                <Card.Actions>
                    <Text variant="bodyMedium" style={styles.priceText}>Price: {price}</Text>
                    <Button mode="contained" onPress={reserve}>Reserve</Button>
                    <Button mode="outlined">Ok</Button>
                </Card.Actions>

                <Card.Content>
                    <Text variant="bodyMedium">Description: {description}</Text>
                </Card.Content>
            </Card>
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
