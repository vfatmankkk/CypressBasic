Feature: Đăng nhập VietID

  Scenario: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
    When Tôi nhập mật khẩu "Long1604@@"
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
    When Tôi nhấn nút 'Đăng nhập'
    Then Tôi nhìn thấy trang Profile

  Scenario: Đăng nhập không thành công với tài khoản không tồn tại
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "3113232"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi tài khoản không tồn tại "Số điện thoại không hợp lệ!"

  Scenario: Đăng nhập không thành công với tài khoản trống
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username ""
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi tài khoản trống "Vui lòng nhập email hoặc số điện thoại."

  Scenario: Đăng nhập không thành công khi nhập tài khoản có chứa ký tự đặc biệt
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "fdfsdf*/#@"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập tài khoản có chứa ký tự đặc biệt "Email không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với email thiếu ký tự "@"
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "longzzzbingmail.com"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với email thiếu ký tự '@' "Số điện thoại không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với email thiếu tên miền
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "@gmail.com"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với email thiếu tên miền "Email không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với email không có dấu chấm
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "long@gmailcom"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với email không có dấu chấm "Email không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với số điện thoại thiếu đầu
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "55662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại thiếu đầu "Số điện thoại không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với số điện thoại thiếu cuối
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "08556624"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại thiếu cuối "Số điện thoại không hợp lệ!"

  Scenario: Đăng nhập không thành công khi nhập với số điện thoại 12 số
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662554555"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại 12 số "Số điện thoại không hợp lệ!"

  Scenario: Đăng nhập thành công với mật khẩu chứa ký tự đặc biệt
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
    When Tôi nhập mật khẩu "Long1604@@"
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
    When Tôi nhấn nút 'Đăng nhập'
    Then Tôi nhìn thấy trang Profile

  Scenario: Đăng nhập không thành công với mật khẩu trống
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
    When Tôi nhập mật khẩu ""
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
    When Tôi nhấn nút 'Đăng nhập'
    Then Tôi nhìn thấy thông báo với lỗi mật khẩu trống "Vui lòng nhập mật khẩu."

  Scenario: Đăng nhập không thành công với mật khẩu sai
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
    When Tôi nhập mật khẩu "Long-+-++*-+"
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
    When Tôi nhấn nút 'Đăng nhập'
    Then Tôi nhìn thấy thông báo với lỗi mật khẩu sai "Mật khẩu không đúng."

  Scenario: Đăng nhập không thành công với mật khẩu không tồn tại
    Given Tôi đã mở trang đăng nhập VietID
    When Tôi nhập username "0855662472"
    Then Thông tin vừa nhập được hiển thị vào textbox username
    When Tôi nhấn nút 'Tiếp tục'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
    When Tôi nhập mật khẩu "-+-++*-+"
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
    When Tôi nhấn nút 'Đăng nhập'
    Then Tôi nhìn thấy thông báo với lỗi mật khẩu sai "Mật khẩu không đúng."
