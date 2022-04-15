
var url = new URL(location.href);
var params = new URLSearchParams(url.search);

for(let param of params){
    document.body.innerText += "https://media.discordapp.net/attachments/" + params.get('a') + param[1]; 
}
