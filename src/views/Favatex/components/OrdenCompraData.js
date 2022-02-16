import { useEffect } from "react";
import lottie from "lottie-web";
import success from "../../assets/success.json";

export default function OCData({responseExpress /*,reponseFavatex*/}){
    console.log(responseExpress)
    //console.log(responseFavatex)
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#success"),
            animationData: success,
            loop: false,
        });
    }, []);
    return(
        <>
            <div>
                <div className='favatex'>
                    <h4>Servicios de Integración</h4>
                    {/*<p>orden de compra: {responseExpress.con_ocnumero}</p>*/}
                    {/*<p>Estado: {responseExpress.Estado}</p>*/}
                    <div id="success" style={{ width: 200, height: 200 }}/>
                </div>
            </div>
        </>
    );
}