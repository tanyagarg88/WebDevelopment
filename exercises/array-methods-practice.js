// Comprehensive Array Methods Practice
const products = [
  { id: 1, name: 'Mechanical Keyboard', price: 99.99, inStock: true, rating: 4.8 },
  { id: 2, name: 'Ergonomic Mouse', price: 49.99, inStock: false, rating: 4.5 },
  { id: 3, name: 'Ultra-Wide Monitor', price: 349.99, inStock: true, rating: 4.9 },
  { id: 4, name: 'Noise-Cancelling Headphones', price: 199.99, inStock: true, rating: 4.7 }
];

// 1. Get available product names
const availableProductNames = products
  .filter(p => p.inStock)
  .map(p => p.name);

// 2. Calculate total inventory value for in-stock items
const totalStockValue = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);

console.log('Available:', availableProductNames);
console.log('Total Inventory Value: $' + totalStockValue.toFixed(2));


<!-- Updated: 2026-05-29T11:21:31+05:30 [Commit #68] -->


<!-- Updated: 2026-05-29T16:18:55+05:30 [Commit #72] -->
