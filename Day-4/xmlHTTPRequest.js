let request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
request.send();
request.onload = function() {
    let req = JSON.parse(request.response);
    console.log(req);
}