# HƯỚNG DẪN DEPLOY — 3 BƯỚC

## BƯỚC 1 — Cài Google Apps Script (10 phút)

1. Mở Google Sheet: https://docs.google.com/spreadsheets/d/1vKakNe1dBAradliHUqBr3uRtF_Sy-tF3vX64Katu3EI
2. Vào menu: Extensions → Apps Script
3. Xoá hết code cũ trong editor
4. Copy toàn bộ nội dung file GOOGLE_APPS_SCRIPT.js → Paste vào
5. Nhấn Save (Ctrl+S)
6. Nhấn Deploy → New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
7. Nhấn Deploy → Copy URL vừa tạo (dạng: https://script.google.com/macros/s/ABC.../exec)
8. **Lưu URL này lại** — cần dùng ở Bước 3

---

## BƯỚC 2 — Upload lên GitHub (5 phút)

1. Vào github.com → đăng ký/đăng nhập bằng Google
2. Nhấn "+" → New repository
   - Name: bang-tinh-nuoi-con
   - Public
   - Nhấn Create repository
3. Kéo thả 4 file vào trang GitHub:
   - index.html
   - vercel.json
   - Bang_tinh_chi_phi_nuoi_con.xlsx
   - Tạo folder api/ → upload api/submit.js
4. Nhấn Commit changes

---

## BƯỚC 3 — Deploy Vercel + thêm Apps Script URL (5 phút)

1. Vào vercel.com → Continue with GitHub
2. Import repository bang-tinh-nuoi-con
3. Trước khi Deploy → vào Environment Variables:
   - Name: APPS_SCRIPT_URL
   - Value: [URL từ Bước 1]
4. Nhấn Deploy
5. Vercel sẽ tự tạo link dạng: bang-tinh-nuoi-con.vercel.app

---

## KIỂM TRA SAU KHI DEPLOY

1. Mở link Vercel
2. Điền form test → nhấn submit
3. Kiểm tra Google Sheet — phải thấy dòng mới
4. Nút tải Excel phải hiện ra ngay sau khi submit

---

## CẦN HỖ TRỢ?

Nhắn Zalo 0886 614 286 hoặc paste lỗi vào chat để được hỗ trợ tiếp.
