const axios = require('axios');
module.exports = async function ({
  baseURL = 'http://localhost:16000/api/v1/scp',
  url,
  params,
  data,
  method
}) {
  const token = '';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  };
  const config = {
    baseURL,
    url,
    method,
    data,
    params,
    headers: headers
  };
  return await axios(config);
}
