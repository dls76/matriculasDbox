function sendDataToClientWhatsApp() {

   // alert('Em construção!')
   
   // var name = document.getElementById('name').value
   // var mobile = document.getElementById('mobile').value
   // var email = document.getElementById('email').value
   // var message = document.getElementById('message').value
   // var phone = document.getElementById('phone').value
   var phone = "41996819569"
   let responsavel = document.querySelector('#input-responsaveis').value

var whatsappurl = "https://wa.me/"+phone+"?text="+
"Bem-vindo, " + responsavel + "! Ficamos felizes com sua visita! Conforme conversamos, segue abaixo a proposta do Colégio Adventista Centenário:" 
// + "%0a" +


   // "*Nome*: " + name + "%0a" +
   // "*Celular*: " + mobile + "%0a" +
   // "*E-mail*: " + email + "%0a" +
   // "*Message*: " + message;

window.open(whatsappurl,"_blank").focus 

   }