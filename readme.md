# Wordle stats import/export

Find yourself wanting to move your wordle game to a new device but afraid you'll lose all of your stats?

Worry no more!

Simply copy and paste this code into your URL bar while looking at Wordle, follow the instructions, and enjoy the game on a new device with your entire history!

```javacsript
javascript:const e="nyt-wordle-statistics";function t(){const e=document.createElement("div");e.style.background="#fff",e.style.padding="10px",e.style.position="relative";const t=document.createElement("button");t.innerText="Copy stats to clipboard",t.onclick=o.bind(null,e);const s=document.createElement("button");s.innerText="Import",s.onclick=n,e.innerHTML="<h1>Import/export stats</h1><div>Click the 'copy to clipboard' button below to copy your stats. Paste them somewhere safe. Then, on your new device, copy that text to your clipboard and click 'import from clipboard'.<br><br>This will OVERWRITE the stats currently on the device and replace it with the ones you previously exported, so please <strong> USE WITH CAUTION</strong>.</div>",e.append(t,s);const c=document.createElement("div");return c.onclick=()=>window.location.reload(),e.prepend(c),c.innerHTML="<strong>X</strong>",c.style.cssText="position:absolute;top:0;right:0;cursor:pointer;padding:5px",e}function o(t){const o=localStorage.getItem(e);const n=document.createElement("input");n.value=o,n.style.opacity=0,t.append(n),n.select(),document.execCommand("copy"),alert("Copied! Now put it somewhere safe")}function n(){let t="Paste your stats here to replace them on this device.";localStorage.getItem(e)&&(t="There are already stats on this device. Are you sure you wish to replace them? This cannot be undone.");const o=prompt(t);if(o)try{JSON.parse(o),localStorage.setItem(e,o),alert("Stats successfully imported. Have fun!"),window.location.reload()}catch(e){alert("These stats are invalid!")}else alert("Aborted. Nothing has been changed.")}(()=>{const e=document.createElement("div");e.style.cssText="display:flex;position:absolute;top:0;right:0;left:0;bottom:0;justify-content:center;align-items:center;background:rgba(0,0,0,0.7)";const o=t();e.append(o),document.body.after(e)})();
```
