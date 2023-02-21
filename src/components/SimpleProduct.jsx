import React, {useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SimpleProduct = ({product}) => {
    const [newName, setNewName] = useState('')
    const router = useRouter();
    const { query } = useRouter();

    const deleteProductAPI = async () => {
        try {
            const { product } = query;
            const res = (await axios.delete(`http://localhost:3000/api/delete/${product}`)).data;
            router.push('/')
        } catch(err) {
            console.error(err)
        }
    };
    const handleChangeNameAPI = async () => {
        if (newName != '') {
            try {
                const { product } = query;
                const body = {
                    name: newName
                }
                const res = (await axios.patch(`http://localhost:3000/api/patch/${product}`,body)).data;
                router.push('/')
            } catch(err) {
                console.error(err)
            }
        }
    };
    return (
        <div className="flex flex-col w-1/4 items-center">
            <p>{`Name: ${product.nombre}`}</p>
            <p>{`Price: ${product.precio}`}</p>
            <p>{`Amount: ${product.cantidad}`}</p>
            <button className="bg-pink-500" onClick={() => {router.push('/')}}> volver atras</button>
            <button className="bg-yellow-500 mt-5" onClick={() => deleteProductAPI()}>borrar producto API</button>
            <label htmlFor="">escribir nuevo nombre</label>
            <input type="text" className="border-b" onChange={(e) => setNewName(e.target.value)} />
            <button className="border border-blue-800 mt-4 cursor-pointer" onClick={() => handleChangeNameAPI()}>change name API</button>

        </div>
    )
};

export default SimpleProduct