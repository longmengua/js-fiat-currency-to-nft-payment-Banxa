import type { NextApiRequest, NextApiResponse } from 'next'
import { BANXA_PAYMENT } from '../../src/util/banxa'
import { BanxaPaymentNFTOrderI } from '../../src/util/banxa/type';

export default async function banxaBuyNft(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const queryParam: BanxaPaymentNFTOrderI = {
    account_reference: '',
    source: '',
    source_amount: '',
    target: '',
    target_amount: '',
    wallet_address: '',
    return_url_on_success: '',
    iframe_domain: '',
    meta_data: {
      purchase_reference: undefined,
      nft: {
        contract_address: '',
        token_id: '',
        name: undefined,
        collection: undefined,
        media: undefined
      }
    }
  }
  const outcome = await BANXA_PAYMENT.buyNFT(queryParam);
  res.status(200).json(outcome)
}
