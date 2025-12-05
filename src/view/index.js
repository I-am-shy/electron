alert('Hello Electron')

const platform = window.info?.platform()
const node = window.info?.node()
const chrome = window.info?.chrome()
const electron = window.info?.electron()

const p = document.createElement('p')
p.innerHTML = `
<strong>当前平台：</strong>${platform} <br>
<strong>Node版本：</strong>${node} <br>
<strong>Chrome版本：</strong>${chrome} <br>
<strong>Electron版本：</strong>${electron} `

document.body.appendChild(p)