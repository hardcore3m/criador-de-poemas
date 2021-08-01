// ##########################################################################
//###########################                            Conjugação de verbos
// ##########################################################################


var conjar = ['am', 'fal', 'estud', 'gost', 'ach', 'cant', 'cham', 'us', 'lev', 'olh', 'esper', 'avis', 'nad', 'convid', 'particip', 'chor', 'pass', 'deix', 'cont', 'entr', 'namor', 'trabalh'];
var conjer = ['viv', 'corr', 'escolh', 'com', 'viv', 'vend', 'aprend', 'debat', 'beb', 'receb', 'escrev', 'bat', 'escolh', 'permanec', 'aparec', 'exerc', 'sofr', 'merec', 'venc', 'morr', 'varr', 'compreend'];
var conjir = ['part', 'divid', 'desist', 'cumpr', 'assist', 'adquir', 'corrig', 'abr', 'imprim', 'fing', 'permit', 'discut', 'decid', 'garant', 'emit', 'resist', 'insist', 'invad', 'prescind', 'confund', 'sent', 'repart'];;

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
  irr1SPresInd.push(conjar[i] + 'o');
  irr1SPresInd.push(conjer[i] + 'o');
  irr1SPresInd.push(conjir[i] + 'o');
  irr1SPresInd.sort(() => Math.random() - 0.5);
  irr2SPresInd.push(conjar[i] + 'as');
  irr2SPresInd.push(conjer[i] + 'es');
  irr2SPresInd.push(conjir[i] + 'es');
  irr2SPresInd.sort(() => Math.random() - 0.5);
  irr3SPresInd.push(conjar[i] + 'a');
  irr3SPresInd.push(conjer[i] + 'e');
  irr3SPresInd.push(conjir[i] + 'e');
  irr3SPresInd.sort(() => Math.random() - 0.5);
  irr1PPresInd.push(conjar[i] + 'amos');
  irr1PPresInd.push(conjer[i] + 'emos');
  irr1PPresInd.push(conjir[i] + 'imos');
  irr1PPresInd.sort(() => Math.random() - 0.5);
  irr2PPresInd.push(conjar[i] + 'ais');
  irr2PPresInd.push(conjer[i] + 'eis');
  irr2PPresInd.push(conjir[i] + 'is');
  irr2PPresInd.sort(() => Math.random() - 0.5);
  irr3PPresInd.push(conjar[i] + 'am');
  irr3PPresInd.push(conjer[i] + 'em');
  irr3PPresInd.push(conjir[i] + 'em');
  irr3PPresInd.sort(() => Math.random() - 0.5);

  //Pretérito perfeito do indicativo
  irr1SPretPerfInd.push(conjar[i] + 'ei');
  irr1SPretPerfInd.push(conjer[i] + 'i');
  irr1SPretPerfInd.push(conjir[i] + 'i');
  irr1SPretPerfInd.sort(() => Math.random() - 0.5);
  irr2SPretPerfInd.push(conjar[i] + 'aste');
  irr2SPretPerfInd.push(conjer[i] + 'este');
  irr2SPretPerfInd.push(conjir[i] + 'iste');
  irr2SPretPerfInd.sort(() => Math.random() - 0.5);
  irr3SPretPerfInd.push(conjar[i] + 'ou');
  irr3SPretPerfInd.push(conjer[i] + 'eu');
  irr3SPretPerfInd.push(conjir[i] + 'iu');
  irr3SPretPerfInd.sort(() => Math.random() - 0.5);
  irr1PPretPerfInd.push(conjar[i] + 'amos');
  irr1PPretPerfInd.push(conjer[i] + 'emos');
  irr1PPretPerfInd.push(conjir[i] + 'imos');
  irr1PPretPerfInd.sort(() => Math.random() - 0.5);
  irr2PPretPerfInd.push(conjar[i] + 'astes');
  irr2PPretPerfInd.push(conjer[i] + 'estes');
  irr2PPretPerfInd.push(conjir[i] + 'istes');
  irr2PPretPerfInd.sort(() => Math.random() - 0.5);
  irr3PPretPerfInd.push(conjar[i] + 'aram');
  irr3PPretPerfInd.push(conjer[i] + 'erem');
  irr3PPretPerfInd.push(conjir[i] + 'iram');
  irr3PPretPerfInd.sort(() => Math.random() - 0.5);

  // Pretérito Imperfeito do Indicativo
  irr1SPretImpInd.push(conjar[i] + 'ava');
  irr1SPretImpInd.push(conjer[i] + 'ia');
  irr1SPretImpInd.push(conjir[i] + 'ia');
  irr1SPretImpInd.sort(() => Math.random() - 0.5);
  irr2SPretImpInd.push(conjar[i] + 'avas');
  irr2SPretImpInd.push(conjer[i] + 'ias');
  irr2SPretImpInd.push(conjir[i] + 'ias');
  irr2SPretImpInd.sort(() => Math.random() - 0.5);
  irr3SPretImpInd.push(conjar[i] + 'ava');
  irr3SPretImpInd.push(conjer[i] + 'ia');
  irr3SPretImpInd.push(conjir[i] + 'ia');
  irr3SPretImpInd.sort(() => Math.random() - 0.5);
  irr1PPretImpInd.push(conjar[i] + 'ávamos');
  irr1PPretImpInd.push(conjer[i] + 'íamos');
  irr1PPretImpInd.push(conjir[i] + 'íamos');
  irr1PPretImpInd.sort(() => Math.random() - 0.5);
  irr2PPretImpInd.push(conjar[i] + 'áveis');
  irr2PPretImpInd.push(conjer[i] + 'íeis');
  irr2PPretImpInd.push(conjir[i] + 'íeis');
  irr2PPretImpInd.sort(() => Math.random() - 0.5);
  irr3PPretImpInd.push(conjar[i] + 'avam');
  irr3PPretImpInd.push(conjer[i] + 'iam');
  irr3PPretImpInd.push(conjir[i] + 'iam');
  irr3PPretImpInd.sort(() => Math.random() - 0.5);

  //Pretérito mais que perfeito do indicativo
  irr1SPretMQPInd.push(conjar[i] + 'ara');
  irr1SPretMQPInd.push(conjer[i] + 'era');
  irr1SPretMQPInd.push(conjir[i] + 'ira');
  irr1SPretMQPInd.sort(() => Math.random() - 0.5);
  irr2SPretMQPInd.push(conjar[i] + 'aras');
  irr2SPretMQPInd.push(conjer[i] + 'eras');
  irr2SPretMQPInd.push(conjir[i] + 'iras');
  irr2SPretMQPInd.sort(() => Math.random() - 0.5);
  irr3SPretMQPInd.push(conjar[i] + 'ara');
  irr3SPretMQPInd.push(conjer[i] + 'era');
  irr3SPretMQPInd.push(conjir[i] + 'ira');
  irr3SPretMQPInd.sort(() => Math.random() - 0.5);
  irr1PPretMQPInd.push(conjar[i] + 'áramos');
  irr1PPretMQPInd.push(conjer[i] + 'êramos');
  irr1PPretMQPInd.push(conjir[i] + 'íramos');
  irr1PPretMQPInd.sort(() => Math.random() - 0.5);
  irr2PPretMQPInd.push(conjar[i] + 'áreis');
  irr2PPretMQPInd.push(conjer[i] + 'êreis');
  irr2PPretMQPInd.push(conjir[i] + 'íreis');
  irr2PPretMQPInd.sort(() => Math.random() - 0.5);
  irr3PPretMQPInd.push(conjar[i] + 'aram');
  irr3PPretMQPInd.push(conjer[i] + 'eram');
  irr3PPretMQPInd.push(conjir[i] + 'iram');
  irr3PPretMQPInd.sort(() => Math.random() - 0.5);

  // Futuro do presente
  irr1SFutPresInd.push(conjar[i] + 'arei');
  irr1SFutPresInd.push(conjer[i] + 'erei');
  irr1SFutPresInd.push(conjir[i] + 'irei');
  irr1SFutPresInd.sort(() => Math.random() - 0.5);
  irr2SFutPresInd.push(conjar[i] + 'arás');
  irr2SFutPresInd.push(conjer[i] + 'erás');
  irr2SFutPresInd.push(conjir[i] + 'irás');
  irr2SFutPresInd.sort(() => Math.random() - 0.5);
  irr3SFutPresInd.push(conjar[i] + 'ará');
  irr3SFutPresInd.push(conjer[i] + 'erá');
  irr3SFutPresInd.push(conjir[i] + 'irá');
  irr3SFutPresInd.sort(() => Math.random() - 0.5);
  irr1PFutPresInd.push(conjar[i] + 'aremos');
  irr1PFutPresInd.push(conjer[i] + 'eremos');
  irr1PFutPresInd.push(conjir[i] + 'iremos');
  irr1PFutPresInd.sort(() => Math.random() - 0.5);
  irr2PFutPresInd.push(conjar[i] + 'areis');
  irr2PFutPresInd.push(conjer[i] + 'ereis');
  irr2PFutPresInd.push(conjir[i] + 'ireis');
  irr2PFutPresInd.sort(() => Math.random() - 0.5);
  irr3PFutPresInd.push(conjar[i] + 'arão');
  irr3PFutPresInd.push(conjer[i] + 'erão');
  irr3PFutPresInd.push(conjir[i] + 'irão');
  irr3PFutPresInd.sort(() => Math.random() - 0.5);

  // Futuro do pretérito
  irr1SFutPretInd.push(conjar[i] + 'aria');
  irr1SFutPretInd.push(conjer[i] + 'eria');
  irr1SFutPretInd.push(conjir[i] + 'iria');
  irr1SFutPretInd.sort(() => Math.random() - 0.5);
  irr2SFutPretInd.push(conjar[i] + 'arias');
  irr2SFutPretInd.push(conjer[i] + 'erias');
  irr2SFutPretInd.push(conjir[i] + 'irias');
  irr2SFutPretInd.sort(() => Math.random() - 0.5);
  irr3SFutPretInd.push(conjar[i] + 'aria');
  irr3SFutPretInd.push(conjer[i] + 'eria');
  irr3SFutPretInd.push(conjir[i] + 'iria');
  irr3SFutPretInd.sort(() => Math.random() - 0.5);
  irr1PFutPretInd.push(conjar[i] + 'aríamos');
  irr1PFutPretInd.push(conjer[i] + 'eríamos');
  irr1PFutPretInd.push(conjir[i] + 'iríamos');
  irr1PFutPretInd.sort(() => Math.random() - 0.5);
  irr2PFutPretInd.push(conjar[i] + 'aríeis');
  irr2PFutPretInd.push(conjer[i] + 'eríeis');
  irr2PFutPretInd.push(conjir[i] + 'iríeis');
  irr2PFutPretInd.sort(() => Math.random() - 0.5);
  irr3PFutPretInd.push(conjar[i] + 'ariam');
  irr3PFutPretInd.push(conjer[i] + 'eriam');
  irr3PFutPretInd.push(conjir[i] + 'iriam');
  irr3PFutPretInd.sort(() => Math.random() - 0.5);

  // Presente do subjuntivo
  irr1SPresSub.push(conjar[i] + 'e');
  irr1SPresSub.push(conjer[i] + 'a');
  irr1SPresSub.push(conjir[i] + 'a');
  irr1SPresSub.sort(() => Math.random() - 0.5);
  irr2SPresSub.push(conjar[i] + 'es');
  irr2SPresSub.push(conjer[i] + 'a');
  irr2SPresSub.push(conjir[i] + 'a');
  irr2SPresSub.sort(() => Math.random() - 0.5);
  irr3SPresSub.push(conjar[i] + 'e');
  irr3SPresSub.push(conjer[i] + 'a');
  irr3SPresSub.push(conjir[i] + 'a');
  irr3SPresSub.sort(() => Math.random() - 0.5);
  irr1PPresSub.push(conjar[i] + 'emos');
  irr1PPresSub.push(conjer[i] + 'amos');
  irr1PPresSub.push(conjir[i] + 'amos');
  irr1PPresSub.sort(() => Math.random() - 0.5);
  irr2PPresSub.push(conjar[i] + 'eis');
  irr2PPresSub.push(conjer[i] + 'ais');
  irr2PPresSub.push(conjir[i] + 'ais');
  irr2PPresSub.sort(() => Math.random() - 0.5);
  irr3PPresSub.push(conjar[i] + 'em');
  irr3PPresSub.push(conjer[i] + 'am');
  irr3PPresSub.push(conjir[i] + 'am');
  irr3PPresSub.sort(() => Math.random() - 0.5);

  // Pretérito Imperfeito do subjuntivo
  irr1SPretImpSub.push(conjar[i] + 'asse');
  irr1SPretImpSub.push(conjer[i] + 'esse');
  irr1SPretImpSub.push(conjir[i] + 'isse');
  irr1SPretImpSub.sort(() => Math.random() - 0.5);
  irr2SPretImpSub.push(conjar[i] + 'asses');
  irr2SPretImpSub.push(conjer[i] + 'esses');
  irr2SPretImpSub.push(conjir[i] + 'isses');
  irr2SPretImpSub.sort(() => Math.random() - 0.5);
  irr3SPretImpSub.push(conjar[i] + 'asse');
  irr3SPretImpSub.push(conjer[i] + 'esse');
  irr3SPretImpSub.push(conjir[i] + 'isse');
  irr3SPretImpSub.sort(() => Math.random() - 0.5);
  irr1PPretImpSub.push(conjar[i] + 'ássemos');
  irr1PPretImpSub.push(conjer[i] + 'êssemos');
  irr1PPretImpSub.push(conjir[i] + 'íssemos');
  irr1PPretImpSub.sort(() => Math.random() - 0.5);
  irr2PPretImpSub.push(conjar[i] + 'ásseis');
  irr2PPretImpSub.push(conjer[i] + 'êsseis');
  irr2PPretImpSub.push(conjir[i] + 'ísseis');
  irr2PPretImpSub.sort(() => Math.random() - 0.5);
  irr3PPretImpSub.push(conjar[i] + 'assem');
  irr3PPretImpSub.push(conjer[i] + 'essem');
  irr3PPretImpSub.push(conjir[i] + 'issem');
  irr3PPretImpSub.sort(() => Math.random() - 0.5);

  // Futuro do subjuntivo
  irr1SFutSub.push(conjar[i] + 'ar');
  irr1SFutSub.push(conjer[i] + 'er');
  irr1SFutSub.push(conjir[i] + 'ir');
  irr1SFutSub.sort(() => Math.random() - 0.5);
  irr2SFutSub.push(conjar[i] + 'ares');
  irr2SFutSub.push(conjer[i] + 'eres');
  irr2SFutSub.push(conjir[i] + 'ires');
  irr2SFutSub.sort(() => Math.random() - 0.5);
  irr3SFutSub.push(conjar[i] + 'ar');
  irr3SFutSub.push(conjer[i] + 'er');
  irr3SFutSub.push(conjir[i] + 'ir');
  irr3SFutSub.sort(() => Math.random() - 0.5);
  irr1PFutSub.push(conjar[i] + 'armos');
  irr1PFutSub.push(conjer[i] + 'ermos');
  irr1PFutSub.push(conjir[i] + 'irmos');
  irr1PFutSub.sort(() => Math.random() - 0.5);
  irr2PFutSub.push(conjar[i] + 'ardes');
  irr2PFutSub.push(conjer[i] + 'erdes');
  irr2PFutSub.push(conjir[i] + 'irdes');
  irr2PFutSub.sort(() => Math.random() - 0.5);
  irr3PFutSub.push(conjar[i] + 'arem');
  irr3PFutSub.push(conjer[i] + 'erem');
  irr3PFutSub.push(conjir[i] + 'irem');
  irr3PFutSub.sort(() => Math.random() - 0.5);

  // Imperativo Afirmativo
  irr2SImpAf.push(conjar[i] + 'a');
  irr2SImpAf.push(conjer[i] + 'e');
  irr2SImpAf.push(conjir[i] + 'e');
  irr2SImpAf.sort(() => Math.random() - 0.5);
  irr3SImpAf.push(conjar[i] + 'e');
  irr3SImpAf.push(conjer[i] + 'a');
  irr3SImpAf.push(conjir[i] + 'a');
  irr3SImpAf.sort(() => Math.random() - 0.5);
  irr1PImpAf.push(conjar[i] + 'emos');
  irr1PImpAf.push(conjer[i] + 'amos');
  irr1PImpAf.push(conjir[i] + 'amos');
  irr1PImpAf.sort(() => Math.random() - 0.5);
  irr2PImpAf.push(conjar[i] + 'ai');
  irr2PImpAf.push(conjer[i] + 'ei');
  irr2PImpAf.push(conjir[i] + 'i');
  irr2PImpAf.sort(() => Math.random() - 0.5);
  irr3PImpAf.push(conjar[i] + 'em');
  irr3PImpAf.push(conjer[i] + 'am');
  irr3PImpAf.push(conjir[i] + 'am');
  irr3PImpAf.sort(() => Math.random() - 0.5);

  // Imperativo Negativo
  irr2SImpNeg.push(conjar[i] + 'es');
  irr2SImpNeg.push(conjer[i] + 'as');
  irr2SImpNeg.push(conjir[i] + 'as');
  irr2SImpNeg.sort(() => Math.random() - 0.5);
  irr3SImpNeg.push(conjar[i] + 'e');
  irr3SImpNeg.push(conjer[i] + 'a');
  irr3SImpNeg.push(conjir[i] + 'a');
  irr3SImpNeg.sort(() => Math.random() - 0.5);
  irr1PImpNeg.push(conjar[i] + 'emos');
  irr1PImpNeg.push(conjer[i] + 'amos');
  irr1PImpNeg.push(conjir[i] + 'amos');
  irr1PImpNeg.sort(() => Math.random() - 0.5);
  irr2PImpNeg.push(conjar[i] + 'eis');
  irr2PImpNeg.push(conjer[i] + 'ais');
  irr2PImpNeg.push(conjir[i] + 'ais');
  irr2PImpNeg.sort(() => Math.random() - 0.5);
  irr3PImpNeg.push(conjar[i] + 'em');
  irr3PImpNeg.push(conjer[i] + 'am');
  irr3PImpNeg.push(conjir[i] + 'am');
  irr3PImpNeg.sort(() => Math.random() - 0.5);

  // Formas nominais
  irrInfinitivo.push(conjar[i] + 'ar');
  irrInfinitivo.push(conjer[i] + 'er');
  irrInfinitivo.push(conjir[i] + 'ir');
  irrInfinitivo.sort(() => Math.random() - 0.5);
  irrParticipio.push(conjar[i] + 'ado');
  irrParticipio.push(conjer[i] + 'ido');
  irrParticipio.push(conjir[i] + 'ido');
  irrParticipio.sort(() => Math.random() - 0.5);
  irrGerundio.push(conjar[i] + 'ando');
  irrGerundio.push(conjer[i] + 'endo');
  irrGerundio.push(conjir[i] + 'indo');
  irrGerundio.sort(() => Math.random() - 0.5);
}



