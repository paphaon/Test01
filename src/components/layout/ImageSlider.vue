<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="image-container">
      <div class="image-box side-image">
        <img
          :src="images[0]"
          alt="รูปภาพที่ 1"
        />
      </div>
      <div class="image-box main-image ">
        <img
          :src="images[1]"
          alt="รูปภาพที่ 2"
        />
      </div>
      <div class="image-box side-image">
        <img
          :src="images[2]"
          alt="รูปภาพที่ 3"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  overflow-x: auto;
}

.image-container {
  white-space: nowrap;
  font-size: 0;
  display: flex;
  align-items: center;
}

.image-box {
  display: inline-block;
  vertical-align: middle;
}

.main-image {
  width: 1278px;
  flex-shrink: 0;
}

.main-image img {
  width: 1278px;
  height: 631px;
  object-fit: cover;
}

.side-image {
  width: calc((100% - 1278px) / 2);
  min-width: 300px;
}

.side-image img {
  width: 100%;
  height: 631px;
  object-fit: cover;
}

.image-box + .image-box {
  margin-left: 10px;
}
</style>