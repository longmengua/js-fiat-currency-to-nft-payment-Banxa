import type { NextApiRequest, NextApiResponse } from 'next'
const banxaSDK = require('api')('@banxa/v1.3#deew1okyi6cdo0');
import crypto from 'crypto';

/* (https://docs.banxa.com/docs/step-3-authentication)
  Message authentication signature. The request message is hashed with the API Secret using SHA256 algorithm.
  The structure of the message:

  Request method. (e.g. "GET or "POST")
  Request URI path including the query parameters for GET.
  The nonce value (e.g. using unix timestamp value)
  The payload in JSON format only for POST, with no whitespace.

  'GET' + '\n' + '/api/coins' + '\n' + '1612391416'

  'POST' + '\n' + '/api/orders' + '\n' + '1612391416' + '\n' + '{"account_reference":"example_01"}'
*/
function generateHmac(p: {
  method: string, 
  apiUrl: string, 
  nonce: number, 
  queryParam?: Record<string, string>
}) {
  const key = 'catheongaming@2022test'
  const secret = 'RMxpJ8baKZkkFQbxPX8vidbr3WMPzN83'
  const signature = `${p.method}'\n'${p.apiUrl}'\n'${p.nonce.toString()}'\n'${p.queryParam ? JSON.stringify(p.queryParam) : ''}`;
  const localSignature = crypto.createHmac("SHA256", secret).update(signature).digest("hex");
  return `Bearer ${key}:${localSignature}:${p.nonce}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const hmac: string = generateHmac({
    method: 'GET',
    apiUrl: 'api/fiats/buy',
    nonce: Math.round(new Date().getTime() / 1000),
  });
  const currencies = await fetch(
    'https://catheongaming.banxa-sandbox.com/api/fiats', 
    {
      method: 'GET',
      headers: {
        Authorization: hmac,
      },
    },
  );
  res.status(200).json(currencies)
}
