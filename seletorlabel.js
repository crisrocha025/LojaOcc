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
   valorProduto.innerHTML = ValorP
 }
  
}


      window.load = Incicio()
