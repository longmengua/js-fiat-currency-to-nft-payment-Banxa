import type { NextApiRequest, NextApiResponse } from 'next'
import { BANXA_PAYMENT } from '../../src/util/banxa'

export default async function banxaFiatCurrencies(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const outcome = await BANXA_PAYMENT.fetchFiatCurrencyList();
  res.status(200).json(outcome)
}
