
import React from 'react'

export default function OrderAmount({data,location}) {
  let total=0;let dTotal=0;let gTotal=0; let dParsnet=0;
  const sCharge=location.division==='saab'?60:120;

  for(let i=0;i<data.length;i++){
    total+=data[i].price*data[i].qty;
    dTotal+=data[i].discountPrice?data[i].price*data[i].qty-(data[i].discountPrice*data[i].qty):0;
  }
  gTotal=(total-dTotal)+sCharge;
  dParsnet=dTotal/(total/100)
  return (
  
    <div className="bg-[#fff] mt-[25px] p-[15px]   rounded-md">
    <div className="flex items-center justify-between">
      <h4 className='text-[rgba(155,163,170,1)]'>Sub Total</h4>
      <h3>${total}</h3>
    
    </div>
    <div className="flex items-center justify-between mt-3">
      <h4 className='text-[rgba(155,163,170,1)]'>Shipping charge</h4>
      <h3>${sCharge}</h3>
    
    </div>
    
    <div className="flex items-center justify-between mt-3">
      <h4 className='text-[rgba(155,163,170,1)]'>Discount({parseInt(dParsnet)}%)</h4>
      <h3>${dTotal}</h3>
    
    </div>
    
    <div className="flex items-center justify-between mt-3 pt-3 border-t  border-[#cccbcb]">
      <h4 className='text-[rgba(155,163,170,1)]'>Grand Total</h4>
      <h3>${gTotal}</h3>
    
    </div>
    
    
       </div>
  )
}
