import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { MD3Colors } from 'react-native-paper';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      <Image
        source={require('../../resources/assets/about.jpg')} // Correctly use require for local images
        style={styles.image}
      />

      <Text style={styles.intro}>
        Welcome to <Text style={styles.boldText}>Riyapola</Text> - your trusted partner in vehicle reservations.
        Our mission is to make vehicle booking easy, reliable, and affordable, whether you're planning a quick
        getaway or need a long-term rental.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.sectionContent}>
          - Wide selection of vehicles to suit any need or budget{'\n'}
          - User-friendly reservation system{'\n'}
          - Exceptional customer service available 24/7{'\n'}
          - Affordable rates and transparent pricing
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionContent}>
          Have questions? We're here to help!{'\n'}
          Email: support@riyapola.com{'\n'}
          Phone: +1 (555) 123-4567{'\n'}
          Address: 123 Main Street, Your City, Country
        </Text>
      </View>
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
  image: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  intro: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
    color: MD3Colors.primary60,
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
});
