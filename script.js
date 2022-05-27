var url = new URL(location.href);
var params = new URLSearchParams(url.search);
params.sort()

var fruits = ["base", "waifu2x", "bgc", "anim", "shortlink", "title", "link"];

var count = 0;
for(let param of params){
    if(fruits.indexOf(param[0]) =< -1) {
        url = "https://media.discordapp.net/attachments/" + params.get('base') + param[1];
        if ( url.indexOf('.mp4') != -1) {
            document.body.innerHTML += "<a href='" + url + "'><img src='" + url + "' class='image'></a>";
        }else{
            document.body.innerHTML += "<img src='" + url + "' class='image'>";
        }
        count += 1;
    }
}
    
document.body.innerHTML += "<div id='footer'><div class='footer_content'>画像は長押しで保存できます。</div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[mode] waifu2x: " + params.get('waifu2x') + "　bgc: " + params.get('bgc') + "　anim: " + params.get('anim') + "</div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[content-len] " + count + "</div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[sticker-link] <a href='" + params.get('link') + "'>" + params.get('title') + "</a></div></div>";
document.body.innerHTML += "<div id='footer'><div class='footer_content'>[shere-link] <a href='" + params.get('shortlink') + "'>" + params.get('shortlink') + "</a></div></div>";



