//Abstração
var abstrato = ['uma linda tarde de outono', 'o doce beijo da felicidade', 'o mais sincero âmago', 'o desejo mais pueril', 'o sombrio silêncio da madrugada'];
var senti = ['o amor', 'a esperança', 'a felicidade', 'a tristeza', 'o anseio'];
abstrato.sort(() => Math.random() - 0.5);
senti.sort(() => Math.random() - 0.5);
// Substantivos
var subst1p = ['meu coração', 'minha alma', 'minha razão', 'meu rancor', 'meu medo'];
var subst2p = ['teu colo', 'teu peito', 'tua pele', 'teu corpo', 'tua mão'];
var substMSing = ['livro', 'sapato', 'telefone', 'radio', 'portão', 'computador', 'ferro','bastão','óculos']
var animal = ['borboleta','vaca','pássaro','zebra','macaco','gato','corvo','pato','cobra','aranha','serpente']
var corpo = ['mão','pé','sovaco','cabelo','seio','bumbum','abdômen','testa','cabeça','braço','perna','orelha','olho','boca','retina','mamilo','umbigo']
var corpoFemSing=['mão','cabeça','retina','testa','perna','orelha','boca','clavícula','unha','narina','nádega'];
subst1p.sort(() => Math.random() - 0.5);
subst2p.sort(() => Math.random() - 0.5);
substMSing.sort(() => Math.random() - 0.5);
animal.sort(() => Math.random() - 0.5);
corpo.sort(() => Math.random() - 0.5);
//adjetivos
var adjetivoF = ['angélica', 'bela', 'única', 'vívida', 'estranha'];
var adjetivoN = ['radiante', 'exuberante', 'confortante', 'invejável', 'infalível'];
var adjetivoM = ['cansado', 'ferido', 'amável', 'belo', 'vivo'];
adjetivoF.sort(() => Math.random() - 0.5);
adjetivoN.sort(() => Math.random() - 0.5);
adjetivoM.sort(() => Math.random() - 0.5);

//###########################Conjugação de verbos
var conjar = ['am', 'fal', 'estud', 'gost', 'ach', 'cant', 'cham', 'us', 'lev', 'olh', 'esper', 'avis', 'nad', 'convid', 'particip', 'chor', 'pass', 'deix', 'cont', 'entr', 'namor', 'trabalh'];
var conjer = ['viv', 'corr', 'escolh', 'com', 'viv', 'vend', 'aprend', 'debat', 'beb', 'receb', 'escrev', 'bat', 'escolh', 'permanec', 'aparec', 'exerc', 'sofr', 'merec', 'venc', 'morr', 'varr', 'compreend'];
var conjir = ['part', 'divid', 'desist', 'cumpr', 'assist', 'adquir', 'corrig', 'abr', 'imprim', 'fing', 'permit', 'discut', 'decid', 'garant', 'emit', 'resist', 'insist', 'invad', 'prescind', 'confund', 'sent', 'repart'];;

// Presente do indicativo
let reg1SPresInd = [];
let reg2SPresInd = [];
let reg3SPresInd = [];
let reg1PPresInd = [];
let reg2PPresInd = [];
let reg3PPresInd = [];

//Pretérito perfeito do indicativo
let reg1SPretPerfInd = [];
let reg2SPretPerfInd = [];
let reg3SPretPerfInd = [];
let reg1PPretPerfInd = [];
let reg2PPretPerfInd = [];
let reg3PPretPerfInd = [];

//Pretérito imperfeito do indicativo
let reg1SPretImpInd = [];
let reg2SPretImpInd = [];
let reg3SPretImpInd = [];
let reg1PPretImpInd = [];
let reg2PPretImpInd = [];
let reg3PPretImpInd = [];

//Pretérito mais que perfeito do indicativo
let reg1SPretMqp = [];
let reg2SPretMqp = [];
let reg3SPretMqp = [];
let reg1PPretMqp = [];
let reg2PPretMqp = [];
let reg3PPretMqp = [];

