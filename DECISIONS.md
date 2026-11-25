# LIFEOS — ARCHITECTURE DECISIONS

Tài liệu ghi lại các quyết định kiến trúc quan trọng của dự án.

## DEC-001: Mô hình Workspace

**Trạng thái:** Đã thống nhất

**Quyết định:**

- LifeOS sử dụng mô hình Workspace.
- Mỗi người có Personal Workspace riêng.
- Người dùng có thể tham gia nhiều Shared Workspace.
- Dữ liệu riêng tư không tự động chia sẻ.

**Lý do:**

- Phù hợp với quản lý cá nhân và cộng tác nhóm.
- Dễ mở rộng sang gia đình, bạn bè và tổ chức.

## DEC-002: Kiến trúc ứng dụng

**Trạng thái:** Định hướng

**Quyết định:**

- Sử dụng Modular Monolith.
- Không chia thành Microservices ở giai đoạn đầu.
- Mỗi phân hệ có cấu trúc riêng nhưng dùng chung nền tảng.

**Lý do:**

- Dễ phát triển và bảo trì.
- Phù hợp với dự án do một người bắt đầu xây dựng.

## DEC-003: Công nghệ Frontend

**Trạng thái:** Định hướng

**Quyết định:**

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.

**Lý do:**

- Hệ sinh thái phổ biến.
- Có khả năng mở rộng.
- Hỗ trợ xây dựng giao diện hiện đại.

## DEC-004: Backend và Database

**Trạng thái:** Định hướng

**Quyết định:**

- Sử dụng Supabase.
- PostgreSQL làm cơ sở dữ liệu.
- Supabase Auth cho xác thực.
- Supabase Storage cho lưu trữ tệp.
- Sử dụng Row Level Security (RLS).

**Lý do:**

- Tích hợp nhiều dịch vụ cần thiết.
- Giảm khối lượng xây dựng backend ban đầu.

## DEC-005: Quyền riêng tư

**Trạng thái:** Nguyên tắc bắt buộc

**Quyết định:**

- Mọi dữ liệu thuộc workspace phải gắn với `workspace_id`.
- Kiểm tra quyền truy cập ở phía máy chủ và cơ sở dữ liệu.
- Mặc định không chia sẻ dữ liệu cá nhân.
- Không đưa secret key vào mã nguồn.

## DEC-006: Hệ thống tùy chỉnh

**Trạng thái:** Định hướng

**Quyết định:**

- Cho phép tạo phân hệ, trang, thư mục, bảng và trường dữ liệu tùy chỉnh.
- Sử dụng metadata có kiểm soát.
- Không cho phép người dùng thực thi SQL hoặc mã tùy ý.

## DEC-007: AI Assistant

**Trạng thái:** Định hướng

**Quyết định:**

- AI là tính năng bổ trợ.
- Các chức năng cốt lõi vẫn phải hoạt động khi không có AI API.
- AI không tự ý thay đổi dữ liệu quan trọng khi chưa được xác nhận.

## DEC-008: Git và GitHub

**Trạng thái:** Định hướng

**Quyết định:**

- Sử dụng Git để quản lý phiên bản.
- Sử dụng GitHub làm nơi lưu trữ mã nguồn.
- Repository mặc định ở chế độ Private.
- Không lưu thông tin bí mật trong repository.

## Quy tắc

- Không tự ý thay đổi các quyết định đã thống nhất.
- Mỗi thay đổi kiến trúc quan trọng phải được ghi nhận.
- Ghi rõ lý do và ảnh hưởng của thay đổi.
