import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,style} from 'react-native';
import dataHome from '../dataHome';
import { useNavigation } from '@react-navigation/native';
import React  from 'react';

const Home =()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
               <View style={styles.view1}>
                  <Pressable >
                      <Image style={styles.img} source={require('../assets/IMG/back.png')}>

                      </Image>
                  </Pressable>

                  <Pressable>
                    <text style={styles.text}>Chat</text>
                  </Pressable>

                  <Pressable>
                    <Image style={styles.img1} source={require('../assets/IMG/shop.png')}></Image>
                  </Pressable>
                  
               </View>
          {dataHome.map((item)=>(
            <View style={styles.view2}>
              <Image source={item.image} style={styles.img2}></Image>

              <View style={styles.view3}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>{item.shop}</Text>
               </View>
               <Pressable style={styles.pre}>
                  <Text style={styles.text3}>chat</Text>
               </Pressable>
            </View>
          ))}   
          <View style={styles.view4}>

          
          
                <Pressable >
                      <Image style={styles.img3} source={require('../assets/IMG/list.png')}>

                      </Image>
                  </Pressable>

                  <Pressable onPress={()=> {navigation.navigate('Shop')}} >
                    <Image style={styles.img3} source={require('../assets/IMG/home.png')}></Image>
                  </Pressable>

                  <Pressable>
                    <Image style={styles.img3} source={require('../assets/IMG/back1.png')}></Image>
                  </Pressable>
           </View>
              
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     
   
        
    },
    view1:{
    
      flexDirection:'row',
      justifyContent:"space-between",
      backgroundColor:'#1BA9FF',
      alignItems:'center',
      position:"sticky",
      top:0,
      zIndex: 1,
          
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
    img:{
      height:50,
      width:50,
    },
    img1:{
      height:50,
      width:50,
    },
    view2:{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:"space-between",
    },
   img2:{
    height:130,
    width:130,
   },
   view3:{
    alignItems:'center',
    justifyContent:'space-around'
    
   },
   text1:{
    fontSize:13,
   },
   text2:{
    color:'red',
    fontWeight:"bold"
   },
   text3:{
    fontSize:21,
    backgroundColor:'red',
    color:'white',
    

   },
   pre:{
    width:40,
    height:50 
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
export default Home;