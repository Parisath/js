let input = document.querySelector("input")
function adding(get){
    input.value+=get

}
function clearing(){
    input.value=""
}
function re(){
    input.value=input.value.slice(0,input.value.length-1)
}
function ev(){

    input.value=eval(input.value)

}