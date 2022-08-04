import type { NextApiRequest, NextApiResponse } from 'next'
import { BANXA_PAYMENT } from '../../src/util/banxa'

export default async function banxaWebhooksPost(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const mockBanxaRequest = {
    orderId: 123,
    orderRef: "439uehrgu83h4ruy3weddwass",
    orderStatus: "complete",
    nft: {
      token_id: '1',
      contract_address: '0xfc586533B5847309389818Bb8a00A8EA246B651C',
    }
  };
  const outcome = await BANXA_PAYMENT.updateNFTByBanxa(mockBanxaRequest);
  res.status(200).json(outcome)
}
