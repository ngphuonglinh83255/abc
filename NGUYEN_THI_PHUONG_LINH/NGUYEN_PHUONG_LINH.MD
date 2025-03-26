# Khái niệm và lịch sử của Linux
## 1. Linux là gì?
Linux là một hệ điều hành mã nguồn mở, được phát triển dựa trên nhân Linux (Linux Kernel). Đây là hệ điều hành có tính linh hoạt, bảo mật cao, và được sử dụng rộng rãi trên nhiều nền tảng khác nhau, từ máy chủ, thiết bị nhúng đến điện thoại di động.

### 1.1. Đặc điểm của Linux
- **Mã nguồn mở**: Bất kỳ ai cũng có thể xem, chỉnh sửa và phân phối lại mã nguồn của Linux.
- **Tính bảo mật cao**: Linux ít bị ảnh hưởng bởi virus và phần mềm độc hại hơn so với các hệ điều hành khác.
- **Hỗ trợ đa người dùng, đa nhiệm**: Cho phép nhiều người dùng truy cập cùng lúc và thực hiện nhiều tiến trình song song.
- **Tùy biến linh hoạt**: Người dùng có thể chọn giao diện, bộ công cụ và các thành phần hệ thống phù hợp với nhu cầu.

## 2. Lịch sử của Linux
- **1991**: Linus Torvalds, một sinh viên người Phần Lan, phát triển nhân Linux đầu tiên như một dự án cá nhân.
- **1992**: Linux trở thành mã nguồn mở theo giấy phép GPL, cho phép cộng đồng tham gia phát triển.
- **2000s**: Linux được sử dụng rộng rãi trong doanh nghiệp, đặc biệt là trên máy chủ.
- **Hiện nay**: Linux được triển khai trên hầu hết các siêu máy tính, hệ thống nhúng, và cả trên thiết bị di động (Android sử dụng nhân Linux).

---

# 3. bản phối Linux ubuntu 
### 3.1. Ubuntu là gì?
Ubuntu là một bản phân phối Linux phổ biến, được phát triển bởi Canonical Ltd. Ubuntu được thiết kế với mục tiêu dễ sử dụng, ổn định và bảo mật cao. Đây là một trong những lựa chọn hàng đầu cho cả người dùng cá nhân và doanh nghiệp.

**Các phiên bản phổ biến của Ubuntu:**
- **Ubuntu Desktop**: Dành cho máy tính cá nhân, có giao diện đồ họa GNOME.
- **Ubuntu Server**: Dành cho máy chủ, tối ưu hóa hiệu suất và bảo mật.
- **Ubuntu Core**: Phiên bản nhẹ, được sử dụng trong IoT và các hệ thống nhúng.

**Ưu điểm của Ubuntu:**
- Hỗ trợ dài hạn (LTS – Long Term Support) với thời gian cập nhật lên đến 5 năm.
- Cộng đồng lớn, có nhiều tài nguyên hỗ trợ.
- Dễ dàng cài đặt và cập nhật phần mềm.
- Tương thích tốt với phần cứng và môi trường ảo hóa.

**Nhược điểm của Ubuntu:**
- Một số phiên bản mới có thể gặp lỗi không ổn định.
- Yêu cầu tài nguyên hệ thống cao hơn so với các bản phân phối nhẹ như Debian hoặc Arch Linux.
- Một số phần mềm thương mại không hỗ trợ Ubuntu.
- Phiên bản máy chủ có thể yêu cầu cấu hình dòng lệnh nhiều hơn so với các hệ điều hành khác.

**nên chọn bản phối này vì **:
- **Dễ sử dụng**: Ubuntu có giao diện thân thiện, dễ cài đặt và sử dụng, đặc biệt phù hợp với người mới bắt đầu.
- **Hỗ trợ mạnh mẽ**: Có cộng đồng lớn và nhiều tài liệu hướng dẫn.
- **Tính ổn định cao**: Ubuntu là một bản phân phối phổ biến và có chu kỳ cập nhật lâu dài.
- **Kho phần mềm phong phú**: Hỗ trợ cài đặt nhiều phần mềm thông qua APT package manager.
- **Bảo mật tốt**: Ubuntu thường xuyên cập nhật bản vá bảo mật.
- **Tích hợp tốt với môi trường phát triển**: Hỗ trợ nhiều công cụ lập trình như Python, Node.js, Docker, v.v.

