var custoDeFabrica = 0;
var impostos = 0;
var distribuidor = 0;
var novoValorCarro = 0;

custoDeFabrica = prompt('Digite o valor do veículo:');
custoDeFabrica = custoDeFabrica * 1;
console.log(custoDeFabrica , 'Custo do veículo de fábrica');
distribuidor = custoDeFabrica * 0.30;
console.log(distribuidor , 'Custo do veículo do distribuidor');
impostos = custoDeFabrica * 0.45;
console.log(impostos , 'Custo do veículo de impostos');
novoValorCarro = custoDeFabrica + impostos + distribuidor;

console.log('Custo veículo, para o consumidor:' , novoValorCarro);