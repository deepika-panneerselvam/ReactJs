import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import PopupModal from "./Popup";

const HomeScreen = ({ navigation }: any) => {
    const [popupMsg, setPopupMsg] = useState(""); // State declaration inside the component

    const handleLogout = () => {
        // Set popup message when logout button is pressed
        setPopupMsg("Are you sure you want to logout?");
    };

    const handlePopupOk = () => {
        // Handle actions when user confirms popup (optional)
        setPopupMsg(""); // Close the popup after handling
        navigation.navigate('Login'); // Navigate to Login screen or perform logout action
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Welcome to the Home Page!</Text>
            <View style={styles.content}>
                <Text style={styles.text}>You are logged in.</Text>
                <Text style={styles.paragraph}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Text>
                <Button
                    title="Logout"
                    onPress={handleLogout}
                    color="#ee316c"
                    accessibilityLabel="Logout Button"
                />
            </View>

            {/* Conditional rendering of PopupModal */}
            {popupMsg && (
                <PopupModal
                    msg={popupMsg}
                    okHandler={handlePopupOk}
                    modalOpen={true}
                />
            )}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#ee316c',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 20,
        color: '#666',
        textAlign: 'justify',
    },
});

export default HomeScreen;
