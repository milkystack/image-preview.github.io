
var url = new URL(location.href);
var params = new URLSearchParams(url.search);
params = params.sort();

for(let param of params){
    if (param[0] != 'base'){
        url = "https://media.discordapp.net/attachments/" + params.get('base') + param[1]; 
        document.body.innerHTML += "<img src='" + url + "' class='image'>"
    }
}
