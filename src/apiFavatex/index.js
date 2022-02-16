export default async function apiCall({
    url,
    method = 'GET',
    body,
    title = 'Favatex',
    headers = {
         'Content-type': 'application/json;',
         'Access-Control-Allow-Origin': '*',
         'Connection' : 'keep-alive',
         //'Content-Security-Policy': 'upgrade-insecure-requests',
     },
 }){
     try {
         const response = await fetch(url,{
             method,
             body,
             title,
             headers,
         })
         if(response.ok){
             console.log(response)
             return response.json()
         }
     } catch (error) {
         Promise.reject(error)
         console.log(error)
     }
 
 }
 