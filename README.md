# EShop React UI

React, TypeScript, Redux Toolkit ve Material UI kullanılarak geliştirilen e-ticaret ön yüz (frontend) uygulaması.

## Mevcut Durum

- **Project Setup:** Gerekli bağımlılıklar (`@mui/material`, `@reduxjs/toolkit`, `react-icons`, `axios`, `react-toastify` vb.) eklenerek proje altyapısı oluşturuldu.
- **State Management:** Redux Toolkit ve Slice yapısı (`appSlice`, `basketSlice` vb.) kurularak uygulama genelindeki durum yönetimi (loading, user state, sepet durumu vb.) yapılandırıldı.
- **Register Page:** Material UI bileşenleri, Formik & Yup doğrulama kuralları ve Axios entegrasyonu ile kayıt formu tasarımı ve servis bağlantıları tamamlandı.
- **Login Page & Authentication:** Material UI ile giriş formu arayüzü tamamlandı, kullanıcı kontrol servis altyapısı entegre edildi ve oturumun kalıcı kalması için `localStorage` desteği eklendi.
- **Navbar & Navigation:** Mağaza logosu, arama input'u, sepet ikonu ve çıkış yap butonunu içeren responsive Navbar bileşeni geliştirildi.
- **Product Operations:** Ürün servis bağlantıları, ürün kartları ve ana sayfa listeleme arayüzü entegre edildi.
- **Category Operations & Filtering:** Kategori listeleme servisi, dinamik kategori seçimi ve kategoriye göre ürün filtreleme altyapısı tamamlandı.
- **Product Detail Page:** Seçilen ürünün görselleri, açıklamaları ve fiyat bilgisiyle detaylı gösterimi sağlandı; miktar artırma/azaltma kontrolleri eklendi.
- **Basket Operations & Drawer:** Redux destekli sepet yönetimi (ürün ekleme, çıkarma, miktar takibi) ve sağ taraftan açılan responsive `Drawer` sepet arayüzü entegre edildi.

## Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **UI & Icons:** Material UI (MUI), Material Icons, React Icons
- **Form & Validation:** Formik, Yup
- **HTTP & Notifications:** Axios, React-Toastify
- **Routing:** React Router (`react-router-dom`)
- **Mock Server:** JSON Server
