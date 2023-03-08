$(document).ready(function() {

     let slideAtual = 1
     let listaSlides = ["banner-inicial","banner-carabao","banner-news"]
    setInterval(mudarSlide,2000)
     
function mudarSlide(){
   
     //remover slide anterior
     if(slideAtual > 0){
          $("#carrossel").removeClass(listaSlides [slideAtual - 1])
     }else{
          $("#carrossel").removeClass(listaSlides [listaSlides.length - 1])
     }

   
// exiibr slide atual

$("#carrossel").addClass(listaSlides[slideAtual])
     
     //indicar slide atual
console.log("slide atual",slideAtual)
     slideAtual ++;

     if( slideAtual > listaSlides.length - 1){
          slideAtual = 0
     }
}




     $("#barras").click(function(){

  if    ($("#menu").hasClass("menu-ativo")){
     $("#menu").removeClass("menu-ativo")
  }else{
     $("#menu").addClass("menu-ativo")
  }

     })
} )
function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)  
}

//function mostrarMenu($event){
     // identificar o elemento menu
//let menu = document.getElementById("menu")

     // mudar a visualização do menu

  //   if(getComputedStyle(menu).display == "none") {
     
//menu.style.display = "flex"
  //   }else{
    //    menu.style.display = "none"
     //}       
//event.preventDefault(  )
  //  }


