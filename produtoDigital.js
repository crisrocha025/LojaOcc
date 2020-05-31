  var labelName = document.querySelectorAll(`.labelName`)
  var spanValor = document.querySelector('.valor')
        for (var j = 0; j < labelName.length; j++){
           var labelSelect = labelName[j].innerHTML.split('_')
           if(labelSelect[1]){
             spanValor.innerHTML = labelSelect[1]
            
           }
           console.log(spanValor)
        }
