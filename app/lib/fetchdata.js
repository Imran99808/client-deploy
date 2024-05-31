




export const fetch_data = async (url,token,update) => {
   

    try {
        const response = await fetch(`https://server-deploy-6984.onrender.com/${url}`, {
            method: 'GET',
             credentials: 'include',
            
            headers:{
                 'Authorization':`${token?token:''}`
            },
            // cache:'no-cache',
            next:{ revalidate:update?0.1:0 }
        });
       
       
        return response.json();
    
    } catch (error) {
       
        return null; 
    }
}










export async function post(url, payload, token) {
    'use client'
    // return new Promise((resolve, reject) => {
       const response=await fetch('https://server-deploy-6984.onrender.com/'+url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json', // Add Content-Type header
            },
            body: JSON.stringify(payload)
        });
    
        if(!response.ok){
       
            return null; 
            
          
        }
       
        const data= await response.json();
     
        return data;
        
}


export function remove(url){

    return new Promise((resolve, reject) => {
    fetch('https://server-deploy-6984.onrender.com/'+url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json', // Add Content-Type header
        },
     
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
      
        return response.json();
    })
    .then(data => {
        resolve(data);
    })
    .catch(error => {
        console.error('Error:', error);
        reject(error);
    });
});

}