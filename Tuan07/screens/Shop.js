import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import dataShop from '../dataShop';
import { useNavigation } from '@react-navigation/native';
import React  from 'react';
const Shop = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <View style={styles.view}>
                <Pressable onPress={() => navigation.goBack()}> 
                    <Image style={styles.img} source={require('../assets/IMG/back.png')}></Image>
                </Pressable>
                <Image style={styles.img2} source={require('../assets/IMG/tim.png')}></Image>
                <TextInput style={styles.ip} placeholder='Dây cáp usb'>

                </TextInput>
                <Pressable>
                    <Image style={styles.img3} source={require('../assets/IMG/shop.png')}></Image>
                </Pressable>
                <Pressable>
                    <Image style={styles.img4} source={require('../assets/IMG/more.png')}></Image>
                </Pressable>
            </View>

            <FlatList
                numColumns={2}
                data={dataShop}
                renderItem={({ item }) => (
                    <View style={styles.view1}>
                        <Image source={item.image} style={styles.img5}></Image>
                        <View style={styles.view2}>
                            <Text style={styles.text1}>{item.name}</Text>
                            <Text style={styles.text1}>{item.usb}</Text>
                            <Rating imageSize={15} style={styles.ra}></Rating>
                            <Text style={styles.text1}>{item.gia}</Text>

                        </View>

                    </View>
                )}
                keyExtractor={item => item.id}

            />
            <View style={styles.view4}>



                <Pressable >
                    <Image style={styles.img3} source={require('../assets/IMG/list.png')}>

                    </Image>
                </Pressable>

                <Pressable>
                    <Image style={styles.img3} source={require('../assets/IMG/home.png')}></Image>
                </Pressable>

                <Pressable>
                    <Image style={styles.img3} source={require('../assets/IMG/back1.png')}></Image>
                </Pressable>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {

        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1BA9FF'

    },
    img: {
        width: 30,
        height: 30
    },

    ip: {

        width: 192,
        height: 30,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 30,
        backgroundColor: '#fff'
    },
    img2: {
        width: 22,
        height: 20,
        position: 'relative',
        left: 47

    },
    img3: {
        width: 24,
        height: 24,
    },
    img4: {
        width: 18,
        height: 18,
        resizeMode: 'contain',

    },
    view1: {
        alignItems: 'center',
        margin: 15

    },

    img5: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    view2: {


    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ra: {
        left: -40
    },
    view4:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#1BA9FF',
        position:'sticky',
        bottom:0,
        zIndex:1,
        
       },
       img3:{
        width:40,
        height:40,
        
       }
});
export default Shop;