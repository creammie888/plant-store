
export function handleAddToCart(product) {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = storedCart.find((item) => item.id === product.id);
  
    if (existing) {
      existing.quantity += 1;
    } else {
      storedCart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(storedCart));
  }
  