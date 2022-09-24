"use strict";(self["webpackChunkwebdevgroupproject"]=self["webpackChunkwebdevgroupproject"]||[]).push([[225],{3225:function(t,e,r){r.r(e),r.d(e,{default:function(){return D}});var l=r(3396);const i={class:"WordSearch"},s=(0,l._)("h1",null,"Word Search",-1);function o(t,e,r,o,h,n){const a=(0,l.up)("WordSearchGame");return(0,l.wg)(),(0,l.iD)("div",i,[s,(0,l.Wm)(a)])}var h=r(7139);const n=(0,l._)("p",null," Find the hidden words on the board. They are placed horizontally, vertically, or diagonally, possibly reversed. ",-1),a=(0,l._)("div",{id:"game"},null,-1);function A(t,e,r,i,s,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("p",null,"Time: "+(0,h.zw)(s.time),1),(0,l._)("div",null,[(0,l._)("button",{onClick:e[0]||(e[0]=(...t)=>o.reset&&o.reset(...t)),id:"resetButton"},"New Game")]),a],64)}var c=r(8851),u=r.n(c),E=r(4101);const N=[["SCOPE","let","HTML","COBOL","UTIL"],["CODE","CSS","JAVA","SWIFT","STACK"],["CLANCY","DAVINCI","HAMILTON","TESLA","TURING"],["YUKIHIRO","SATOSHI","GOSLING","BJARNE"],["DOG","CAT","ORCA","FOX","SQUID","WOLF","FALCON","PENGIUN"],["ACTION","HORROR","COMEDY","DRAMA","THRILLER","SCIFI","ROMANCE","CRIME"],["PINE","MAPLE","BIRCH","OAK","GINKO","CHERRY","SEQUOIA","ASH","SPRUCE"],["DEADPOOL","SUPERMAN","BATMAN","IRONMAN","ANTMAN","FLASH","HULK"],["VENENO","HURACAN","JESKO","SENNA","CHIRON","DIVO","ENZO","STRADALE","BATTISTA","CHARGER"],["STARSHIP","NEWGLENN","FALCON","ELECTRON","ANTARES","ARES","MINOTAUR","DELTA","ATLAS","ATHENA","PEGASUS","TITAN","SATURN","COLUMBIA","ATLANTIS"],["ROSE","DAISY","LILAC","LILY","IRIS","JASMINE","POPPY","TULIP","LAVENDER","PEONY","PRIMROSE","ORCHID"],["COFFEE","TEA","BOBA","WATER","JUICE","WINE","VODKA","WHISKEY","RUM","SMOOTHIE","SODA","BEER","LEMONADE","MILK"],["UKRAINE","TAIWAN","INDIA","FINLAND","SWEDEN","DENMARK","NORWAY","JAPAN","HONGKONG","FRANCE","ITALY","SPAIN","GERMANY","POLAND","CANADA","MEXICO"],["GALILEO","NEWTON","HUBBLE","ARECIBO","WEBB","CANADARM","ZARYA","POISK","RASSVET","BEAM","HARMONY","UNITY","DESTINY","NAUKA","NICER","DEXTRE","BISHOP","KERBAL","PRICHAL"],["SOCCER","HOCKEY","BASEBALL","FOOTBALL","RUGBY","CRICKET","TENNIS","SKIING","CURLING","FENCING","GOFLING","SAILING","ROWING"],["OILERS","WHALERS","PENGUINS","KINGS","JETS","FLAMES","PANTHERS","KRAKEN","WILD","BRUINS","SABRES","CANUCKS","CAPITALS"],["APPLE","GOOGLE","SAMSUNG","TESLA","FORD","DISNEY","HASBRO","SONY","HILTON","MONDELEZ","INTEL","NVIDIA","BOEING","TOYOTA","MATTEL","NIKE","AMAZON","HUAWEI"],["HAIDA","BISMARCK","YAMATO","HOOD","ROMA","IOWA","NIMITZ","MIDWAY","FUBUKI","GEARING","HALLAND","VANGUARD"],["WARTHOG","ARROW","CANUCK","RAPTOR","HORNET","FALCON","TYPHOON","HARRIER","RAFALE","EAGLE","HERCULES","MUSTANG","SPITFIRE","CORSAIR","OSPREY","SPIRIT","PREDATOR"],["TETRIS","STARFOX","ZELDA","DESTINY","POKEMON","PACMAN","FROGGER","ARK","DOTA"],["THORN","OSA","ARUNI","IANA","WARDEN","NOMAD","KAID","LION","FINKA","DOKKAEBI","YING","LESION","JACKAL","BUCK","FROST","MUTE","SMOKE","ASH","CASTLE","MONTAGNE","FUZE","KAPKAN","AZAMI"],["RED","ORANGE","YELLOW","GREEN","BLUE","PURPLE","BROWN","BLACK","CYAN","MAGENTA","CRIMSON","LIME","INDIGO","MAROON","AMBER","SCARLET","MUSTARD"],["PARASAUR","RAPTOR","BARYONYX","TROODON"],["LASAGNA","QUINOA","CHICKEN","LIME","POUTINE","BURRITO","FAJITAS","CORN","SHRIMP","MACARONS","YAKITORI","ONIGIRI"]],d=50,I=250,S=50,O=10;class R{constructor(t){this.rows=O,this.cols=O,this.activeWords=[],this.activeMatrix=[],this.wordsFound=[],this.lastCell=null,this.currentCell=null,this.currentSelection=null,this.over=!1,this.updateBoard(),this.vuePage=t,this.started=!1,this.startedTime=0,setInterval((()=>{this.started&&!this.over&&(this.vuePage.time=Math.round((new Date).getTime()/1e3)-this.startedTime)}),1e3);const e=t=>{t.setup=()=>{t.createCanvas(1200,800).parent("game")},t.draw=()=>{this.over||(t.clear(),this.drawBackground(),this.drawMatrix(),this.drawSelection(),this.drawWords(),this.inputHandler())},this.drawBackground=()=>{t.background(255,255,255)},this.drawMatrix=()=>{t.push(),t.textAlign(t.CENTER,t.CENTER);for(let e=0;e<this.activeMatrix.length;e++){let r=this.activeMatrix[e];for(let l=0;l<r.length;l++){let i=r[l],s=I+l*d,o=S+e*d;t.stroke(0);let h=this.isSelected(e,l)?"Fuchsia":this.foundCell(e,l)?"Lime":"White";t.fill(h),t.rect(s,o,d,d),t.noStroke(),t.fill(0),t.text(i,s+d/2,o+d/2)}}t.pop()},this.drawSelection=()=>{let e=this.selectedWord();e&&(t.push(),t.noStroke(),t.fill(0),t.textSize(20),t.text(e,I,S+(this.rows+1)*d),t.pop())},this.drawWords=()=>{t.push(),t.noStroke();for(let e=0;e<this.activeWords.length;e++)t.fill(this.foundWord(this.activeWords[e])?"Gray":"Black"),t.text(this.activeWords[e],30,S+20+50*e);t.pop()},this.inputHandler=()=>{if(this.over)return;if(!t.mouseIsPressed)return this.validateSelection(),this.lastCell=null,this.currentCell=null,void(this.currentSelection=null);this.started||(this.startedTime=Math.round((new Date).getTime()/1e3),this.started=!0),this.lastCell||(this.lastCell=this.findCell(t.mouseX,t.mouseY));let e=this.findCell(t.mouseX,t.mouseY);e&&(this.currentCell=e),this.currentSelection=this.findSelection()}};this.sketch=new(u())(e)}reset(){this.activeWords=[],this.activeMatrix=[],this.wordsFound=[],this.lastCell=null,this.currentCell=null,this.currentSelection=null,this.over=!1,this.updateBoard(),this.started=!1,this.startedTime=0,this.over=!1}updateBoard(){this.activeWords=N[Math.floor(Math.random()*N.length)].sort(((t,e)=>Math.floor(Math.random()*(t+e))%2==0)).slice(0,5),this.activeMatrix=this.genMatrix(this.activeWords)}genMatrix(t){let e=()=>["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"][Math.floor(26*Math.random())],r=[];for(let c=0;c<this.rows;c++){r.push([]);for(let t=0;t<this.cols;t++)r[c][t]=e()}let l=[],i=(t,e,r)=>{for(let i=0;i<l.length;i++){let s=l[i],o=s.row,h=s.col;if(e!=o||r!=h)continue;let n=s.char;return n!=t}return!1},s=(t,e,s,o)=>{let h=0,n=1;o&&(h=t.length-1,n=-1);let a=s+n*t.length;if(a<0||a>this.cols)return!1;let A=s,c=h;while(A!=a){let r=t[c];if(i(r,e,A))return!1;A+=n,c+=n}A=s,c=h;while(A!=a){let i=t[c];r[e][A]=i,l.push({row:e,col:A,char:i}),A+=n,c+=n}return!0},o=(t,e,s,o)=>{let h=0,n=1;o&&(n=-1);let a=e+n*t.length;if(a<0||a>this.rows)return!1;let A=e,c=h;while(A!=a){let e=t[c];if(i(e,A,s))return!1;A+=n,c+=1}A=e,c=h;while(A!=a){let e=t[c];r[A][s]=e,l.push({row:A,col:s,char:e}),A+=n,c+=1}return!0},h=(t,e,s,o)=>{let h=0,n=1;o&&(n=-1);let a=e+n*t.length,A=s+n*t.length;if(a<0||a>this.rows)return!1;if(A<0||A>this.cols)return!1;let c=e,u=s,E=h;while(c!=a&&u!=A){let e=t[E];if(i(e,c,u))return!1;c+=n,u+=n,E+=1}c=e,u=s,E=h;while(c!=a&&u!=A){let e=t[E];r[c][u]=e,l.push({row:c,col:u,char:e}),c+=n,u+=n,E+=1}return!0},n=[s,o,h];const a=500;let A=[];for(let c=0;c<t.length;c++){let e=t[c],r=0;while(r<a){let t=Math.floor(Math.random()*this.rows),l=Math.floor(Math.random()*this.cols),i=Math.floor(3*Math.random()),s=0==Math.floor(2*Math.random()),o=n[i],h=o(e,t,l,s);if(h)break;r++}r==a&&A.push(c),c==t.length-1&&A.length==t.length&&s(e,0,0,!1)}A.reverse();for(let c=0;c<A.length;c++)this.activeWords.pop(A[c]);return r}isOver(){return this.over}validateSelection(){let t=this.selectedWord();t&&(this.foundWord(t)||(this.activeWords.includes(t)&&this.addFound(t,this.currentSelection),this.wordsFound.length===this.activeWords.length&&(this.over=!0,E.Z.updateHighscores(this.calculateHighscore(Math.round((new Date).getTime()/1e3)-this.startedTime),prompt("You Win! Please enter username:"),"word_search"),this.reset())))}calculateHighscore(t){const e=1e3,r=10;let l=0;for(let i=0;i<this.activeWords.length;i++)l+=this.activeWords[i].length;return Math.ceil(l*Math.max(1,(e-t)*r))}findCell(t,e){let r=Math.floor((t-I)/d),l=Math.floor((e-S)/d);return r<0||r>=this.cols||l<0||l>=this.rows?null:{row:l,col:r}}selectedWord(){if(!this.currentSelection)return"";let t="";for(let e of this.currentSelection)t+=e.character;return t}findSelection(){return this.lastCell&&this.currentCell?this.horizontalSelection()||this.verticalSelection()||this.diagonalSelection():null}horizontalSelection(){if(!this.lastCell||!this.currentCell)return null;if(this.lastCell.row!=this.currentCell.row)return null;let t=[],e=this.lastCell.col<=this.currentCell.col?1:-1;for(let r=this.lastCell.col;r!=this.currentCell.col+e;r+=e){let e=this.lastCell.row,l=this.activeMatrix[e][r];t.push({row:e,col:r,character:l})}return t}verticalSelection(){if(!this.lastCell||!this.currentCell)return null;if(this.lastCell.col!=this.currentCell.col)return null;let t=[],e=this.lastCell.row<=this.currentCell.row?1:-1;for(let r=this.lastCell.row;r!=this.currentCell.row+e;r+=e){let e=this.lastCell.col,l=this.activeMatrix[r][e];t.push({row:r,col:e,character:l})}return t}diagonalSelection(){if(!this.lastCell||!this.currentCell)return null;if(Math.abs(this.currentCell.row-this.lastCell.row)!=Math.abs(this.currentCell.col-this.lastCell.col))return null;let t=[],e=this.lastCell.col<=this.currentCell.col?1:-1,r=this.lastCell.row<=this.currentCell.row?1:-1,l=this.lastCell.row,i=this.lastCell.col;while(l!=this.currentCell.row+r&&i!=this.currentCell.col+e){let s=this.activeMatrix[l][i];t.push({row:l,col:i,character:s}),l+=r,i+=e}return t}isSelected(t,e){if(!this.currentSelection)return!1;for(let r of this.currentSelection)if(r.row===t&&r.col===e)return!0;return!1}addFound(t,e){this.wordsFound.push({word:t,cells:e})}foundWord(t){for(let e of this.wordsFound)if(e.word===t)return!0;return!1}foundCell(t,e){for(let r of this.wordsFound)for(let l of r.cells)if(l.row===t&&l.col===e)return!0;return!1}}var C={name:"WordSearchGame",data(){return{game:null,boardSize:0,time:0}},methods:{startup:function(){this.game=new R(this)},reset:function(){this.game&&this.game.reset()}},mounted(){this.$nextTick((()=>{this.startup()}))}},T=r(89);const M=(0,T.Z)(C,[["render",A]]);var L=M,f={name:"WordSearch",title:"WordSearch",components:{WordSearchGame:L}};const w=(0,T.Z)(f,[["render",o]]);var D=w}}]);
//# sourceMappingURL=225.910bb821.js.map