var sentiMasc = ['amor', 'anseio', 'ódio', 'rancor', 'desespero', 'enamoro', 'encanto','ciúme','afeto','medo','descuido','alento'];
sentiMasc.sort(() => Math.random() - 0.5);
var sentiFem = ['esperança', 'felicidade', 'tristeza', 'inspiração', 'alegria', 'gula', 'ira', 'luxúria', 'inveja', 'cobiça', 'preguiça', 'avareza','raiva','empatia','surpresa',"coragem",'audácia' ];
sentiFem.sort(() => Math.random() - 0.5);
var sentiSing = [];
for (let i = 0; i < sentiFem.length; i++) {
  sentiSing.push(sentiFem[i]);
}
for (let i = 0; i < sentiMasc.length; i++) {
  sentiSing.push(sentiMasc[i]);
}
sentiSing.sort(() => Math.random() - 0.5);
var sentiSingPron = [];
for (let i = 0; i < sentiFem.length; i++) {
  sentiSingPron.push('tua ' + sentiFem[i]);
}
for (let i = 0; i < sentiMasc.length; i++) {
  sentiSingPron.push('teu ' + sentiMasc[i]);
}
sentiSingPron.sort(() => Math.random() - 0.5);

// Substantivos

var substMSing = ['livro', 'sapato', 'telefone', 'radio', 'portão', 'computador', 'ferro', 'bastão', 'óculos'];
var substFSing = ['bota','mala','escova','pilha','caixa','camisa','tábua','faca','navalha','bola','carta']
substMSing.sort(() => Math.random() - 0.5);
var animal = [];
var animalFem = ['borboleta', 'vaca', 'cabra', 'zebra', 'enguia', 'doninha', 'galinha', 'onça', 'cobra', 'aranha', 'serpente'];
animalFem.sort(() => Math.random() - 0.5);

