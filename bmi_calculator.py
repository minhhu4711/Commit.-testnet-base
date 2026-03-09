def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    if bmi < 18.5: return "Gầy"
    elif bmi < 24.9: return "Bình thường"
    elif bmi < 29.9: return "Thừa cân"
    else: return "Béo phì"

w = float(input("Nhập cân nặng (kg): "))
h = float(input("Nhập chiều cao (m): "))
print(f"Chỉ số BMI của bạn là: {calculate_bmi(w, h)}")
# 1. Định nghĩa hàm tính toán BMI (Body Mass Index)
# weight: Cân nặng (kg), height: Chiều cao (m)
def calculate_bmi(weight, height):
    # Áp dụng công thức: BMI = Cân nặng / (Chiều cao bình phương)
    # Trong Python, toán tử ** dùng để tính lũy thừa (ví dụ: height ** 2 là height bình phương)
    bmi = weight / (height ** 2)
# 2. Phân loại tình trạng cơ thể dựa trên kết quả BMI theo tiêu chuẩn chung
    if bmi < 18.5:
        return "Gầy"
    elif bmi < 24.9:
        return "Bình thường"
    elif bmi < 29.9:
        return "Thừa cân"
    else:
        # Nếu BMI từ 29.9 trở lên
        return "Béo phì"
