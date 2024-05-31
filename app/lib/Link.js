// link for
'use client'
export function Dink({className,to,children}) {
//    const[toggole,setToggole]=useContext(theme);
 
  console.log('link')
 function handaleClick(e){
  
  e.preventDefault();
  
   console.log(to)
   if(window.location.pathname!=to){
   window.history.pushState({}," ",to)
//    setToggole(!toggole);
   }
  //  scroll(0,0)++++++++++++++++++++++++++++++++++++++++
   }
  
  
  return <a href={to} className={className}  onClick={handaleClick}>{children}</a>
}
