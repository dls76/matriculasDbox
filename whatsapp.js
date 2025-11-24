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
      let didaticos = document.querySelector(`#checkDidaticos${i}`).checked ? "Com livros didáticos inclusos" : "";

      // if (aluno && didaticos) {
      //    alunos.push(`%0a*${aluno}*%0a${serie}: ${valor}%0a${didaticos}%0a%0a`);
      // } else {
      //    alunos.push(`%0a*${aluno}*%0a${serie}: ${valor}%0a${didaticos}%0a`);
      // }

      if (aluno) {
         alunos.push(`%0a*${aluno}*%0a${serie}: ${valor}%0a${didaticos || ""}%0a${didaticos ? "%0a" : ""}`);
      }

   }

   if (alunos.length === 0) {
      alert('Digite pelo menos um nome de aluno.');
      return;
   }

   const intro = `Olá, *${responsavel}*!%0aObrigado pela visita!%0aConforme combinamos, segue nossa proposta:%0a`;
   
   const msginfo = 
   `*Taxa de eventos*%0aR$ 595,00 por aluno.%0aPagamento na matrícula.%0a%0a` +
   `*Livros, materiais e uniformes*%0alinktr.ee/novotempostoreasp%0a%0a` +
   `*Cantina terceirizada*%0aAcompanhamento nutricional%0aWhatsApp: 99611.7704%0a%0a` +
   `*Entrevista pedagógica*%0a- Presença do aluno e pelo menos um responsável%0a- É requisito p/ matrícula%0a- Agendar dia e horário%0a- Trazer boletim recente.%0a%0a` +
   `*Documentos p/ matrícula*%0a- Certidão de Nascimento, RG e CPF do aluno.%0a- Comprovante de residência atualizado.%0a- Carteirinha e declaração de vacinação.%0a- RG e CPF dos pais.%0a- Termo de guarda e tutela (quando aplicável).%0a- Declaração de transferência.%0a- Histórico escolar.%0a- Declaração de quitação financeira (para escola particular).%0a%0a` +
   `*Para confirmar a matrícula*%0a` +
   `- Realizar a entrevista%0a- Enviar documentação completa%0a- Pagar a taxa de eventos%0a- Assinar o contrato%0a- Pagar a primeira mensalidade%0a%0a` +
   `*Início das aulas*%0a- 02/02/2026 (6º ao EM)%0a- 03/02/2026 (Infantil ao 5º)%0a%0a` +
   `*Horários*%0a_Manhã_%0a- 7:15 às 11:40 (até o 9º ano)%0a- 7:15 às 12:30 (Ens. Médio)%0a_Tarde_%0a- 13:15 às 17:40%0a- 13:00 às 16:40 (sexta-feira)%0a%0a` +
   `*Nosso site*%0ahttps://centenario.educacaoadventista.org.br/%0a%0a` +
   `*Importante*%0aEsta proposta não garante vaga%0a%0a` +
   `*Contato*%0a${atendente}`;

   let whatsappurl = `https://wa.me/${ddd}${phone}?text=${intro}${alunos.join("%0a")}${msginfo}`;
   
   window.open(whatsappurl, "_blank").focus();
}