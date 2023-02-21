import firebaseApp from "../../../../firebase";
import { getFirestore , doc , updateDoc } from 'firebase/firestore';

const updateProduct = async (req, res, query) => {
    const db = getFirestore(firebaseApp);
    const product = req.query.id;
    const newName = req.body.name;
    await updateDoc(doc(db,'producto',product),{
        nombre: newName
    });
    res.status(200).json({
        message: `updated product ${product} with name ${newName}`
    })
}

export default updateProduct