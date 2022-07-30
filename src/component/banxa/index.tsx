import { CurrencySelect } from "../../widget/select"

export const BANXA = () => {
  return <div className="">
    <div className="bg-gray-500 p-[10px] rounded-[5px]">
      BANXA
      <CurrencySelect isDarkStyle options={['123', '456', '789']}/>
    </div>
  </div>
}