var animalMasc = ['leão', 'pássaro', 'cavalo', 'macaco', 'gato', 'corvo', 'pato', 'bôto', 'urso', 'jacaré', 'touro'];
animalMasc.sort(() => Math.random() - 0.5);
for (let i = 0; i < animalFem.length; i++) {
  animal.push(animalFem[i]);
}
for (let i = 0; i < animalMasc.length; i++) {
  animal.push(animalMasc[i]);
}
animal.sort(() => Math.random() - 0.5);

var corpoMascSing = ['pé', 'sovaco', 'cabelo', 'seio', 'abdômen', 'braço', 'olho', 'mamilo', 'umbigo', 'colo'];
corpoMascSing.sort(() => Math.random() - 0.5);
var corpoFemSing = ['mão', 'cabeça', 'retina', 'testa', 'perna', 'orelha', 'boca', 'clavícula', 'unha', 'narina', 'nádega', 'pele','carne'];
corpoFemSing.sort(() => Math.random() - 0.5);
var corpo = [];


for (let i = 0; i < corpoMascSing.length; i++) {
  corpo.push(`meu ${corpoMascSing[i]}`);
}
for (let i = 0; i < corpoFemSing.length; i++) {
  corpo.push(`minha ${corpoFemSing[i]}`);
}
corpo.sort(() => Math.random() - 0.5);


