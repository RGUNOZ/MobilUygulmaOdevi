import React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
export default class EmtiaApi extends React.Component{

    state= {
        data:{},
        myData:{
           altınOns:{},
           gramAltın:{},
           yirmiIki:{},
           onSekiz:{},
           onDort:{},
           ceyrek:{},
           yarim:{},
           tam:{},
           CUMHURIYET:{},
           ATA:{},
           gumus:{},
        }
     
     }
    async componentDidMount(){
        let resp=await fetch('https://finans.truncgil.com/today.json');    
        let respJson= await resp.json()
       
        this.setState({data:respJson})
        this.setState({
            myData:{
                altınOns:this.state.data['Ons Altın'],
                gramAltın:this.state.data['Gram Altın'],
                yirmiIki:this.state.data['22 Ayar Bilezik'],
                onSekiz:this.state.data['18 Ayar Altın'],
                onDort:this.state.data['14 Ayar Altın'],
                yarim:this.state.data['Yarım Altın'],
                ceyrek:this.state.data['Çeyrek Altın'],
                tam:this.state.data['Tam Altın'],
                CUMHURIYET:this.state.data['Cumhuriyet Altını'],
                ATA:this.state.data['Ata Altın'],
                gumus:this.state.data.Gümüş,
            }
        })
      
    }
    

   
    render(){
        //this.apiCall();
        return(
            
        <View style={styles.container}>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:75,paddingRight:10,color:'gold', fontWeight:'bold' }}>ONS ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.altınOns.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.altınOns.Satış}</Text>
                </View>
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:65,paddingRight:10,color:'gold', fontWeight:'bold' }}>GRAM ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.gramAltın.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.gramAltın.Satış}</Text>
                </View>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:52,paddingRight:10,color:'gold', fontWeight:'bold' }}>ÇEYREK ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.ceyrek.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.ceyrek.Satış}</Text>
                </View>
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:62,paddingRight:10,color:'gold', fontWeight:'bold' }}>YARIM ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.yarim.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.yarim.Satış}</Text>
                </View>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:75,paddingRight:10,color:'gold', fontWeight:'bold' }}>TAM ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.tam.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.tam.Satış}</Text>
                </View>
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:25,paddingRight:10,color:'gold', fontWeight:'bold' }}>CUMHURIYET ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.CUMHURIYET.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.CUMHURIYET.Satış}</Text>
                </View>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:78,paddingRight:10,color:'gold', fontWeight:'bold' }}>ATA ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.ATA.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.ATA.Satış}</Text>
                </View>
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:53,paddingRight:10,color:'gold', fontWeight:'bold' }}>22 AYAR ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.yirmiIki.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.yirmiIki.Satış}</Text>
                </View>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:53,paddingRight:10,color:'gold', fontWeight:'bold' }}>18 AYAR ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.onSekiz.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.onSekiz.Satış}</Text>
                </View>
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:53,paddingRight:10,color:'gold', fontWeight:'bold' }}>14 AYAR ALTIN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.onDort.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.onDort.Satış}</Text>
                </View>
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:95,paddingRight:10,color:'silver', fontWeight:'bold' }}>GÜMÜŞ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.gumus.Alış}</Text> 
                    <Text style={styles.padding}>{this.state.myData.gumus.Satış}</Text>
                </View>
        </View>
        )}
}   
const styles = StyleSheet.create({
    container: {
      flex: 5,
      
    },
    padding:{
      paddingRight:30,
      color:'green',
      fontWeight:'bold',
    },
    paddingLeft:{
      paddingRight:35,
      fontWeight:'bold',
      color:'red'
    },
    buyAndSent:{
      paddingTop:20,
      justifyContent:'center',
      flexDirection:'row'
    },
    doviz:{
      flex:2,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    borsa:{
      paddingTop:10,
      
      justifyContent:'flex-start',
    },
    birimlerUst:{
      paddingTop:10,
      flexDirection:'row',
      backgroundColor:'black',
    
    },
    birimlerAlt:{
        paddingTop:10,
        flexDirection:'row',
        backgroundColor:'darkblue',
      },
  });