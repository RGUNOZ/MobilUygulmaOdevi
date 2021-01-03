import React, { Component } from 'react';
import { Text, View,StyleSheet} from 'react-native';

export default class DovizApi extends Component{
    state= {
            data:{},
            myData:{
                abdDolari:{},
                euro:{},
                sterlin:{},
                japonYeni:{},
                isvecKronu:{},
                bulgarLevasi:{},
                danimarkaKronu:{},
                isvicreFrangi:{},
                kanadaDolari:{},
                kuveytDinari:{},
                norvecKronu:{},
                rumenLeyi:{},
                rusRublesi:{},
                iranRiyali:{},
                cinYuani:{},
                suudiArabistanRiyali:{},
                pakistanRupisi:{},
                katarRiyali:{},
            }
         }
      

      async componentDidMount(){
        let resp=await fetch('https://finans.truncgil.com/today.json');    
        let respJson= await resp.json()
       
        this.setState({data:respJson})
        this.setState({
            myData:{
                abdDolari:this.state.data['ABD DOLARI'],
                euro:this.state.data.EURO,
                sterlin:this.state.data['İNGİLİZ STERLİNİ'],
                japonYeni:this.state.data['JAPON YENİ'],
                isvecKronu:this.state.data['İSVEÇ KRONU'],
                bulgarLevasi:this.state.data['BUŞGAR LEVASI'],
                danimarkaKronu:this.state.data['DANİMARKA KRONU'],
                isvicreFrangi:this.state.data['İSVİÇRE FRANGI'],
                kuveytDinari:this.state.data['KUVEYT DİNARI'],
                norvecKronu:this.state.data['NORVEÇ KRONU'],
                rumenLeyi:this.state.data['RUMEN LEYİ'],
                rusRublesi:this.state.data['RUS RUBLESİ'],
                iranRiyali:this.state.data['İRAN RİYALİ'],
                cinYuani:this.state.data['ÇİN YUANI'],
                suudiArabistanRiyali:this.state.data['SUUDİ ARABİSTAN RİYALİ'],
                pakistanRupisi:this.state.data['PAKİSTAN RUPİSİ'],
                katarRiyali:this.state.data['KATAR RİYALİ']
            }
        })
      
    }
    

   
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.borsa}>
                
               

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:102,paddingRight:10,color:'#89ac76' ,fontWeight:'bold'}}>$  DOLAR:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.abdDolari.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.abdDolari.Satış}</Text>
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:93,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>£  STERLİN:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.sterlin.Alış} </Text>
                    <Text style={styles.padding}>{this.state.myData.sterlin.Satış}</Text>
                </View>

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:96,paddingRight:10 ,color:'#89ac76' ,fontWeight:'bold'}}>ÇİN YUANI:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.cinYuani.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.cinYuani.Satış}</Text>
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:87,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>İRAN RİYALİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.iranRiyali.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.iranRiyali.Satış}</Text>
                </View>

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:86,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>RUMEN LEYİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.rumenLeyi.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.rumenLeyi.Satış}</Text>
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:86,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>JAPON YENİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.japonYeni.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.japonYeni.Satış}</Text>
                </View>

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:81,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>RUS RUBLESİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.rusRublesi.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.rusRublesi.Satış}</Text>
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:78,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>İSVEÇ KRONU:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.isvecKronu.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.isvecKronu.Satış}</Text>
                </View>

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:67,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>KUVEYT DİNARI:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.kuveytDinari.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.kuveytDinari.Satış}</Text>  
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:66,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>BULGAR LEVASİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.bulgarLevasi.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.bulgarLevasi.Satış}</Text>
                </View>
                
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:64,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>NORVEÇ KRONU:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.norvecKronu.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.norvecKronu.Satış}</Text>
                </View>
                
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:63,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>İSVİÇRE FRANGI:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.isvicreFrangi.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.isvicreFrangi.Satış}</Text>
                </View>

                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:59,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>KANADA DOLARI:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.kanadaDolari.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.kanadaDolari.Satış}</Text>
                </View>
                
                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:55,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>PAKİSTAN RUPİSİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.pakistanRupisi.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.pakistanRupisi.Satış}</Text>
                </View>
               
                <View style={styles.birimlerAlt}>
                    <Text style={{paddingLeft:39,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>DANİMARKA KRONU:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.danimarkaKronu.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.danimarkaKronu.Satış}</Text>
                </View>

                <View style={styles.birimlerUst}>
                    <Text style={{paddingLeft:10,paddingRight:10 ,color:'#89ac76',fontWeight:'bold'}}>SUUDİ ARABİSTAN RİYALİ:</Text>
                    <Text style={styles.paddingLeft}>{this.state.myData.suudiArabistanRiyali.Alış}</Text>
                    <Text style={styles.padding}>{this.state.myData.suudiArabistanRiyali.Satış}</Text>
                </View>
                
            </View>
        </View>
        )}
}   
const styles = StyleSheet.create({
    container: {
      flex: 24,
      
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
      backgroundColor:'silver',
    
    },
    birimlerAlt:{
        paddingTop:10,
        flexDirection:'row',
      },
  });