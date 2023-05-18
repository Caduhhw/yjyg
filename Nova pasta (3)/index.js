let cadastrar = document.getElementById("test")
let telalogin = document.getElementById("cad")
let telasite = document.getElementById("telasite")
cadastrar.addEventListener("auxclick", function(){
    if (telasite.style.display == "none") {
        telalogin.style.display = "none"
        telasite.style.display = "block"
    }
})