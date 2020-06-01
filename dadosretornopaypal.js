//created by Cris Rocha  - ocodigocris.com
var downContinuo = document.querySelector('.downContinuo')  
     
     function createButtonOpenDown(){
      
      var openElement=document.querySelector('.openElement')
      openElement.innerHTML = `<input type="button" value="Faça o Dowload Agora" onclick="openElementDown()" class="openDown">`
    }
    var r=0
    function openElementDown(){
      localStorage.setItem('openDown','Acesse o Link para ter acesso continuo ao Download')
      var msgDown = localStorage.getItem('openDown')
     downContinuo.innerHTML = msgDown
      if(r==0){
      document.querySelector('.redirectPay').style.display = 'block'
      r++
      }else{
        document.querySelector('.redirectPay').style.display = 'none'
        r--
      }
    }
     var msgDown = localStorage.getItem('openDown')
     downContinuo.innerHTML = msgDown
    console.log(msgDown)
     setInterval(() => {localStorage.removeItem('openDown')}, 432000000)

 var rmvMsgInicio = localStorage.getItem('removeMsgInicio')
          var mvWait = document.querySelector('.msgInicio')
          mvWait.innerHTML = rmvMsgInicio
          setInterval(() => {localStorage.removeItem('removeMsgInicio')}, 432000000)
    if(mvWait.innerHTML == rmvMsgInicio){
      document.querySelector('.waitDown').remove()
    }
