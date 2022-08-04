import { useCallback, useEffect, useState } from "react"

export const useCurrencyList = () => {
  const [list, setList] = useState<[] | undefined>(undefined);
  
  const getList = useCallback(async () => {
    const json: any = await fetch('api/banxa-fiat-currency-list').then(res => res.json());
    console.log('CurrencyList', list);
    setList(json);
  }, [list]);

  useEffect(() => {
    getList();
  }, []);

  return list;
}

export const usePaymentMethodList = () => {
  const [list, setList] = useState<[] | undefined>(undefined);
  
  const getList = useCallback(async () => {
    const json: any = await fetch('api/banxa-payment-method-list').then(res => res.json());
    console.log('PaymentList', list);
    setList(json);
  }, [list]);

  useEffect(() => {
    getList();
  }, []);

  return list;
}