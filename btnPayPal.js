// botao criado exclusivamente para loja-ocodigocris.com
        var valor = document.querySelector('.valor').innerHTML
        paypal.Buttons({
    createOrder: function(data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: valor
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
          localStorage.setItem('removeMsgInicio', 'Agradecemos pela compra !')
          var rmvMsgInicio = localStorage.getItem('removeMsgInicio')
          var mvWait = document.querySelector('.msgInicio')
          mvWait.innerHTML = rmvMsgInicio
          document.querySelector('.waitDown').remove()

        createButtonOpenDown()
        removeMsgInicio()
      });
    },
    onCancel: function (data) {
            alert('Ok, espero fechar negócios com você em breve !')
   
  }
  }).render('.containerP');
 
