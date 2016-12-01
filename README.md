## string-bundle

`sudo npm install string-bundle -g`

`string-bundle template.html output.js`

string-bundle takes an html file and renders it into a JavaScript file for exporting as a string template.
The format of the output is:

`module.exports=function(){`
`return '<!DOCTYPE html>' +`
`'<html>' +`
`'  <head>' +`
`'    <meta charset="utf-8">' +`
`'    <title>title</title>' +`
`'  </head>' +`
`'  <body>' +`
`'    <h1>hello string-bundle</h1>' +`
`'    Hello there' +`
`'  </body>' +`
`'</html>' ;`
`};`

String-bundle is intended to be used as a straightforward way of using html template files for various JavaScript frameworks (like Vue.js) and libraries with a simple-to-use tool.
