import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 FIREBASE CONFIG */
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ADD PRODUCT */
window.addProduct = async function(){
await addDoc(collection(db,"products"),{
name: name.value,
price: price.value,
img: img.value,
time: Date.now()
});
alert("Product Added 🚀");
}

/* LIVE PRODUCTS */
onSnapshot(collection(db,"products"),(snap)=>{
let grid = document.getElementById("grid");
grid.innerHTML="";

snap.forEach(d=>{
let p = d.data();

grid.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
</div>
`;
});
});
