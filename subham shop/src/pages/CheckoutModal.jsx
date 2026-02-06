import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';

export default function CheckoutModal({ product, onClose }) {
  const [email, setEmail] = useState("");

  const handleBuy = async () => {
    await addDoc(collection(db, "orders"), {
      productId: product.id,
      productName: product.name,
      email: email,
      status: "pending",
      createdAt: serverTimestamp()
    });
    alert(`Payment Instructions:\nPay to eSewa: 9865674732\nEmail used: ${email}`);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-96">
        <h2 className="text-white text-2xl font-bold mb-4">Checkout: {product.name}</h2>
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleBuy} className="w-full px-4 py-2 bg-gradient-to-r from-pinkGradient to-blueGradient rounded hover:scale-105 transition">Confirm Payment</button>
        <button onClick={onClose} className="mt-2 w-full px-4 py-2 bg-gray-700 rounded">Cancel</button>
      </div>
    </div>
  )
}
