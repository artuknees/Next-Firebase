import React, {useState} from "react";
import { useRouter } from "next/router";
import firebaseApp from "../../firebase";
import { getFirestore , collection , addDoc , getDocs , doc ,deleteDoc , getDoc , setDoc , updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util'; 
const db = getFirestore(firebaseApp);



const SimpleProduct = ({product}) => {
    const [newName, setNewName] = useState('')
    const router = useRouter();
    const { query } = useRouter();

    const deleteProduct = async () => {
        const { product } = query;
        await deleteDoc(doc(db,'producto',product))
        router.push('/'); // me voy a home despues de borrar
    };

    const handleChangeName = async () => {
        const { product } = query;
        await updateDoc(doc(db,'producto',product),{
            nombre: newName
        });
        router.push('/')
    };
    return (
        <div className="flex flex-col w-1/4 items-center">
            <p>{`Name: ${product.nombre}`}</p>
            <p>{`Price: ${product.precio}`}</p>
            <p>{`Amount: ${product.cantidad}`}</p>
            <button className="bg-pink-500" onClick={() => {router.push('/')}}> volver atras</button>
            <button className="bg-yellow-500 mt-5" onClick={() => deleteProduct()}>borrar producto</button>
            <label htmlFor="">escribir nuevo nombre</label>
            <input type="text" className="border-b" onChange={(e) => setNewName(e.target.value)} />
            <button className="border border-blue-800 mt-4 cursor-pointer" onClick={() => handleChangeName()}>change name</button>
        </div>
    )
};

export default SimpleProduct