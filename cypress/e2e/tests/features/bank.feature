Feature: Bank Manager Login

  Scenario: Thêm khách hàng mới thành công
    Given Truy cập vào màn hình trang chủ
    When Tôi nhấp chuột vào button "Bank Manager Login"
    Then Hiển thị ra màn hình "Bank Manager Login"
    When Tôi nhấp chuột vào "Add Customer"
    Then Hiển thị ra màn hình "Add Customer"
    When Nhập đầy đủ thông tin vào Form
    Then Thông tin được hiện đầy đủ trong Form
    When Tôi nhấp chuột vào button "Add Customer"
    Then Kiểm tra thêm mới khách hàng thành công

  Scenario: Thêm mới khách hàng và tạo tài khoản mới
    Given Truy cập trang login
    When Tôi thêm tài khoản có fist name là "Hà" và last name "Nguyen"
    Then Kiểm tra tài khoàn được thêm thành công
    When Tôi mở một tài khoản 1000 dollar
    Then tôi kiểm tra tài khoản đã được tạo thành công
    When Tôi Kiểm tra thông tin khách hàng bằng cách tìm kiếm tên "nguyen ha"
    Then Thông tin khác hàng được hiện thị đúng
    When tôi xoá tài khoản khách hàng
    Then Tôi kiểm tra tài khoản khách hàng đã được xoá thành công

  Scenario: Thêm mới khách hàng và tạo tài khoản mới
    Given Truy cập trang login
    When Tôi thêm tài khoản có fist name là "<firstName>" và last name "<lastName>"
    Then Kiểm tra tài khoàn được thêm thành công
    Examples:
      | firstName | lastName | Currency |
      | tho       | nguyen   |     2000 |
      | joe       | david    |      100 |

  Scenario: Thêm mới khách hàng và tạo tài khoản mới
    Given Truy cập trang login
    When Tôi thêm tài khoản có fist name theo data
      | firstName | lastName | Currency |
      | tho       | nguyen   |     2000 |
      | joe       | david    |      100 |
    Then Kiểm tra tài khoàn được thêm thành công