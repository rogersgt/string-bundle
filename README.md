# string-bundle

String-bundle takes an html file and renders it into a JavaScript file for exporting as a string template. String-bundle is intended to be used as a straightforward way of using html template files for JavaScript partial DOM rendering.

`sudo npm install string-bundle -g`

`string-bundle template.html output.js`

## Advanced

### string-bundle.json
``` bash
{
  "modules": [
    {
      "input": "path/to/template.html",
      "output": "path/to/output.js"
    }
  ]
}
```
Then simply: `string-bundle` will compile all files listed in the "modules" section of the string-bundle.json file.
