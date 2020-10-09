import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import firebaseSetup from '../firebaseConfig/setup'

export default function HomeScreen() {

    const { auth } = firebaseSetup();
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('');

    // Handle the button press
    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
            alert('User Sign in Successfully');
        } catch (error) {
            console.log('Invalid code.');
            alert('Invalid OTP code');
        }
    }

    if (!confirm) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button
                    color='#2980b9'
                    title="Phone Number Sign In"
                    onPress={() => signInWithPhoneNumber('+84986026246')}
                />
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ color: 'black', fontSize: 24 }}>Enter The OTP Code Here</Text>
            <TextInput
                value={code}
                onChangeText={text => setCode(text)}
                style={{
                    borderWidth: 1,
                    width: 150, height: 40,
                    borderRadius: 10, margin: 10,
                    justifyContent: 'center', alignItems: 'center',
                    fontSize: 16, color: 'red', padding: 5,
                }}
            />
            <Button color='#2980b9' title="Confirm Code" onPress={() => confirmCode()} />
        </View>
    )
}
