//Abstração
var abstr = ['uma linda tarde de outono', 'O doce beijo da felicidade', 'o mais sincero âmago', 'o desejo mais pueril','o sombrio silêncio da madrugada'];
var senti = ['o amor', 'a esperança', 'a felicidade', 'a tristeza','o anseio'];
// Substantivos
var sub1p = ['meu coração', 'minha alma', 'minha Razão', 'meu rancor','meu medo'];
var sub2p = ['teu colo', 'teu peito', 'tua pele', 'teu corpo','tua mão'];
//adjetivos
var adjfm = ['angélica', 'bela', 'única', 'vívida','estranha'];
var adjne = ['radiante', 'exuberante', 'confortante', 'invejável','infalível'];
var adjma = ['cansado', 'ferido', 'amável', 'belo','vivo'];

//verbos em primeira pessoa
var prtp1 = ['senti','escolhi','amei','vivi','lambi','corri']
//Verbos segunda pessoa
var pres2 = ['Fere', 'Entende', 'Supera', 'Sublima','escolhe'];

// Controle
//O prmeiro valora me mostra o valor do menor array
//O segundo onde procurar

var minimo =[];
 minimo.push(abstr.length);
 minimo.push(senti.length);
 minimo.push(sub1p.length);
 minimo.push(sub2p.length);
 minimo.push(adjfm.length);
 minimo.push(adjne.length);
 minimo.push(adjma.length);
 minimo.push(pres2.length);
 minimo.push(prtp1.length);

 var qtd = minimo.map(Number).reduce(function(a, b) {
    return Math.min(a, b);
  });

console.log(qtd);
console.log(minimo);