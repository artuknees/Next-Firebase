import React , {useState, useEffect} from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import '@fontsource/roboto/400.css';
import Button from '@mui/material/Button';
import { Autocomplete, TextField } from "@mui/material";

const Form = () => {
    const router = useRouter();
    const [products , setProducts] = useState([]);
    const [thing , setThing] = useState({
        nombre: '',
        precio: '',
        cantidad: '' 
    });
    const [fetcher, setFetcher] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const rta = await axios.get('../api/getProducts');
                setProducts(rta.data);  
            } catch (err) {
                console.error(err)
            }
        }
        fetchData();
    },[fetcher])
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const body = thing;
            const rta = await axios.post('../api/createProduct', body);
            setFetcher(!fetcher)
        } catch(err) {
            console.error(err)
        }
    };
    const handleDetails = (id) => {
        router.push(`/products/${id}`)
    }
    return (
        <div className="flex flex-row w-full justify-evenly pt-5">
            <form className="flex flex-col w-48 items-center mx-24 py-12 border border-black" onSubmit={(e) => handleCreate(e)}>
                <label className="bg-slate-400">Ingrese el nombre</label>
                <input type="text" 
                    defaultValue={thing.nombre} 
                    onChange={(e) => setThing({...thing, nombre: e.target.value})} 
                    className="border-b border-b-slate-200 mt-4 w-5/6"
                />
                <label className="bg-slate-400 mt-4">Ingrese precio</label>
                <input type="number" 
                    defaultValue={thing.precio} 
                    onChange={(e) => setThing({...thing, precio:parseInt(e.target.value)})} 
                    className="w-5/6 border-b border-b-slate-200 mt-4"
                />
                <label className="bg-slate-400 mt-4">Ingrese cantidad</label>
                <input type="number" 
                    defaultValue={thing.cantidad} 
                    onChange={(e) => setThing({...thing, cantidad: parseInt(e.target.value)})} 
                    className="w-5/6 border-b border-b-slate-200 mt-4"
                />
                <button type="submit" className="w-5/6 bg-teal-500 mt-4">Enviar</button>
            </form>
            <div className="flex flex-col items-center justify-center w-1/3">
                {products?.length > 0 && products.map(item => {return(
                    <div key={item.id} className='border border-black cursor-pointer w-full items-center justify-center text-center mb-2' onClick={() => handleDetails(item.id)}>
                        <p>{`Name: ${item.nombre}`}</p>
                        <p>{`Price: ${item.precio}`}</p>
                        <p>{`Amount: ${item.cantidad}`}</p>
                    </div>
                )})}
                <div className="mb-10">
                <Button variant="outlined">Outlined</Button>
                </div>
                <div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={[
                            { label: 'The Godfather', id: 1 },
                            { label: 'Pulp Fiction', id: 2 },
                        ]}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />    
                </div>        
            </div>
        </div>
    )
};

export default Form;