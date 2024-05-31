export const loop=(data,callback)=>{
    let arr=[];
    for(let i=0;i<data.length;i++){
     
         if(callback){
          
         arr.push(callback(data[i],i));
         }
       
    }
    return arr;
}
