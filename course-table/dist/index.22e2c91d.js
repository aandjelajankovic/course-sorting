function e(e){document.querySelector("#table-body").innerHTML=e.map(e=>`
        <tr>
          <td>${e.code}</td>          
          <td>${e.coursename}</td>    
          <td>${e.progression}</td>  
        </tr>
      `).join("")}!async function(){try{let t=await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json"),n=await t.json();e(n),function(t){let n=document.querySelector("#search"),o=document.querySelectorAll("th");n.addEventListener("input",()=>{let o=n.value.toLowerCase();e(t.filter(e=>e.code.toLowerCase().includes(o)||e.coursename.toLowerCase().includes(o)))}),o.forEach(n=>{n.addEventListener("click",()=>{let o=n.dataset.key;e(t.sort((e,t)=>e[o]>t[o]?1:-1))})})}(n)}catch(e){console.error("kunde inte hämta data",e)}}();
//# sourceMappingURL=index.22e2c91d.js.map
