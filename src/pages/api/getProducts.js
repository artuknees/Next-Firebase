import firebaseApp from "../../../firebase";
import { getFirestore , collection , getDocs } from 'firebase/firestore';

const getAllData = async (req, res) => {
    const db = getFirestore(firebaseApp); // me meto en la db
    const querySnapshot = await getDocs(collection(db, 'producto')); // get de todo lo de 'producto'
    const docs = []; // preparo un array
    querySnapshot.forEach((doc) => { // le pusheo el contenido mas su id.
      docs.push({...doc.data(), id:doc.id})
    })
    res.status(200).json(docs)
}

export default getAllData