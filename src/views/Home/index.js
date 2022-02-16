import Favatex from "../Favatex";
import "./style.css"

export default function Home(){
    document.title = "Monitor Favatex";
    //const myContext = useContext(ExpressContext)
    return (
        <body>
            <div className="home">
                <>
                    <img src="https://www.favatex.com/wp-content/uploads/2021/09/cropped-Logo-favatex_png.png" width={300} height={80}></img>
                </>
                <h2 className='title'>Monitor Favatex</h2>
                <Favatex />
            </div>
        </body>
    );
}