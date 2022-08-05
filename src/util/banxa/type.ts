
export type BanxaParamI = {
  method: string, 
  apiUrl: string, 
  nonce: number, 
  queryParam: any,
}
export type BanxaGetRequestI = Omit<BanxaParamI, 'nonce' | 'queryParam'>
export type BanxaPostRequestI = Omit<BanxaParamI, 'nonce'>
export type BanxaCurrencyListResponseI = {
  data: {
    fiats: Array<{
      fiat_code: string;
      fiat_name: string;
      fiat_symbol: string;
    }>;
  };
}
export type BanxaMethodListResponseI = {
  data: {
    payment_methods: Array<{
      id: number;
      paymentType: string;
      name: string;
      description: string;
      logo_url: string;
      status: string;
      supported_agents: Array<{
        os: string;
        browser: string;
      }>;
      type: string;
      supported_fiat: string[];
      supported_coin: string[];
      transaction_fees: Array<{
        fiat_code: string;
        coin_code: string;
        fees: Array<{
          name: string;
          amount: number;
          type: string;
        }>;
      }>;
      transaction_limits: Array< {
        fiat_code: string;
        min: string;
        max: string;
      }>;
  }>;
  }
}
export type BanxaOrderI = {
  // Unique customer reference provided by you. 
  // Used to check whether customer has completed KYC.
  account_reference: string,
  // Payment method ID associated with the order.
  payment_method_id?: number,
  // Source currency or cryptocurrency code. 
  // This parameter indicates whether the order is 
  // a buy or a sell cryptocurrency order.
  source: string,
  // Source amount
  source_amount?: string,
  // Target currency or cryptocurrency code. 
  // This parameter indicates whether the order is a buy or a sell cryptocurrency order.
  target: string,
  // Target amount. This will be overridden if a source_amount is also passed.
  target_amount?: string,
  // Wallet address to receive NFT.
  wallet_address: string,
  // Wallet tag or memo associated with the wallet address. 
  // Should be sent for buy cryptocurrency orders only for BNB (Memo) or XRP (Tag).
  wallet_address_tag: string,
  // Blockchain network code. 
  // If not provided, the default blockchain configured for the cryptocurrency will be used. 
  // Refer to the Get Crypto Currencies endpoint to retrieve a list of supported blockchain network codes.
  blockchain?: string,
  // Return URL when the customer has completed the checkout process.
  return_url_on_success: string,
  // Return URL when the customer cancels the checkout process.
  return_url_on_cancelled?: string,
  // Return URL when the customer fails to complete the checkout process.
  return_url_on_failure?: string,
  // Used if you are embedding an iFrame. 
  // This must be the exact domain where the iFrame will be hosted. 
  // e.g. [yourCompany].com. 
  // Do not include https:// in front of the domain.
  iframe_domain?: string
  //  Free form string that you can use to send us any information that will be returned in the Get Orders endpoint
  meta_data?: {
    purchase_reference?: string,
    nft: {
      contract_address: string,
      token_id: string,
      name?: string,
      collection?: string,
      media?: {
        type: string,
        link: string,
      },
    }
  },
  // Refund wallet address. 
  // Should be sent for sell cryptocurrency orders only. 
  // Used in the event in the event that a refund is necessary 
  // and the transferred coins need to be returned.
  refund_address: string,
  // Refund wallet address tag or memo. 
  // Should be sent for sell cryptocurrency orders only. 
  // This is required when refunding for BNB (Memo) or XRP (Tag) orders.
  refund_address_tag?: string,
  // Source wallet address. 
  // Should be sent for sell cryptocurrency orders only.
  source_address?: string,
  // Source wallet address tag or memo. 
  // Should be sent for sell cryptocurrency orders only. 
  // Required when source wallet address for BNB (Memo) or XRP (Tag).
  source_address_tag?: string,
  // Additional configurations for the Banxa screens
  options?: {
    // Will cause the cryptocurrency and fiat amounts on 
    // the Banxa screens to be read-only and un-editable.
    readonly_amounts: boolean,
  },
}
/*
  {
    "account_reference": "testxxxx-1", 
    "source": "USD", 
    "source_amount": "150", 
    "target": "ETH", 
    "blockchain": "ERC20", 
    "return_url_on_success": "http://test.com", 
    "wallet_address": "0xfc586533B5847309389818Bb8a00A8EA246B651C", 
    "meta_data": { 
      "purchase_reference": "XXX", 
      "nft": {
        "contract_address: "0xfc586533B5847309389818Bb8a00A8EA246B651C", 
        "token_id": "1", 
        "name": "Banxa nft", 
        "collection": "Banxa NFT shop", 
        "media": { 
          "type": "image", 
          "link": "https://ipfs.example.cloud/ipfs/QmTWyo67Vd4GNVkbBCs96ddXnZZEJy41Cjc9DkcQRt41Np"
        }
      }
    }
  }
*/
export type BanxaNFTOrderI<T extends {
  purchase_reference?: string,
  nft: {
    contract_address: string,
    token_id: string,
    name?: string,
    collection?: string,
    media?: {
      type: string,
      link: string,
    },
  }
}> = {
  // Unique customer reference provided by you to identify the order in our system
  account_reference: string,
  // Payment method ID associated with the order.
  payment_method_id?: number,
  // Source currency code. i.e. USD, CAD etc.
  source: string,
  // Source amount
  source_amount: string,
  // Target cryptocurrency code. The cryptocurrency the NFT is listed in.
  target: string,
  // Target amount. This will be overridden if a source_amount is also passed.
  target_amount: string,
  // Wallet address to receive NFT.
  wallet_address: string,
  // Blockchain network code. 
  // If not provided, the default blockchain configured for the cryptocurrency will be used. 
  // Refer to the Get Crypto Currencies endpoint to retrieve a list of supported blockchain network codes.
  blockchain?: string,
  // Return URL when the customer has completed the checkout process.
  return_url_on_success: string,
  // Return URL when the customer cancels the checkout process.
  return_url_on_cancelled?: string,
  // Return URL when the customer fails to complete the checkout process.
  return_url_on_failure?: string,
  // Used if you are embedding an iFrame. 
  // This must be the exact domain where the iFrame will be hosted. 
  // e.g. [yourCompany].com. 
  // Do not include https:// in front of the domain.
  iframe_domain?: string
  // Please return us the purchase_reference and 
  // NFT meta data which includes the contract address and token ID. 
  // The other fields are optional.
  meta_data: T,
}
/*
  {
    "orderId": 123,
    "orderRef": "439uehrgu83h4ruy3weddwass",
    "orderStatus": "complete",
    "nft": [ NFT payload you provided during order creation ]
  }
*/
export type BanxaWebHooksI = {
  orderId: number,
  orderRef: string,
  // Pending,	NFT has not started fulfilment yet
  // Failed,	NFT fulfilment failed
  // Processing,	NFT fulfilment is processing
  // Complete,	NFT fulfilment is completed
  orderStatus: string,
  nft: any,
}