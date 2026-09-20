# Masuk Astra - Membership Test Automation Suite

Project ini berisi skenario **Automation Testing (End-to-End)** menggunakan **Playwright** dan **TypeScript/JavaScript** untuk modul registrasi, verifikasi OTP, serta login pada halaman Membership.

## 📌 Test Scenarios Covered

### 1. Registration Flow (`/membership`)
- **REG-001**: Registrasi berhasil dengan mengisi seluruh field mandatory (*Name, No HP, Tanggal Lahir*).
- **REG-002**: Registrasi dengan pengisian seluruh field termasuk opsional (*Email, Hobi*).
- **REG-004**: Validasi error jika input nama kurang dari 3 karakter.
- **REG-008**: Validasi error jika nama mengandung karakter spesial / angka terlarang.
- **REG-009**: Validasi error jika nomor HP kurang dari 10 digit.
- **REG-010**: Validasi error jika nomor HP lebih dari 13 digit.

### 2. OTP Verification (`/membership/otp-verification`)
- **REG-011**: Verifikasi penanganan error saat penginputan kode OTP yang salah.

### 3. Authentication / Login (`/membership/login`)
- **REG-012**: Login menggunakan Nomor Handphone terdaftar dan verifikasi OTP hingga redirect ke Homepage.
- **REG-013**: Login menggunakan Alamat Email terdaftar dan verifikasi OTP hingga redirect ke Homepage.

---

## 🛠️ Tech Stack & Methods
- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript / TypeScript
- **Test Runner:** Playwright Test Runner
- **Assertions:** Built-in Expect matchers (`toHaveURL`, `toHaveText`, dll)

---

## ⚠️ Disclaimer
> **Catatan / Disclaimer:**  
> Repository ini dibuat **murni sebagai sampel portofolio / demonstrasi teknis** dari pengerjaan test automation. URL, skenario, struktur data, dan flow yang terdapat di dalam repositori ini merupakan contoh representatif. Implementasi test automation di lingkungan produksi aktual atau proyek lain tentu dapat berbeda menyesuaikan kebutuhan bisnis, arsitektur sistem, serta ketentuan masing-masing.

---
*Developed by Rizki Tri Wahyudi*
