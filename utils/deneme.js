import React from 'react';
import { Text, View,FlatList,StyleSheet } from 'react-native';
export default class EmtiaApi extends React.Component{

    state= {
        data:{},
        myData:{
            onsAltin:{},
            gramAltin:{},
            ceyrek:{},
            yarim:{},
            tam:{},
            Cumhuriyet:{},
            ata:{},
            resat:{},
            hamit:{},
            onDort:{},
            onSekiz:{},
            yirmiIki:{},
            gumus:{},
        }
     
     }
    async componentDidMount(){
        let resp=await fetch('https://finans.truncgil.com/today.json');    
        let respJson= await resp.json()
       
        this.setState({data:respJson})
        this.setState({
            myData:{
                onsAltin:this.state.data['Ons Altın'],
                gramAltin:this.state.data['Gram Altın'],
                ceyrek:this.state.data['Çeyrek Altın'],
                tam:this.state.data['Tam Altın'],
                Cumhuriyet:this.state.data['Cumhuriyet Altını'],
                ata:this.state.data['Ata Altın'],
                resat:this.state.data['Reşat Altın'],
                Hamit:this.state.data['Hamit Altın'],
                onDort:this.state.data['14 Ayar Altın'],
                onSekiz:this.state.data['18 Ayar Altın'],
                yirmiIki:this.state.data['22 Ayar altın'],
                gumus:this.state.data.Gümüş,
            }
        })
      
    }
    

   
    render(){
        //this.apiCall();
        return(
        <View style={styles.container}>
            <View style={styles.borsa}>
                <View style={styles.birimler}>
                    <Text>Dolar</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.onsAltin.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.onsAltin.Satış}</Text>
                </View>
            </View>
        </View>
        )}
}   
const styles = StyleSheet.create({
    container: {
      flex: 2,
      
    },
    padding:{
      paddingRight:30,
    },
    paddingLeft:{
      paddingRight:35,
      paddingLeft:118,
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
      flex:3,
      justifyContent:'flex-start',
    },
    birimler:{
      paddingTop:10,
      flexDirection:'row',
    },
  });