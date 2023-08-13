

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("eldiv").addEventListener("click", function(event){

        alert("hola, soy el div")
        console.log("clicked")
        event.stopPropagation()
        
        })

        document.getElementById("botoncito").addEventListener("click", function(event) {
            event.stopPropagation()
        })

})




