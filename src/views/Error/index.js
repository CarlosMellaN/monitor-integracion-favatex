import context from  "../../context/ServerExpress/context"
import { useContext } from "react";

export default function Error(){
    const { responseExpress } = useContext(context)
    console.log(responseExpress)
    document.title = "Error";
    return(
        <div>
            <h1>Se cayo la integracion!</h1>
        </div>
    )
}