import { useState } from 'react';
import PropTypes from 'prop-types';
import GPTelho from './GPTelho';
import './App.css'

const PHS = () => {
  const [inputValue, setInputValue] = useState('');
  const [resposta, setResposta] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const respostaGPT = await GPTelho(inputValue);
    setResposta(respostaGPT);

    setIsLoading(false);

    setInputValue('');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} className='input'>
        <input type="text" placeholder='GPTelho - Sua Fonte de Motivação...' value={inputValue} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        inputValue === '' && <h1 className='resp'>{resposta}</h1>
      )}
    </div>
  );
};

PHS.propTypes = {
  resposta: PropTypes.string.isRequired,
};

export default PHS;
