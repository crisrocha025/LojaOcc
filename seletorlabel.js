   function Incicio(){
      Items = []
    for(item=0;item<20;item++){
      var go = ':nth-child('+item+')'
      Items.push(go)
      }
      Labell=[]
     for(l=0;l<20;l++){
        const labbel = document.querySelector(`.labelName${Items[l]}`)
        Labell.push(labbel)
     }
    for(m=0;m<20;m++){
      if(Labell[m] != null){
        var elLabel = Labell[m]
        labelSelect(elLabel)
      }
    }
 }

function labelSelect(elemento){
    const labelArray = elemento.innerHTML.split('_')
    labelArray.forEach((cont,i) => {
      if(i==1){
        passaValor(cont)
      }
    })
 function passaValor(ValorP){
   var valorProduto = document.querySelector('.valorp')
   
 }
  
}
var carrinho = document.querySelector('.carrinho')
var btnComprar = document.querySelector('.btnComprar')
var h=0
    btnComprar.addEventListener('click',function(){
      if(h==0){
      var vProduto = document.querySelector('.valorp').innerHTML
      var pValor = `<li>${vProduto}<span class="fecharValor" onclick="fecharValor()">  x</span></li>`
      carrinho.innerHTML = carrinho.innerHTML + pValor
      console.log(carrinho)
      h++
      }
    })
    function fecharValor(){
      carrinho.innerHTML ='<h2>Produtos </h2>'
      h=0
    }
      window.load = Incicio()
