(this["webpackJsonpreact-rogue"]=this["webpackJsonpreact-rogue"]||[]).push([[0],{17:function(e,t,i){e.exports=i(23)},23:function(e,t,i){"use strict";i.r(t);var n=i(8),a=i.n(n),s=i(15),r=i.n(s),o=i(7),c=i(0),l=i(1),h=function(){function e(){var t=this;Object(c.a)(this,e),this.observer=[],this.handleKeys=function(e){switch(e.preventDefault(),e.keyCode){case 37:t.broadcast("move",{x:-1,y:0});break;case 38:t.broadcast("move",{x:0,y:-1});break;case 39:t.broadcast("move",{x:1,y:0});break;case 40:t.broadcast("move",{x:0,y:1})}}}return Object(l.a)(e,[{key:"subscribe",value:function(e){this.observer.push(e)}},{key:"unsuscribe",value:function(e){this.observer=this.observer.filter((function(t){return t!==e}))}},{key:"broadcast",value:function(e,t){this.observer.forEach((function(i){return i(e,t)}))}},{key:"bindKeys",value:function(){document.addEventListener("keydown",this.handleKeys)}},{key:"unBindKeys",value:function(){document.removeEventListener("keydown",this.handleKeys)}}]),e}(),u=function(){function e(t,i,n){Object(c.a)(this,e),this.x=t,this.y=i,this.size=n}return Object(l.a)(e,[{key:"move",value:function(e,t){this.x+=e,this.y+=t}},{key:"draw",value:function(e){e.fillStyle="#f00",e.textBaseline="hanging",e.font="16px Helvetica",e.fillText("@",this.x*this.size,this.y*this.size)}},{key:"copyPlayer",value:function(){var t=new e;return Object.assign(t,this),t}}]),e}(),f=i(16),d=function(){function e(t,i,n){Object(c.a)(this,e),this.width=t,this.height=i,this.tilesize=n,this.entities=[new u(0,0,16)],this.worldmap=new Array(this.width);for(var a=0;a<this.width;a++)this.worldmap[a]=new Array(this.height)}return Object(l.a)(e,[{key:"moveToSpace",value:function(e){for(var t=e.x;t<this.width;t++)for(var i=e.y;i<this.height;i++)if(0===this.worldmap[t][i])return e.x=t,void(e.y=i)}},{key:"isWall",value:function(e,t){return void 0===this.worldmap[e]||void 0===this.worldmap[t]||1===this.worldmap[e][t]}},{key:"movePlayer",value:function(e,t){var i=this.player.copyPlayer();i.move(e,t),this.isWall(i.x,i.y)?console.log("camino bloqueado a ".concat(i.x,":").concat(i.y,"!")):this.player.move(e,t)}},{key:"createCellularMap",value:function(){var e=this,t=new f.a.Cellular(this.width,this.height,{connected:!0});t.randomize(.5);var i=function(t,i,n){0!==t&&0!==i&&t!==e.width-1&&i!==e.height-1?e.worldmap[t][i]=0===n?1:0:e.worldmap[t][i]=1};t.create(i),t.connect(i,1)}},{key:"draw",value:function(e){for(var t=0;t<this.width;t++)for(var i=0;i<this.height;i++)1===this.worldmap[t][i]&&this.drawWall(e,t,i);this.entities.forEach((function(t){t.draw(e)}))}},{key:"drawWall",value:function(e,t,i){e.fillStyle="#000",e.fillRect(t*this.tilesize,i*this.tilesize,this.tilesize,this.tilesize)}},{key:"player",get:function(){return this.entities[0]}}]),e}(),v=function(e){var t=e.width,i=e.height,s=e.tilesize,r=Object(n.useRef)(),c=Object(n.useState)(new d(t,i,s)),l=Object(o.a)(c,2),u=l[0],f=l[1],v=new h,y=function(e,t){console.log("handle input: ".concat(JSON.stringify(t)," ").concat(e));var i=new d;Object.assign(i,u),i.movePlayer(t.x,t.y),f(i)};return Object(n.useEffect)((function(){console.log("create map");var e=new d;Object.assign(e,u),e.createCellularMap(),e.moveToSpace(u.player),f(e)}),[]),Object(n.useEffect)((function(){return console.log("binding input manager"),v.bindKeys(),v.subscribe(y),function(){v.unBindKeys(),v.unsuscribe(y)}})),Object(n.useEffect)((function(){console.log("Dibujar el canvas");var e=r.current.getContext("2d");e.clearRect(0,0,t*s,i*s),u.draw(e)})),a.a.createElement("canvas",{ref:r,width:t*s,height:i*s,style:{border:"1px solid black"}})},y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,{width:40,height:40,tilesize:16}))};r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6e9fe2c6.chunk.js.map