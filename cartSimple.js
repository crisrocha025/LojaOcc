         
 function Incicio(){
  for(m=0;m<50;m++){
        var labelName = document.querySelector(`.labelName:nth-child(${m})`)
          if(labelName != null){
            labelSelect = labelName.innerHTML.split('_')
            labelName.innerHTML = labelSelect[1]
            if(labelSelect[1] == undefined){
              labelName.style.display = 'none'
            }
          }
     }
   }

var labelName = document.querySelector('.labelName')
var carrinho = document.querySelector('.carrinho')
if(localStorage.itemCompra){
carrinho.innerHTML = carrinho.innerHTML + localStorage.itemCompra
}else{
    carrinho.innerHTML = carrinho.innerHTML + ''  
}
var btnComprar = document.querySelector('.btnComprar')
btnComprar.addEventListener("click",function(){
    localStorage.itemCompra = labelName.innerHTML
    carrinho.innerHTML = carrinho.innerHTML + localStorage.itemCompra
})


      window.load = Incicio()
