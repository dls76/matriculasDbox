function sendDataToClientWhatsApp() {
   let responsavel = document.querySelector('#input-responsaveis').value.trim();
   let ddd = document.querySelector('#codigoddd').value.trim();
   let phone = document.querySelector('#input-melhor-contato').value.trim();
   let atendente = document.querySelector('#select-atendentes').value;

   if (!responsavel || !ddd || !phone) {
      alert("Preencha os dados do responsável e contato.");
      return;
   }

   let alunos = [];
   for (let i = 1; i <= 4; i++) {
      let aluno = document.querySelector(`#txtNome${i}`).value.trim();
      let serieElement = document.querySelector(`#serie${i}`);
      let serie = serieElement ? serieElement.options[serieElement.selectedIndex].text : "";
      let valor = document.querySelector(`#valorFinal${i}`).value;
      let didaticos = document.querySelector(`#checkDidaticos${i}`).checked ? "Livros didáticos inclusos" : "";

      if (aluno) {
         alunos.push(`*${aluno}*%0a${serie}: ${valor}%0a${didaticos}%0a`);
      }
   }

   if (alunos.length === 0) {
      alert('Digite pelo menos um nome de aluno.');
      return;
   }

   const intro = `Olá, *${responsavel}*! Ficamos felizes por sua visita! Segue abaixo a proposta do Colégio Adventista Centenário:%0a`;
   
   const msginfo = 
   `*Taxa de eventos*%0aR$ 570,00 por aluno.%0aPagamento na matrícula.%0a%0a` +
   `*Livros, materiais e uniformes*%0aAcesse linktr.ee/novotempostoreasp%0a%0a` +
   `*Cantina*%0aTerceirizada com acompanhamento nutricional. Whats: (41)99611.7704%0a%0a` +
   `*Entrevista com pais e alunos*%0aRequisito para matrícula, mediante agendamento (trazer último boletim).%0a%0a` +
   `*Documentos p/ matrícula*%0a- Certidão de Nascimento, RG e CPF do aluno.%0a- Comprovante de residência atualizado.%0a- Carteirinha e declaração de vacinação.%0a- RG e CPF dos pais.%0a- Termo de guarda e tutela (quando aplicável).%0a- Declaração de transferência.%0a- Histórico escolar.%0a- Declaração de quitação financeira (para escola particular).%0a%0a` +
   `*Início das aulas*%0a- 03/02/2025 (6º ao EM)%0a- 04/02/2025 (Infantil ao 5º)%0a%0a` +
   `*Horários*%0a_Manhã_%0a- 7:15 às 11:40 (até o 9º ano)%0a- 7:15 às 12:30 (Ens. Médio)%0a_Tarde_%0a- 13:15 às 17:40%0a- 13:00 às 16:40 (sexta-feira)%0a%0a` +
   `*Nosso site*%0ahttps://centenario.educacaoadventista.org.br/%0a%0a` +
   `*Importante*%0a_Esta proposta não garante vaga_%0a%0a` +
   `*Contato*%0a${atendente}`;

   let whatsappurl = `https://wa.me/${ddd}${phone}?text=${intro}${alunos.join("%0a")}${msginfo}`;
   
   window.open(whatsappurl, "_blank").focus();
}