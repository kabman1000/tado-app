import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import {GOOGLE_MAPS_APIKEY} from "@env"


const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{
                    width:100,
                    height:100,
                    resizeMode:"contain"
                }} 
                source={{
                    uri:"https://logodix.com/logo/262181.jpg"
                }}/>
                <GooglePlacesAutocomplete 
                    placeholder="Where from?"
                    styles={{
                        container:{
                            flex:0,
                        },
                        textInput:{
                            fontSize:18,
                        },
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:"en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    }
})