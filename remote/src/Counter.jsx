import {createSignal} from "solid-js";

export default()=>{
    const [count, setCount] =createSignal(0);

    return(
        <div class="bg-blue-900 text-white p-6 font-serif ">
            <div>
                <h1 class="text-center">Count = {count()}</h1>
            </div>
            <button  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCount(count()+1)}>Add one</button>
        </div>
    )
}