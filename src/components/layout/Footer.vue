<template>
  <footer class="bg-black text-white py-6">
    <div class="mx-auto px-4">
      <v-row class="justify-center">
        <v-col cols="7">
          <v-row class="d-flex justify-center pt-10 pb-10">
            <v-col>
              <v-row>
                <span class="font-semibold pl-2 text-title-footer"
                  >Follow Us!</span
                >
              </v-row>
              <v-row class="pt-5 pb-5">
                <v-col cols="auto">
                  <v-btn icon="mdi-facebook" size="large" style="color: black;"></v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn icon="mdi-instagram" size="large" style="color: black;"></v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn icon="mdi-youtube" size="large" style="color: black;"></v-btn>
                </v-col>
              </v-row>
              <v-row>
                <p class="text-footer pt-10 pl-2">
                  Copyright © 2020 by Dive Potato Co., Ltd.
                </p>
              </v-row>
            </v-col>
            <v-col>
              <div class="text-sm text-footer">
                <v-row>
                  <p class="font-semibold mr-2 text-title-footer">Address:</p>
                </v-row>
                <v-row class="pt-5 px-0">
                  <p>Dive Potato Co. Ltd., Ladprao,</p>
                  <p>141 Prasertmanukit Road, Ladprao</p>
                  <p>Jomthonglum Bankok 10230</p>
                </v-row>
              </div>
            </v-col>
            <v-col>
              <div class="text-sm text-footer">
                <v-row>
                  <p class="font-semibold mr-2 text-title-footer">Contact:</p>
                </v-row>
                <v-col>
                  <v-row> </v-row>
                </v-col>
                <v-row class="pt-2">
                  <v-col class="px-0">
                    <p>Mobile: (+66)65-395-6496</p>
                    <p>LINE ID: @divepotato</p>
                    <p>E-Mail: info@divepotato.com</p>
                    <p>Office Hours: Mon *Close*,</p>
                    <p>Tue - Sun: 10:00 - 19:00</p>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.text-title-footer {
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-weight: 500px;
}

.text-footer {
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 400px;
}

@media (max-width: 768px) {
  .flex-wrap > div {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }

  .flex-wrap > div:last-child {
    margin-bottom: 0;
  }
}
</style>
