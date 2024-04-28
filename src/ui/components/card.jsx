import { useEffect,useState } from "react"
import '../../App.css'
export const Card = () =>{
    let variable = Math.floor(Math.random() * 100) + 1;
    const [product,setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${variable}`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    },[]);
    return(
        <div className="card">
            <h2>{product.title}</h2>
            <p>Descripcion: {product.description}</p>
            <p>USD$: {product.price}</p>
            
            {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt="Imagen del producto" />
             )}
        </div>
    )
}