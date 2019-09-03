import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6d7c81b3ba13adbccc10b07005b98b8968d1b7b28705598504de1671e5f5a50b'
  }
});
