  var labelName = document.querySelectorAll(`.labelName`)
  var valorProdutoD = document.querySelector(`.valor`)
        for (var j = 0; j < labelName.length; j++){
           var labelSelect = labelName[j].innerHTML.split('_')
           if(labelSelect[1]){
             valorProdutoD.innerHTML = labelSelect[1]
             labelName[j].innerHTML = labelSelect[1]
           }else{
             labelName[j].remove()
           }
           console.log(labelSelect[1])
        }
