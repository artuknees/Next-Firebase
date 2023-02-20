import React , {useState, useEffect} from "react";
import firebaseApp from "../../firebase";
import { getFirestore , collection , addDoc , getDocs , doc ,deleteDoc , getDoc , setDoc } from 'firebase/firestore';
import { useRouter } from "next/router";


const Form = ({productos}) => {
    const router = useRouter();
    const db = getFirestore(firebaseApp);
    const [thing , setThing] = useState({
        nombre: '',
        precio: 0,
        cantidad: 0 
    })
    const handleSubmit = async (e) => { // postData
        e.preventDefault();
        try {
            await addDoc(collection(db, 'producto'),{
                ...thing
            });
            router.push('/')
        } catch (err) {
            console.error(err)
        }
    };
    const handleDetails = (id) => {
        router.push(`/products/${id}`)

    }
    return (
        <div className="flex flex-row w-full justify-evenly">
            <form className="flex flex-col w-48 items-center mx-24 py-12 border border-black" onSubmit={(e) => handleSubmit(e)}>
                <label className="bg-slate-400">Ingrese su nombre</label>
                <input type="text" onChange={(e) => setThing({...thing, nombre: e.target.value})} className="w-full border-b border-b-slate-200 mt-4"/>
                <label className="bg-slate-400">Ingrese precio</label>
                <input type="text" onChange={(e) => setThing({...thing, precio: parseInt(e.target.value)})} className="w-full border-b border-b-slate-200 mt-4"/>
                <label className="bg-slate-400">Ingrese cantidad</label>
                <input type="text" onChange={(e) => setThing({...thing, cantidad: parseInt(e.target.value)})} className="w-full border-b border-b-slate-200 mt-4"/>
                <button type="submit" className="w-full bg-teal-500 mt-4">Enviar</button>
            </form>
            <div className="flex flex-col items-center justify-center w-1/3">
                {productos?.length > 0 && productos.map(item => {return(
                    <div key={item.id} className='border border-black cursor-pointer w-full items-center justify-center text-center mb-2' onClick={() => handleDetails(item.id)}>
                        <p>{`Name: ${item.nombre}`}</p>
                        <p>{`Price: ${item.precio}`}</p>
                        <p>{`Amount: ${item.cantidad}`}</p>
                    </div>
                )})}
            </div>
        </div>
    )
};

export default Form;