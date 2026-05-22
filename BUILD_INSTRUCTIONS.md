# JANET WiFi APK Build Instructions

## Cara Build via GitHub Actions (Direkomendasikan)

### 1. Push ke GitHub
```bash
cd /root/janet-apk
git init
git add .
git commit -m "Initial JANET WiFi APK project"
git remote add origin https://github.com/USERNAME/janet-wifi-apk.git
git push -u origin main
```

### 2. Setup GitHub Secrets
Di GitHub repo → Settings → Secrets → New repository secret:

| Secret | Value |
|--------|-------|
| `KEYSTORE_BASE64` | isi dari file `/root/janet-apk/keystore_base64.txt` |
| `KEYSTORE_PASSWORD` | `janet141199` |
| `KEY_PASSWORD` | `janet141199` |

### 3. Download APK
- Buka tab **Actions** di GitHub → klik workflow run → download **janet-wifi-apk**
- ATAU: setiap push ke `main` otomatis buat Release dengan APK

---

## Cara Install APK di HP Android

1. Aktifkan "Install dari sumber tidak dikenal" di Pengaturan → Keamanan
2. Transfer file `janet-wifi.apk` ke HP via WA/email/USB
3. Buka file APK → Install
4. App **JANET WiFi** akan muncul di app drawer

**Catatan:** APK ini adalah TWA (Trusted Web Activity) — tampil fullscreen seperti app asli,
tidak ada address bar. Terhubung ke https://router.jahid.id

---

## Keystore Info (SIMPAN BAIK-BAIK!)
- File: `android.keystore`
- Password: `janet141199`
- Alias: `android`
- Fingerprint SHA-256: `14:0F:F1:F7:2D:0A:4B:00:A1:80:55:6E:32:25:D2:2B:B2:1C:47:5C:84:80:47:FF:AF:3C:B4:D3:42:39:5F:05`

JANGAN SAMPAI HILANG keystore ini — kalau update APK harus pakai keystore yang sama!
Backup keystore di tempat aman.
