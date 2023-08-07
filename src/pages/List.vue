<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NewsCard from '../components/NewsCard.vue';

import type { ResultNewsType, NewsType } from '../type/news'

const result = ref<ResultNewsType>();
const list = ref<NewsType[]>([]);
const total = ref<number | undefined>(0);
const current = ref<number | undefined>(0);
const count = ref(0);
const isLoading = ref(true);

const fetchNews = async () => {
  count.value++;
  const res = await fetch(`https://flems.github.io/test/api/news/${count.value}`);

  isLoading.value = res.status !== 200;
  result.value = await res.json();
  result.value?.items.forEach((item) => {
    list.value.push(item);
  });

  total.value = result.value?.nav.total;
  current.value = result.value?.nav.current;
};

onMounted(async() => {
  await fetchNews();
})
</script>

<template>
  <div class="newsList__banner">
    <h1 class="newsList__title">Новости</h1>
  </div>
  <div class="newsList__wrapper">
    <div class="newsList__isLoading" v-if="isLoading">
      Новостей нет...
    </div>
    <div v-else class="newsList__list">
      <NewsCard
        v-for="{ name, code, previewText, type, date, link, image } in list" 
        :key="code"
        :name="name"
        :code="code"
        :previewText="previewText"
        :type="type"
        :date="date"
        :link="link"
        :image="image"
      />
    </div>
  
  </div>

  <div class="newsList__sectionButton" v-if="total !== current">
    <button class="newsList__loadButton" @click="fetchNews">Загрузить ещё</button>
  </div>
</template>

<style lang="scss" scoped>
.newsList {
  &__banner {
    background: url("../assets/banner.png") no-repeat;
    background-position: 25%;
    background-size: cover;
    width: 100%;
    min-height: 19.66rem;
    display: flex;
    justify-content: flex-start;
    align-items: end;
  }

  &__title {
    font: 700 40px/48px 'Nunito Sans', sans-serif;
    width: 88%;
    margin: 0 auto;
    padding-bottom: 45px;

  }

  &__wrapper {
    width: 88%;
    margin: 0 auto;
    padding-top: 63px;
    margin-bottom: 72px; 
  }

  &__isLoading {
    padding-top: 63px;
    font: 700 40px/48px 'Nunito Sans', sans-serif;
  }

  &__list {
    width: 100%;
    grid-gap: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__sectionButton {
    margin-bottom: 72px; 
    display: flex;
    justify-content: center;
  }

  &__loadButton {
    width: 203px;
    height: 56px;
    border: 1px solid rgba(0, 45, 191, 1);
    outline: none;
    background-color: transparent;
    font: 600 20px/24px 'Nunito Sans', sans-serif;
    color: rgba(0, 45, 191, 1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {

    &__banner {
      background-position: 60%;
    }

    &__list {
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  };
  
  @media screen and (max-width: 535px) {

    &__banner {
      background-position: 65%;
    }
    
    &__list {
      grid-template-columns: 1fr;
    }
  };
}
</style>