http = require('http');
url = require('url');
querystring = require('querystring');

function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log('Request for ' + path + 'received.');
    var query = url.parse(request.url).query;
    console.log(query);
    var num1 = querystring.parse(query)["num1"];
    var num2 = querystring.parse(query)["num2"];
    var op = querystring.parse(query)["operator"];
    var ans;
    if(op=='+')
    {
        ans=num1+num2;
        response.write('The Answer is ' + ans);
    }
    else if(op=='-')
    {
        ans=num1-num2;
        response.write('The Answer is ' + ans);

    }
    else if(op=='*')
    {
        ans=num1*num2;
        response.write('The Answer is ' + ans);
    }
    else{
        ans=num1/num2;
        response.write('The Answer is ' + ans);
    }

     response.end();

}

http.createServer(onRequest).listen(8080);
console.log('Server started..');