"use strict";(self["webpackChunkwebdevgroupproject"]=self["webpackChunkwebdevgroupproject"]||[]).push([[469],{7469:function(t,i,s){s.r(i),s.d(i,{default:function(){return D}});var e=s(3396);const h={class:"SnakeView"},o=(0,e._)("h1",null,"Snake",-1);function r(t,i,s,r,n,a){const d=(0,e.up)("SnakeGame");return(0,e.wg)(),(0,e.iD)("div",h,[o,(0,e.Wm)(d)])}var n=s(7139);const a={key:0},d={key:1},l=(0,e._)("div",{id:"snakeDiv"},null,-1);function c(t,i,s,h,o,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[o.running?((0,e.wg)(),(0,e.iD)("p",a,"Score "+(0,n.zw)(o.score),1)):(0,e.kq)("",!0),o.running?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("p",d,"Press WASD or the Arrow Keys to begin")),l],64)}var u=s(8851),f=s.n(u),g=s(4101);class w{constructor(t){this.vuePage=t,this.setup(30,20,25)}placeFood(){if(this.tail.length+1!=this.width*this.height)do{this.foodx=Math.floor(Math.random()*this.width),this.foody=Math.floor(Math.random()*this.height)}while(this.x==this.foodx&&this.y==this.foody||this.isCoordInTail(this.x,this.y))}addFood(){this.food+=5,this.vuePage.score+=5}isCoordInTail(t,i){for(let s of this.tail)if(s[0]==t&&s[1]==i)return!0;return!1}reset(){this.running=!1,this.vuePage.running=!1,this.vuePage.score>0&&g.Z.updateHighscores(this.vuePage.score,prompt("Enter a name:"),"snake"),this.tail=[],this.x=Math.floor(this.width/2),this.y=Math.floor(this.height/2),this.food=10,this.direction=0,this.vuePage.score=0,this.placeFood()}setup(t,i,s){this.width=t,this.height=i,this.cellSize=s,this.x=Math.floor(t/2),this.y=Math.floor(i/2),this.tail=[],this.food=10,this.foodx=0,this.foody=0,this.direction=0,this.lastDirection=this.direction,this.vuePage.score=0,this.running=!1,this.vuePage.running=!1;const e=e=>{e.setup=()=>{let h=e.createCanvas(t*s,i*s);e.frameRate(10),h.parent("snakeDiv"),this.placeFood()},e.draw=()=>{this.running&&(this.lastDirection=this.direction,0==this.direction?(this.x++,this.x>=t&&(this.x=0)):1==this.direction?(this.y++,this.y>=i&&(this.y=0)):2==this.direction?(this.x--,this.x<0&&(this.x=t-1)):3==this.direction&&(this.y--,this.y<0&&(this.y=i-1)),this.isCoordInTail(this.x,this.y)&&this.reset(),this.x==this.foodx&&this.y==this.foody&&(this.addFood(),this.placeFood()),this.tail.unshift([this.x,this.y]),this.food<=0?this.tail.pop():this.food--),e.clear(),e.fill(255,255,255),e.stroke(0,0,0),e.rect(0,0,t*s,i*s),e.fill(255,0,0),e.noStroke(),e.square(this.x*s,this.y*s,s);for(let t of this.tail)e.square(t[0]*s,t[1]*s,s);e.fill(0,255,0),e.square(this.foodx*s,this.foody*s,s)},e.keyPressed=t=>{let i=t.key;console.log("key press",i),"d"!=i&&"ArrowRight"!=i||2==this.lastDirection?"s"!=i&&"ArrowDown"!=i||3==this.lastDirection?"a"!=i&&"ArrowLeft"!=i||0==this.lastDirection?"w"!=i&&"ArrowUp"!=i||1==this.lastDirection||(this.direction=3):this.direction=2:this.direction=1:this.direction=0,"w"!=i&&"a"!=i&&"s"!=i&&"d"!=i&&"ArrowRight"!=i&&"ArrowDown"!=i&&"ArrowLeft"!=i&&"ArrowUp"!=i||this.running||(this.running=!0,this.vuePage.running=!0)}};this.sketch=new(f())(e)}}var p={name:"SnakeGame",data(){return{game:null,p5Context:null,score:0,running:!1}},methods:{startup(){this.game=new w(this)}},mounted(){this.$nextTick((()=>{this.startup()}))}},k=s(89);const y=(0,k.Z)(p,[["render",c]]);var v=y,x={name:"SnakeView",title:"Snake Game",components:{SnakeGame:v}};const m=(0,k.Z)(x,[["render",r]]);var D=m}}]);
//# sourceMappingURL=469.b4b4f235.js.map