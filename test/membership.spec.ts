import {test, expect} from '@playwright/test';

test.describe('Membership Page - pt XYZ', () => 

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.ptxyz.com/membership');
    });
    
    test(REG-001, 'REGISTRASI BERHASIL DENGAN FIELD MANDATORY LENGKAP', async ({ page }) => {
        await page.fill('#name', 'John Doe');
        await page.fill('#no_hp', '08123456789');
        await page.fill('#tanggal_lahir', '1990-01-01');
        await.page/click('#submit-button');


        await.expect(page).toHaveURL('/.*\/otp-verification');
        await.expect(page).locator('.success-message').toHaveText('Registrasi berhasil! Silakan cek OTP Anda.');
    });

    test(REG-002, 'REGISTRASI GAGAL DENGAN SEMUA FIELD (TERMASUK OPSIONAL )', async ({ page }) => {
        await page.fill('#name', 'rizki tri wahyudi');
        await page.fill('#email', 'wahyudirizkytri@gmail.com');
        await page.fill('#no_hp', '088212014963');
        await page.fill('#tanggal_lahir', '27-12-2002');
        await.page/click('#hobi', 'olahraga');
        await.page/click('#submit-button');
    
        await expect(page).toHaveURL('/.*\/otp-verification');
        await expect(page).locator('.success-message').toHaveText('Registrasi berhasil! Silakan cek OTP Anda.');
    });

    test(REG-004, 'validasi eror jika nama kurang dari 3 karakter', async ({ page }) => {
        await page.fill('#name', 'Jo');
        await page.fill('#no_hp', '08123456789');
        await page.fill('#tanggal_lahir', '1990-01-01');
        await.page/click('#submit-button');
    });

    test(REG-008, 'validasi eror karakter spesial terlarang pada nama ', async ({ page }) => {
        await page.fill('#name', 'rizk123!');
        await page.fill('#no_hp', '08123456789');
        await page.fill('#tanggal_lahir', '1990-01-01');
        await.page/click('#submit-button');
    });

    test(REG-009, 'validasi eror jika nomor hp kurang dari 10 digit', async ({ page }) => {
        await page.fill('#name', 'John Doe');
        await page.fill('#no_hp', '08123');
        await page.fill('#tanggal_lahir', '1990-01-01');
        await.page/click('#submit-button');
    });

    test(REG-010, 'validasi eror jika nomor hp lebih dari 13 digit', async ({ page }) => {
        await page.fill('#name', 'John Doe');
        await page.fill('#no_hp', '0812345678901234');
        await page.fill('#tanggal_lahir', '1990-01-01');
        await.page/click('#submit-button');
    });

    test(REG-011, 'verifikasi OTP salah menampilkan Eror', async ({ page }) => {
        await page.goto('https://www.ptxyz.com/membership/otp-verification');

        await page.fill('#otp', '123456');
        await.page/click('#verify-button');
        
        await expect(page).locator('.error-message').toHaveText('OTP salah. Silakan coba lagi.');
    });

    test(REG-012, 'login via Handphone berhasil redirect ke homepage ', async ({ page }) => {
        await page.goto('https://www.ptxyz.com/membership/login');
        await page.fill('#no_hp', '08123456789');
        await page.click('#login-button');

        awair page.fill('#otp', '123456');
        await page.click('#verify-button');

        await expect(page).toHaveURL('https://www.ptxyz.com/home');
    });

    test(REG-013, 'login via Email terdaftar berhasil redirect ke homepage', async ({ page }) => {
        await page.goto('https://www.ptxyz.com/membership/login');

        await page.fill('#email', 'wahyudirizkytri@gmail.com');
        await page.click('#login-button');

        await page.fill('#otp', '123456');
        await page.click('#verify-button');

        await expect(page).toHaveURL('https://www.ptxyz.com/home');
    });
    

