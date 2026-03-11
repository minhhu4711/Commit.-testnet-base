import socket

def scan_port(ip, port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(1)
    if s.connect_ex((ip, port)) == 0:
        print(f"Cổng {port} đang MỞ")
    else:
        print(f"Cổng {port} đang ĐÓNG")
    s.close()

# scan_port("127.0.0.1", 80)
import socket  # Import thư viện socket để hỗ trợ các giao thức kết nối mạng

def scan_port(ip, port):
    # Khởi tạo một đối tượng socket
    # socket.AF_INET: Chỉ định sử dụng địa chỉ IPv4
    # socket.SOCK_STREAM: Chỉ định sử dụng giao thức TCP (hướng kết nối)
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
 # Thiết lập thời gian chờ (timeout) là 1 giây
    # Điều này giúp chương trình không bị treo quá lâu nếu cổng không phản hồi
    s.settimeout(1)
    
    # Sử dụng phương thức connect_ex để cố gắng kết nối tới IP và Port
    # connect_ex trả về mã lỗi thay vì ném ra một ngoại lệ (Exception)
    # Nếu kết quả trả về là 0, nghĩa là kết nối thành công (Cổng đang MỞ)
    if s.connect_ex((ip, port)) == 0:
        print(f"Cổng {port} đang MỞ")
    else:
        # Nếu trả về mã lỗi khác 0, thường là do cổng bị đóng hoặc bị tường lửa chặn
        print(f"Cổng {port} đang ĐÓNG")
    
    # Luôn đóng socket sau khi sử dụng để giải phóng tài nguyên hệ thống
    s.close()

