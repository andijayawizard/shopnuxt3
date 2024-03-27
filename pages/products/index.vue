<script lang="ts" setup>
import { useToast } from "vue-toastification";
const { addToCart } = useCart();
const toast = useToast();

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

// const { products }: ProductResponse = await $fetch("https://dummyjson.com/products/");
const { products }: ProductResponse = await $fetch(`/api/getProducts`);
const handleAddToCart = (product: Product) => {
  addToCart(product);
  toast.success(`${product.title} added to cart!`);
};

console.log({ data: products });

</script>

<template>
  <header class="site-section">
    <h1>Products</h1>
    <p>
      Browse our products and find the best deals. It's not a promise. It's a
      guarantee!
    </p>
  </header>
  <section class="site-section">
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-list__item">
        <article class="product-card">
          <div class="product-card__content">
            <h2 class="product-card__title">{{ product.title }}</h2>
            <p class="product-card__description">{{ product.description }}</p>
            <span class="product-card__price">{{
        formatPrice(
          product.price - product.price * (product.discountPercentage / 100)
        )
      }}</span>
            <div class="product-card__action-cont">
              <button @click="handleAddToCart(product)" class="btn btn--alt">
                Add to cart
              </button>
              <NuxtLink :to="`/products/${product.id}`">
                <button class="btn btn">View details</button>
              </NuxtLink>
            </div>
          </div>
          <div class="product-card__image">
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
