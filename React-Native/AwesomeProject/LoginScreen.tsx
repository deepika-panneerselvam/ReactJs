import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Button, StyleSheet, Alert } from 'react-native';
import { CountryListApi, AlbumLibraryApiWithAsync } from './Country'; // Adjust import as per your API file

const LoginScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {

            navigation.navigate('Home');
            setUsername('');
            setPassword('');


            let countryData = await CountryListApi();
            console.log("countryDataJson : ", countryData);

        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Error', 'Failed to login. Please try again.');
        }
    };

    const handleNormalButtonPress = () => {
        Alert.alert('', `You pressed normal button: ${username}`);
    };

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.formHeading}>LoginForm</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Enter your username"
                        autoCapitalize="none"
                        returnKeyType='next'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#63a4ff' : '#ee316c',
                                opacity: pressed ? 0.6 : 1,
                                borderRadius: 5,
                                height: 40,
                                justifyContent: 'center',
                                paddingHorizontal: 20,
                                minWidth: 100,
                            },
                            styles.button
                        ]}
                        onPress={handleLogin}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                    >
                        <Text style={styles.buttonText}> Pressable Login</Text>
                    </Pressable>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#28a745', minWidth: 100 }]}
                        onPress={handleLogin}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                    >
                        <Text style={styles.buttonText}>TouchableOpacity Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        onPress={handleNormalButtonPress}
                        title="Normal Button"
                        color="#dc3545"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70,
        backgroundColor: '#f0f0f0',
    },
    formContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    formHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
    },
});

export default LoginScreen;