//Futuro do presente
let reg1SFutPres = [];
let reg2SFutPres = [];
let reg3SFutPres = [];
let reg1PFutPres = [];
let reg2PFutPres = [];
let reg3PFutPres = [];

//Futuro do pretérito
let reg1SFutPret = [];
let reg2SFutPret = [];
let reg3SFutPret = [];
let reg1PFutPret = [];
let reg2PFutPret = [];
let reg3PFutPret = [];

//Presente do subjuntivo
let reg1SPresSub = [];
let reg2SPresSub = [];
let reg3SPresSub = [];
let reg1PPresSub = [];
let reg2PPresSub = [];
let reg3PPresSub = [];

//Pretérito Imperfeito do subjuntivo
let reg1SPretImpSub = [];
let reg2SPretImpSub = [];
let reg3SPretImpSub = [];
let reg1PPretImpSub = [];
let reg2PPretImpSub = [];
let reg3PPretImpSub = [];

//Futuro do subjuntivo
let reg1SFutSub = [];
let reg2SFutSub = [];
let reg3SFutSub = [];
let reg1PFutSub = [];
let reg2PFutSub = [];
let reg3PFutSub = [];

//Imperativo Afirmativo
let reg2SImpAf = [];
let reg3SImpAf = [];
let reg1PImpAf = [];
let reg2PImpAf = [];
let reg3PImpAf = [];

//Imperativo Negativo
let reg2SImpNeg = [];
let reg3SImpNeg = [];
let reg1PImpNeg = [];
let reg2PImpNeg = [];
let reg3PImpNeg = [];

//Formas nominais
let infinitivo = [];
let participio = [];
let gerundio = [];

