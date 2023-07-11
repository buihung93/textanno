Hướng Dẫn cài đặt:

File texts_english.xml trong thư mục Anno_text là file XML gốc, không được đụng vào
Tổng quan các bước:
1. Xuất chữ và GUID từ trong file texts_english.xml ra file text_exported.csv trong thư mục output
2. Mở file CSV bằng excel hoặc Google Sheet, dịch vào cột Text. Tuyệt đối không được xóa cột GUID
3. Save hoặc export nội dugn dịch ra CSV đúng theo định dang lúc trước khi dịch. Nhét file đó vào thư mục input
4. Convert file CSV có nội dung đã dịch sang file text_translated.xml
5. Vào file text_translated.xml bằng notepad++, xóa dòng <?xml version="1.0" encoding="UTF-8" standalone="yes"?> 


Thực hiện:
Bước 1: Cài Node.js
 - Vào: https://nodejs.org/en
 - Tải bản LTS
 - Cài đặt next next finish

Bước 2: Cài Dependency:
 - Mở CMD tại thư mục này
 - Gõ lệnh: "npm install"

Bước 3: Export text trong XML ra CSV
 - tại CMD, gõ lệnh "npm run export"
 - Đợi thông báo thành công. Nếu successfully thì sẽ có file text_exported.csv trong thư mục output
 - CHỈ ĐƯỢC PHÉP DỊCH CÁC CHỮ TIẾNG ANH. CÁC KÝ TỰ ĐẶC BIỆT NHƯ <b> </b> CẤM TUYỆT ĐỐI KHÔNG ĐƯỢC XÓA

Bước 4: Import CSV vào XML
 - Vứt file text_translated.csv vào thư mục input (cần đúng tên)
 - tại CMD, gõ lệnh "npm run import"
 - Đợi thông báo thành công. Nếu successfully thì sẽ có file text_translated.xml trong thư mục output
 - Vào file text_translated.xml bằng notepad++, xóa dòng <?xml version="1.0" encoding="UTF-8" standalone="yes"?> 
