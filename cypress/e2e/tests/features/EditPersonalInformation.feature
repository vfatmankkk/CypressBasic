Feature: Chỉnh sửa thông tin cá nhân

  @smoke
  Scenario: Kiểm tra chỉnh sửa khi nhập giá trị hợp lệ vào form thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname        | sex | dateofbirth | address | job       |
      | Nguyễn Đức Long | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra khi để trống tất cả các trường trong form
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job |
      |          |     |             |         |     |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi để trống tất cả các trường trong form "Vui lòng nhập đủ thông tin."

  Scenario: Kiểm tra khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 3 ký tự là chữ hoa và chữ thường
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abc      | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 3 ký tự là chữ hoa và chữ thường "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉnh sửa họ tên của người dùng thành công khi nhập vào trường với 4 ký tự là chữ hoa và chữ thường
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abcc     | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra khi chỉnh sửa họ tên của người dùng thành công khi nhập vào trường với 30 ký tự là chữ hoa và chữ thường
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname                       | sex | dateofbirth | address | job       |
      | Abcccccccccccccccccccccccccccc | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra khi chỉnh sửa họ tên của người dùng thành công khi nhập vào trường với 50 ký tự là chữ hoa và chữ thường
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname                                           | sex | dateofbirth | address | job       |
      | Abcccccccccccccccccccccccccccccccccccccccccccccccc | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 51 ký tự là chữ hoa và chữ thường
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname                                            | sex | dateofbirth | address | job       |
      | Abccccccccccccccccccccccccccccccccccccccccccccccccc | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 51 ký tự là chữ hoa và chữ thường "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra chỉnh sửa họ tên của người dùng không thành công khi nhập ký tự đặc biệt vào trường họ tên
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname       | sex | dateofbirth | address | job       |
      | Abcccccc*/*/-* | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi khi nhập ký tự đặc biệt vào trường họ tên "Họ tên không hợp lệ (không có ký tự đặc biệt)."

  Scenario: Kiểm tra chỉnh sửa họ tên của người dùng không thành công khi để trống trường họ tên
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      |          | Nam |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi khi để trống trường họ tên "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉ nhập họ tên và bấm 'THAY ĐỔI'
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname    | sex | dateofbirth | address | job |
      | Nguyễn Long |     |             |         |     |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉ nhập họ tên "Vui lòng nhập đủ thông tin."
    
  Scenario: Kiểm tra khi chỉnh sửa giới tính của người dùng thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abcc     | Nữ  |  16-04-2001 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra khi chỉnh sửa ngày sinh của người dùng thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abcc     | Nữ  |  16-05-2021 | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra chỉnh sửa ngày sinh của người dùng không thành công khi để trống trường ngày sinh
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abcc     | Nam |             | Hà Nội  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi khi để trống trường ngày sinh "Vui lòng nhập đủ thông tin."

  Scenario: Kiểm tra khi chỉ nhập ngày sinh và bấm 'THAY ĐỔI'
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname    | sex | dateofbirth | address | job |
      |             |     | 16-05-2021  |         |     |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉ nhập ngày sinh "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉnh sửa địa chỉ của người dùng thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abcc     | Nữ  |  16-05-2021 | Hà Nam  | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra chỉnh sửa địa chỉ của người dùng không thành công khi để trống trường địa chỉ
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abc      | Nam |  16-04-2001 |         | Sinh viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi khi để trống trường địa chỉ "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉ nhập địa chỉ và bấm 'THAY ĐỔI'
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname    | sex | dateofbirth | address | job |
      |             |     |             | Hà Nam  |     |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉ nhập địa chỉ "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉnh sửa nghề nghiệp của người dùng thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job        |
      | Abcc     | Nữ  |  16-05-2021 | Hà Nam  | Giảng viên |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'

  Scenario: Kiểm tra chỉnh sửa nghề nghiệp của người dùng không thành công khi để trống trường nghề nghiệp
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname | sex | dateofbirth | address | job       |
      | Abc      | Nam |  16-04-2001 | Hà Nội  |           |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi khi để trống trường nghề nghiệp "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Kiểm tra khi chỉ nhập nghề nghiệp và bấm 'THAY ĐỔI'
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Nhập thông tin hợp lệ vào form
      | fullname    | sex | dateofbirth | address | job           |
      |             |     |             |         | Giảng viên    |
    When Tôi bấm nút 'THAY ĐỔI'
    Then Tôi nhìn thấy thông báo với lỗi khi chỉ nhập nghề nghiệp "Họ tên không hợp lệ (từ 4-50 ký tự)."

  Scenario: Hủy bỏ Chỉnh sửa thông tin người dùng thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Chỉnh sửa'
    Then Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin
    When Tôi nhấn nút 'HỦY BỎ'
    Then Tôi quay lại trang Profile
