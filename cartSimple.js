         
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


      window.load = Incicio()
