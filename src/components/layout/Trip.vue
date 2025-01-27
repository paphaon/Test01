<template>
    <v-row class="justify-center mt-4">
        <div class="featured-trip">
          <div class="justify-center">
            <v-row>
              <v-col>
                <div class="relative h-64">
                  <img :src="image5" />
                </div>
              </v-col>
              <v-col>
                <div class="relative h-64">
                  <img :src="image6" />
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="relative">
                  <img :src="image7" />
                </div>
              </v-col>
              <v-col>
                <div class="relative">
                  <img :src="image8" />
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="relative h-64">
                  <img :src="image9" />
                </div>
              </v-col>
              <v-col>
                <div class="relative h-64">
                  <img :src="image10" />
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-row>
</template>
<script setup>
import image5 from "@/assets/image/image5.png";
import image6 from "@/assets/image/image6.png";
import image7 from "@/assets/image/image7.png";
import image8 from "@/assets/image/image8.png";
import image9 from "@/assets/image/image9.png";
import image10 from "@/assets/image/image10.png";
</script>