import React from "react";
import { useRouter } from "next/router";
import firebaseApp from "../../firebase";
import { getFirestore , collection , addDoc , getDocs , doc ,deleteDoc , getDoc , setDoc } from 'firebase/firestore';
import { async } from '@firebase/util'; 
const db = getFirestore(firebaseApp);



const SimpleProduct = ({product}) => {
    const router = useRouter();
    const { query } = useRouter();

    const deleteProduct = async () => {
        const { product } = query;
        await deleteDoc(doc(db,'producto',product))
        router.push('/'); // me voy a home despues de borrar
    };
    return (
        <div className="flex flex-col w-1/4 items-center">
            <p>{`Name: ${product.nombre}`}</p>
            <p>{`Price: ${product.precio}`}</p>
            <p>{`Amount: ${product.cantidad}`}</p>
            <button className="bg-pink-500" onClick={() => {router.push('/')}}> volver atras</button>
            <button className="bg-yellow-500 mt-5" onClick={() => deleteProduct()}>borrar producto</button>
        </div>
    )
};

export default SimpleProduct