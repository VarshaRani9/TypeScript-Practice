function hof ( callback : () => void){
    setTimeout(callback, 1000)
}
hof(function() {
    console.log("Hii there");
})