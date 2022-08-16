import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {
  getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js';


const fbApp = initializeApp({
  apiKey: "AIzaSyDekbBZ11HmRnFbnBMY42ID9GIQ2nB5zys",
  authDomain: "elocomunitario-fd550.firebaseapp.com",
  projectId: "elocomunitario-fd550",
  storageBucket: "elocomunitario-fd550.appspot.com",
  messagingSenderId: "528992469948",
  appId: "1:528992469948:web:8d1b005d424a025c28e1b9",
  measurementId: "G-5JSQFJWH26"
});


// Firestore check
const db = getFirestore(fbApp);

export async function read(module) {
  const col = collection(db, module);
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map(doc => doc.data());
  return list;
}
/* export class reader {
  read = async function read(module) {
    const col = collection(db, module);
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map(doc => doc.data());
    return list;
  } 
} */

export async function save(module, item) {
  if (item.id) {
    let docRef = await setDoc(doc(db, module, item.id), item);
    return docRef
  } else {
    let docRef = await addDoc(collection(db, module), item);
    item.id = docRef.id
    docRef = await setDoc(doc(db, module, docRef.id), item);
    return docRef
  }
}

export async function remove(module, item) {
  let docRef = await deleteDoc(doc(db, module, item.id));
  return docRef
}

/* read('tips')
  .then(res=>console.log(res)) */

