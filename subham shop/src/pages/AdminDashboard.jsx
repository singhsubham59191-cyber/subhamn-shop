import { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    setOrders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const approveOrder = async (order) => {
    await updateDoc(doc(db, "orders", order.id), { status: "approved" });
    alert(`Order approved for ${order.email}`);
    fetchOrders();
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-600">
            <th>Email</th>
            <th>Product</th>
            <th>Status</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b border-gray-700">
              <td>{order.email}</td>
              <td>{order.productName}</td>
              <td>{order.status}</td>
              <td>
                {order.status === "pending" &&
                  <button onClick={() => approveOrder(order)} className="px-2 py-1 bg-gradient-to-r from-pinkGradient to-blueGradient rounded">Approve</button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
