import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // นำเข้า @mdi/font
import 'vuetify/styles' // นำเข้า Vuetify styles

export default createVuetify({
  icons: {
    iconfont: 'mdi', // ใช้ไอคอนจาก MDI
  },
})
