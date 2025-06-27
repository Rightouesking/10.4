
import { Product } from "./models/Product";
import { fetchProducts } from "./apiService";
import { calculateDiscount } from "./6sba/discountCalculator";
import { calculateTax } from "./6sba/taxCalculator";
async function runApp() {
  try {
    const products = await fetchProducts();

    products.slice(0, 5).forEach((item) => {
      const product = new Product(item.id, item.title, item.price, item.category, item.discountPercentage);

      product.displayDetails();

      const discount = calculateDiscount(product.price, product.discountPercentage);
      const tax = calculateTax(product.getPriceWithDiscount(), product.category);
      const finalPrice = product.getPriceWithDiscount() + tax;

      console.log(`💸 Discount: -$${discount.toFixed(2)}`);
      console.log(`🧾 Tax: +$${tax.toFixed(2)}`);
      console.log(`🛒 Final Price: $${finalPrice.toFixed(2)}\n`);
    });
  } catch (err) {
    console.error("❌ Error loading product data:", err);
  }
}

runApp();