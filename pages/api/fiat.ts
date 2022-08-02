import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto';

function generateHmac(p: any) {
  var key = 'catheongaming@2022test';
  var secret = 'RMxpJ8baKZkkFQbxPX8vidbr3WMPzN83';
  if(p.queryParam){
      var signature = p.method + '\n' + p.apiUrl + '\n' + p.nonce.toString() + p.queryParam ? '\n' + JSON.stringify(p.queryParam) : '';
  }else {
      var signature = p.method + '\n' + p.apiUrl + '\n' + p.nonce.toString();
  }
  var localSignature = crypto.createHmac("SHA256", secret).update(signature).digest("hex");
  return "Bearer ".concat(key, ":").concat(localSignature, ":").concat(p.nonce);
}
export default async function banxaFiatCurrencies(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
const hmac: string = generateHmac({
  method: 'GET',
  apiUrl: 'api/fiats/buy',
  nonce: Math.round(new Date().getTime() / 1000),
});
const headers = new Headers();
headers.append('Authorization', hmac)
const currencies = await fetch(
  'https://catheongaming.banxa-sandbox.com/api/fiats/buy', 
  {
    method: 'GET',
    headers,
  },
);
res.status(200).json(currencies)
}