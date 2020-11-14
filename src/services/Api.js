import axios from 'axios';
import settings from '../settings';

const Api = axios.create({
  baseURL: settings.eosio.nodeos,
});

export default Api;
