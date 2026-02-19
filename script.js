let reagentes=[],proporcoes=[],volumeTotalAtual=0;
function adicionarReagente(){const n=nome.value,v=parseFloat(volume.value),u=unidade.value;if(!n||isNaN(v))return alert('Erro');reagentes.push({nome:n,volume:u==='l'?v*1000:v});}
function calcularMistura(){const t=parseFloat(volumeTotal.value);const s=reagentes.reduce((a,b)=>a+b.volume,0);if(s>t)return alert('Excede');const a=t-s;volumeTotalAtual=t;const m=[...reagentes,{nome:'Água',volume:a}];proporcoes=m.map(r=>({nome:r.nome,proporcao:r.volume/t}));mostrar(m);}
function mostrar(m){resultado.innerHTML='';m.forEach(r=>resultado.innerHTML+=`<li>${r.nome}: ${r.volume.toFixed(2)} ml</li>`);}
function recalcular(){const n=parseFloat(novoVolume.value);volumeTotalAtual=n;mostrar(proporcoes.map(p=>({nome:p.nome,volume:p.proporcao*n})));}