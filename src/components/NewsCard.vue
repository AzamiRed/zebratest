<script setup lang="ts">
import moment from 'moment';
import { computed } from 'vue';

import type { NewsCategoryType } from '../type/news'

const props = defineProps<{
  name: string,
  code: string,
  previewText: string,
  type: NewsCategoryType,
  date: number,
  link: string,
  image: string,
}>();

const day = computed(() => {
  return moment.unix(props.date).format('DD');
});

const month = computed(() => {
  return moment.unix(props.date).format('MMMM');
});

const year = computed(() => {
  return moment.unix(props.date).format('YYYY');
});
</script>

<template>
  <div
    class="newsCard"
  >
  <div>
    <div v-if="image" class="newsCard__image">
      <img :src="image" :alt="name" />
    </div>

    <div :class="[image ? 'newsCard__itemContent' : 'newsCard__itemContent--noImage']">
      <div class="newsCard__date">
        <div class="newsCard__day">
          {{ day }}
        </div>
        <div>
          <div class="newsCard__month">
            {{ month }}
          </div>
          <div class="newsCard__year">
            {{ year }}
          </div>
        </div>
      </div>

      <div class="newsCard__name">
        {{ name }}
      </div>

      <div class="newsCard__description">
        {{ previewText }}
      </div>

    </div>
  </div>
    <div class="newsCard__tag">
      {{ type.value }}
    </div>
  </div> 
</template>

<style lang="scss" scoped>
.newsCard {
  width: 99%;
  border: 1px solid rgba(15, 98, 254, 1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;

  &__image {
    width: 100%;
  }

  &__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__itemContent {
    padding: 19px 29px 0 29px;

    &--noImage {
      padding: 48px 29px 0 29px;
    }
  }

  &__date {
    display: flex;
  }

  &__day {
    font: 400 36px/36px 'Nunito Sans', sans-serif;
    color: rgba(161, 167, 181, 1);
    margin-right: 4px;
  }  

  &__month,
  &__year {
    font: 700 15px/16.5px 'Nunito Sans', sans-serif;
    color: rgba(161, 167, 181, 1);
  }

  &__name {
    font: 400 22px/26.4px 'Nunito Sans', sans-serif;
    color: rgba(12, 91, 239, 1);
    margin-top: 15px;
  }

  &__link {
    text-decoration: none;
  }

  &__description {
    font: 400 20px/26px 'Nunito Sans', sans-serif;
    margin-top: 15px;
    margin-bottom: 38px;
  }

  &__tag {
    width: fit-content;
    padding: 4px 16px 4px 16px;
    border-radius: 360px;
    gap: 2px;
    background-color: rgba(240, 246, 254, 1);
    font: 400 14px/19.6px 'Nunito Sans', sans-serif;
    color: rgba(0, 19, 58, 1);
    margin: 0 29px 3px 29px;
  }

  @media screen and (max-width: 800px) {

    &__name {
      font: 400 14px/20px 'Nunito Sans', sans-serif;
      color: rgba(12, 91, 239, 1);
    }

    &__description {
      font: 400 16px/20px 'Nunito Sans', sans-serif;
    }
  };
}
</style>