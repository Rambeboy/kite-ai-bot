const _0x39652c=_0x46d8;(function(_0x219126,_0xae6e0e){const _0x331f24=_0x46d8,_0xc49fbf=_0x219126();while(!![]){try{const _0x59fcea=parseInt(_0x331f24(0x164))/0x1*(parseInt(_0x331f24(0x15f))/0x2)+-parseInt(_0x331f24(0x156))/0x3*(-parseInt(_0x331f24(0x15c))/0x4)+parseInt(_0x331f24(0x14d))/0x5*(parseInt(_0x331f24(0x160))/0x6)+-parseInt(_0x331f24(0x153))/0x7*(parseInt(_0x331f24(0x16d))/0x8)+parseInt(_0x331f24(0x147))/0x9+-parseInt(_0x331f24(0x13e))/0xa*(-parseInt(_0x331f24(0x16a))/0xb)+-parseInt(_0x331f24(0x149))/0xc;if(_0x59fcea===_0xae6e0e)break;else _0xc49fbf['push'](_0xc49fbf['shift']());}catch(_0x82af8){_0xc49fbf['push'](_0xc49fbf['shift']());}}}(_0x2d21,0xbaa10));import _0x2319b1 from'blessed';import _0x2ad523 from'blessed-contrib';function _0x46d8(_0xdb2ad8,_0x200a94){const _0x2d21b3=_0x2d21();return _0x46d8=function(_0x46d865,_0x3ef2ac){_0x46d865=_0x46d865-0x13e;let _0xd31df9=_0x2d21b3[_0x46d865];return _0xd31df9;},_0x46d8(_0xdb2ad8,_0x200a94);}import{formatStats,formatAddress,getTimestamp,formatDuration}from'./helpers.js';function _0x2d21(){const _0x567f7a=['2830iPWcIX','updateStatus','setupKeyboardHandlers','blue','setPercent','Active\x20Wallet:\x20','Running\x20Time:\x20','render','Status','9104922OEBxEt','line','34523652aKBwMw','screen','key','setContent','25QgEIrn','Statistics','white','updateStats','box','progressBar','3912286GmuQNy','log','statusBox','1379073TmAXEj','set','initializeComponents','{center}{bold}KITE\x20AI\x20AUTOMATE\x20BOT{/bold}{/center}\x0a{center}Author\x20:\x20Nofan\x20Rambe\x20|\x20codeberg:\x20https://codeberg.org/Odyssey{/center}','Session\x20Progress\x20(Resets\x20every\x2010\x20cycles)','updateProgress','12uExNXM','green','statsBox','3522bfHDgS','1188852oTxopa','cyan','Kite\x20AI\x20Dashboard','join','137tVtzMi','logBox','grid','Total\x20Requests:\x200\x0aSuccessful:\x200\x0aFailed:\x200','escape','Agent\x20Interactions','22451xtrhHp','gauge','exit','8dUGBQr'];_0x2d21=function(){return _0x567f7a;};return _0x2d21();}class Dashboard{constructor(){const _0x302177=_0x46d8;this[_0x302177(0x14a)]=_0x2319b1[_0x302177(0x14a)]({'smartCSR':!![],'title':_0x302177(0x162)}),this[_0x302177(0x166)]=new _0x2ad523[(_0x302177(0x166))]({'rows':0xe,'cols':0xc,'screen':this[_0x302177(0x14a)]}),this['initializeComponents'](),this[_0x302177(0x140)]();}[_0x39652c(0x158)](){const _0x2fcbaa=_0x39652c;this['bannerBox']=this[_0x2fcbaa(0x166)][_0x2fcbaa(0x157)](0x0,0x0,0x2,0xc,_0x2319b1[_0x2fcbaa(0x151)],{'label':'About','tags':!![],'border':{'type':_0x2fcbaa(0x148)},'style':{'fg':_0x2fcbaa(0x161),'border':{'fg':'blue'}},'content':_0x2fcbaa(0x159)}),this['logBox']=this['grid'][_0x2fcbaa(0x157)](0x2,0x0,0x6,0xc,_0x2319b1['log'],{'label':_0x2fcbaa(0x169),'tags':!![],'border':{'type':_0x2fcbaa(0x148)},'style':{'fg':_0x2fcbaa(0x15d),'border':{'fg':_0x2fcbaa(0x141)}}}),this['statusBox']=this[_0x2fcbaa(0x166)][_0x2fcbaa(0x157)](0x8,0x0,0x3,0x6,_0x2319b1['box'],{'label':_0x2fcbaa(0x146),'tags':!![],'border':{'type':'line'},'style':{'fg':_0x2fcbaa(0x14f),'border':{'fg':'blue'}}}),this[_0x2fcbaa(0x15e)]=this[_0x2fcbaa(0x166)][_0x2fcbaa(0x157)](0x8,0x6,0x3,0x6,_0x2319b1[_0x2fcbaa(0x151)],{'label':_0x2fcbaa(0x14e),'tags':!![],'border':{'type':_0x2fcbaa(0x148)},'content':_0x2fcbaa(0x167),'style':{'fg':_0x2fcbaa(0x14f),'border':{'fg':_0x2fcbaa(0x141)}}}),this[_0x2fcbaa(0x152)]=this[_0x2fcbaa(0x166)][_0x2fcbaa(0x157)](0xb,0x0,0x3,0xc,_0x2ad523[_0x2fcbaa(0x16b)],{'label':_0x2fcbaa(0x15a),'style':{'fg':_0x2fcbaa(0x141),'border':{'fg':_0x2fcbaa(0x141)}},'border':{'type':_0x2fcbaa(0x148)},'showLabel':!![]});}[_0x39652c(0x140)](){const _0x42169d=_0x39652c;this[_0x42169d(0x14a)][_0x42169d(0x14b)]([_0x42169d(0x168),'q','C-c'],()=>{const _0x23d3ee=_0x42169d;process[_0x23d3ee(0x16c)](0x0);});}[_0x39652c(0x13f)](_0x26ba79,_0x320e1b,_0x5330da){const _0x19108a=_0x39652c,_0x9b2160=[_0x19108a(0x143)+formatAddress(_0x26ba79),'Current\x20Cycle:\x20'+_0x320e1b,_0x19108a(0x144)+formatDuration(_0x5330da)][_0x19108a(0x163)]('\x0a');this[_0x19108a(0x155)][_0x19108a(0x14c)](_0x9b2160),this[_0x19108a(0x14a)][_0x19108a(0x145)]();}[_0x39652c(0x150)](_0x2d8352){const _0x3796d4=_0x39652c;this[_0x3796d4(0x15e)][_0x3796d4(0x14c)](formatStats(_0x2d8352)),this[_0x3796d4(0x14a)][_0x3796d4(0x145)]();}[_0x39652c(0x15b)](_0x1c8cb7){const _0x383c87=_0x39652c;this['progressBar'][_0x383c87(0x142)](_0x1c8cb7),this['screen'][_0x383c87(0x145)]();}[_0x39652c(0x154)](_0xa7992d){const _0x837191=_0x39652c,_0x133a9a=getTimestamp();this[_0x837191(0x165)][_0x837191(0x154)]('['+_0x133a9a+']\x20'+_0xa7992d),this[_0x837191(0x14a)][_0x837191(0x145)]();}[_0x39652c(0x145)](){const _0x1f5fa8=_0x39652c;this['screen'][_0x1f5fa8(0x145)]();}}export default new Dashboard();
