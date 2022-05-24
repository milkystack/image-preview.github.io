
function loads(){
    var url = new URL(location.href);
    var params = new URLSearchParams(url.search);
    params.sort()

    var count = 0;
    for(let param of params){
        if (param[0] != 'base' && param[0] != 'waifu2x' && param[0] != 'bgc' && param[0] != 'anim' && param[0] != 'shortlink' && param[0] != 'title' && param[0] != 'link'){
            url = "https://media.discordapp.net/attachments/" + params.get('base') + param[1];
            if ( url.indexOf('.mp4') != -1) {
                document.body.innerHTML += "<a href='" + url + "' class='image'>スタンプ: " + count + "</a><br>";
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

}
setTimeout(loads, 100);



