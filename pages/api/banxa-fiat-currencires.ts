import type { NextApiRequest, NextApiResponse } from 'next'
import { generateHmac } from '../../src/util/hmac';

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
    'https://catheongaming.banxa-sandbox.com/api/fiats', 
    {
      method: 'GET',
      headers,
    },
  );
  res.status(200).json(currencies)
}
