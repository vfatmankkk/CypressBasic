Feature: Cập nhật mật khẩu

  Scenario: Cập nhật mật khẩu thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật mật khẩu thành công'

  Scenario: Cập nhật mật khẩu không thành công khi nhập mật khẩu cũ sai
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604"
    When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu cũ sai "Mật khẩu không đúng."

  Scenario: Cập nhật mật khẩu không thành công khi nhập mật khẩu mới và xác nhận mật khẩu với hoa thường số ký tự đặc biệt và độ dài 7 ký tự
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = "Long123"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long123"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới với độ dài 7 ký tự "Mật khẩu không hợp lệ (từ 8-32 ký tự)."

  # Scenario: Cập nhật mật khẩu thành công khi nhập mật khẩu mới và xác nhận mật khẩu với hoa thường số ký tự đặc biệt và độ dài 8 ký tự
  #   Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
  #   Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
  #   When Người dùng chọn tùy chọn 'Cập nhật'
  #   Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
  #   When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
  #   When Tôi nhập mật khẩu mới với mật khẩu = "Long160@"
  #   When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long160@"
  #   When Tôi nhấn nút 'THAY ĐỔI'
  #   Then Tôi nhận được alert thông báo 'Cập nhật mật khẩu thành công'



  # Scenario: Cập nhật mật khẩu thành công khi nhập mật khẩu mới và xác nhận mật khẩu với hoa thường số ký tự đặc biệt và độ dài 32 ký tự
  #   Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long160@"
  #   Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
  #   When Người dùng chọn tùy chọn 'Cập nhật'
  #   Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
  #   When Tôi nhập mật khẩu cũ với mật khẩu = "Long160@"
  #   When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@@@@@@@@@@@@@@@@@@@@@@@"
  #   When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@@@@@@@@@@@@@@@@@@@@@@@"
  #   When Tôi nhấn nút 'THAY ĐỔI'
  #   Then Tôi nhận được alert thông báo 'Cập nhật mật khẩu thành công'


  Scenario: Cập nhật mật khẩu không thành công khi nhập mật khẩu mới và xác nhận mật khẩu với hoa thường số ký tự đặc biệt và độ dài 33 ký tự
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@@@@@@@@@@@@@@@@@@@@@@@#"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@@@@@@@@@@@@@@@@@@@@@@@#"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới với độ dài 33 ký tự "Mật khẩu không hợp lệ (từ 8-32 ký tự)."

 Scenario: Cập nhật mật khẩu không thành công khi nhập mật khẩu mới và nhập lại mật khẩu mới không khớp
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = "Lon"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "L"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi thấy thông báo với lỗi khi nhập mật khẩu mới và nhập lại mật khẩu mới không khớp "Mật khẩu xác nhận không khớp"

  Scenario: Cập nhật mật khẩu không thành công khi không nhập mật khẩu cũ
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = ""
    When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu cũ "Mật khẩu không đúng"

  Scenario: Cập nhật mật khẩu không thành công khi không nhập mật khẩu mới
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = ""
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu mới "Mật khẩu xác nhận không khớp."

  Scenario: Cập nhật mật khẩu không thành công khi không nhập mật khẩu mới và nhập lại xác nhận mật khẩu mới
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = ""
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu mới và nhập lại xác nhận mật khẩu mới "Mật khẩu xác nhận không khớp."

  Scenario: Cập nhật mật khẩu không thành công khi nhập mật khẩu mới và không nhập lại xác nhận mật khẩu mới
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhập mật khẩu cũ với mật khẩu = "Long1604@@"
    When Tôi nhập mật khẩu mới với mật khẩu = "Long1604@@"
    When Tôi nhập xác nhận mật khẩu mới với mật khẩu = ""
    When Tôi nhấn nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới và không nhập lại xác nhận mật khẩu mới "Mật khẩu xác nhận không khớp."

  Scenario: Hủy bỏ Cập nhật mật khẩu thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Cập nhật'
    Then Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu
    When Tôi nhấn nút 'HỦY BỎ'
    Then Tôi quay lại trang Profile

  

  
