
var url = new URL('https://into-the-program.com?a=100&b=200&c=300');
var params = new URLSearchParams(url.search);

for(let param of params){
    alert(param);
}
