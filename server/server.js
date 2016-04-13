var express = require('express');

var app = express();
var path = require('path');

app.use(express.static('server/public'));

var adjectiveList = ['Pistachio', 'Sparkly', 'Banana', 'Nerdy', 'Rainbow',
'HungryHungry', 'Invisible', 'Magnificent', 'Fancy', 'Lunar', 'Cantankerous',
'Geodesic', 'BigNosed', 'Spaghetti', 'Ursine', 'Spanky', 'Murderous', 'Code',
'Urgent', 'Instant', 'Anonymous', 'Static', 'Tiny', 'Massive', 'CroMagnon',
'Vegan', 'Hipster', 'Fighting', 'Quizzical', 'Tumbling', 'Tetra',
'TheChosen', 'SoupedUp', 'NonCanonical', 'Mellifluous', 'Hulking', 'Stinky',
'Egregious', 'Bovine', 'Real', 'Fake', 'Faux', 'EastSide', 'Ancient', 'Blue',
'Magnum', 'Neon', 'Retro', 'Unsavory', 'Aggressive', 'Sepia'
,'Feral'];

var nounList = ['Sandwich', 'Nerd', 'Monkey', 'Cowboy', 'Ninja', 'Pants',
'Octothorpe', 'Unicorn', 'Hamster', 'Bunny', 'GlowWorm', 'Dome', 'Rhombus',
'Octopi', 'Punk', 'PrimeMinister', 'JointChief', 'Robot',
'Pi', 'Hipster', 'Pizza', 'Query', 'Array', 'Soup', 'Tumbleweed', 'SmartyPants',
'Bro', 'Barricuda', 'Diet', 'Gamer', 'Pirate', 'Chihuaua'];

// replace with response.send for html file
app.get('/', function(request, response){
  var createdPath = path.join(__dirname, '../server/public/views/index.html');
  console.log(createdPath);
  response.sendFile(createdPath);
});

app.get('/adjectives', function(request, response){
  response.send(adjectiveList);
});

app.get('/nouns', function(request, response){
  response.send(nounList);
});

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port, '. Control C to exit.');
})
