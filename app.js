const express = require('express');


const app = express();

app.get('/' , (req , res , next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<Body><h1>Hello Karesko</h1></Body>');
    res.end();
});

app.listen(4000);