# EShop React UI 🛒

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.0-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Material UI](https://img.shields.io/badge/Material%20UI-v5%2Fv6-007FFF?logo=mui)](https://mui.com/)

React, TypeScript, Redux Toolkit ve Material UI kullanılarak geliştirilmiş, modern ve responsive bir e-ticaret ön yüz (frontend) uygulamasıdır.

---

## 🚀 Öne Çıkan Özellikler & Tamamlanan İşlemler

- **Kullanıcı Yönetimi & Kimlik Doğrulama:**
  - **Register:** Material UI, Formik ve Yup doğrulama kuralları ile güvenli kayıt formu.
  - **Login & Auth:** Kullanıcı giriş kontrolü ve `localStorage` entegrasyonu ile oturum kalıcılığı.
- **Navigasyon & Responsive Arayüz:**
  - Mağaza logosu, canlı arama (search) girdisi, dinamik sepet sayacı ve oturum kapatma (logout) aksiyonlarını içeren Navbar.
- **Ürün & Kategori Yönetimi:**
  - **Ürün Listeleme:** Axios entegrasyonu ile ürün kartlarının listelenmesi.
  - **Kategori Filtreleme:** Dinamik kategori seçimi ve kategoriye göre anlık ürün filtreleme.
- **Ürün Detay Sayfası:**
  - Ürün görselleri, açıklaması ve fiyat bilgisi gösterimi.
  - Miktar artırma/azaltma kontrolleri.
- **Sepet & Drawer Yönetimi:**
  - Redux Toolkit (`basketSlice`) ile merkezi sepet durum yönetimi.
  - Sepete ürün ekleme, sepetten çıkarma ve toplam fiyat/miktar hesaplama.
  - Sağ taraftan açılan (Right Drawer) responsive sepet paneli.

---

## 🛠️ Teknolojik Mimariler (Tech Stack)

- **Frontend Framework:** React, TypeScript
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **UI Framework & Icons:** Material UI (MUI), Material Icons, React Icons
- **Form Handling & Validation:** Formik, Yup
- **HTTP Client & Notifications:** Axios, React-Toastify
- **Routing:** React Router DOM (`react-router-dom`)
- **Mock REST API:** JSON Server

---