//Verbos Irregulares
irrInfinitivo = ['ser', 'estar', 'haver', 'pôr', 'saber', 'poder', 'medir', 'fazer', 'vir', 'dar', 'trazer', 'dizer', 'querer', 'pedir', 'ouvir', 'caber']
irrGerundio = ['sendo', 'estando', 'havendo', 'pondo', 'sabendo', 'podendo', 'medindo', 'fazendo', 'vindo', 'dando', 'trazendo', 'dizendo', 'querendo', 'pedindo', 'ouvindo', 'cabendo']
irrParticipio = ['sido', 'estado', 'havido', 'posto']
//Presente do indicativo
irr1SPresInd = ['sou', 'estou', 'hei', 'ponho']
irr2SPresInd = ['és', 'estás', 'hás', 'pões']
irr3SPresInd = ['é', 'está', 'há', 'põe']
irr1PPresInd = ['somos', 'estamos', 'havemos', 'pomos']
irr2PPresInd = ['sois', 'estais', 'haveis', 'pondes']
irr3PPresInd = ['são', 'estão', 'hão', 'põem']
//pretérito imperfeito do indicativo
irr1SPretImpInd = ['era', 'estava', 'havia', 'punha']
irr2SPretImpInd = ['eras', 'estavas', 'havias', 'punhas']
irr3SPretImpInd = ['era', 'estava', 'havia', 'punha']
irr1PPretImpInd = ['éramos', 'estávamos', 'havíamos', 'púnhamos']
irr2PPretImpInd = ['éreis', 'estáveis', 'havíeis', 'púnheis']
irr3PPretImpInd = ['eram', 'estavam', 'haviam', 'punham']
//Pretérito perfeito do indicativo
irr1SPretPerfInd = ['fui', 'estive', 'houve', 'pus']
irr2SPretPerfInd = ['foste', 'estiveste', 'houveste', 'puseste']
irr3SPretPerfInd = ['foi', 'esteves', 'houve', 'pôs']
irr1PPretPerfInd = ['fomos', 'estivemos', 'houvemos', 'pusemos']
irr2PPretPerfInd = ['fostes', 'estivestes', 'houvestes', 'pusestes']
irr3PPretPerfInd = ['foram', 'estiveram', 'houveram', 'puseram']
//Pretérito mais que perfeito do indicativo
irr1SPretMQPInd = ['fora', 'estivera', 'houvera', 'pusera']
irr2SPretMQPInd = ['foras', 'estiveras', 'houveras', 'puseras']
irr3SPretMQPInd = ['fora', 'estivera', 'houvera', 'puseras']
irr1PPretMQPInd = ['fôramos', 'esvtivéramos', 'houvéramos', 'puséramos']
irr2PPretMQPInd = ['fôreis', 'estivéreis', 'houvéreis', 'puséreis']
irr3PPretMQPInd = ['foram', 'estiveram', 'houveram', 'puseram']
//Futuro do presente do indicativo
irr1SFutPresInd = ['serei', 'estarei', 'haverei', 'porei']
irr2SFutPresInd = ['serás', 'estarás', 'haverás', 'porás']
irr3SFutPresInd = ['será', 'estará', 'haverá', 'porá']
irr1PFutPresInd = ['seremos', 'estaremos', 'haveremos', 'poremos']
irr2PFutPresInd = ['sereis', 'estarieis', 'havereis', 'poreis']
irr3PFutPresInd = ['serão', 'estarão', 'haverão', 'porão']
//Futuro do Pretérito do indicativo
irr1SFutPretInd = ['seria', 'estaria', 'haveria', 'poria']
irr2SFutPretInd = ['serias', 'estarias', 'haverias', 'porias']
irr3SFutPretInd = ['seria', 'estaria', 'haveria', 'poria']
irr1PFutPretInd = ['seríamos', 'estaríamos', 'haveríamos', 'poríamos']
irr2PFutPretInd = ['serieis', 'estaríeis', 'haveríeis', 'poríeis']
irr3PFutPretInd = ['seriam', 'estariam', 'haveriam', 'poriam']
//Presente do subjuntivo
irr1SPresSub = ['seja', 'esteja', 'haja', 'ponha']
irr2SPresSub = ['sejas', 'estejas', 'hajas', 'ponhas']
irr3SPresSub = ['seja', 'esteja', 'haja', 'ponha']
irr1PPresSub = ['sejamos', 'estejamos', 'hajamos', 'ponhamos']
irr2PPresSub = ['sejais', 'estejais', 'hajais', 'ponhais']
irr3PPresSub = ['sejam', 'estejam', 'hajam', 'ponham']
//Pretérito Imperfeito do subjuntivo
irr1SPretImpSub = ['fosse', 'estivesse', 'houvesse', 'pusesse']
irr2SPretImpSub = ['fosses', 'estivesses', 'houvesses', 'pusesses']
irr3SPretImpSub = ['fosse', 'estivesse', 'houvesse', 'pusesse']
irr1PPretImpSub = ['fôssemos', 'estivéssemos', 'houvéssemos', 'puséssemos']
irr2PPretImpSub = ['fosseis', 'estivésseis', 'houvésseis', 'pusésseis']
irr3PPretImpSub = ['fossem', 'estivessem', 'houvessem', 'pusessem']
//Futuro do subjuntivo
irr1SFutSub = ['for', 'estiver', 'houver', 'puser']
irr2SFutSub = ['fores', 'estiveres', 'houveres', 'puseres']
irr3SFutSub = ['for', 'estiver', 'houver', 'puser']
irr1PFutSub = ['formos', 'estivermos', 'houvermos', 'pusermos']
irr2PFutSub = ['fordes', 'estiverdes', 'houverdes', 'puserdes']
irr3PFutSub = ['forem', 'estiverem', 'houverem', 'puserem']
//Imperativo Afirmativo
irr2SImpAf = ['sê', 'está', 'há', 'põe']
irr3SImpAf = ['seja', 'esteja', 'haja', 'ponha']
irr1PImpAf = ['sejamos', 'estejamos', 'hajamos', 'ponhamos']
irr2PImpAf = ['sede', 'estai', 'havei', 'ponde']
irr3PImpAf = ['sejam', 'estejam', 'hajam', 'ponham']
//Imperativo Afirmativo
irr2SImpNeg = ['sejas', 'estejas', 'hajas', 'põe']
irr3SImpNeg = ['seja', 'esteja', 'haja', 'ponha']
irr1PImpNeg = ['sejamos', 'estejamos', 'hajamos', 'ponhamos']
irr2PImpNeg = ['sejais', 'estejais', 'hajais', 'ponde']
irr3PImpNeg = ['sejam', 'estejam', 'hajam', 'pondam']
//Imfinitivo Pessoal
irr1SInfPes = ['ser', 'estar', 'haver']
irr2SInfPes = ['seres', 'estares', 'haveres']
irr3SInfPes = ['ser', 'estar', 'haver']
irr1PInfPes = ['sermos', 'estarmos', 'havermos']
irr2PInfPes = ['serdes', 'estardes', 'haverdes']
irr3PInfPes = ['serem', 'estarem', 'haverem']


