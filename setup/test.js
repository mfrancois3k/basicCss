// show 1...wait a sec..2...wait a sec..etc 10 times
// need to be spaced out chrological order with br


var str = '...wait a sec..';
var d = document.createElement('div');

function loop(num){
  for(var i=0; i < str.length; i++){
      for(var j=0; j < num[i].length; j++){
        d = d.appendChild()  
        console.log(d + num[i][j])
      }
  }
}

loop(10);