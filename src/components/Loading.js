import { useEffect } from "react";
import lottie from "lottie-web";
import loading from "../views/assets/loading.json";
export default function Loading( {title} ) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#loading"),
            animationData: loading,
            speed: 0.5
        });
    }, []);
    return (
        <div>
            <p>{ title }</p>
            <div id='loading' style={{ width: 200, height: 200 }}/>
        </div>
    );
}