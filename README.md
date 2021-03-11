# speech-recognizer
The speech-recognition library for javascript. Convert speech to text easily.

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
