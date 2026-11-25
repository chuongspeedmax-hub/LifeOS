# LIFEOS — PRODUCT SPECIFICATION

## 1. Tổng quan

LifeOS là ứng dụng quản lý cuộc sống cá nhân và các không gian làm việc chung trên một nền tảng thống nhất.

Mục tiêu là giúp người dùng tổ chức, lưu trữ, liên kết và quản lý thông tin trong cuộc sống một cách khoa học.

## 2. Đối tượng sử dụng

- Cá nhân.
- Gia đình.
- Nhóm bạn bè.
- Nhóm làm việc.
- Tổ chức nhỏ.

## 3. Mô hình hoạt động

LifeOS sử dụng mô hình kết hợp:

- **Personal Workspace:** không gian riêng của mỗi người.
- **Shared Workspace:** không gian chung có nhiều thành viên.

Một người có thể sở hữu không gian riêng và tham gia nhiều không gian chung.

Dữ liệu riêng tư không được tự động chia sẻ sang không gian chung.

## 4. Các phân hệ chính

### 4.1. Dashboard

- Tổng quan hoạt động.
- Công việc cần làm.
- Kế hoạch sắp tới.
- Thông tin quan trọng.

### 4.2. Personal

- Hồ sơ cá nhân.
- Mục tiêu.
- Thói quen.
- Nhật ký.
- Sức khỏe và phát triển bản thân.

### 4.3. Knowledge

- Ghi chú.
- Tài liệu.
- Kiến thức.
- Liên kết hai chiều.
- Knowledge Graph.
- Mindmap.

### 4.4. Family

- Thành viên gia đình.
- Công việc chung.
- Tài liệu gia đình.
- Kế hoạch và sự kiện.

### 4.5. Relationships

- Bạn bè.
- Người quen.
- Thông tin liên hệ.
- Lịch sử tương tác.

### 4.6. Finance & Assets

- Thu nhập.
- Chi tiêu.
- Ngân sách.
- Tài sản.
- Công nợ.
- Báo cáo tài chính.

### 4.7. Plans & Work

- Công việc.
- Dự án.
- Mục tiêu.
- Lịch trình.
- Theo dõi tiến độ.

## 5. Khả năng tùy chỉnh

Người dùng có thể:

- Tạo phân hệ riêng.
- Tạo thư mục và trang.
- Tạo bảng dữ liệu.
- Tạo trường dữ liệu tùy chỉnh.
- Tạo danh mục và biểu mẫu.
- Tạo liên kết giữa các dữ liệu.
- Tùy chỉnh cách hiển thị thông tin.

Không cho phép người dùng tự tạo SQL hoặc thực thi mã tùy ý.

## 6. Thành viên và phân quyền

- Một workspace có thể có nhiều thành viên.
- Thành viên được xem và chỉnh sửa dữ liệu chung theo chính sách workspace.
- Dữ liệu cá nhân phải được bảo vệ.
- Quyền truy cập phải được kiểm tra ở máy chủ và cơ sở dữ liệu.

## 7. AI Assistant

AI có thể hỗ trợ:

- Tìm kiếm thông tin.
- Tóm tắt dữ liệu.
- Phân tích và đề xuất.
- Hỗ trợ lập kế hoạch.
- Tự động hóa các tác vụ được cho phép.

AI không được tự ý thay đổi dữ liệu quan trọng nếu chưa có xác nhận.

Ứng dụng phải hoạt động được khi không cấu hình AI API.

## 8. Giao diện

- Ngôn ngữ mặc định: Tiếng Việt.
- Thiết kế ưu tiên máy tính.
- Tương thích điện thoại và máy tính bảng.
- Sidebar điều hướng.
- Tìm kiếm toàn hệ thống.
- Tạo dữ liệu nhanh.
- Hỗ trợ Dark Mode và Light Mode.

## 9. Bảo mật và quyền riêng tư

- Dữ liệu riêng tư mặc định không được chia sẻ.
- Mọi dữ liệu thuộc workspace phải gắn với `workspace_id`.
- Kiểm tra quyền truy cập ở phía máy chủ.
- Sử dụng Row Level Security (RLS) của Supabase.
- Không đưa khóa bí mật vào mã nguồn công khai.
- Không cho phép thành viên truy cập dữ liệu ngoài quyền hạn.

## 10. Định hướng phát triển

Phát triển theo từng giai đoạn, bắt đầu từ phiên bản MVP.

Ưu tiên:

1. Nền tảng ổn định.
2. Bảo mật dữ liệu.
3. Trải nghiệm sử dụng.
4. Khả năng mở rộng.
5. Tích hợp AI sau khi các chức năng cốt lõi hoạt động tốt.
