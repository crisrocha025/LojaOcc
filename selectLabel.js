     var labelName = document.querySelectorAll(`.labelName`)
        for (var j = 0; j < labelName.length; j++){
           var labelSelect = labelName[j].innerHTML.split('_')
           if(labelSelect[1]){
             var valorFinal = labelSelect[1].split('.')
             labelName[j].innerHTML = 'R$ ' + valorFinal[0] +','+ valorFinal[1]
            
           }else{
            labelName[j].remove()
           }
           console.log(labelSelect[1])
        }
     
