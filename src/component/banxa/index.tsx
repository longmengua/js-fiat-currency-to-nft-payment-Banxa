import { useCurrencyList, usePaymentMethodList } from "../../api/banxa"
import { Select } from "../../widget/select"

export const BANXA = () => {
  const currencyList = useCurrencyList();
  const paymentMethodList = usePaymentMethodList();

  const onSelectCurrency = (index: number) => {
    const selectedOption = currencyList ? currencyList[index] : undefined;
    console.log('selected currency', selectedOption)
  }

  const onSelectPayment = (index: number) => {
    const selectedOption = paymentMethodList ? paymentMethodList[index] : undefined;
    console.log('selected payment', selectedOption)
  }

  const onSubmit = async () => {
    const data = {
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
    const outcome = await fetch('api/banxa-buy-nft', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res.json())
    console.log('onSubmit', outcome)
  }

  return <div className="">
    <div className="text-center">BANXA </div>
    <div className="flex p-[10px]">
      <div className="p-[10px] rounded-[5px]">
        currency list
        <Select 
          options={currencyList?.map(v => v.fiat_name)} 
          onSelect={(value, index) => onSelectCurrency(index)} 
        />
      </div>
      <div className="p-[10px]"/>
      <div className="p-[10px] rounded-[5px]">
        payment method list
        <Select 
          options={paymentMethodList?.map(v => v.name)} 
          onSelect={(value, index) => onSelectCurrency(index)} 
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="rounded-[5px] border-[1px] bg-gray cursor-pointer text-center inline-block py-[3px] px-[7px]" onClick={onSubmit}>Submit</div>
    </div>
  </div>
}