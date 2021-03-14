# speech-recognizer
The speech-recognition library for javascript. Convert speech to text easily.

Installation:

First, make a package.json file:

``` npm init ```

Now, you can install this package using npm. Well you can also install the source from GitHub.

``` npm install javascript-speech-recognizer-library --save ```

NPM package: https://www.npmjs.com/package/javascript-speech-recognizer-library

Sample Code:-

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Click on the below button to start transcribing...</p><br>
    <p><button type="submit" id="name">🎙️ Transcribe</button> &nbsp; <span id="action"></span></p>
    <div id="output"></div>
    <script type="module">
        import * as main from '../index.js';
        function init() {
            main.speechRegognition("output");
        };
        document.getElementById('name').onclick = init;
    </script>
</body>
</html>
```

Here the line of code ``` main.speechrecognition("output"); ``` calls the speech recognizer function from index.js and we basically add a div to contain the transcribed text which is output after transcribing.
Inside the function , the first and the only parameter is the class of the div.

If any queries or doubts regarding speech-recognizer JS library, ask me at stackoverflow - https://stackoverflow.com/users/15198272/anandakrishnan
