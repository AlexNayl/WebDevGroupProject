"use strict";(self["webpackChunkwebdevgroupproject"]=self["webpackChunkwebdevgroupproject"]||[]).push([[959],{4101:function(e,t){t["Z"]={async updateHighscores(e,t,r){let s=new URL("http://localhost:4500/addhighscore");s.searchParams.append("username",t),s.searchParams.append("game",r),s.searchParams.append("score",e);try{let e=await fetch(s);if(!e.ok)throw e}catch(o){console.error("Error sending highscore!\n",o)}},async getHighScores(){try{let e=await fetch("http://localhost:4500/gethighscores");if(e.ok)return(await e.json()).sort(((e,t)=>e["user_id"]<t["user_id"]));throw e}catch(e){return console.error("Error getting highscores!\n",e),[]}},async getTopHighScores(e,t){let r=await this.getHighScores();if(r==[])return r;r.sort(((t,r)=>t[e]<r[e]));while(r.length>t)r.pop();return r}}},959:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var s=r(3396);const o=(0,s._)("h1",null,"Highscores",-1);function c(e,t,r,c,n,i){const a=(0,s.up)("HighScoresDisplay");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.Wm)(a)])}var n=r(7139);const i=(0,s._)("p",null,"Click on a header to sort by score!",-1),a=(0,s._)("p",null,"Double click to reverse sorting direction!",-1),h={class:"table"};function l(e,t,r,o,c,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[i,a,(0,s._)("table",h,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col",onClick:t[0]||(t[0]=e=>l.sort("user_id"))},"Name"),(0,s._)("th",{scope:"col",onClick:t[1]||(t[1]=e=>l.sort("minesweeper"))},"Minesweeper Score"),(0,s._)("th",{scope:"col",onClick:t[2]||(t[2]=e=>l.sort("snake"))},"Snake Score"),(0,s._)("th",{scope:"col",onClick:t[3]||(t[3]=e=>l.sort("word_search"))},"Wordsearch Score"),(0,s._)("th",{scope:"col",onClick:t[4]||(t[4]=e=>l.sort("stacker"))},"Stacker Score")])]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.highscores,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.username},[(0,s._)("td",null,(0,n.zw)(e.user_id),1),(0,s._)("td",null,(0,n.zw)(e.minesweeper),1),(0,s._)("td",null,(0,n.zw)(e.snake),1),(0,s._)("td",null,(0,n.zw)(e.word_search),1),(0,s._)("td",null,(0,n.zw)(e.stacker),1)])))),128))])])],64)}var u=r(4101),d={name:"HighScoresDisplay",data(){return{highscores:[],lastSorted:"",sortDirection:!0}},methods:{startup:async function(){this.highscores=await u.Z.getHighScores()},sort:function(e){let t=(t,r)=>t[e]<r[e];this.sortDirection&&(t=(t,r)=>r[e]<t[e]),this.highscores.sort(t),e!=this.lastSorted&&""!=this.lastSorted||(this.sortDirection=!this.sortDirection),this.lastSorted=e}},mounted(){this.$nextTick((()=>{this.startup()}))}},g=r(89);const p=(0,g.Z)(d,[["render",l]]);var w=p,_={name:"HighScoresView",title:"High Scores",components:{HighScoresDisplay:w}};const k=(0,g.Z)(_,[["render",c]]);var S=k}}]);
//# sourceMappingURL=959.704a2a66.js.map