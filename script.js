
var url = new URL(location.href);
var params = new URLSearchParams(url.search);
urls = []

for(let param of params){
    if (param[0] != 'base' && param[0] != 'waifu2x' && param[0] != 'bgc' && param[0] != 'anim' && param[0] != 'shortlink' && param[0] != 'title' && param[0] != 'link'){
        url = "https://media.discordapp.net/attachments/" + params.get('base') + param[1];
        urls.push(url); 
    }
}

urls = urls.sort()
urls.forEach(function(val){
   document.body.innerHTML += "<img src='" + val + "' class='image'>";
});

document.body.innerHTML += "<div id='footer'><div class='footer_content'>画像は長押しで保存できます。</div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[mode] waifu2x: " + params.get('waifu2x') + "　bgc: " + params.get('bgc') + "　anim: " + params.get('anim') + "</div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[len] " + urls.length + "</div></div>";
document.body.innerHTML += "<div id='footer'> <div class='footer_content'>[stickerlink] <a href='" + params.get('link') + "'>" + params.get('title') + "</a></div></div>";
document.body.innerHTML += "<div id='footer'> <div class='footer_content'>[sherelink] <a href='" + params.get('shortlink') + "'>" + params.get('shortlink') + "</a></div></div>";

// きゃーみないで
