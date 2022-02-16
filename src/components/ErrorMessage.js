import { useEffect } from "react";
import lottie from "lottie-web";
import error from "../views/assets/error.json";
export default function ErrorMessage({message}){
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#error"),
            animationData: error,
            loop: false,
        });
    }, []);
    return(
        <div>
            <p>{message}</p>
            <div id='error' style={{ width: 200, height: 200 }}/>
        </div>
    );
}