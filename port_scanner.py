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
