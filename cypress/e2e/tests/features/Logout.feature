Feature: Đăng xuất thông tin cá nhân

  Scenario: Đăng xuất tài khoản thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn button 'Menu'
    Then Màn hình hiển thị đầy đủ thông tin của 'Menu'
    When Người dùng chọn 'Đăng xuất'
    Then Tôi nhìn thấy trang Đăng nhập tài khoản

  Scenario: Đăng xuất tài khoản không thành công khi người dùng không click button "Đăng xuất"
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn button 'Menu'
    Then Màn hình hiển thị đầy đủ thông tin của 'Menu'
    When Người dùng không chọn 'Đăng xuất'