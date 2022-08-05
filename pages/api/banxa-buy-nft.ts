import type { NextApiRequest, NextApiResponse } from 'next'
import { BANXA_PAYMENT } from '../../src/util/banxa'
import { BanxaNFTOrderI } from '../../src/util/banxa/type';
import { uuid } from '../../src/util/uuid';

export default async function banxaBuyNft(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  if (typeof req.body !== 'string' && typeof req.body !== 'object') {
    res.status(401).send({ message: 'Bad request' })
    return
  }
  const json: BanxaNFTOrderI = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  // Unique customer reference provided by you to identify the order in our system
  const account_reference: string = uuid();
  console.log('account_reference', account_reference);
  const data: BanxaNFTOrderI = {
    account_reference: account_reference,
    source: 'USD',
    source_amount: '100',
    target: 'USDT',
    target_amount: '1',
    wallet_address: '0xfc586533B5847309389818Bb8a00A8EA246B651C',
    return_url_on_success: 'http://localhost:3000/successful',
    meta_data: {
      nft: {
        contract_address: '0xfc586533B5847309389818Bb8a00A8EA246B651C',
        token_id: '1',
      }
    }
  }
  const outcome = await BANXA_PAYMENT.createNFT(data);
  res.status(200).json(outcome)
}