//Com possessivos
var subst1p = [];
for (let i = 0; i < corpoMascSing.length; i++) {
  subst1p.push(`meu ${corpoMascSing[i]}`);
}
for (let i = 0; i < corpoFemSing.length; i++) {
  subst1p.push(`minha ${corpoFemSing[i]}`);
}
for (let i = 0; i < sentiMasc.length; i++) {
  subst1p.push(`meu ${sentiMasc[i]}`);
}
for (let i = 0; i < sentiFem.length; i++) {
  subst1p.push(`minha ${sentiFem[i]}`);
}
subst1p.sort(() => Math.random() - 0.5);
var subst2p = [];
for (let i = 0; i < corpoMascSing.length; i++) {
  subst2p.push(`teu ${corpoMascSing[i]}`);
}
for (let i = 0; i < corpoFemSing.length; i++) {
  subst2p.push(`tua ${corpoFemSing[i]}`);
}
for (let i = 0; i < sentiMasc.length; i++) {
  subst2p.push(`teu ${sentiMasc[i]}`);
}
for (let i = 0; i < sentiFem.length; i++) {
  subst2p.push(`tua ${sentiFem[i]}`);
}
subst2p.sort(() => Math.random() - 0.5);


//adjetivos
var adjetivoF = ['angélica', 'bela', 'única', 'vívida', 'estranha', 'sinuosa', 'límpida'];
var adjetivoM = ['novo','velho','cansado','atencioso','atento', 'ferido', 'amável', 'belo', 'vívido', 'doce', 'sombrio','sincero','digno','severo'];
var adjetivoN = ['radiante', 'exuberante', 'confortante', 'invejável', 'infalível','indestrutível','cortês', 'diferente', 'dócil', 'gentil','leal','frágil','audaz'];
for (let i = 0; i < adjetivoN.length; i++) {
  adjetivoM.push(`${adjetivoN[i]}`);
  adjetivoF.push(`${adjetivoN[i]}`);
}

adjetivoN.sort(() => Math.random() - 0.5);
adjetivoF.sort(() => Math.random() - 0.5);
adjetivoM.sort(() => Math.random() - 0.5);

// Controle
//O primeiro valora me mostra o valor do menor array
//O segundo onde procurar
var minimo = [];

minimo.push(sentiSingPron.length);
minimo.push(sentiMasc.length);
minimo.push(sentiFem.length);
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

//Abstração
var abstrato = ['uma linda tarde de outono', 'o doce beijo da felicidade', 'o mais sincero âmago', 'o desejo mais pueril', 'o sombrio silêncio da madrugada'];
for (let i = 0; i < qtd; i++) {
  
  abstrato.push(`o ${adjetivoN[i]} ${irrInfinitivo[i]} do ${sentiMasc[i]}`);
  abstrato.push(`o ${adjetivoM[i]} ${irrInfinitivo[i]} do ${sentiMasc[i]}`);
  abstrato.push(`o ${adjetivoN[i]} ${irrInfinitivo[i]} da ${sentiFem[i]}`);
  abstrato.push(`o ${adjetivoM[i]} ${irrInfinitivo[i]} da ${sentiFem[i]}`);
}
abstrato.sort(() => Math.random() - 0.5);

console.log(qtd);
