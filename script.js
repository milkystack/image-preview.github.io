
var url = new URL(location.href);
var params = new URLSearchParams(url.search);

for(let param of params){
    if (param[0] != 'base'){
        document.body.innerText += "https://media.discordapp.net/attachments/" + params.get('base') + param[1]; 
    }
}
