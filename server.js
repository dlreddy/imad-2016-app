var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    
	title: 'Article One | dlreddy',
    
	heading: 'Article One',
    
	date: '15 06 2016',
    
	content: `<p>this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy..this is my first article so i have to do work hard to  get good result follow codecadamy
	adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.
	this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first 
	article so i have to do ff work hard to  get good result follow codecadamy adn khanacadamy.</p>`
},
    'article-two':{
        title: 'Article two | dlreddy',
    
	heading: 'Article two',
    
	date: '05 08 2016',
    
	content: `<p>this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy..this is my first article so i have to do work hard to  get good result follow codecadamy
	adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.
	this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first 
	article so i have to do ff work hard to  get good result follow codecadamy adn khanacadamy.</p>`
        
    },
    'article-three':{
        title: 'Article three | dlreddy',
    
	heading: 'Article three',
    
	date: '25 06 2016',
    
	content: `<p>this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy.this is my first article so i have to do work hard to  get good result follow codecadamy 
	adn khanacadamy..this is my first article so i have to do work hard to  get good result follow codecadamy
	adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.
	this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.</p>
            
            

	<p>this is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy.this 
	is my first article so i have to do work hard to  get good result follow codecadamy adn khanacadamy..this is my first 
	article so i have to do ff work hard to  get good result follow codecadamy adn khanacadamy.</p>`
    }
};

function createTemplate (data){
    
        title = data.title;
    	date = data.date;
    	heading = data.heading;
    	content = data.content;
        var htmlTemplet =`
    	<html>
            <head>
        		<meta name="viewpoint" content='width-divice-width, initial-scale=1' />
    			<title> ${title} </title>
    		</head>
            <body>
    			<div><a href="/">Home</a></div>
    			<hr/>
    			<h3> ${heading} </h3>
    			<div> ${date} </div>
    			<div> ${content} </div>
            </body>
    
	    </html>
	    `;
    	return htmlTemplate ;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName == article-one
    //article[articleName] == {} content object for article one
    var articleName = req.params.articleName;
   res.send(creatTemplate(articles[articleNam]));
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
