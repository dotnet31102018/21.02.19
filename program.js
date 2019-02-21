// read numbers first way (less favorite)
//var x1 = prompt("Please enter first number", 0)
//var y1 = prompt("Please enter second number", 0)
//var z1 = parseInt(x) + parseInt(y)

// 1
var x = parseInt( prompt("Please enter first number", 0) )
var y = parseInt( prompt("Please enter second number", 0) )
if (x > y)
  {
    // if true
    alert(x)
  }
else
  {
    alert(y)
  }


var sum = 0
do
  {
    var x1 = parseInt( prompt("Please enter number", 0) )
    sum = sum + x1
  }
while(x1 != 0)
  alert(sum)
