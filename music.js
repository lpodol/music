var http = require("http");
var msg = "";

// var artists = ["Broadcast", "Caribou", "Beach House"];
//
// var artist = {
//   broadcast: ["The Noise Made By People","Haha Sound"],
//   caribou: ["The Milk of Human Kindness","Andorra"],
//   beach house: ["Devotion","Teen Dream"]
// };
//
// var album = {
//   noise: ["Unchanging Window","Come On Let's Go","Papercuts"],
//   haha: ["Before We Begin","Ominous Cloud","Winter Now"],
//   milk: ["Bees","Hello Hammerheads","Pelican Narrows"],
//   andorra: ["Melody Day","She's the One","Irene"],
//   devotion: ["Wedding Bell","Holy Dances","D.A.R.L.I.N.G."],
//   teen: ["Zebra","Norway","Used to Be"]
// };

var server = http.createServer(function(request,response){
  var path = request.url;
  var split2 = path.split("/")[2];
  var split3 = path.split("/")[3];

  var broadcast = "<li><a href='http://localhost:2000/artists/broadcast'>Broadcast</a></li>";
  var caribou = "<li><a href='http://localhost:2000/artists/caribou'>Caribou</a></li>";
  var bh = "<li><a href='http://localhost:2000/artists/beach_house'>Beach House</a></li>";
  var home = "<a href='http://localhost:2000/artists'>Home</a>";

  if (path === "/artists"){
      msg = "<html><body><h1>Artists</h1><ul>" + broadcast + caribou + bh + "</ul></body></html>";
    }else if (path === "/artists/" + split2){
      if (split2 === "broadcast") {
        msg = "<html><body><h1>Broadcast Albums:</h1><ul><li><a href='broadcast/thenoisemadebypeople'>The Noise Made By People</a></li><li><a href='broadcast/hahasound'>Haha Sound</a></li></ul></body></html>";
      }
      if (split2 === "caribou") {
        msg = "<html><body><h1>Caribou Albums:</h1><ul><li><a href='caribou/themilkofhumankindness'>The Milk of Human Kindess</a></li><li><a href='caribou/andorra'>Andorra</a></li></ul></body><html>";
      }
      if (split2 === "beach_house") {
        msg = "<html><body><h1>Beach House Albums:</h1><ul><li><a href='beach_house/devotion'>Devotion</a></li><li><a href='beach_house/teendream'>Teen Dream</a></li></ul></body><html>";
      }
    }else if (path === "/artists/" + split2 + "/" + split3){
      if ((split2 === "broadcast") && (split3 === "thenoisemadebypeople")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/nB2wJfHadMo'>Unchanging Window</a></li><li><a href = 'http://youtu.be/Zw5ztuhEat4'>Come On Let's Go</a></li><li><a href='http://youtu.be/c5ZJ-N750Bk'>Papercuts</a></li></ul></body></html>"
      }
      if ((split2 === "broadcast") && (split3 === "hahasound")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/E8uIErB48tk'>Before We Begin</a></li><li><a href = 'http://youtu.be/0Gd8z-CeaJI'>Ominous Cloud</a></li><li><a href = 'http://youtu.be/_JT14fSTIVQ'>Winter Now</a></li></ul></body></html>"
      }
      if ((split2 === "caribou") && (split3 === "themilkofhumankindness")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/RqdQGdf8ado'>Bees</a></li><li><a href = 'http://youtu.be/Fk0hWyRGdik'>Hello Hammerheads</a></li><li><a href = 'http://youtu.be/jjhlgCCapsc'>Pelican Narrows</a></li></ul></body></html>"
      }
      if ((split2 === "caribou") && (split3 === "andorra")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/M7Oe1DN5VDA'>Melody Day</a></li><li><a href = 'http://youtu.be/4BuY-E_Ogk4'>She's the One</a></li><li><a href = 'http://youtu.be/Ys1ebo0vzik'>Irene</a></li></ul></body></html>"
      }
      if ((split2 === "beach_house") && (split3 === "devotion")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/-JqYVukDpqI'>Wedding Bell</a></li><li><a href = 'http://youtu.be/qxf6OgbvayM'>Gila</a></li><li><a href = 'http://youtu.be/zJJppx1FR9k'>D.A.R.L.I.N.G.</a></li></ul></body></html>"
      }
      if ((split2 === "beach_house") && (split3 === "teendream")){
        msg = "<html><body><h1>Click the link to be taken to a YouTube video!</h1><ul><li><a href = 'http://youtu.be/N-wfb25WmV4'>Zebra</a></li><li><a href = 'http://youtu.be/HeaHW-rUsUQ'>Walk in the Park</a></li><li><a href = 'http://youtu.be/vCrr4d98pc4'>Used to Be</a></li></ul></body></html>"
      }
    }
response.end(msg);
});

server.listen(2000);