---

## 4. Cài đặt Ubuntu trên VMware Workstation
1. **Tải về Ubuntu ISO** từ trang chủ: [https://ubuntu.com/download]
2. **Cài đặt VMware Workstation**: Tải và cài đặt VMware Workstation .
3. **Tạo máy ảo mới**:
   - Mở VMware Workstation và chọn "Create a New Virtual Machine".
   - Chọn "Typical (recommended)" và nhấn "Next".
   - Chọn "Installer disc image file (ISO)" và duyệt đến file ISO của Ubuntu.
   - Cấu hình tên máy ảo, vị trí lưu trữ, dung lượng RAM (tối thiểu 2GB, khuyến nghị 4GB trở lên) và số lõi CPU.
   - Tạo ổ cứng ảo với dung lượng tối thiểu 20GB.
4. **Cài đặt Ubuntu**:
   - Khởi động máy ảo và làm theo hướng dẫn trên màn hình.
   - Chọn "Install Ubuntu", thiết lập múi giờ, tài khoản và phân vùng ổ đĩa nếu cần.
   - Chờ quá trình cài đặt hoàn tất, khởi động lại máy ảo và đăng nhập.


# 4. Tổng hợp kiến thức, ví dụ đã thực hành về các khái niệm, giao thức, công cụ mạng cơ bản

## 4.1. Các khái niệm
- **IP Address (Địa chỉ IP)**: Là địa chỉ định danh của một thiết bị trong mạng.
- **Subnet Mask (Mặt nạ mạng con)**: Xác định phần mạng và phần host trong địa chỉ IP.
- **MAC Address (Địa chỉ MAC)**: Địa chỉ vật lý của card mạng.
- **Gateway (Cổng mặc định)**: Điểm truy cập trung gian kết nối mạng nội bộ với mạng bên ngoài.
- **DNS (Domain Name System)**: Hệ thống phân giải tên miền thành địa chỉ IP.
- **DHCP (Dynamic Host Configuration Protocol)**: Giao thức cấp phát địa chỉ IP tự động.
- **NAT (Network Address Translation)**: Cơ chế chuyển đổi địa chỉ IP riêng thành địa chỉ công cộng.
## 4.2. Các Thành Phần Cơ Bản của Mạng Máy Tính

### **4.2.1. Thiết bị đầu cuối (End Devices)**  
Đây là các thiết bị tham gia vào mạng, bao gồm:  
- **Máy tính cá nhân (PC, Laptop):** Gửi, nhận dữ liệu, xử lý thông tin.  
- **Điện thoại thông minh (Smartphone, Tablet):** Kết nối internet qua Wi-Fi hoặc dữ liệu di động.  
- **Máy chủ (Server):** Lưu trữ, xử lý dữ liệu, cung cấp dịch vụ cho các thiết bị khác.  
- **Máy in, Camera IP, TV thông minh, IoT Devices:** Các thiết bị thông minh có thể kết nối và giao tiếp với mạng.  

### **4.2.2. Thiết bị mạng (Networking Devices)**  
- **Router:** Định tuyến dữ liệu giữa các mạng khác nhau.  
- **Switch:** Kết nối các thiết bị trong mạng LAN.  
- **Hub:** Truyền dữ liệu đến tất cả thiết bị trong mạng.  
- **Access Point (AP):** Tạo điểm truy cập Wi-Fi.  
- **Modem:** Chuyển đổi tín hiệu từ nhà cung cấp dịch vụ internet (ISP).  

### **4.2.3. Phương tiện truyền dẫn (Transmission Media)**  
- **Dây cáp mạng:** Cáp xoắn đôi, cáp đồng trục, cáp quang.  
- **Sóng vô tuyến (Wireless):** Wi-Fi, Bluetooth, NFC, mạng di động (4G, 5G).  

## 4.3. Các Loại Mạng Máy Tính

### **4.3.1. Mạng LAN (Local Area Network) - Mạng cục bộ**  
- Kết nối các thiết bị trong một khu vực nhỏ.  
- Tốc độ cao, chi phí thấp.  

### **4.3.2. Mạng WAN (Wide Area Network) - Mạng diện rộng**  
- Kết nối nhiều mạng LAN lại với nhau, phạm vi rộng.  
- Internet là ví dụ lớn nhất.  

### **4.3.3. Mạng MAN (Metropolitan Area Network) - Mạng đô thị**  
- Phủ một thành phố hoặc khu vực.  

### **4.3.4. Mạng PAN (Personal Area Network) - Mạng cá nhân**  
- Kết nối thiết bị cá nhân qua Bluetooth, NFC.  

## 4.4. Các giao thức mạng và vai trò
- **TCP/IP**:
  - *Vai trò*: Đảm bảo dữ liệu được truyền đi một cách đáng tin cậy giữa các thiết bị trong mạng.
  - *Ưu điểm*: Đảm bảo dữ liệu được truyền đầy đủ và theo đúng thứ tự.
  - *Nhược điểm*: Hiệu suất chậm hơn so với giao thức không kết nối như UDP.
- **HTTP/HTTPS**:
  - *Vai trò*: Giao thức truyền tải dữ liệu trên web, giúp người dùng truy cập trang web.
  - *Ưu điểm*: Hỗ trợ truyền tải dữ liệu trên web, HTTPS cung cấp bảo mật cao.
  - *Nhược điểm*: HTTP không mã hóa, dễ bị tấn công; HTTPS yêu cầu chứng chỉ số.
- **FTP/SFTP**:
  - *Vai trò*: Hỗ trợ truyền tải tệp giữa máy chủ và máy khách.
  - *Ưu điểm*: Dễ dàng truyền tệp giữa máy chủ và máy khách.
  - *Nhược điểm*: FTP không mã hóa, có nguy cơ bảo mật; SFTP bảo mật hơn nhưng chậm hơn.
- **SSH**:
  - *Vai trò*: Cung cấp kết nối từ xa an toàn cho quản trị hệ thống.
  - *Ưu điểm*: Cung cấp kết nối từ xa an toàn.
  - *Nhược điểm*: Yêu cầu thiết lập khóa bảo mật, có thể bị tấn công brute-force.
- **UDP**:
  - *Vai trò*: Cung cấp truyền dữ liệu nhanh, thường dùng cho streaming và VoIP.
  - *Ưu điểm*: Truyền tải nhanh, không có độ trễ do kiểm tra lỗi.
  - *Nhược điểm*: Không đảm bảo dữ liệu đến đích nguyên vẹn hoặc đúng thứ tự.

## 4.5. Các công cụ mạng
### 1. **ping**: Kiểm tra kết nối giữa hai thiết bị.
```sh
ping google.com
```
### 2. **ifconfig/ip a**: Kiểm tra thông tin mạng.
```sh
ip a
```
### 3. **traceroute**: Kiểm tra đường đi của gói tin.
```sh
traceroute google.com
```
### 4. **netstat**: Kiểm tra các kết nối mạng đang hoạt động.
```sh
netstat -tulnp
```
### 5. **nslookup**: Kiểm tra thông tin DNS của một tên miền.
```sh
nslookup google.com
```
### 6. **curl**: Kiểm tra kết nối HTTP/HTTPS.
```sh
curl -I https://google.com
```
### 7. **wget**: Tải xuống tệp từ Internet.
```sh
wget https://example.com/file.zip
```


## 🔹 **Git và GitHub**
### 📂 **Các thao tác Git đã thực hành**
- **Khởi tạo Repository**
  ```bash
  git init
  ```
- **Thêm file vào staging area**
  ```bash
  git add .
  ```
- **Commit thay đổi**
  ```bash
  git commit -m "Initial commit"
  ```
- **Liên kết remote repository**
  ```bash
  git remote add origin <URL>
  ```
- **Push code lên GitHub**
  ```bash
  git push origin main
  ```
- **Tạo nhánh mới**
  ```bash
  git branch feature-branch
  ```
- **Chuyển sang nhánh mới**
  ```bash
  git checkout feature-branch
  ```
- **Merge nhánh vào main**
  ```bash
  git merge feature-branch
  ```
- **Kiểm tra trạng thái repository**
  ```bash
  git status
  ```
- **Xem lịch sử commit**
  ```bash
  git log --oneline
  ```
- **Xóa một nhánh cục bộ**
  ```bash
  git branch -d feature-branch
  ```
- **Xóa một nhánh trên remote**
  ```bash
  git push origin --delete feature-branch
  ```
- **Làm việc với stash (lưu tạm thời thay đổi)**
  ```bash
  git stash
  git stash list
  git stash pop
  ```