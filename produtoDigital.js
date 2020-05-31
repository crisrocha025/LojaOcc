  var labelName = document.querySelectorAll(`.labelName`)
        for (var j = 0; j < labelName.length; j++){
           var labelSelect = labelName[j].innerHTML.split('_')
           if(labelSelect[1]){
             valor = labelSelect[1]
           }
           console.log(labelSelect[1])
        }
