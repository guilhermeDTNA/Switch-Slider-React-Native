import React, {Component} from 'react';
import {View, StyleSheet, Picker, Text, Switch, Slider} from 'react-native';

export default class PrimeiroProjeto extends Component{
  constructor(props){
    super(props);
    this.state = {
      servico:0,  
      servicos:[
      {nome: 'Alinhamento', valor:'30'},
      {nome: 'Balanceamento', valor:'20'},
      {nome: 'Rodízio de pneus', valor:'50'},
      {nome: 'TestDrive', valor:'10'}
      ],
      valor: false,
      slider: 50
    };
  }



  render(){
    let servicosItems = this.state.servicos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });

    //Oculta todas as warnings messages
    console.disableYellowBox = true;

    return(
      <View style={styles.body}>
      <View style={styles.picker}>
      <Text style={styles.logo}>Usando o Picker</Text>
      <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico: itemValue})}>
      {servicosItems}
      </Picker>
      <Text style={styles.texto}>R$ {parseFloat(this.state.servicos[this.state.servico].valor).toFixed(2)}</Text>
      </View>

      <View style={styles.switch}>
      <Text style={styles.logo}>Usando o Switch </Text>

      <Switch value={this.state.valor} thumbColor="blue" onTintColor="red" onValueChange={(v) => this.setState({valor:v})} /> 
      <Text>{(this.state.valor)?"Selecionado":"Não selecionado"}</Text>
      </View>
      <View style={styles.slider}>
      <Text style={styles.logo}>Usando o Slider </Text>
      <Slider value={this.state.slider} minimumTrackTintColor="yellow" minimumValue={0} maximumValue={100} onValueChange={(v) => this.setState({slider:v})} />
      <Text> {this.state.slider.toFixed(0)}%</Text>
      </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop: 5,
    flex: 3
  },
  picker:{
    flex:1,
    backgroundColor: '#DDDDDD'
  },
  switch:{
    flex:1,
    backgroundColor: '#DDDDDD',
    marginTop: 5 
  },
  slider:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#DDDDDD',
    marginTop: 5,
    paddingBottom: 24
  },
  logo:{
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  texto:{
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20
  }
})