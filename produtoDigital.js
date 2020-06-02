  var labelName = document.querySelectorAll(`.labelName`)
  var valorProdutoD = document.querySelector(`.valor`)
        for (var j = 0; j < labelName.length; j++){
           var labelSelect = labelName[j].innerHTML.split('_')
           if(labelSelect[1]){
             valorProdutoD.innerHTML = labelSelect[1]
           }
           console.log(labelSelect[1])
        }
 var labelNameInicio = document.querySelectorAll(`.labelNameInicio`)
  var valorProdutoDInicio = document.querySelector(`.valorInicio`)
        for (var k = 0; k < labelNameInicio.length; k++){
           var labelSelectI = labelNameInicio[k].innerHTML.split('_')
           if(labelSelectI[1]){
             valorProdutoDInicio.innerHTML = labelSelectI[1]
           }
           console.log(labelSelectI[1])
        }
