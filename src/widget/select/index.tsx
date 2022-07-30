import { useMemo, useState } from "react";
import { uuid } from "../../util/uuid";
import { Arrow } from "./svg/arrow";

export const CurrencySelect = (p: {
  placehold?: string;
  initValue?: string;
  options?: Array<string>;
  isDarkStyle?: boolean;
}) => {
  const hasOption = Array.isArray(p.options) && p.options?.length > 0;
  const [state, setState] = useState<{
    value: string;
    isOpen: boolean;
  }>({
    value: p.initValue || '',
    isOpen: false,
  });

  const openSelect = () => {
    setState(pre => ({...pre, isOpen: !pre.isOpen}))
  }

  const onChange = (e: any) => {
    setState(pre => ({...pre, value: e.target.value}))
  } 

  const onSelect = (index: number) => {
    setState(pre => ({...pre, value: p.options![index], isOpen: false})) 
  }

  const renderOptions = useMemo(() => !hasOption ? <div className="no option"/> : p.options?.map((value, index) => <div key={uuid()} className={`${p.isDarkStyle ? 'hover:bg-gray-300' : ''} py-[4px] px-[7px] cursor-pointer`} onClick={() => onSelect(index)}>{value}</div>), [p.options])

  return <div className="relative">
    <div className={`${p.isDarkStyle ? 'border-white' : ''} flex py-[4px] px-[7px] border-[1px] rounded-[5px]`}>
      <input className={`${p.isDarkStyle ? '' : ''} bg-transparent border-0 outline-0`} value={state.value} onChange={onChange}/>
      <div className={`${state.isOpen ? '-rotate-90' : 'rotate-90'} ${hasOption ? '' : 'hidden'} w-[20px] h-[20px] self-center cursor-pointer`} onClick={openSelect}>
        <Arrow />
      </div>
    </div>
    <div className={`${p.isDarkStyle ? 'bg-gray-500 border-white' : 'border-black'} ${hasOption && state.isOpen ? '' : 'hidden'} overflow-hidden border-[1px] absolute rounded-[5px] mt-[5px] w-full`}>
      {renderOptions}
    </div>
  </div>
}