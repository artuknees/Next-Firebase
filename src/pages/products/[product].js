import React from "react";
import SimpleProduct from '../../components/SimpleProduct';
import firebaseApp from "../../../firebase";
import { getFirestore , collection , addDoc , getDocs , doc ,deleteDoc , getDoc , setDoc } from 'firebase/firestore';
import { async } from '@firebase/util'; 
const db = getFirestore(firebaseApp);


const productoSimple = ({producto}) => {
    return (
        <SimpleProduct product={producto}/>
    )
};

export default productoSimple;

export async function getServerSideProps ({query:{product}}){
    const docRef = doc(db, 'producto', product)
    const docSnap = await getDoc(docRef);
    const producto = docSnap.data();

    return{
        props:{
            producto: producto
        }
    }
}