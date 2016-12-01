## string-bundle

`sudo npm install string-bundle -g`

`string-bundle template.html output.js`

string-bundle takes an html file and renders it into a JavaScript file for exporting as a string template.

String-bundle is intended to be used as a straightforward way of using html template files for various JavaScript frameworks (like Vue.js) and libraries with a simple-to-use tool.

Using string-bundle with Vue.js:

# home.html
``` bash
<div class="pageWrapper">
  <h1>Home</h1>
  <h3>{{message}}</h3>
</div>
```

Then create a blank JavaScript file: home.js.

`string-bundle home.html home.js`

# index.js
`const home = require('home');`

``` bash
const homeComponent = new Vue({
  el: '#app',
  template: home,
  data: {
    message: 'hello string-bundle'
  }
});
```
