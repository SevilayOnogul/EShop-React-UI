# EShop React UI

React, TypeScript, Redux Toolkit ve Material UI kullanılarak geliştirilen e-ticaret ön yüz (frontend) uygulaması.

## Mevcut Durum

- **Project Setup:** Gerekli bağımlılıklar (`@mui/material`, `@reduxjs/toolkit`, `react-icons`, `axios`, `react-toastify` vb.) eklenerek proje altyapısı oluşturuldu.
- **State Management:** Redux Toolkit ve Slice yapısı kurularak uygulama genelindeki durum yönetimi (loading, user state vb.) yapılandırıldı.
- **Register Page:** Material UI bileşenleri, Formik & Yup doğrulama kuralları ve Axios entegrasyonu ile kayıt formu tasarımı ve servis bağlantıları tamamlandı.
- **Login Page & Authentication:** Material UI ile giriş formu arayüzü tamamlandı, kullanıcı kontrol servis altyapısı entegre edildi ve oturumun kalıcı kalması için `localStorage` desteği eklendi.
- **Navbar & Navigation:** Mağaza logosu, arama input'u ve çıkış yap butonunu içeren responsive Navbar bileşeni geliştirildi.
- **Product Operations:** Ürün servis bağlantıları ve ürün kartları/listeleme arayüzü entegre edildi.
- **Category Operations:** Kategori listeleme servisi ve filtreleme/listeleme arayüz tasarımları eklendi.

## Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **UI & Icons:** Material UI (MUI), React Icons
- **Form & Validation:** Formik, Yup
- **HTTP & Notifications:** Axios, React-Toastify
- **Routing:** React Router
- **Mock Server:** JSON Server
