import React, { useState } from 'react';

export default function IMC() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [imcLevel, setIMCLevel] = useState('');

  const calculateIMC = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convertendo altura de centímetros para metros
      const calculatedIMC = weight / (heightInMeters * heightInMeters);
      setIMC(calculatedIMC.toFixed(2)); // Limitando o IMC para duas casas decimais
      determineIMCLevel(calculatedIMC);
    } else {
      setIMC(null);
      setIMCLevel('');
    }
  };

  const determineIMCLevel = (calculatedIMC) => {
    if (calculatedIMC < 18.5) {
      setIMCLevel('Abaixo do peso');
    } else if (calculatedIMC >= 18.5 && calculatedIMC < 24.9) {
      setIMCLevel('Peso normal');
    } else if (calculatedIMC >= 25 && calculatedIMC < 29.9) {
      setIMCLevel('Sobrepeso');
    } else if (calculatedIMC >= 30 && calculatedIMC < 34.9) {
      setIMCLevel('Obesidade grau I');
    } else if (calculatedIMC >= 35 && calculatedIMC < 39.9) {
      setIMCLevel('Obesidade grau II');
    } else {
      setIMCLevel('Obesidade grau III');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      <div>
      <img src={require('../imagens/OIP.jpg')} alt="Imagem" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      </div>
      {imc && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
          <p>Nível do IMC: {imcLevel}</p>
        
        </div>
      )}
       
    </div>
  );
}
