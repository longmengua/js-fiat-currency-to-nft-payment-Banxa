import crypto from 'node:crypto';

// https://docs.banxa.com/docs/step-3-authentication
export class BANXA_PAYMENT {
  static domain = process.env?.BANXA_DOMAIN || '';
  static key = process.env?.BANXA_KEY || '';
  static secret = process.env?.BANXA_SECRET || '';
  
  // get current nonce
  static buildNonce = () => Math.round(new Date().getTime() / 1000)

  // build Hmac
  static buildHmac = (p: {
    method: string, 
    apiUrl: string, 
    nonce: number, 
    queryParam?: Record<string, string>
  }) => {
    let signature = '';
    if(p.queryParam){
      signature = p.method + '\n' + p.apiUrl + '\n' + p.nonce.toString() + p.queryParam ? '\n' + JSON.stringify(p.queryParam) : '';
    } else {
      signature = p.method + '\n' + p.apiUrl + '\n' + p.nonce.toString();
    }
    const localSignature = crypto.createHmac("SHA256", this.secret).update(signature).digest("hex");
    return `Bearer ${this.key}:${localSignature}:${p.nonce}`;
  }

  // build header
  static buildHeader = async (p: {
    method: string, 
    apiUrl: string, 
    nonce: number, 
    queryParam?: Record<string, string>
  }) => {
    const hmac = this.buildHmac(p)
    const headers = new Headers();
    headers.append('Content-type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', hmac)
    return headers;
  }

  // get supported currency list.
  static fetchFiatCurrencyList = async () => {
    const p = {
      method: 'GET',
      apiUrl: 'api/fiats/buy',
      nonce: this.buildNonce(), 
    }
    const headers = await this.buildHeader(p);
    const currencies: Response = await fetch(
      `${this.domain}/${p.apiUrl}`, 
      {
        method: p.method,
        headers,
      },
    ).then(res => res.json());
    return currencies;
  }

  // get supported payment method list.
  static fetchPaymentMethodList = async () => {
    const p = {
      method: 'GET',
      apiUrl: 'api/payment-methods',
      nonce: this.buildNonce(), 
    }
    const headers = await this.buildHeader(p);
    const currencies: Response = await fetch(
      `${this.domain}/${p.apiUrl}`, 
      {
        method: p.method,
        headers,
      },
    ).then(res => res.json());
    return currencies;
  }
}