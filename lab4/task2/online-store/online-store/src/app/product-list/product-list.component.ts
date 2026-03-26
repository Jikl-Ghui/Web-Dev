import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
  {
    "id": 1,
    "name": "Sony PlayStation 5 (White)",
    "description": "Stationary game console with ultra-fast SSD and support for 4K gaming. Great for exclusive titles and smooth performance.",
    "price": 299990,
    "rating": 4.9,
    "link": "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h2b/h90/63948654936094.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium"
    ],
    "image": "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24 FE 5G (8/256, Black)",
    "description": "Modern 5G smartphone with a bright display and solid performance for daily tasks and photos. A balanced flagship-like experience.",
    "price": 672900,
    "rating": 4.7,
    "link": "https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/",
    "images": [
      "products/p2-1.svg",
      "products/p2-2.svg",
      "products/p2-3.svg"
    ],
    "image": "products/p2-1.svg"
  },
  {
    "id": 3,
    "name": "Apple AirPods Pro (2nd gen, USB‑C)",
    "description": "Wireless earbuds with active noise cancellation and transparency mode. Comfortable fit and quick pairing with Apple devices.",
    "price": 149990,
    "rating": 4.8,
    "link": "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/",
    "images": [
      "products/p3-1.svg",
      "products/p3-2.svg",
      "products/p3-3.svg"
    ],
    "image": "products/p3-1.svg"
  },
  {
    "id": 4,
    "name": "Lenovo IdeaPad 3 14\" (8GB/256GB, Win 11)",
    "description": "Compact laptop for study and everyday work. SSD storage makes it feel snappy for browsing, docs and online classes.",
    "price": 189990,
    "rating": 4.5,
    "link": "https://kaspi.kz/shop/p/lenovo-ideapad-3-14-8-gb-ssd-256-gb-win-11-14itl6-82h7004yru-106951529/",
    "images": [
      "products/p4-1.svg",
      "products/p4-2.svg",
      "products/p4-3.svg"
    ],
    "image": "products/p4-1.svg"
  },
  {
    "id": 5,
    "name": "Apple MacBook Air 13 (2022, M2, 8/256)",
    "description": "Thin and light laptop with Apple M2 chip for fast everyday performance. Great battery life and a sharp Retina display.",
    "price": 499990,
    "rating": 4.9,
    "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/",
    "images": [
      "products/p5-1.svg",
      "products/p5-2.svg",
      "products/p5-3.svg"
    ],
    "image": "products/p5-1.svg"
  },
  {
    "id": 6,
    "name": "Dyson V15 Detect (Silver)",
    "description": "Cordless vacuum cleaner with powerful suction and helpful laser dust detection. Handy for quick daily cleaning.",
    "price": 449990,
    "rating": 4.9,
    "link": "https://kaspi.kz/shop/p/dyson-v15-detect-serebristyi-107093776/",
    "images": [
      "products/p6-1.svg",
      "products/p6-2.svg",
      "products/p6-3.svg"
    ],
    "image": "products/p6-1.svg"
  },
  {
    "id": 7,
    "name": "Xiaomi Smart Band 8 (Global, Black)",
    "description": "Light fitness band with heart rate, sleep tracking and lots of sport modes. A simple way to keep an eye on daily activity.",
    "price": 19990,
    "rating": 4.6,
    "link": "https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/",
    "images": [
      "products/p7-1.svg",
      "products/p7-2.svg",
      "products/p7-3.svg"
    ],
    "image": "products/p7-1.svg"
  },
  {
    "id": 8,
    "name": "Xiaomi Mi Robot Vacuum-Mop (White)",
    "description": "Robot vacuum for dry + wet cleaning with strong suction. Helps keep floors tidy with minimal effort.",
    "price": 129990,
    "rating": 4.4,
    "link": "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-stytj01zhm-skv4093gl-belyi-100149561/",
    "images": [
      "products/p8-1.svg",
      "products/p8-2.svg",
      "products/p8-3.svg"
    ],
    "image": "products/p8-1.svg"
  },
  {
    "id": 9,
    "name": "Nintendo Switch (OLED, White)",
    "description": "Hybrid console that works on TV or handheld mode with a vivid OLED screen. Perfect for gaming at home or on the go.",
    "price": 179990,
    "rating": 4.9,
    "link": "https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/",
    "images": [
      "products/p9-1.svg",
      "products/p9-2.svg",
      "products/p9-3.svg"
    ],
    "image": "products/p9-1.svg"
  },
  {
    "id": 10,
    "name": "Xiaomi Redmi Note 11S 5G (4/128, Gray)",
    "description": "Affordable 5G smartphone with a capable processor and big battery. Good everyday pick for messaging, video and photos.",
    "price": 89990,
    "rating": 4.5,
    "link": "https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-5g-4-gb-128-gb-seryi-104570544/",
    "images": [
      "products/p10-1.svg",
      "products/p10-2.svg",
      "products/p10-3.svg"
    ],
    "image": "products/p10-1.svg"
  }
];

selectedImageIndex: Record<number, number> = {};

private clampIndex(idx: number, len: number): number {
  if (!len || len < 1) return 0;
  return ((idx % len) + len) % len; // safe wrap
}

getSelectedIndex(p: Product): number {
  const len = p.images?.length ?? 0;
  const current = this.selectedImageIndex[p.id] ?? 0;
  return this.clampIndex(current, len);
}

selectedImageUrl(p: Product): string {
  const imgs = p.images ?? [];
  const idx = this.getSelectedIndex(p);
  return imgs[idx] ?? p.image;
}

selectImage(p: Product, idx: number): void {
  const len = p.images?.length ?? 0;
  this.selectedImageIndex[p.id] = this.clampIndex(idx, len);
}

prevImage(p: Product): void {
  this.selectImage(p, this.getSelectedIndex(p) - 1);
}

nextImage(p: Product): void {
  this.selectImage(p, this.getSelectedIndex(p) + 1);
}


  trackById = (_: number, item: Product) => item.id;

  stars = [0, 1, 2, 3, 4];

  filledStars(rating: number): number {
    return Math.max(0, Math.min(5, Math.round(rating)));
  }

  formatPriceKzt(value: number): string {
    return value.toLocaleString('ru-RU') + ' ₸';
  }

  whatsAppShareUrl(kaspiLink: string): string {
    const message = `Check out this product: ${kaspiLink}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  telegramShareUrl(kaspiLink: string, productName: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(kaspiLink)}&text=${encodeURIComponent(productName)}`;
  }

}
