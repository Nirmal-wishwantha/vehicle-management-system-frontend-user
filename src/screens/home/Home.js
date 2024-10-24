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
            {/* <Appbar.Header>
                <Appbar.BackAction onPress={() => navigate.navigate('Login')} />
                <Appbar.Content title="Login" />
            </Appbar.Header> */}

            <ScrollView>
                <View style={styles.pageBody}>
                    {vehicles.map((vehicle) => (
                        <VehicleCard
                            key={vehicle.id}
                            id={vehicle.id}
                            brand={vehicle.brand}
                            model={vehicle.model}
                            price={vehicle.price}
                            description={vehicle.description}
                            image={vehicleImages[vehicle.id] || 'https://example.com/default-image.jpg'}  // Fallback image
                        />
                    ))}
                </View>

            </ScrollView>

            
          
            
            {/* <MyTab/> */}
           
               
        

        </View>
    );
}

const styles = StyleSheet.create({

    pageBody: {
        marginBottom: 80
    }

});


