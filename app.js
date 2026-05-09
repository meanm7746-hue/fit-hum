import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ADD PRODUCT */
window.addProduct = async function(){
await addDoc(collection(db,"products"),{
name:name.value,
price:price.value,
img:img.value
});
}

/* LOAD PRODUCTS */
onSnapshot(collection(db,"products"),(snap)=>{
let grid=document.getElementById("grid");
grid.innerHTML="";

snap.forEach(d=>{
let p=d.data();
grid.innerHTML+=`
<div>
<img src="${p.img}" width="100%">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
</div>`;
});
});
