import { useState } from 'react'

export default function ProductCard({ product, onBuy }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`bg-gray-900 rounded-xl p-4 shadow-lg transform transition duration-300 ${hover ? 'scale-105 border border-pinkGradient' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={product.image} alt={product.name} className="rounded-xl w-full h-48 object-cover"/>
      <h2 className="text-white mt-2">{product.name}</h2>
      <p className="text-pinkGradient font-bold">${product.price}</p>
      <button onClick={() => onBuy(product)} className="mt-2 px-4 py-2 bg-gradient-to-r from-pinkGradient to-blueGradient rounded hover:scale-105 transition">
        Buy Now
      </button>
    </div>
  )
}
