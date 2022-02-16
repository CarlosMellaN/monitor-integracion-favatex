import context from "./context"
import apiCall from "../../apiFavatex"
import { useEffect, useState } from "react";
//import React, { useRef } from 'react';

export default function ExpressProvider( {children} ){
    const [isLoading, setIsLoading] = useState(false);
    const [hasError , setHasError] =  useState(false);
    const [errorMessage , setErrorMessage] =  useState("");
    const [responseExpress, setResponseExpress] = useState([])
    let templateParamsExpress= {
        oc: '',
        estado: '',
    };
    let expressResultError
    const getResponseExpress = async () =>{
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");
            const expressResult = await apiCall({
                url: 'https://monitorfavatex.azurewebsites.net/'
            })
            if(expressResult.server==='1'){
                templateParamsExpress = await {
                    oc: expressResult.con_ocnumero,
                    estado: expressResult.Estado
                }
            }
            else{
                expressResultError = expressResult.error
                console.log(expressResult)
                let server = expressResult.error.server
                console.log(server)
                setErrorMessage("Algo ha pasado, verifica tu conexion, la api responde que: " + JSON.stringify(expressResult.error))
                setHasError(true);
                console.log('entro al error')
            }
            setResponseExpress(expressResult)
        } catch (error) {
            setErrorMessage("Algo ha pasado, verifica tu conexion, la api responde que: " + expressResultError);
            //alert('dejo de funcionar la Integracion')
            setHasError(true);
        }finally{
            setIsLoading(false)
        }
    }
    //console.log(getResponseExpress)
    const [time, setTime] = useState(Date.now());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
            var d = new Date();
            var mm = d.getMinutes();
            var hh = d.getHours();
            //console.log(hasError)
            if(hasError===false){
               
                getResponseExpress()
                //console.log(isLoading)
                console.log(hh.toString() +':'+mm.toString())
            }
        }, 300000/*300000*/);//one minute is 60000.
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return (/**el children lleva todos los datos de getResponseFavatex que le pasa el setResponseFavatex */
        <context.Provider value={{
                                            getResponseExpress,
                                            responseExpress,                                
                                            isLoading,
                                            hasError,
                                            errorMessage
                                        }}>
            {children}
        </context.Provider>
    )
}