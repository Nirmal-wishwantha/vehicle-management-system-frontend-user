import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Appbar } from 'react-native-paper';
import VehicleCard from '../../component/vehicleCard/VehicleCard';
import instance from '../../services/Axios';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import MyTab from '../../component/bottomNav/MyTab';


export default function Home() {

    const navigate = useNavigation();

    const [vehicles, setVehicles] = useState([]);
    const [vehicleImages, setVehicleImages] = useState({});

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        instance.get('/vehicle')
            .then((res) => {
                setVehicles(res.data);
            })
            .catch((err) => {
                console.error('Error loading vehicles:', err);
            });
    };



    return (
        <View>


            <View style={styles.header}>
                <Text style={styles.headerTitle}>Choose Your Vehicle</Text>
            </View>

            <ScrollView>
                <View style={styles.pageBody}>
                    {
                        vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                id={vehicle.id}
                                brand={vehicle.brand}
                                model={vehicle.model}
                                price={vehicle.price}
                                description={vehicle.description}
                                image={vehicleImages[vehicle.id] || 'https://example.com/default-image.jpg'}  // Fallback image
                            />
                        ))
                    }
                </View>

            </ScrollView>




            {/* <MyTab/> */}




        </View>
    );
}

const styles = StyleSheet.create({

    pageBody: {
        marginBottom: 30
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
    }

});


