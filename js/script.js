/**
 * Variable Scope Created by Phirom Yim on 4/29/14.
 */


var width = 5;//scoped outside of the function

//function definition
function calcArea(){
    var width = 20;//code inside braces
    var height = 30;//variable for height
    var area = width * height;//variable for are
    //console.log(area);//print code
}
//function needs to be invoked or called to run
calcArea();//actual invocation of the function
console.log (width);//will prefer width = 5 instead of function width