import firebaseApp from "../../../../firebase";
import { getFirestore , doc ,deleteDoc } from 'firebase/firestore';

const deleteProduct = async (req, res, query) => {
    const db = getFirestore(firebaseApp);
    const product = req.query.id;
    await deleteDoc(doc(db,'producto',product));
    res.status(200).json({
        message: `deleted product ${product}`
    })
}

export default deleteProduct