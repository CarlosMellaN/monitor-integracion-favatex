import { useContext, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import context from "../../context/ServerExpress/context"
import OrdenCompraData from "./components/OrdenCompraData"
import Loading from "../../components/Loading";

export default function Favatex(){
    const {getResponseExpress, responseExpress, isLoading, hasError, errorMessage} = useContext(context)
    //console.log(responseExpress)
    useEffect(()=>{
        getResponseExpress().catch(null)
    },[])//los [] se usan para usar algo solo la primera carga
    if (isLoading){
        return <Loading title="consultando a la api..."/>;
    }
    //isLoading=false
    //va a componets OrdenCompraData a buscar lo que se arma ahi
    return (
        <div>
            { hasError ? <ErrorMessage message={errorMessage}/> : <OrdenCompraData responseExpress={responseExpress}/>}
        </div>
        
    );
}