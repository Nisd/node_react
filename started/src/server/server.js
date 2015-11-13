/**
 * Created by pomy on 15/11/13.
 */

var path = require('path');
var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var serve = require('koa-static');

var render = require('./lib/render');

var app = koa();

app.use(logger());
app.use(route.get('/', home));

function *home(){
    this.body = yield render('home', {name: 'pomy'});
}

app.use(serve(path.join(__dirname, '../../dist')));

if (module.parent) {
    app.listen(3000);
    console.log('listening on port 3000...');
}