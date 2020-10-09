import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import firebaseSetup from '../../setup'

export default function HomeScreen() {

    const { auth } = firebaseSetup();
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('');

    // const handleClick = () => {
    //     let number = '+8486026246';
    //     firebase.auth().signInWithPhoneNumber(number).then((e) => {
    //         let code = alert('Enter the OTP', '');
    //         if (code == null) return;
    //         e.confirm(code).then((result) => {
    //             console.log('Hello user');
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     })
    // }

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
                    color='green'
                    title="Phone Number Sign In"
                    onPress={() => signInWithPhoneNumber('+84986026246')}
                />
            </View>
        );
    }

    return (
        <View>
            {/* <Text style={{ color: 'blue', fontSize: 24 }}>Welcome to firebase</Text>
            <Button
                title="Click to here"
                color="purple"
                onPress={handleClick}
            /> */}
            <Text style={{ color: 'black' }}>Screen OTP</Text>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </View>
    )
}
