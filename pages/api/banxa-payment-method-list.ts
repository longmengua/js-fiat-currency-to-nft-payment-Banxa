import type { NextApiRequest, NextApiResponse } from 'next'
import { BANXA_PAYMENT } from '../../src/util/banxa'

export default async function banxaPaymentMethod(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const outcome = await BANXA_PAYMENT.fetchPaymentMethodList();
  res.status(200).json(outcome)
}