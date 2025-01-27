<template>
  <v-app>
    <v-app-bar class="app-bar" elevation="0">
      <v-toolbar-title></v-toolbar-title>
      <v-row class="align-center" cols="12">
        <v-col cols="auto">
          <img src="@/assets/image/logo1.png" alt="Logo" width="40" />
        </v-col>
        <v-col v-for="(label, index) in buttonLabels" :key="index" cols="auto">
          <v-btn text>{{ label }}</v-btn>
        </v-col>
        <v-col cols="auto" class="pl-10">
          <v-btn icon>
            <v-icon size="24">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <v-col class="d-flex align-center">
          <v-btn text class="pa-2 ma-0 btn-font">Login</v-btn>
          <p class="pa-0 ma-0">|</p>
          <v-btn text class="pa-2 ma-0 btn-font">Create Account</v-btn>
        </v-col>
        <v-col cols="auto" class="pl-10">
          <v-btn icon>
            <v-icon size="24">mdi-basket-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col class="d-flex align-center">
          <v-btn text class="pa-0 ma-0" color="#BE901B">ENG</v-btn>
          <p class="pa-0 ma-0">|</p>
          <v-btn text class="pa-0 ma-0">THA</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <ImageSlider :images="images" />
      <v-row class="justify-center mt-3">
        <div class="image-container">
          <v-img :src="image4" alt="Image with button" width="1150px" height="300px" class="position-relative">
            <v-col class="pr-20">
              <div class="text-overlay">
                <span class="text-for pr-3" color="primary">FOR</span>
                <span class="text-beginner">BEGINNER</span>
              </div>
            </v-col>

            <v-col class="align-center">
              <v-btn class="button-on-image" color="white" variant="outlined">
                Learn More
              </v-btn>
            </v-col>
          </v-img>
        </div>
      </v-row>
      <v-row class="justify-center mt-4 py-10">
        <v-col class="text-center">
          <p class="text-head">Q&A</p>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-4" no-gutters>
        <v-col v-for="(card, index) in cards" :key="index" cols="4">
          <v-card class="card-style card-style d-flex flex-column justify-center pt-5" elevation="0">
            <v-card-title class="text-h6 card-style justify-center" style="font-weight: 600">
              {{ card.title }}</v-card-title>
            <v-divider :thickness="3" style="width: 33px; height: 4px; color: #f9e564"
              class="border-opacity-100 mx-auto"></v-divider>
            <v-card-text class="d-flex justify-center align-center" style="font-weight: 700; font-size: 16px">
              {{ card.subtitle }}</v-card-text>
            <v-card-text>{{ card.detail }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-4 py-10">
        <v-col class="text-center">
          <p class="text-head">FEATURED TRIP</p>
        </v-col>
      </v-row>
      <Trip />
      <v-row class="justify-center mt-4 pt-10">
        <v-col class="text-center">
          <p class="text-head">EQUIPMENT</p>
        </v-col>
      </v-row>
      <v-row class="justify-center pb-16 py-10">
        <v-col v-for="(card, index) in product" :key="index" cols="auto">
          <v-card class="card-style card-style d-flex flex-column justify-center pt-5" @click="handleCardClick(card)"
            elevation="0" width="250px">
            <div class="image-wrapper">
              <v-img :src="[image11, image12, image13, image14][index]" contain max-height="185" max-width="148"
                class="image-centered"></v-img>
            </div>
            <v-card-title class="text-h6 card-style justify-center pt-10"
              style="font-weight: 700; font-size: 16; color: #fec32d">
              {{ card.title }}
            </v-card-title>
            <v-card-text class="text-h6 card-style justify-center pt-10" style="font-size: 18">{{ card.price
              }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import ImageSlider from "./layout/ImageSlider.vue";
import Footer from "@/components/layout/Footer.vue";
import Trip from "./layout/Trip.vue";
import image1 from "@/assets/image/image1.png";
import image2 from "@/assets/image/image2.png";
import image3 from "@/assets/image/image3.png";
import image4 from "@/assets/image/image4.png";
import image11 from "@/assets/image/image11.png";
import image12 from "@/assets/image/image12.png";
import image13 from "@/assets/image/image13.png";
import image14 from "@/assets/image/image14.png";

const images = [image1, image2, image3];
const handleCardClick = (card) => {
};
const buttonLabels = [
  "HOME",
  "ABOUT US",
  "COURSE",
  "TRIP",
  "KNOWLEDGE & BLOG",
  "EQUIPMENT",
  "CONTACT US",
];

const cards = [
  {
    title: "HOW ABOUT SHARK?",
    subtitle: "ฉลามจะกัดเรามั้ย",
    detail:
      "จะเจอฉลามสักตัวไม่ใช่เรื่องง่ายนักเพราะสมัยนี้หายากเหลือเกินฉลามจะกินอาหารที่ขนาดเล็กกว่าตัวมันประมาณ3-4 เท่า และมนุษย์ไม่ใช่ อาหารของฉลามฉลามพันธุ์บางสายพันธุ์เท่านั้นที่จะจู่โจมคนนั้น ส่วนใหญ่เกิดจากความเข้าใจผิด ส่วนใหญ่อาศัยในน้ำเย็น ส่วนใหญ่ที่พบเจอจะเป็น Reef Shark ฉลามประเภทนี้กลัวคนมาก ถ้าเราเข้าไปใกล้นิดเดียว เค้าก็จะว่ายหนีไป",
  },
  {
    title: "HOW DEEP?",
    subtitle: "ดำกันลึกแค่ไหน",
    detail:
      "สำหรับการคอร์สดำน้ำเบื้องต้น Open Water นั้น ผู้เรียนจะลงไปลึกไม่เกิน 12 เมตร ในสองไดฟ์ แรก และ ไม่เกิน 18 เมตรในสอง ไดฟ์ต่อมา เมื่อจบคอร์สดำน้ำเบื้องต้นแล้ว คอร์ส Advanced Open Water จะพาคุณไป สัมผัสกับระดับที่ลึกขึ้นได้ถึง 40 เมตร แต่โดยปกติที่เราดำน้ำเที่ยวกันเฉลี่ยจะอยู่ที่ประมาณไม่เกิน 18-25 เมตร",
  },
  {
    title: "SHORTSIGHTED DIVERS?",
    subtitle: "สายตาสั้นดำน้ำได้มั้ย",
    detail:
      "สายตาสั้นก็ดำน้ำได้ นักดำน้ำสามารถใส่ Contact Lens ได้ หรือ ใส่ MASK ที่เปลี่ยน เลนส์สายตาได้การหักเหของแสงจะทำให้เรา เห็นวัตถุใกล้กว่า 25% และขยายใหญ่กว่า 33% อีกด้วย",
  },
  {
    title: "HOW OLD DIVER ?",
    subtitle: "อายุเท่าไหร่ถึงดำน้ำได้",
    detail:
      "สามารถเรียนดำน้ำได้ตั้งแต่ 10 ปีขึ้นไป ถึงอายุ เท่าไหร่ก็ได้ถ้าร่างกายแข็งแรง เริ่มเรียน เมื่ออายุ 8-10 ปี ดำน้ำได้ในสระเท่านั้น เริ่ม เรียนเมื่ออายุ 10 ปีขึ้นไป เรียนดำน้ำได้ปกติ * มีจำกัดความลึกบางช่วงอายุ เริ่มเรียนเมื่อ อายุ 45 ปีขึ้นไป ต้องมีแพทย์เซ็นต์รับรอง Fit for diving แต่เมื่อดำน้ำเป็นแล้ว สามารถ ใช้บัตรดำ น้ำได้ตลอดชีพไม่มีหมดอายุ",
  },
  {
    title: "BUDDY?",
    subtitle: "",
    detail:
      "เรียนดำน้ำคนเดียวได้ แต่เราไม่ดำน้ำคนเดียวแน่ ดังนั้นไม่ต้องกังวล มีนักดำน้ำนวน มากที่มาเรียนคนเดียว แล้วมีเพื่อนใหม่จากการดำน้ำ เป็นแกงค์ใหม่เลยทีเดียว บางคนก็ พบรักจากการดำน้ำด้วยนะ",
  },
];

const product = [
  { title: "Beanie", price: "2,700.00" },
  { title: "Black Pearl - 2 Pieces - Longjohn - 2mm", price: "13,500.00" },
  { title: "jax", price: "1,360.00" },
  { title: "MTX-RC Set", price: "39,990.00" },
];


</script>

<style scoped>
.v-btn {
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
}

.btn-font {
  font-weight: 600 !important;
}

.app-bar {
  background-color: #fec32d !important;
}

.image-container {
  position: relative;
}

.button-on-image {
  position: absolute;
  font-size: 16px;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 32px;
  margin-left: 20px !important;
}

.text-for {
  color: #fac51c;
  margin-right: 5px;
}

.text-beginner {
  color: white;
}

.text-head {
  color: black;
  font-size: 32px;
  font-family: "Josefin Sans", sans-serif;
}

.card-style {
  max-width: 320px;
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 24px;
  margin: 10px;
  margin: auto;
  justify-content: center;
}

.v-card-text {
  font-family: "Josefin Sans", sans-serif !important;
}

.featured-trip {
  max-width: 2000px;
  margin: 0 auto;
  padding: 2rem;
}

.featured-trip img {
  transition: transform 0.3s ease;
}

.featured-trip img:hover {
  transform: scale(1.02);
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.image-centered {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}
</style>
