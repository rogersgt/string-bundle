## string-bundle

`string-bundle template.html output.js`

string-bundle takes an html file and renders it into a javascript file for exporting as a template.
The format of the output is:

`
module.exports=function(){
 return '<!DOCTYPE html>' +
'<html>' +
'  <head>' +
'    <meta charset="utf-8">' +
'    <title>title</title>' +
'  </head>' +
'  <body>' +
'    <h1>hello stringify</h1>' +
'    Hello there' +
'  </body>' +
'</html>' ;
};
`
I created this in an attempt to provide a straightforward way of using html template files for various JavaScript frameworks and libraries with a simple-to-use tool.
