def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    if bmi < 18.5: return "Gầy"
    elif bmi < 24.9: return "Bình thường"
    elif bmi < 29.9: return "Thừa cân"
    else: return "Béo phì"

w = float(input("Nhập cân nặng (kg): "))
h = float(input("Nhập chiều cao (m): "))
print(f"Chỉ số BMI của bạn là: {calculate_bmi(w, h)}")
