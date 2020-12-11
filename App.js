import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions,Button, SafeAreaView,StyleSheet, Text, TextInput, View } from 'react-native';
import {LineChart} from "react-native-chart-kit";

export default function App() {
  const[description,setDescription]=useState("");
  const[amount,setAmount]=useState('');
  const[total,setTotal]=useState(0);
  const[label,setLabel]=useState([]);
 const [data,setData]=useState([]);
  const[gigs,setGigs]=useState([
    {
      description:"",
      amount:"",
      
    }
  ]);
  useEffect(()=>{
    
  },[]);
  useEffect(()=>{
    setTotal( gigs.reduce((total,gig)=> total+Number(gig.amount),0))
   
  },[gigs])
  const addGig =()=>{
    setGigs([...gigs,{
      description:description,
      amount:amount,
      timestamp:new Date(),
    }]);
    setDescription('');
    setAmount('');
  }
  return (
    <SafeAreaView>
     <View >
       
       
      <Text style={styles.container}>Heyyy I m mehdi</Text>
      <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["Mon", "Tu", "Wed", "Fri"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "black",
      backgroundGradientTo: "black",
      decimalPlaces: null, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      <Text>Total Income:${total}</Text>
      <StatusBar style="auto" />
    </View>
 
    
    
    
    <TextInput  
     style={styles.input} 
     value={description}
     placeholder='Enter a description' 
     onChangeText={text=>setDescription(text)} />
    <TextInput 
      
     keyboardType='numeric' 
     style={styles.input} 
     value={amount}
     placeholder='Enter a description'
      onChangeText={text=>setAmount(text)} />
    <Button disabled={!amount && !description} onPress={addGig} title='Add GIG'/>
    {gigs.map(gig => (
      <View>
        <Text> 
          {gig.description}
          
        </Text>
        <Text>{gig.amount}</Text>
      </View>
    ))}
   
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    fontSize:30,
    fontWeight:'bold',
    
  },
  input:{
    marginTop:20,
    margin:20,
    padding:20,
    height:40,
    borderColor:'red',
    borderWidth:1
  }
});
