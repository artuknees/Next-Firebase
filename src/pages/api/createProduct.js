import firebaseApp from "../../../firebase";
import { getFirestore , collection , addDoc } from 'firebase/firestore';

const createProduct = async (req, res) => {
    const db = getFirestore(firebaseApp);
    const product = req.body;
    await addDoc(collection(db, 'producto'),{
        ...product
    });
    res.status(200).json({
        ...product
    })

}

export default createProduct