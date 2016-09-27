var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | dlreddy',
    heading: 'Article One',
    date: '15 06 2016',
    content: `<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.</p>
            
            <p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.</p>
            
            <p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first article so i have to do ff work hard to  get good result follow codecadamy adn khanacadamy.</p>
        `,
};

function createTemplet (data){
    title = data.title;
    date = data.date;
    heading = data.heading;
    content = data.content;

var htmlTemplet =`<html>
    <head>
        <meta name="viewpoint" content='width-divice-width, initial-scale=1' />
        <title>
            ${title}
        </title>
    </head>
    <body>
        <div><a href="/">Home</a></div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
           ${content}
        </div>
    </body>
    </html>
    
    
    `;
    return htmlTemplet;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){ 
   res.send(creatTemplet(article-one));
});
app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
