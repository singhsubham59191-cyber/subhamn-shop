import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ProductCard from '../components/ProductCard.jsx';
import CheckoutModal from './CheckoutModal.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pinkGradient via-purpleGradient to-blueGradient p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-6">3D Glasses Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onBuy={setSelectedProduct}/>
          ))}
        </div>
      </div>

      {selectedProduct && 
        <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      }
    </div>
  )
}
