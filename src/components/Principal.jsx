import React, { useState } from 'react';

export default function Principal() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário e depois mostrar a mensagem de aula agendada
    alert('Aula agendada! Sua aula experimental foi agendada com sucesso. Entraremos em contato em breve para confirmar os detalhes.');
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '75vh' }}>
      <img src={require('../imagens/peso.jpg')} alt="Imagem" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <h1>Bem vindo(a) à Academia Itabirana!</h1>
      <p>"Aqui sua saúde é nossa prioridade máxima. Venha se exercitar conosco e transforme seus objetivos em realidade!"</p>
      {mostrarFormulario ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <button onClick={handleMostrarFormulario}>Agendar aula experimental</button>
      )}
    </div>
  );
}