for (let i = 0; i < 22; i++) {
  // Presente do indicativo
  reg1SPresInd.push(conjar[i] + 'o');
  reg1SPresInd.push(conjer[i] + 'o');
  reg1SPresInd.push(conjir[i] + 'o');
  reg1SPresInd.sort(() => Math.random() - 0.5);
  reg2SPresInd.push(conjar[i] + 'as');
  reg2SPresInd.push(conjer[i] + 'es');
  reg2SPresInd.push(conjir[i] + 'es');
  reg2SPresInd.sort(() => Math.random() - 0.5);
  reg3SPresInd.push(conjar[i] + 'a');
  reg3SPresInd.push(conjer[i] + 'e');
  reg3SPresInd.push(conjir[i] + 'e');
  reg3SPresInd.sort(() => Math.random() - 0.5);
  reg1PPresInd.push(conjar[i] + 'amos');
  reg1PPresInd.push(conjer[i] + 'emos');
  reg1PPresInd.push(conjir[i] + 'imos');
  reg1PPresInd.sort(() => Math.random() - 0.5);
  reg2PPresInd.push(conjar[i] + 'ais');
  reg2PPresInd.push(conjer[i] + 'eis');
  reg2PPresInd.push(conjir[i] + 'is');
  reg2PPresInd.sort(() => Math.random() - 0.5);
  reg3PPresInd.push(conjar[i] + 'am');
  reg3PPresInd.push(conjer[i] + 'em');
  reg3PPresInd.push(conjir[i] + 'em');
  reg3PPresInd.sort(() => Math.random() - 0.5);

  //Pretérito perfeito do indicativo
  reg1SPretPerfInd.push(conjar[i] + 'ei');
  reg1SPretPerfInd.push(conjer[i] + 'i');
  reg1SPretPerfInd.push(conjir[i] + 'i');
  reg1SPretPerfInd.sort(() => Math.random() - 0.5);
  reg2SPretPerfInd.push(conjar[i] + 'aste');
  reg2SPretPerfInd.push(conjer[i] + 'este');
  reg2SPretPerfInd.push(conjir[i] + 'iste');
  reg2SPretPerfInd.sort(() => Math.random() - 0.5);
  reg3SPretPerfInd.push(conjar[i] + 'ou');
  reg3SPretPerfInd.push(conjer[i] + 'eu');
  reg3SPretPerfInd.push(conjir[i] + 'iu');
  reg3SPretPerfInd.sort(() => Math.random() - 0.5);
  reg1PPretPerfInd.push(conjar[i] + 'amos');
  reg1PPretPerfInd.push(conjer[i] + 'emos');
  reg1PPretPerfInd.push(conjir[i] + 'imos');
  reg1PPretPerfInd.sort(() => Math.random() - 0.5);
  reg2PPretPerfInd.push(conjar[i] + 'astes');
  reg2PPretPerfInd.push(conjer[i] + 'estes');
  reg2PPretPerfInd.push(conjir[i] + 'istes');
  reg2PPretPerfInd.sort(() => Math.random() - 0.5);
  reg3PPretPerfInd.push(conjar[i] + 'aram');
  reg3PPretPerfInd.push(conjer[i] + 'erem');
  reg3PPretPerfInd.push(conjir[i] + 'iram');
  reg3PPretPerfInd.sort(() => Math.random() - 0.5);

  // Pretérito Imperfeito do Indicativo
  reg1SPretImpInd.push(conjar[i] + 'ava');
  reg1SPretImpInd.push(conjer[i] + 'ia');
  reg1SPretImpInd.push(conjir[i] + 'ia');
  reg1SPretImpInd.sort(() => Math.random() - 0.5);
  reg2SPretImpInd.push(conjar[i] + 'avas');
  reg2SPretImpInd.push(conjer[i] + 'ias');
  reg2SPretImpInd.push(conjir[i] + 'ias');
  reg2SPretImpInd.sort(() => Math.random() - 0.5);
  reg3SPretImpInd.push(conjar[i] + 'ava');
  reg3SPretImpInd.push(conjer[i] + 'ia');
  reg3SPretImpInd.push(conjir[i] + 'ia');
  reg3SPretImpInd.sort(() => Math.random() - 0.5);
  reg1PPretImpInd.push(conjar[i] + 'ávamos');
  reg1PPretImpInd.push(conjer[i] + 'íamos');
  reg1PPretImpInd.push(conjir[i] + 'íamos');
  reg1PPretImpInd.sort(() => Math.random() - 0.5);
  reg2PPretImpInd.push(conjar[i] + 'áveis');
  reg2PPretImpInd.push(conjer[i] + 'íeis');
  reg2PPretImpInd.push(conjir[i] + 'íeis');
  reg2PPretImpInd.sort(() => Math.random() - 0.5);
  reg3PPretImpInd.push(conjar[i] + 'avam');
  reg3PPretImpInd.push(conjer[i] + 'iam');
  reg3PPretImpInd.push(conjir[i] + 'iam');
  reg3PPretImpInd.sort(() => Math.random() - 0.5);

  //Pretérito mais que perfeito do indicativo
  reg1SPretMqp.push(conjar[i] + 'ara');
  reg1SPretMqp.push(conjer[i] + 'era');
  reg1SPretMqp.push(conjir[i] + 'ira');
  reg1SPretMqp.sort(() => Math.random() - 0.5);
  reg2SPretMqp.push(conjar[i] + 'aras');
  reg2SPretMqp.push(conjer[i] + 'eras');
  reg2SPretMqp.push(conjir[i] + 'iras');
  reg2SPretMqp.sort(() => Math.random() - 0.5);
  reg3SPretMqp.push(conjar[i] + 'ara');
  reg3SPretMqp.push(conjer[i] + 'era');
  reg3SPretMqp.push(conjir[i] + 'ira');
  reg3SPretMqp.sort(() => Math.random() - 0.5);
  reg1PPretMqp.push(conjar[i] + 'áramos');
  reg1PPretMqp.push(conjer[i] + 'êramos');
  reg1PPretMqp.push(conjir[i] + 'íramos');
  reg1PPretMqp.sort(() => Math.random() - 0.5);
  reg2PPretMqp.push(conjar[i] + 'áreis');
  reg2PPretMqp.push(conjer[i] + 'êreis');
  reg2PPretMqp.push(conjir[i] + 'íreis');
  reg2PPretMqp.sort(() => Math.random() - 0.5);
  reg3PPretMqp.push(conjar[i] + 'aram');
  reg3PPretMqp.push(conjer[i] + 'eram');
  reg3PPretMqp.push(conjir[i] + 'iram');
  reg3PPretMqp.sort(() => Math.random() - 0.5);

  // Futuro do presente
  reg1SFutPres.push(conjar[i] + 'arei');
  reg1SFutPres.push(conjer[i] + 'erei');
  reg1SFutPres.push(conjir[i] + 'irei');
  reg1SFutPres.sort(() => Math.random() - 0.5);
  reg2SFutPres.push(conjar[i] + 'arás');
  reg2SFutPres.push(conjer[i] + 'erás');
  reg2SFutPres.push(conjir[i] + 'irás');
  reg2SFutPres.sort(() => Math.random() - 0.5);
  reg3SFutPres.push(conjar[i] + 'ará');
  reg3SFutPres.push(conjer[i] + 'erá');
  reg3SFutPres.push(conjir[i] + 'irá');
  reg3SFutPres.sort(() => Math.random() - 0.5);
  reg1PFutPres.push(conjar[i] + 'aremos');
  reg1PFutPres.push(conjer[i] + 'eremos');
  reg1PFutPres.push(conjir[i] + 'iremos');
  reg1PFutPres.sort(() => Math.random() - 0.5);
  reg2PFutPres.push(conjar[i] + 'areis');
  reg2PFutPres.push(conjer[i] + 'ereis');
  reg2PFutPres.push(conjir[i] + 'ireis');
  reg2PFutPres.sort(() => Math.random() - 0.5);
  reg3PFutPres.push(conjar[i] + 'arão');
  reg3PFutPres.push(conjer[i] + 'erão');
  reg3PFutPres.push(conjir[i] + 'irão');
  reg3PFutPres.sort(() => Math.random() - 0.5);

  // Futuro do pretérito
  reg1SFutPret.push(conjar[i] + 'aria');
  reg1SFutPret.push(conjer[i] + 'eria');
  reg1SFutPret.push(conjir[i] + 'iria');
  reg1SFutPret.sort(() => Math.random() - 0.5);
  reg2SFutPret.push(conjar[i] + 'arias');
  reg2SFutPret.push(conjer[i] + 'erias');
  reg2SFutPret.push(conjir[i] + 'irias');
  reg2SFutPret.sort(() => Math.random() - 0.5);
  reg3SFutPret.push(conjar[i] + 'aria');
  reg3SFutPret.push(conjer[i] + 'eria');
  reg3SFutPret.push(conjir[i] + 'iria');
  reg3SFutPret.sort(() => Math.random() - 0.5);
  reg1PFutPret.push(conjar[i] + 'aríamos');
  reg1PFutPret.push(conjer[i] + 'eríamos');
  reg1PFutPret.push(conjir[i] + 'iríamos');
  reg1PFutPret.sort(() => Math.random() - 0.5);
  reg2PFutPret.push(conjar[i] + 'aríeis');
  reg2PFutPret.push(conjer[i] + 'eríeis');
  reg2PFutPret.push(conjir[i] + 'iríeis');
  reg2PFutPret.sort(() => Math.random() - 0.5);
  reg3PFutPret.push(conjar[i] + 'ariam');
  reg3PFutPret.push(conjer[i] + 'eriam');
  reg3PFutPret.push(conjir[i] + 'iriam');
  reg3PFutPret.sort(() => Math.random() - 0.5);

  // Presente do subjuntivo
  reg1SPresSub.push(conjar[i] + 'e');
  reg1SPresSub.push(conjer[i] + 'a');
  reg1SPresSub.push(conjir[i] + 'a');
  reg1SPresSub.sort(() => Math.random() - 0.5);
  reg2SPresSub.push(conjar[i] + 'es');
  reg2SPresSub.push(conjer[i] + 'a');
  reg2SPresSub.push(conjir[i] + 'a');
  reg2SPresSub.sort(() => Math.random() - 0.5);
  reg3SPresSub.push(conjar[i] + 'e');
  reg3SPresSub.push(conjer[i] + 'a');
  reg3SPresSub.push(conjir[i] + 'a');
  reg3SPresSub.sort(() => Math.random() - 0.5);
  reg1PPresSub.push(conjar[i] + 'emos');
  reg1PPresSub.push(conjer[i] + 'amos');
  reg1PPresSub.push(conjir[i] + 'amos');
  reg1PPresSub.sort(() => Math.random() - 0.5);
  reg2PPresSub.push(conjar[i] + 'eis');
  reg2PPresSub.push(conjer[i] + 'ais');
  reg2PPresSub.push(conjir[i] + 'ais');
  reg2PPresSub.sort(() => Math.random() - 0.5);
  reg3PPresSub.push(conjar[i] + 'em');
  reg3PPresSub.push(conjer[i] + 'am');
  reg3PPresSub.push(conjir[i] + 'am');
  reg3PPresSub.sort(() => Math.random() - 0.5);

  // Pretérito Imperfeito do subjuntivo
  reg1SPretImpSub.push(conjar[i] + 'asse');
  reg1SPretImpSub.push(conjer[i] + 'esse');
  reg1SPretImpSub.push(conjir[i] + 'isse');
  reg1SPretImpSub.sort(() => Math.random() - 0.5);
  reg2SPretImpSub.push(conjar[i] + 'asses');
  reg2SPretImpSub.push(conjer[i] + 'esses');
  reg2SPretImpSub.push(conjir[i] + 'isses');
  reg2SPretImpSub.sort(() => Math.random() - 0.5);
  reg3SPretImpSub.push(conjar[i] + 'asse');
  reg3SPretImpSub.push(conjer[i] + 'esse');
  reg3SPretImpSub.push(conjir[i] + 'isse');
  reg3SPretImpSub.sort(() => Math.random() - 0.5);
  reg1PPretImpSub.push(conjar[i] + 'ássemos');
  reg1PPretImpSub.push(conjer[i] + 'êssemos');
  reg1PPretImpSub.push(conjir[i] + 'íssemos');
  reg1PPretImpSub.sort(() => Math.random() - 0.5);
  reg2PPretImpSub.push(conjar[i] + 'ásseis');
  reg2PPretImpSub.push(conjer[i] + 'êsseis');
  reg2PPretImpSub.push(conjir[i] + 'ísseis');
  reg2PPretImpSub.sort(() => Math.random() - 0.5);
  reg3PPretImpSub.push(conjar[i] + 'assem');
  reg3PPretImpSub.push(conjer[i] + 'essem');
  reg3PPretImpSub.push(conjir[i] + 'issem');
  reg3PPretImpSub.sort(() => Math.random() - 0.5);

  // Futuro do subjuntivo
  reg1SFutSub.push(conjar[i] + 'ar');
  reg1SFutSub.push(conjer[i] + 'er');
  reg1SFutSub.push(conjir[i] + 'ir');
  reg1SFutSub.sort(() => Math.random() - 0.5);
  reg2SFutSub.push(conjar[i] + 'ares');
  reg2SFutSub.push(conjer[i] + 'eres');
  reg2SFutSub.push(conjir[i] + 'ires');
  reg2SFutSub.sort(() => Math.random() - 0.5);
  reg3SFutSub.push(conjar[i] + 'ar');
  reg3SFutSub.push(conjer[i] + 'er');
  reg3SFutSub.push(conjir[i] + 'ir');
  reg3SFutSub.sort(() => Math.random() - 0.5);
  reg1PFutSub.push(conjar[i] + 'armos');
  reg1PFutSub.push(conjer[i] + 'ermos');
  reg1PFutSub.push(conjir[i] + 'irmos');
  reg1PFutSub.sort(() => Math.random() - 0.5);
  reg2PFutSub.push(conjar[i] + 'ardes');
  reg2PFutSub.push(conjer[i] + 'erdes');
  reg2PFutSub.push(conjir[i] + 'irdes');
  reg2PFutSub.sort(() => Math.random() - 0.5);
  reg3PFutSub.push(conjar[i] + 'arem');
  reg3PFutSub.push(conjer[i] + 'erem');
  reg3PFutSub.push(conjir[i] + 'irem');
  reg3PFutSub.sort(() => Math.random() - 0.5);

  // Imperativo Afirmativo
  reg2SImpAf.push(conjar[i] + 'a');
  reg2SImpAf.push(conjer[i] + 'e');
  reg2SImpAf.push(conjir[i] + 'e');
  reg2SImpAf.sort(() => Math.random() - 0.5);
  reg3SImpAf.push(conjar[i] + 'e');
  reg3SImpAf.push(conjer[i] + 'a');
  reg3SImpAf.push(conjir[i] + 'a');
  reg3SImpAf.sort(() => Math.random() - 0.5);
  reg1PImpAf.push(conjar[i] + 'emos');
  reg1PImpAf.push(conjer[i] + 'amos');
  reg1PImpAf.push(conjir[i] + 'amos');
  reg1PImpAf.sort(() => Math.random() - 0.5);
  reg2PImpAf.push(conjar[i] + 'ai');
  reg2PImpAf.push(conjer[i] + 'ei');
  reg2PImpAf.push(conjir[i] + 'i');
  reg2PImpAf.sort(() => Math.random() - 0.5);
  reg3PImpAf.push(conjar[i] + 'em');
  reg3PImpAf.push(conjer[i] + 'am');
  reg3PImpAf.push(conjir[i] + 'am');
  reg3PImpAf.sort(() => Math.random() - 0.5);

  // Imperativo Negativo
  reg2SImpNeg.push(conjar[i] + 'es');
  reg2SImpNeg.push(conjer[i] + 'as');
  reg2SImpNeg.push(conjir[i] + 'as');
  reg2SImpNeg.sort(() => Math.random() - 0.5);
  reg3SImpNeg.push(conjar[i] + 'e');
  reg3SImpNeg.push(conjer[i] + 'a');
  reg3SImpNeg.push(conjir[i] + 'a');
  reg3SImpNeg.sort(() => Math.random() - 0.5);
  reg1PImpNeg.push(conjar[i] + 'emos');
  reg1PImpNeg.push(conjer[i] + 'amos');
  reg1PImpNeg.push(conjir[i] + 'amos');
  reg1PImpNeg.sort(() => Math.random() - 0.5);
  reg2PImpNeg.push(conjar[i] + 'eis');
  reg2PImpNeg.push(conjer[i] + 'ais');
  reg2PImpNeg.push(conjir[i] + 'ais');
  reg2PImpNeg.sort(() => Math.random() - 0.5);
  reg3PImpNeg.push(conjar[i] + 'em');
  reg3PImpNeg.push(conjer[i] + 'am');
  reg3PImpNeg.push(conjir[i] + 'am');
  reg3PImpNeg.sort(() => Math.random() - 0.5);

  // Formas nominais
  infinitivo.push(conjar[i] + 'ar');
  infinitivo.push(conjer[i] + 'er');
  infinitivo.push(conjir[i] + 'ir');
  infinitivo.sort(() => Math.random() - 0.5);
  participio.push(conjar[i] + 'ado');
  participio.push(conjer[i] + 'ido');
  participio.push(conjir[i] + 'ido');
  participio.sort(() => Math.random() - 0.5);
  gerundio.push(conjar[i] + 'ando');
  gerundio.push(conjer[i] + 'endo');
  gerundio.push(conjir[i] + 'indo');
  gerundio.sort(() => Math.random() - 0.5);
}



// Controle
//O primeiro valora me mostra o valor do menor array
//O segundo onde procurar
var minimo = [];
minimo.push(abstrato.length);
minimo.push(senti.length);
minimo.push(subst1p.length);
minimo.push(subst2p.length);
minimo.push(adjetivoF.length);
minimo.push(adjetivoN.length);
minimo.push(adjetivoM.length);
minimo.push(conjar.length);
minimo.push(conjer.length);
minimo.push(conjir.length);
minimo.push(irrParticipio.length);

var qtd = minimo.map(Number).reduce(function (a, b) {
  return Math.min(a, b);
});

var max = minimo.map(Number).reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(gerundio + participio + infinitivo);
console.log(reg1SFutPret);