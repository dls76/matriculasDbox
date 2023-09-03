function sendDataToClientWhatsApp() {

   let responsavel = document.querySelector('#input-responsaveis').value
   let ddd = document.querySelector('#codigoddd').value
   let phone = document.querySelector('#input-melhor-contato').value
   
   let aluno1 = document.querySelector('#txtNome1').value
   let aluno2 = document.querySelector('#txtNome2').value
   let aluno3 = document.querySelector('#txtNome3').value
   let aluno4 = document.querySelector('#txtNome4').value

   let s1 = document.querySelector('#serie1')
   let serie1 = s1.options[s1.selectedIndex].text

   let s2 = document.querySelector('#serie2')
   let serie2 = s2.options[s2.selectedIndex].text

   let s3 = document.querySelector('#serie3')
   let serie3 = s3.options[s3.selectedIndex].text

   let s4 = document.querySelector('#serie4')
   let serie4 = s4.options[s4.selectedIndex].text

   let v1 = document.querySelector('#valorFinal1')
   let v2 = document.querySelector('#valorFinal2')
   let v3 = document.querySelector('#valorFinal3')
   let v4 = document.querySelector('#valorFinal4')

   let didaticos1 = document.querySelector('#checkDidaticos1')
   let didaticos2 = document.querySelector('#checkDidaticos2')
   let didaticos3 = document.querySelector('#checkDidaticos3')
   let didaticos4 = document.querySelector('#checkDidaticos4')

   let didat1
   let didat2
   let didat3
   let didat4

   if (didaticos1.checked) {didat1 = 'Livros didáticos inclusos'} else {didat1 = ''}
   if (didaticos2.checked) {didat2 = 'Livros didáticos inclusos'} else {didat2 = ''}
   if (didaticos3.checked) {didat3 = 'Livros didáticos inclusos'} else {didat3 = ''}
   if (didaticos4.checked) {didat4 = 'Livros didáticos inclusos'} else {didat4 = ''}


   // let taxanegociada = document.querySelector('#taxa').value

   let numeroDeAlunos = 0
 
   let alunos = [...document.querySelectorAll('.nomealuno')]
   
   alunos.forEach((e)=>{
      if (e.value !== "") {
         numeroDeAlunos+=1
      }
   })
   
   // let taxa = numeroDeAlunos * taxanegociada
   
   var whatsappurl 

   const intro = 'Olá, *'+ responsavel + '*! Ficamos felizes por sua visita! Segue abaixo a proposta do Colégio Adventista Centenário:%0a' 

  
   const msg1 = '*' + aluno1 + '*%0a' + serie1 + ': ' + v1.value + '%0a' + didat1

   const msg2 = '*' + aluno2 + '*%0a' + serie2 + ': ' + v2.value + '%0a' + didat2

   const msg3 = '*' + aluno3 + '*%0a' + serie3 + ': ' + v3.value + '%0a' + didat3

   const msg4 = '*' + aluno4 + '*%0a' + serie4 + ': ' + v4.value + '%0a' + didat4

   let atendente = document.querySelector('#select-atendentes').value

   const msginfo = 
   '%0a*Taxa de eventos*%0a' +
   '560.00 por aluno, no ato da matrícula.%0a' +
   'destina-se a lembranças e ações em datas especiais%0a%0a' + 

   '*Livros, materiais e uniformes*%0a' +
   'acesse linktr.ee/novotempostoreasp%0a%0a' + 

   '*Cantina*%0a' +
   'terceirizada com acompanhamento nutricional. WhatsApp: 41.99611.7704%0a%0a' + 

   '*Entrevista com pais e alunos*%0a' +
   'requisito para matrícula, mediante agendamento (trazer úlitmo boletim).%0a%0a' +

   '*Documentos p/ matrícula*%0a' +
   '- Certidão de Nascimento, RG e CPF do aluno.%0a'+
   '- Comprovante de residência atualizado (somente água, luz ou telefone).%0a' +
   '- Carteirinha e declaração de vacinação.%0a' +
   '- RG e CPF dos pais.%0a' +
   '- Termo de guarda e tutela (quando aplicável).%0a' +
   '- Declaração de transferência.%0a' +
   '- Histórico escolar.%0a' +
   '- Declaração de quitação financeira (para escola particular).%0a%0a' +

   '*Início das aulas*%0a' +
   '05/02/2024%0a%0a' + 

   '*Horários*%0a' +
   '_- Manhã_%0a' +
   '7:15 às 11:40 (até 9º ano)%0a' +
   '7:15 às 12:30 (Ens. Médio)%0a' + 
   '_- Tarde_%0a' +
   '13:00 às 17:40%0a' +
   '13:00 às 16:40 (sexta-feira)%0a%0a' + 
   '*Nosso site*%0a' +
   'https://centenario.educacaoadventista.org.br/%0a%0a' +
   '_Esta proposta não garante vaga_%0a' +
   '_Atendente:_%0a' + atendente  

   if (numeroDeAlunos == 0) {

      alert('Digite pelo menos um nome de aluno.')

   } else if (numeroDeAlunos == 1) {
   
      whatsappurl = "https://wa.me/" + ddd + phone + "?text=" + intro + "%0a" + msg1 + "%0a" + msginfo

   } else if (numeroDeAlunos == 2) {

      whatsappurl = "https://wa.me/" + ddd + phone + "?text=" + intro + "%0a" + msg1 + "%0a" + msg2 + "%0a" + msginfo

   } else if (numeroDeAlunos == 3) {

      whatsappurl = "https://wa.me/" + ddd + phone + "?text=" + intro + "%0a" + msg1 + "%0a" + msg2 + "%0a" + msg3 + "%0a" + msginfo

   } else if (numeroDeAlunos == 4) {

      whatsappurl = "https://wa.me/" + ddd + phone + "?text=" + intro + "%0a" + msg1 + "%0a" + msg2 + "%0a" + msg3 + "%0a" + msg4 + "%0a" + msginfo

   }

window.open(whatsappurl,"_blank").focus 

// alert(numeroDeAlunos)

}