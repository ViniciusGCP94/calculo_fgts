import axios from 'axios';

const bcbAPI = axios.create({
  baseURL: 'https://olinda.bcb.gov.br/olinda/servico/CCR/versao/v1/odata/',
});

bcbAPI.get('/')
  .then(response => {
    console.log('API funcionando:', response.data);
  })
  .catch(error => {
    console.error('Erro ao acessar a API:', error);
  });