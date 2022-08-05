import { useCallback, useEffect, useState } from "react"
import { BanxaCurrencyListResponseI, BanxaMethodListResponseI } from "../../util/banxa/type";

export const useCurrencyList = () => {
  const [list, setList] = useState<BanxaCurrencyListResponseI['data']['fiats'] | undefined>(undefined);
  
  const getList = useCallback(async () => {
    const res: Response = await fetch('api/banxa-fiat-currency-list');
    if(res.ok) {
      const json: BanxaCurrencyListResponseI = await res.json();
      console.log('useCurrencyList', json);
      setList(json.data.fiats);
    }
  }, [list]);

  useEffect(() => {
    getList();
  }, []);

  return list;
}

export const usePaymentMethodList = () => {
  const [list, setList] = useState<BanxaMethodListResponseI['data']['payment_methods'] | undefined>(undefined);
  
  const getList = useCallback(async () => {
    const res: Response = await fetch('api/banxa-payment-method-list');
    if(res.ok) {
      const json: BanxaMethodListResponseI = await res.json();
      console.log('usePaymentMethodList', json);
      setList(json.data.payment_methods);
    }
  }, [list]);

  useEffect(() => {
    getList();
  }, []);

  return list;
}