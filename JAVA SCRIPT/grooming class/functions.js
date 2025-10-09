// nested functions
console.log("Start")
function GrandParent(){
var a=10
var b=20

function outer(){
    var m=10
    var n=20
    var o=30
    function inner(){
        var x=50
        var y=60
        return x=y=m
    }
    return inner()
}
console.log(outer())
}
console.log(GrandParent())
console.log("end")