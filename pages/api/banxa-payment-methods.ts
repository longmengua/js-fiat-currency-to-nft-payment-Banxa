import type { NextApiRequest, NextApiResponse } from 'next'
import { generateHmac } from '../../src/util/hmac';

export default async function banxaPaymentMethod(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const hmac: string = generateHmac({
    method: 'GET',
    apiUrl: 'api/payment-methods',
    nonce: Math.round(new Date().getTime() / 1000),
  });
  const currencies = await fetch(
    'https://catheongaming.banxa-sandbox.com/api/payment-methods', 
    {
      method: 'GET',
      headers: {
        Authorization: hmac,
      },
    },
  );
  res.status(200).json(currencies)
}
