# LifeOS

**LifeOS** là hệ thống quản lý và tổ chức cuộc sống cá nhân, gia đình, các mối quan hệ, tri thức, tài chính và công việc trong một nền tảng thống nhất.

## 1. Mục tiêu dự án

- Tập trung thông tin quan trọng vào một nền tảng.
- Quản lý dữ liệu cá nhân và nhiều không gian làm việc chung.
- Liên kết thông tin giữa các lĩnh vực trong cuộc sống.
- Hỗ trợ lập kế hoạch, theo dõi tiến độ và phát triển bản thân.
- Có khả năng mở rộng và tích hợp AI trong tương lai.

## 2. Nguyên tắc thiết kế

- Ưu tiên quyền riêng tư và bảo mật dữ liệu.
- Giao diện tiếng Việt, dễ sử dụng.
- Hỗ trợ máy tính và điện thoại.
- Cấu trúc mô-đun, dễ mở rộng.
- AI không tự ý thay đổi dữ liệu quan trọng khi chưa được xác nhận.
- Các chức năng cốt lõi không phụ thuộc vào AI.

## 3. Công nghệ

### Đang sử dụng

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Node.js và npm
- Git và GitHub

### Dự kiến tích hợp

- Supabase: PostgreSQL, Authentication và Storage.
- Vercel: triển khai ứng dụng.
- AI API: trợ lý thông minh và tự động hóa.

## 4. Trạng thái dự án

**Giai đoạn hiện tại: GĐ1 — Application Foundation**

Đã hoàn thành:
- Khởi tạo repository và cấu trúc dự án.
- Thiết lập môi trường Next.js và TypeScript.
- Xây dựng giao diện nền tảng LifeOS.
- Xây dựng Sidebar tự động mở rộng và Dashboard.
- Thiết lập tài liệu quản lý dự án.

Đang triển khai:
- Hoàn thiện nền tảng giao diện và các chức năng cơ bản.
- Kiểm tra chất lượng và tính ổn định.
- Chuẩn bị cho các giai đoạn dữ liệu và phân quyền.

LifeOS hiện vẫn đang trong quá trình phát triển. Cơ sở dữ liệu, đăng nhập và chia sẻ dữ liệu chưa được tích hợp hoàn chỉnh.

## 5. Cài đặt và chạy dự án

Yêu cầu:
- Node.js
- npm
- Git

Clone repository:

    git clone https://github.com/chuongspeedmax-hub/LifeOS.git
    cd LifeOS

Cài đặt thư viện:

    npm install

Chạy môi trường phát triển:

    npm run dev

Mở trình duyệt tại:

    http://localhost:3000

Kiểm tra mã nguồn:

    npm run lint
    npm run build

## 6. Tài liệu dự án

| Tệp | Nội dung |
|---|---|
| PROJECT.md | Mô tả sản phẩm và yêu cầu |
| ROADMAP.md | Lộ trình phát triển |
| PROGRESS.md | Tiến độ thực hiện |
| DECISIONS.md | Các quyết định kiến trúc |
| TASKS.md | Danh sách công việc |
| AI_CONTEXT.md | Bối cảnh dành cho AI coding tools |
| CHANGELOG.md | Lịch sử thay đổi |

## 7. Nguyên tắc phát triển

- Không tự ý thay đổi các quyết định kiến trúc đã thống nhất.
- Không ghi đè hoặc xóa dữ liệu, mã nguồn quan trọng khi chưa được xác nhận.
- Kiểm tra từng chức năng trước khi chuyển sang bước tiếp theo.
- Cập nhật tài liệu tiến độ sau mỗi phiên làm việc.
- Không đưa API keys, mật khẩu hoặc thông tin bí mật lên GitHub.

---

**Project:** LifeOS
**Repository:** GitHub - LifeOS
**Status:** In Development
