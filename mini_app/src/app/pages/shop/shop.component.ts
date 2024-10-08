import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shop-container">
      <h1>Shop</h1>
      <div class="products">
        <div *ngFor="let product of products" class="product-card">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <button (click)="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .shop-container {
        text-align: center;
        padding: 16px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
      }
      .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        max-width: 200px;
        text-align: left;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
      }
      .product-card:hover {
        transform: scale(1.05);
      }
      .product-image {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
      }
      .price {
        color: #28a745;
        font-weight: bold;
      }
      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 8px;
      }
      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class ShopComponent {
  // Define an array of products for demonstration purposes
  products = [
    {
      name: 'Laptop',
      description: 'A powerful gaming laptop',
      price: 1499.99,
      image: 'https://via.placeholder.com/150?text=Laptop',
    },
    {
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      price: 199.99,
      image: 'https://via.placeholder.com/150?text=Headphones',
    },
    {
      name: 'Smartphone',
      description: 'The latest smartphone model',
      price: 999.99,
      image: 'https://via.placeholder.com/150?text=Smartphone',
    },
    {
      name: 'Camera',
      description: 'DSLR camera with high resolution',
      price: 699.99,
      image: 'https://via.placeholder.com/150?text=Camera',
    },
  ];

  addToCart(product: any) {
    alert(`${product.name} has been added to your cart!`);
  }
}
