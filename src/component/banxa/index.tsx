import { useEffect, useState } from "react"
import { useCurrencyList, usePaymentMethodList } from "../../api/banxa"
import { Select } from "../../widget/select"

export const BANXA = () => {
  const currencyList = useCurrencyList();
  const paymentMethodList = usePaymentMethodList();

  return <div className="">
    <div className="text-center">BANXA </div>
    <div className="flex p-[10px]">
      <div className="p-[10px] rounded-[5px]">
        currency list
        <Select isDarkStyle options={currencyList}/>
      </div>
      <div className="p-[10px]"/>
      <div className="p-[10px] rounded-[5px]">
        payment method list
        <Select options={paymentMethodList}/>
      </div>
    </div>
  </div>
}