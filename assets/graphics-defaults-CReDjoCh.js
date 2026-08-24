import{Z as B,_,$ as O,e as p,a0 as m}from"./index-CRaE0M-J.js";import{a as M,b as h,V as v,Q as K,c as A}from"./card-table-graphics-DaEqHo2x.js";function X(){const e=document.getElementById("online-log-panel"),n=document.getElementById("online-log-user-tab"),o=document.getElementById("online-log-engineer-tab"),s=document.getElementById("online-log-clear");if(!e||!n||!o||!s)return()=>{};let i="user";const r=()=>{e.innerHTML=i==="user"?H(O()):G(O()),n.classList.toggle("active",i==="user"),o.classList.toggle("active",i==="engineer")},t=()=>{i="user",r()},u=()=>{i="engineer",r()},l=()=>_();n.addEventListener("click",t),o.addEventListener("click",u),s.addEventListener("click",l);const c=B(r);return r(),()=>{c(),n.removeEventListener("click",t),o.removeEventListener("click",u),s.removeEventListener("click",l)}}function H(e){const n=e.userEntries.slice(-10).reverse(),o=e.errors.filter(i=>i.audience==="user"||i.level==="error").slice(-5).reverse(),s=e.roomTimeline.slice(-5).reverse();return`
      <div class="online-log-section">
        <div class="online-log-heading">状態</div>
        ${n.length?n.map(D).join(""):'<div class="online-log-empty">オンライン処理のログはまだありません</div>'}
      </div>
      <div class="online-log-section">
        <div class="online-log-heading">エラー</div>
        ${o.length?o.map(D).join(""):'<div class="online-log-empty">エラーはありません</div>'}
      </div>
      <div class="online-log-section">
        <div class="online-log-heading">部屋タイムライン</div>
        ${s.length?s.map(T).join(""):'<div class="online-log-empty">部屋情報はまだありません</div>'}
      </div>
    `}function G(e){const n=e.errors.slice(-20).reverse(),o=e.roomTimeline.slice(-40).reverse(),s=e.engineerEntries.slice(-20).reverse();return`
      <div class="online-log-section">
        <div class="online-log-heading">エラー一覧</div>
        ${n.length?n.map(R).join(""):'<div class="online-log-empty">エラーはありません</div>'}
      </div>
      <div class="online-log-section">
        <div class="online-log-heading">全部屋のタイムライン</div>
        ${o.length?o.map(T).join(""):'<div class="online-log-empty">部屋情報はまだありません</div>'}
      </div>
      <div class="online-log-section">
        <div class="online-log-heading">全イベント</div>
        ${s.length?s.map(R).join(""):'<div class="online-log-empty">イベントはまだありません</div>'}
      </div>
    `}function D(e){return`
      <div class="online-log-entry ${e.level}">
        <div class="online-log-meta">${b(e.at)} ${p(e.level)}</div>
        <div>${p(e.message)}</div>
        ${e.roomId?`<div class="online-log-room-id">${p(e.roomId)}</div>`:""}
      </div>
    `}function R(e){return`
      <div class="online-log-entry ${e.level}">
        <div class="online-log-meta">${b(e.at)} ${p(e.kind)} ${p(e.level)}</div>
        <div>${p(e.message)}</div>
        ${e.roomId?`<div class="online-log-room-id">${p(e.roomId)}</div>`:""}
        ${e.detail?`<pre class="online-log-pre">${p(e.detail)}</pre>`:""}
        ${e.rooms?.length?`<pre class="online-log-pre">${p(JSON.stringify(e.rooms,null,2))}</pre>`:""}
      </div>
    `}function T(e){const n=e.rooms??[];return`
      <div class="online-log-entry room">
        <div class="online-log-meta">${b(e.at)} ${p(e.message)}</div>
        ${n.length?n.map(F).join(""):'<div class="online-log-empty">対象部屋なし</div>'}
      </div>
    `}function F(e){return`
      <div class="online-log-room">
        <div class="online-log-room-line">${p(e.id)} / ${p(e.status)} / rev ${e.revision}</div>
        <div class="online-log-room-line">host:${p(e.hostId||"-")} human:${e.humanCount} cpu:${e.cpuCount}</div>
        <div class="online-log-room-line">${p(e.players.join(", ")||"players:none")}</div>
      </div>
    `}function b(e){return new Date(e).toLocaleTimeString("ja-JP",{hour12:!1})}function g(e){return{key:e.id,rank:$(e),suit:j(e),specialLevel:e.level}}function x(e,n=!1){return`<div class="poker-mini-cards"${n?' aria-hidden="true"':""}>${e.map(o=>`<span class="poker-mini-card ${o.suit==="hearts"||o.suit==="diamonds"?"is-red":""}" aria-label="${Z(o)}の${$(o)}"><b>${$(o)}</b><i>${j(o)}</i></span>`).join("")}</div>`}function $(e){return e.rank===14?"A":e.rank===13?"K":e.rank===12?"Q":e.rank===11?"J":String(e.rank)}function j(e){return e.suit==="spades"?"♠":e.suit==="hearts"?"♥":e.suit==="diamonds"?"♦":"♣"}function Z(e){return e.suit==="spades"?"スペード":e.suit==="hearts"?"ハート":e.suit==="diamonds"?"ダイヤ":"クラブ"}function J(e){return`${e.toLocaleString("ja-JP")}円`}function ee(e){return`<span class="poker-money">${J(e)}</span>`}const N=-3.35,ne=3.35;m.poker.showdownScale;const C=Array.from({length:9},(e,n)=>`random-deck-${n}`);function L(e,n=m.pokerMarket){const o=e%7,s=Math.floor(e/7);return new v(N+(o-3)*n.columnSpacing,n.height,n.centerZ+(s-.5)*n.rowSpacing)}function V(e=m.pokerMarket){const n=L(13,e),o=C.length-1;return f(n.x,n.y+o*h*e.cardScale,n.z,e.cardScale,o+1)}function q(e,n=m.pokerMarket){return e.market.flatMap((o,s)=>{const i=L(s,n),r=[],t=o.kind==="random"?C.map(l=>({id:l})):e.marketPilesByRank[o.rank]??[],u=o.kind==="rank"?U(i,t.length,n):[];return t.forEach((l,c)=>r.push({key:(o.kind==="random",l.id),card:o.kind==="random"?null:g(l),pose:o.kind==="random"?f(i.x,i.y+c*h*n.cardScale,i.z,n.cardScale,c+1):u[c],zone:o.kind==="random"?"random-deck":`market:${o.rank}`,transition:{departure:"none",unknownSource:"target"}})),r})}function oe(e,n,o=n.humanPlayerId){const s=new Set(Object.values(e.marketPilesByRank).flatMap(a=>(a??[]).map(d=>d.id))),i=new Set(e.players.filter(a=>a.id!==o).flatMap(a=>a.hand.flatMap(d=>d.sourceCardIds??[d.id]))),r=Object.values(n.marketPilesByRank).flatMap(a=>(a??[]).filter(d=>!s.has(d.id)&&i.has(d.id)).map(d=>d.id)),t=n.lastPurchaseOutcomes.flatMap(a=>a.purchased&&a.kind==="rank"&&a.playerId!==o&&a.cardId?[a.cardId]:[]),u=new Set(n.players.find(a=>a.id===o)?.hand.map(a=>a.id)??[]),l=e.players.find(a=>a.id===o)?.hand.filter(a=>!u.has(a.id))??[],c=new Map(l.flatMap(a=>(a.sourceCardIds??[a.id]).map(d=>[d,a.id]))),w=Object.values(n.marketPilesByRank).flatMap(a=>(a??[]).flatMap(d=>{const y=c.get(d.id);return y&&y!==d.id?[{key:d.id,sourceKey:y}]:[]})),S=n.lastPurchaseOutcomes.flatMap(a=>a.purchased&&a.playerId===o&&a.cardId?[{key:a.cardId,...a.kind==="random"&&a.destinationCardId!==a.cardId?{sourceKey:C.at(-1)}:{},revealFromSource:!0}]:[]),P=r.map(a=>({key:a,unknownSource:"right",revealFromSource:!0})),E=t.map(a=>({key:a,departure:"right"}));return{instructions:[...w,...S,...P,...E]}}function ae(e,n,o=m.pokerMarket,s=n.humanPlayerId){const i=new Map(q(e,o).map(r=>[r.key,r]));return n.lastPurchaseOutcomes.flatMap(r=>{if(!r.purchased||r.playerId!==s||!r.cardId||!r.destinationCardId||r.destinationCardId===r.cardId)return[];const t=i.get(r.cardId),u=n.players.find(c=>c.id===s)?.hand.find(c=>c.id===r.destinationCardId),l=t?.card?t:r.kind==="random"&&u?{key:r.cardId,card:g({...u,id:r.cardId,level:1,sourceCardIds:[r.cardId]}),pose:V(o),zone:"random-deck"}:null;return l?.card?[{...l,card:{...l.card},pose:{position:l.pose.position.clone(),quaternion:l.pose.quaternion.clone(),scale:l.pose.scale.clone(),layer:l.pose.layer,selectOffset:l.pose.selectOffset.clone()},zone:"transition-overlay",transition:{poseTargetKey:r.destinationCardId,motion:"hand",departure:"none",unknownSource:"target"}}]:[]})}function re(e,n,o=e,s=m.poker){const i=Q(s),r=i?s:m.poker,t=i?r.showdownDeckPosition:s,u={x:0,y:0,z:0},l=I(t,i?r.showdownDeckOffset:u),c=I(t,i?r.showdownCardsOffset:u),w=M*r.showdownScale,S=new Set(e.map(k=>k.id)),P=o.filter(k=>!S.has(k.id));return[...e.map((k,a)=>{const d=n>a;return{key:k.id,card:d?g(k):null,pose:d?f(c.x+(a-2)*w,c.y,c.z,r.showdownScale,a):z(l,a,r.showdownScale),zone:d?"poker-showdown-front":"poker-showdown-back",transition:d?{revealFromSource:!0}:void 0}}),...P.map((k,a)=>({key:k.id,card:null,pose:z(l,e.length+a,r.showdownScale),zone:"poker-showdown-back"}))]}function se(e,n,o=m.poker){const s=I(o.showdownDeckPosition,o.showdownCardsOffset),i=M*o.showdownScale;return e.map((r,t)=>({key:r.id,card:t<n?g(r):null,pose:f(s.x+(t-2)*i,s.y,s.z,o.showdownScale,t),zone:t<n?"simple-community-front":"simple-community-back",transition:t<n?{revealFromSource:!0}:void 0}))}function Q(e){return"showdownDeckPosition"in e}function I(e,n){return{x:e.x+n.x,y:e.y+n.y,z:e.z+n.z}}function U(e,n,o){if(n===0)return[];const s=new v(o.cardScale,o.cardScale,o.cardScale),i=A({count:n,origin:e,totalWidth:M*o.cardScale+o.pileCardOffset*Math.max(0,n-1),arcRadians:0,pitch:0,planeYaw:-Math.PI/2,baseYaw:Math.PI/2,scale:s,stackHeight:0,selectedOffsetEnabled:!1,selectedOffset:0}),r=e.clone().sub(i[0].position);return i.forEach((t,u)=>{t.position.add(r),t.position.y+=u*h*o.cardScale}),i}function f(e,n,o,s,i){return{position:new v(e,n,o),quaternion:new K,scale:new v(s,s,s),layer:i,selectOffset:new v}}function z(e,n,o){return f(e.x,e.y+n*h*o,e.z,o,n)}function ie(e){return Object.assign(e.camera,{zoom:1.2,verticalOffset:.28,angle:56}),Object.assign(e.table,{horizontalScale:1.22,feltTextureScale:.8,feltRoughness:.77}),Object.assign(e.layout,{cardSize:1.15,fieldPositionZ:1.67,humanHandPositionZ:4.6,humanHandWidth:6.3,opponentRadius:3.5}),e.pokerMarket.cardScale=.7,e.pokerMarket.columnSpacing=.88,e.pokerMarket.rowSpacing=3.55,e.pokerMarket.height=.457,e.pokerMarket.centerZ=-.63,e.pokerMarket.pileCardOffset=.29,e.pokerMarket.uiScale.x=.81,e.pokerMarket.uiRowSpacing=-6,e.pokerMarket.uiOffset.y=-41,e}export{N as P,x as a,X as b,se as c,ie as d,oe as e,J as f,ne as g,q as h,ae as i,V as j,re as k,L as l,ee as m,$ as p,g as t};
