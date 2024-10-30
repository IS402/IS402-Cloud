import React from "react";
import { Menu } from "antd";

export const contents = [
  {
    id: "chinh-sach-khui-hop-san-pham",
    title: "Chính sách khui hộp sản phẩm",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Áp dụng cho các sản phẩm bán ra tại FPT Shop bao gồm ĐTDĐ, MT, MTB,
          Đồng hồ thông minh.
        </p>
        <p style={{ fontSize: 16 }}>Nội dung chính sách:</p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Sản phẩm bắt buộc phải khui seal/mở hộp và kích hoạt bảo hành điện
            tử (Active) ngay tại shop hoặc ngay tại thời điểm nhận hàng khi có
            nhân viên giao hàng tại nhà.
          </li>
          <li style={{ fontSize: 16 }}>
            Đối với các sản phẩm bán nguyên seal khách hàng cần phải thanh toán
            trước 100% giá trị đơn hàng trước khi khui seal sản phẩm.
          </li>
        </ul>
        <p style={{ fontWeight: "bold" }}>Lưu ý:</p>
        <p style={{ fontSize: 16 }}>
          Trước khi kích hoạt bảo hành điện tử (Active) sản phẩm khách hàng cần
          kiểm tra các lỗi ngoại quan của sản phẩm (Cấn_Trầy thân máy, bụi trong
          camera, bụi màn hình, hở viền…). Nếu phát hiện các lỗi trên khách hàng
          sẽ được đổi 1 sản phẩm khác hoặc hoàn tiền.
        </p>
        <p style={{ fontSize: 16 }}>
          Ngay sau khi kiểm tra lỗi ngoại quan, tiến hành bật nguồn để kiểm tra
          đến lỗi kỹ thuật; nếu sản phẩm có lỗi kỹ thuật của nhà sản xuất khách
          hàng sẽ được đổi 1 sản phẩm mới tương đương tại FPT Shop.
        </p>
        <p style={{ fontSize: 16 }}>
          Nếu quý khách báo lỗi ngoại quan sau khi sản phẩm đã được kích hoạt
          bảo hành điện tử (Active) hoặc sau khi nhân viên giao hàng rời đi FPT
          shop chỉ hỗ trợ chuyển sản phẩm của khách hàng đến hãng để thẩm định
          và xử lý.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-thu-thap-&-xu-ly-du-lieu-ca-nhan",
    title: "Chính sách thu thập & xử lý dữ liệu cá nhân",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Chính sách xử lý dữ liệu cá nhân (“Chính sách”) này được thực hiện bởi
          Công ty Cổ phần Bán lẻ Kỹ thuật số FPT (“FRT”, “Công ty”), mô tả các
          hoạt động liên quan đến việc xử lý dữ liệu cá nhân của Khách hàng.
          Chính sách này là một phần không thể tách rời của các hợp đồng, thỏa
          thuận, điều khoản và điều kiện ràng buộc mối quan hệ giữa FRT và Khách
          hàng.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 1. Đối tượng và phạm vi áp dụng
        </p>
        <p style={{ fontSize: 16 }}>
          Chính sách này điều chỉnh cách thức mà FRT xử lý dữ liệu cá nhân của
          Khách hàng và những người có liên quan đến Khách hàng theo các mối
          quan hệ do pháp luật yêu cầu phải xử lý dữ liệu hoặc người đồng sử
          dụng các sản phẩm/ dịch vụ của FRT với khách hàng khi sử dụng hoặc
          tương tác với trang tin điện tử hoặc/và các sản phẩm/ dịch vụ của FRT.
          Để tránh nhầm lẫn, Chính sách bảo mật dữ liệu này chỉ áp dụng cho các
          Khách hàng cá nhân. FRT khuyến khích Khách hàng đọc kỹ Chính sách này
          và thường xuyên kiểm tra trang tin điện tử để cập nhật bất kỳ thay đổi
          nào mà FRT có thể thực hiện theo các điều khoản của Chính sách.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          {" "}
          Điều 2. Giải thích từ ngữ
        </p>
        <p style={{ fontSize: 16 }}>
          2.1. “Khách hàng” là cá nhân tiếp cận, tìm hiểu, đăng ký, sử dụng hoặc
          có liên quan trong quy trình hoạt động, cung cấp các sản phẩm, dịch vụ
          của FRT. 2.2. “FRT” là Công ty Cổ phần Bán lẻ Kỹ thuật số FPT, mã số
          thuế 0311609355, địa chỉ trụ sở chính: 261 - 263 Khánh Hội, Phường 02,
          Quận 04, TP. Hồ Chí Minh, Việt Nam. 2.3. “Dữ liệu cá nhân” hay “DLCN”
          là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh
          hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người
          cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao
          gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. 2.4. Dữ liệu
          cá nhân cơ bản bao gồm: (a) Họ, chữ đệm và tên khai sinh, tên gọi khác
          (nếu có); (b) Ngày, tháng, năm sinh; ngày, tháng, năm chết hoặc mất
          tích; (c) Giới tính; (d) Nơi sinh, nơi đăng ký khai sinh, nơi thường
          trú, nơi tạm trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ; (e) Quốc
          tịch; (f) Hình ảnh của cá nhân; (g) Số điện thoại, số chứng minh nhân
          dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe, số biển
          số xe, số mã số thuế cá nhân, số bảo hiểm xã hội, số thẻ bảo hiểm y
          tế; (h) Tình trạng hôn nhân; (i) Thông tin về mối quan hệ gia đình
          (cha mẹ, con cái); (j) Thông tin về tài khoản số của cá nhân; dữ liệu
          cá nhân phản ánh hoạt động, lịch sử hoạt động trên không gian mạng;
          (k) Các thông tin khác gắn liền với một con người cụ thể hoặc giúp xác
          định một con người cụ thể không thuộc Dữ liệu cá nhân nhạy cảm. (l)
          Các dữ liệu khác theo quy định pháp luật hiện hành 2.5 Dữ liệu cá nhân
          nhạy cảm dữ liệu cá nhân gắn liền với quyền riêng tư của cá nhân mà
          khi bị xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền và lợi ích hợp
          pháp của cá nhân gồm: (a) Quan điểm chính trị, quan điểm tôn giáo; (b)
          Tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án, không bao
          gồm thông tin về nhóm máu; (c) Thông tin liên quan đến nguồn gốc chủng
          tộc, nguồn gốc dân tộc; (d) Thông tin về đặc điểm di truyền được thừa
          hưởng hoặc có được của cá nhân; (e) Thông tin về thuộc tính vật lý,
          đặc điểm sinh học riêng của cá nhân; (f) Thông tin về đời sống tình
          dục, xu hướng tình dục của cá nhân; (g) Dữ liệu về tội phạm, hành vi
          phạm tội được thu thập, lưu trữ bởi các cơ quan thực thi pháp luật;
          (h) Thông tin khách hàng của tổ chức tín dụng, chi nhánh ngân hàng
          nước ngoài, tổ chức cung ứng dịch vụ trung gian thanh toán, các tổ
          chức được phép khác, gồm: thông tin định danh khách hàng theo quy định
          của pháp luật, thông tin về tài khoản, thông tin về tiền gửi, thông
          tin về tài sản gửi, thông tin về giao dịch, thông tin về tổ chức, cá
          nhân là bên bảo đảm tại tổ chức tín dụng, chi nhánh ngân hàng, tổ chức
          cung ứng dịch vụ trung gian thanh toán; (i) Dữ liệu về vị trí của cá
          nhân được xác định qua dịch vụ định vị; (j) Dữ liệu cá nhân khác được
          pháp luật quy định là đặc thù và cần có biện pháp bảo mật cần thiết.
          2.6 Bảo vệ dữ liệu cá nhân : là hoạt động phòng ngừa, phát hiện, ngăn
          chặn, xử lý hành vi vi phạm liên quan đến dữ liệu cá nhân theo quy
          định của pháp luật. 2.7 Xử lý dữ liệu cá nhân : là một hoặc nhiều hoạt
          động tác động tới dữ liệu cá nhân, như: thu thập, ghi, phân tích, xác
          nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu
          hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển
          giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan.
          2.8 Bên thứ ba :là tổ chức, cá nhân khác ngoài FRT và Khách hàng đã
          được giải thích theo Chính sách này. Để làm rõ hơn, các từ ngữ nào
          chưa được giải thích tại Điều này sẽ được hiểu và áp dụng theo pháp
          luật Việt Nam. 2.9 Kênh giao dịch FRT :gồm các kênh giao dịch điện tử
          (website fptshop.com.vn; frt.vn; fstudiobyfpt.com.vn; f-care.com.vn;
          zalo; …) hoặc các kênh giao dịch khác nhằm cung cấp sản phẩm/ dịch vụ
          hoặc để phục vụ nhu cầu của FRT và khách hàng.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 3. Mục đích xử lý dữ liệu cá nhân của Khách hàng
        </p>
        <p style={{ fontSize: 16 }}>
          3.1. Khách hàng đồng ý cho phép FRT xử lý dữ liệu cá nhân của khách
          hàng cho một hoặc nhiều mục đích sau đây: (a) Cung cấp sản phẩm hoặc
          dịch vụ hoặc hỗ trợ khách hàng sử dụng các sản phẩm/ dịch vụ của Công
          ty và/ hoặc Đối tác của Công ty thông qua thỏa thuận hợp tác được
          Khách hàng yêu cầu; (b) Thực hiện các hoạt động nhằm chăm sóc khách
          hàng và thực hiện các chương trình hậu mãi sau bán hàng; (c) Điều
          chỉnh, cập nhật, bảo mật và cải tiến các sản phẩm, dịch vụ, ứng dụng,
          thiết bị mà FRT hoặc công ty con của FRT đang cung cấp cho Khách hàng;
          (d) Xác minh danh tính và đảm bảo tính bảo mật thông tin cá nhân của
          Khách hàng; (e) Đáp ứng các yêu cầu dịch vụ và nhu cầu hỗ trợ của
          Khách hàng; (f) Thông báo cho Khách hàng về những thay đổi đối với các
          chính sách, khuyến mại của các sản phẩm, dịch vụ mà Công ty đang cung
          cấp; (g) Đo lường, phân tích dữ liệu nội bộ và các xử lý khác để cải
          thiện, nâng cao chất lượng dịch vụ/sản phẩm của Công ty hoặc thực hiện
          các hoạt động truyền thông tiếp thị; (h) Tổ chức các hoạt động nghiên
          cứu thị trường, thăm dò dư luận nhằm cải thiện chất lượng sản phẩm/
          dịch vụ hoặc để nghiên cứu phát triển các sản phẩm, dịch vụ mới nhằm
          đáp ứng tốt hơn nhu cầu của khách hàng; (i) Ngặn chặn và phòng chống
          gian lận, đánh cắp danh tính và các hoạt động bất hợp pháp khác; (j)
          Để có cơ sở thiết lập, thực thi các quyền hợp pháp hoặc bảo vệ các
          khiếu nại pháp lý của FRT, Khách hàng hoặc bất kỳ cá nhân nào. Các mục
          đích này có thể bao gồm việc trao đổi dữ liệu với các công ty và tổ
          chức khác để ngăn chặn và phát hiện gian lận, giảm rủi ro về tín dụng;
          (k) Tuân thủ pháp luật hiện hành, các tiêu chuẩn ngành có liên quan và
          các chính sách hiện hành khác của Công ty; (l) Bất kỳ mục đích nào
          khác dành riêng cho hoạt động vận hành của Công ty; (m) Cung cấp thông
          tin cho Tập đoàn FPT, các công ty liên kết, các công ty con nhằm thực
          hiện các mục đích nêu trên và với điều kiện bên nhận thông tin sẽ bị
          ràng buộc bởi các điều khoản bảo mật nghiêm ngặt giống như các điều
          khoản trong tài liệu này; (n) Bất kỳ mục đích nào khác mà FRT thông
          báo cho Khách hàng, vào thời điểm thu thập dữ liệu cá nhân của Khách
          hàng hoặc trước khi bắt đầu xử lý liên quan hoặc theo yêu cầu khác
          hoặc được pháp luật hiện hành cho phép; và 3.2. FRT sẽ yêu cầu sự cho
          phép của Khách hàng trước khi sử dụng dữ liệu cá nhân của Khách hàng
          theo bất kỳ mục đích nào khác ngoài các mục đích đã được nêu tại Điều
          3.1 trên, vào thời điểm thu thập dữ liệu cá nhân của Khách hàng hoặc
          trước khi bắt đầu xử lý liên quan hoặc theo yêu cầu khác hoặc được
          pháp luật hiện hành cho phép.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 4. Bảo mật Dữ liệu cá nhân khách hàng
        </p>
        <p style={{ fontSize: 16 }}>
          4.1. Nguyên tắc bảo mật: (a) Dữ liệu cá nhân của Khách hàng được cam
          kết bảo mật theo quy định của FRT và quy định của pháp luật. Việc xử
          lý Dữ liệu cá nhân của mỗi Khách hàng chỉ được thực hiện khi có sự
          đồng ý của Khách hàng, trừ trường hợp pháp luật có quy định khác. (b)
          FRT không sử dụng, chuyển giao, cung cấp hay chia sẻ cho bên thứ ba
          nào về Dữ liệu cá nhân của Khách hàng khi không có sự đồng ý của Khách
          hàng, trừ trường hợp pháp luật có quy định khác. (c) FRT sẽ tuân thủ
          các nguyên tắc bảo mật dữ liệu cá nhân khác theo quy định pháp luật
          hiện hành. 4.2. Hậu quả, thiệt hại không mong muốn có thể xảy ra: FRT
          sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ Dữ
          liệu cá nhân của Khách hàng không bị truy lục, sử dụng hoặc chia sẻ
          ngoài ý muốn. Tuy nhiên, không một dữ liệu nào có thể được bảo mật
          100%. Do vậy, FRT cam kết sẽ bảo mật một cách tối đa trong khả năng
          cho phép Dữ liệu cá nhân của Khách hàng. Một số hậu quả, thiệt hại
          không mong muốn có thể xảy ra bao gồm nhưng không giới hạn: (a) Lỗi
          phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất dữ liệu của
          Khách hàng; (b) Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát của FRT,
          hệ thống có liên quan bị hacker tấn công gây lộ lọt dữ liệu; (c) Khách
          hàng tự làm lộ lọt dữ liệu cá nhân do: bất cẩn hoặc bị lừa đảo truy
          cập các website/tải các ứng dụng có chứa phần mềm độc hại, vv... 4.3.
          FRT khuyến cáo Khách hàng bảo mật các thông tin liên quan đến mật khẩu
          đăng nhập vào tài khoản của Khách hàng, mã OTP và không chia sẻ mật
          khẩu đăng nhập, mã OTP này với bất kỳ người nào khác. 4.4. Khách hàng
          nên bảo quản thiết bị điện tử trong quá trình sử dụng; Khách hàng nên
          khóa, đăng xuất, hoặc thoát khỏi tài khoản trên website hoặc Ứng dụng
          của FRT khi không sử dụng.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 5. Các loại dữ liệu cá nhân mà FRT xử lý
        </p>
        <p style={{ fontSize: 16 }}>
          Để FRT có thể cung cấp các sản phẩm, dịch vụ cho Khách hàng và/hoặc xử
          lý các yêu cầu của Khách hàng, FRT có thể cần phải và/hoặc được yêu
          cầu phải thu thập dữ liệu cá nhân, bao gồm: (a) Dữ liệu cá nhân cơ bản
          của Khách hàng và các cá nhân có liên quan của Khách hàng; (b) Dữ liệu
          cá nhân nhạy cảm của Khách hàng và các cá nhân có liên quan của Khách
          hàng; (c) Dữ liệu liên quan đến các trang tin điện tử hoặc ứng dụng:
          dữ liệu kỹ thuật (như đã nêu ở trên, bao gồm loại thiết bị, hệ điều
          hành, loại trình duyệt, cài đặt trình duyệt, địa chỉ IP, cài đặt ngôn
          ngữ, ngày và giờ kết nối với trang tin điện tử, thống kê sử dụng ứng
          dụng, cài đặt ứng dụng, ngày và giờ kết nối với ứng dụng, dữ liệu vị
          trí và thông tin liên lạc kỹ thuật khác); chi tiết đăng nhập bảo mật;
          dữ liệu sử dụng; (d) Dữ liệu tiếp thị: các mối quan tâm đối với quảng
          cáo; dữ liệu cookie; dữ liệu clickstream; lịch sử duyệt web; phản ứng
          với tiếp thị trực tiếp; và lựa chọn không tham gia tiếp thị trực tiếp.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 6. Cách thức thu thập dữ liệu cá nhân
        </p>
        <p style={{ fontSize: 16 }}>
          FRT thực hiện thu thập dữ liệu cá nhân từ Khách hàng theo các phương
          thức sau: 6.1. Trực tiếp từ Khách hàng bằng các phương tiện khác nhau:
          (a) Khi Khách hàng gửi yêu cầu đăng ký hoặc điền thông tin vào bất kỳ
          biểu mẫu nào khác liên quan tới các sản phẩm và dịch vụ của FRT, đối
          tác của FRT; (b) Khi Khách hàng tương tác với nhân viên dịch vụ khách
          hàng của Công ty, ví dụ như thông qua các cuộc gọi điện thoại, thư từ,
          gặp mặt trực tiếp, gửi thư điện tử hoặc tương tác trên mạng xã hội;
          (c) Khi Khách hàng sử dụng một số dịch vụ của FRT, ví dụ như các trang
          web và ứng dụng bao gồm việc thiết lập các tài khoản trực tuyến với
          FRT; (d) Khi Khách hàng được liên hệ và phản hồi lại các đại diện tiếp
          thị và các nhân viên dịch vụ khách hàng của FRT; (e) Khi Khách hàng
          gửi thông tin cá nhân của mình cho Công ty vì bất kỳ lý do nào khác,
          bao gồm cả khi Khách hàng đăng ký sử dụng thử miễn phí bất kỳ sản phẩm
          và dịch vụ nào hoặc khi Khách hàng thể hiện quan tâm đến bất kỳ sản
          phẩm và dịch vụ nào của Công ty. (f) Khi Khách hàng mua hoặc sử dụng
          các dịch vụ của bên thứ ba thông qua FRT hoặc tại các điểm giao dịch,
          cơ sở kinh doanh của FRT; 6.2. Từ các bên thứ ba khác: (a) Nếu Khách
          hàng tương tác với nội dung hoặc quảng cáo của bên thứ ba trên trang
          tin điện tử hoặc trong ứng dụng, Công ty có thể nhận được thông tin cá
          nhân của Khách hàng từ bên thứ ba có liên quan, theo chính sách bảo
          mật hiện hành hợp pháp của bên thứ ba đó. (b) Nếu Khách hàng chọn
          thanh toán điện tử trực tiếp tới FRT hoặc thông qua trang tin điện tử
          hoặc ứng dụng, FRT có thể nhận được dữ liệu cá nhân của Khách hàng từ
          các bên thứ ba, chẳng hạn như nhà cung cấp dịch vụ thanh toán, cho mục
          đích thanh toán đó. (c) Để tuân thủ các nghĩa vụ của mình theo luật
          hiện hành, FRT có thể tiếp nhận dữ liệu cá nhân về Khách hàng từ các
          cơ quan pháp luật và cơ quan công quy
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 7. Tổ Chức Được Xử Lý Dữ Liệu Cá Nhân
        </p>
        <p style={{ fontSize: 16 }}>
          7.1. Công ty Cổ phần Bán lẻ Kỹ thuật số FPT. 7.2. FRT sẽ thực hiện
          việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân với các tổ chức, cá nhân
          sau: a) Công ty Cổ phần FPT và các Công ty thành viên, Công ty con
          thuộc Công ty Cổ phần FPT. b) Các Công ty thành viên mà FRT trực tiếp
          hoặc gián tiếp sở hữu. c) Các nhà thầu, đại lý, đối tác, các nhà cung
          cấp dịch vụ vận hành của FRT. d) Các chi nhánh, đơn vị kinh doanh và
          các cán bộ nhân viên làm việc tại các chi nhánh, đơn vị kinh doanh,
          đại lý của FRT. e) Các doanh nghiệp kinh doanh viễn thông trong trường
          hợp Khách hàng vi phạm nghĩa vụ thanh toán cước dịch vụ. f) Các cửa
          hàng thương mại và nhà bán lẻ liên quan tới việc thực hiện các chương
          trình khuyến mại của FRT. g) Các cố vấn chuyên nghiệp của FRT như kiểm
          toán, luật sư,… theo quy định của pháp luật. h) Tòa án, các cơ quan
          nhà nước có thẩm quyền phù hợp với quy định của pháp luật và/hoặc khi
          được yêu cầu và pháp luật cho phép. 7.3. FRT cam kết việc chia sẻ hoặc
          cùng xử lý dữ liệu cá nhân chỉ thực hiện trong trường hợp cần thiết để
          thực hiện các Mục Đích Xử Lý được nêu tại Chính sách này hoặc theo quy
          định của pháp luật. Các tổ chức, cá nhân nhận được dữ liệu cá nhân của
          Khách hàng sẽ phải tuân thủ theo nội dung quy định tại Chính sách này
          và quy định của pháp luật về bảo vệ dữ liệu cá nhân liên quan. Mặc dù
          FRT sẽ thực hiện mọi nỗ lực để đảm bảo rằng các thông tin Khách hàng
          được ẩn danh/mã hóa, nhưng không thể loại trừ hoàn toàn rủi ro các dữ
          liệu này có thể bị tiết lộ trong những trường hợp bất khả kháng. 7.4.
          Trong trường hợp có sự tham gia của các tổ chức xử lý dữ liệu cá nhân
          khác được nêu tại Điều này, Khách hàng đồng ý FRT sẽ thông báo cho
          Khách hàng trước khi FRT thực hiện.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 8. Xử lý dữ liệu cá nhân trong một số trường hợp đặc biệt
        </p>
        <p style={{ fontSize: 16 }}>
          FRT đảm bảo thực hiện xử lý dữ liệu cá nhân của Khách hàng đáp ứng đầy
          đủ các yêu cầu của Pháp luật trong các trường hợp đặc biệt nêu sau:
          8.1. Đoạn phim của máy quay giám sát (CCTV), trong trường hợp cụ thể,
          cũng có thể được sử dụng cho các muc đích sau đây: (a) cho các mục
          đích đảm bảo chất lượng; (b) cho mục đích an ninh công cộng và an toàn
          lao động; (c) phát hiện và ngăn chặn việc sử dụng đáng ngờ, không phù
          hợp hoặc không được phép của các tiện ích, sản phẩm, dịch vụ và/hoặc
          cơ sở của Công ty; (d) phát hiện và ngăn chặn hành vi phạm tội;
          và/hoặc (e) tiến hành điều tra các sự cố. 8.2. FRT luôn tôn trọng và
          bảo vệ dữ liệu cá nhân của trẻ em. Ngoài các biện pháp bảo vệ dữ liệu
          cá nhân được quy định theo pháp luật, trước khi xử lý dữ liệu cá nhân
          của trẻ em, Công ty sẽ thực hiện xác minh tuổi của trẻ em và yêu cầu
          sự đồng ý của (i) trẻ em và/hoặc (ii) cha, mẹ hoặc người giám hộ của
          trẻ em theo quy định của pháp luật. 8.3. Bên cạnh tuân thủ theo các
          quy định pháp luật có liên quan khác, đối với việc xử lý dữ liệu cá
          nhân liên quan đến dữ liệu cá nhân của người bị tuyên bố mất tích/
          người đã chết, Công ty sẽ phải được sự đồng ý của một trong số những
          người có liên quan theo quy định của pháp luật hiện hành.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 9. Quyền và nghĩa vụ của Khách hàng liên quan đến dữ liệu cá nhân
          cung cấp cho FRT
        </p>
        <p style={{ fontSize: 16 }}>
          9.1. Quyền của khách hàng (a) Khách hàng có quyền được biết về hoạt
          động xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật có quy
          định khác. (b) Khách hàng được đồng ý hoặc không đồng ý cho phép xử lý
          dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác. (c)
          Khách hàng được quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh
          sửa Dữ liệu cá nhân của mình bằng văn bản gửi đến FRT, trừ trường hợp
          luật có quy định khác. (d) Khách hàng có quyền rút lại sự đồng ý của
          mình bằng văn bản gửi đến FRT, trừ trường hợp pháp luật có quy định
          khác. Việc rút lại sự đồng ý không ảnh hưởng đến tính hợp pháp của
          việc xử lý dữ liệu đã được Khách hàng đồng ý với FRT trước khi rút lại
          sự đồng ý. (e) Khách hàng được quyền xóa hoặc yêu cầu xóa dữ liệu cá
          nhân của mình bằng văn bản gửi đến FRT, trừ trường hợp luật có quy
          định khác. (f) Khách hàng được quyền yêu cầu hạn chế xử lý Dữ liệu cá
          nhân của mình bằng văn bản gửi đến FRT, trừ trường hợp luật có quy
          định khác. Việc hạn chế xử lý dữ liệu sẽ được FRT thực hiện trong 72
          giờ sau khi có yêu cầu của Khách hàng, với toàn bộ Dữ liệu cá nhân mà
          Khách hàng yêu cầu hạn chế, trừ trường hợp pháp luật có quy định khác.
          (g) Khách hàng được quyền yêu cầu FRT cung cấp cho bản thân Dữ liệu cá
          nhân của mình bằng văn bản gửi đến FRT, trừ trường hợp luật có quy
          định khác. (h) Khách hàng được quyền phản đối FRT, Tổ Chức Được Xử Lý
          Dữ Liệu Cá Nhân quy định tại Chính sách này xử lý dữ liệu cá nhân của
          mình bằng văn bản gửi đến FRT nhằm ngăn chặn hoặc hạn chế việc tiết lộ
          DLCN hoặc sử dụng DLCN cho mục đích quảng cáo, tiếp thị, trừ trường
          hợp pháp luật có quy định khác. FRT sẽ thực hiện yêu cầu của Khách
          hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có
          quy định khác. (i) Khách hàng có quyền khiếu nại, tố cáo hoặc khởi
          kiện theo quy định của pháp luật. (j) Khách hàng có quyền yêu cầu bồi
          thường đối với thiệt hại thực tế theo quy định của pháp luật nếu FRT
          có hành vi vi phạm quy định về bảo vệ Dữ liệu cá nhân của mình, trừ
          trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác. (k)
          Khách hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật
          khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực
          hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ
          luật Dân sự. (l) Các quyền khác theo quy định của pháp luật hiện hành.
          9.2. Nghĩa vụ của Khách hàng (a) Tuân thủ các quy định của pháp luật,
          quy định, hướng dẫn của FRT liên quan đến xử lý Dữ liệu cá nhân của
          Khách hàng. (b) Cung cấp đầy đủ, trung thực, chính xác Dữ liệu cá
          nhân, các thông tin khác theo yêu cầu của FRT khi đăng ký và sử dụng
          dịch vụ của FRT và khi có thay đổi về các thông tin này. FRT sẽ tiến
          hành bảo mật Dữ liệu cá nhân của Khách hàng căn cứ trên thông tin
          Khách hàng đã đăng ký, do đó nếu có bất kỳ thông tin sai lệch nào FRT
          sẽ không chịu trách nhiệm trong trường hợp thông tin đó làm ảnh hưởng
          hoặc hạn chế quyền lợi của Khách hàng. Trường hợp không thông báo, nếu
          có phát sinh rủi ro, tổn thất thì Khách hàng chịu trách nhiệm về những
          sai sót hay hành vi lợi dụng, lừa đảo khi sử dụng dịch vụ do lỗi của
          mình hoặc do không cung cấp đúng, đầy đủ, chính xác, kịp thời sự thay
          đổi thông tin; bao gồm cả thiệt hại về tài chính, chi phí phát sinh do
          thông tin cung cấp sai hoặc không thống nhất. (c) Phối hợp với FRT, cơ
          quan nhà nước có thẩm quyền hoặc bên thứ ba trong trường hợp phát sinh
          các vấn đề ảnh hưởng đến tính bảo mật Dữ liệu cá nhân của Khách hàng.
          (d) Tự bảo vệ dữ liệu cá nhân của mình; chủ động áp dụng các biện pháp
          nhằm bảo vệ Dữ liệu cá nhân của mình trong quá trình sử dụng dịch vụ
          của FRT; thông báo kịp thời cho FRT khi phát hiện thấy có sai sót,
          nhầm lẫn về Dữ liệu cá nhân của mình hoặc nghi ngờ Dữ liệu cá nhân của
          mình đang bị xâm phạm. (e) Tự chịu trách nhiệm đối với những thông
          tin, dữ liệu, chấp thuận mà mình tạo lập, cung cấp trên môi trường
          mạng; tự chịu trách nhiệm trong trường hợp dữ liệu cá nhân bị rò rỉ,
          xâm phạm do lỗi của mình. (f) Thường xuyên cập nhật các Quy định,
          Chính sách của FRT trong từng thời kỳ được thông báo tới Khách hàng
          hoặc đăng tải trên các website và hoặc các kênh giao dịch khác của FRT
          từng thời kỳ. Thực hiện các hành động theo hướng dẫn của FRT để thể
          hiện rõ việc chấp thuận hoặc không chấp thuận đối với các mục đích xử
          lý Dữ liệu cá nhân mà FRT thông báo tới Khách hàng trong từng thời kỳ.
          (g) Tôn trọng, bảo vệ dữ liệu cá nhân của người khác. (h) Các trách
          nhiệm khác theo quy định của pháp luật.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 10. Lưu trữ dữ liệu
        </p>
        <p style={{ fontSize: 16 }}>
          Lưu trữ dữ liệu cá nhân FRT cam kết sẽ chỉ lưu trữ dữ liệu cá nhân của
          Khách hàng trong trường hợp liên quan đến các mục đích được nêu trong
          Chính sách này. FRT cũng có thể cần lưu trữ dữ liệu cá nhân của quý
          khách trong một thời gian nhằm để thực hiện mục đích nêu trong chính
          sách này và khi pháp luật hiện hành yêu cầu. FRT cam kết sẽ chỉ lưu
          trữ dữ liệu cá nhân của Khách hàng trong trường hợp liên quan đến các
          mục đích được nêu trong Chính sách này. FRT cũng có thể cần lưu trữ dữ
          liệu cá nhân của quý khách trong một thời gian nhằm để thực hiện mục
          đích nêu trong chính sách này và khi pháp luật hiện hành yêu cầu.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 11. Cách Thức Xử Lý Dữ Liệu
        </p>
        <p style={{ fontSize: 16 }}>
          FRT áp dụng một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân như:
          thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết
          hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ,
          truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các
          hành động khác có liên quan.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Điều 12. Cookies</p>
        <p style={{ fontSize: 16 }}>
          12.1. Khi Khách hàng sử dụng hoặc truy cập các website, trang tin trực
          tuyến (sau đây gọi chung là “trang tin điện tử”) của FRT, FRT có thể
          đặt một hoặc nhiều cookie trên thiết bị của Khách hàng. “Cookie” là
          một tệp nhỏ được đặt trên thiết bị của Khách hàng khi Khách hàng truy
          cập một trang tin điện tử, nó ghi lại thông tin về thiết bị, trình
          duyệt của Khách hàng và trong một số trường hợp, sở thích và thói quen
          duyệt tin điện tử của Khách hàng. FRT có thể sử dụng thông tin này để
          nhận diện Khách hàng khi Khách hàng quay lại các trang tin điện tử của
          FRT, để cung cấp các dịch vụ được cá nhân hóa trên các trang tin điện
          tử của FRT, để biên soạn số liệu phân tích nhằm hiểu rõ hơn về hoạt
          động của trang tin điện tử và để cải thiện các trang tin điện tử của
          FRT. Khách hàng có thể sử dụng cài đặt trình duyệt của mình để xóa
          hoặc chặn cookie trên thiết bị của mình. Tuy nhiên, nếu Khách hàng
          quyết định không chấp nhận hoặc chặn cookie từ các trang tin điện tử
          của FRT, Khách hàng có thể không tận dụng hết tất cả các tính năng của
          các trang tin điện tử của FRT. 12.2. FRT có thể xử lý thông tin cá
          nhân của Khách hàng thông qua công nghệ cookie, theo các quy định của
          Điều khoản này. FRT cũng có thể sử dụng biện pháp tiếp thị lại để phân
          phát quảng cáo cho những cá nhân mà FRT biết trước đây đã truy cập
          trang tin điện tử của mình. 12.3. Trong phạm vi các bên thứ ba đã gán
          nội dung lên trên các trang tin điện tử của FRT (ví dụ: các tính năng
          truyền thông xã hội), các bên thứ ba đó có thể thu thập thông tin cá
          nhân của Khách hàng (ví dụ: dữ liệu cookie) nếu Khách hàng chọn tương
          tác với nội dung của bên thứ ba đó hoặc sử dụng các dịch vụ của bên
          thứ ba.
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 13. Thông tin liên hệ xử lý dữ liệu cá nhân
        </p>
        <p style={{ fontSize: 16 }}>
          Trường hợp Khách hàng có bất kỳ câu hỏi nào liên quan đến Chính sách
          này hoặc các vấn đề liên quan đến quyền của chủ thể dữ liệu hoặc xử lý
          dữ liệu cá nhân của Khách hàng, Khách hàng hàng có thể sử dụng các
          hình thức liên hệ nêu sau: (1) Gửi thư về Công ty theo địa chỉ: Trung
          tâm trải nghiệm khách hàng; địa chỉ: 305 Tô Hiến Thành, Phường 12,
          Quận 10, Tp. Hồ Chí Minh (2) Gửi email về hòm thư điện tử:
          fptshop@fpt.com (3) Hotline: 1800 6616
        </p>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          Điều 14. Điều khoản chung
        </p>
        <p style={{ fontSize: 16 }}>
          14.1. Chính sách này có hiệu lực từ ngày 01/07/2023. Khách hàng hiểu
          và đồng ý rằng, Chính sách này có thể được sửa đổi theo từng thời kỳ
          và được thông báo tới Khách hàng thông qua các Kênh giao dịch của FRT
          trước khi áp dụng. Những thay đổi và thời điểm có hiệu lực sẽ được cập
          nhật và công bố tại các Kênh giao dịch và các kênh khác của FRT. Việc
          Khách hàng tiếp tục sử dụng dịch vụ sau thời hạn thông báo về các nội
          dung sửa đổi, bổ sung trong từng thời kỳ đồng nghĩa với việc Khách
          hàng đã chấp nhận các nội dung sửa đổi, bổ sung đó. 14.2. Khách hàng
          đã biết rõ và đồng ý bản Chính sách này cũng là Thông báo xử lý dữ
          liệu cá nhân quy định tại Điều 13 Nghị định 13/NĐ-CP/2023 và được sửa
          đổi, bổ sung trong từng thời kỳ trước khi FRT tiến hành Xử lý dữ liệu
          cá nhân. Theo đó. FRT không cần thực hiện thêm bất kỳ biện pháp nào
          khác nằm mục đích thông báo việc Xử lý dữ liệu cá nhân cho Khách hàng.
          14.3. Khách hàng cam kết thực hiện nghiêm túc các quy định tại Chính
          sách này. Các vấn đề chưa được quy định, các Bên thống nhất thực hiện
          theo quy định của pháp luật, hướng dẫn của cơ quan Nhà nước có thẩm
          quyền và/hoặc các sửa đổi, bổ sung Chính sách này được FRT thông báo
          cho khách hàng trong từng thời kỳ. 14.4. Khách hàng có thể thấy quảng
          cáo hoặc nội dung khác trên bất kỳ trang tin điện tử, ứng dụng hoặc
          thiết bị nào có thể liên kết đến các trang tin điện tử hoặc dịch vụ
          của các đối tác, nhà quảng cáo, nhà tài trợ hoặc các bên thứ ba khác.
          FRT không kiểm soát nội dung hoặc các liên kết xuất hiện trên các
          trang tin điện tử hoặc dịch vụ của bên thứ ba và không chịu trách
          nhiệm hoặc/và trách nhiệm pháp lý đối với các hoạt động được sử dụng
          bởi các trang tin điện tử hoặc dịch vụ của bên thứ ba được liên kết
          đến hoặc từ bất kỳ trang tin điện tử, ứng dụng hoặc thiết bị nào. Các
          trang tin điện tử và dịch vụ này có thể tuân theo các chính sách bảo
          mật và điều khoản sử dụng của riêng của bên thứ ba. 14.5. Chính sách
          này được giao kết trên cơ sở thiện chí giữa FRT và Khách hàng. Trong
          quá trình thực hiện nếu phát sinh tranh chấp, các Bên sẽ chủ động giải
          quyết thông qua thương lượng, hòa giải. Trường hợp hòa giải không
          thành, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền để giải
          quyết theo quy định của pháp luật. 14.6. Khách hàng đã đọc kỹ, hiểu rõ
          các quyền và nghĩa vụ và đồng ý với toàn bộ nội dung của bản Chính
          sách bảo vệ dữ liệu cá nhân này.
        </p>
      </div>
    ),
  },
  {
    id: "ffriends",
    title: "Giới thiệu F.Friends - Bạn đồng hành",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Với mục đích tri ân tất cả các khách hàng đã tín nhiệm và yêu mến FPT
          Shop, F.Friends là một chương trình vô cùng ưu việt, đi kèm chính sách
          SIÊU ĐẶC QUYỀN khi mua trả góp và trả thẳng dành riêng cho các khách
          hàng khi mua các sản phẩm tại FPT Shop.
        </p>
        <p style={{ fontWeight: "Bold", fontSize: 16 }}>
          1. Chính sách bán hàng dành cho hội viên F.Friends mua trả thẳng, mua
          trả góp qua nhà tài chính và mua trả góp qua thẻ tín dụng offline
        </p>
        <p style={{ fontWeight: "bold", fontSize: 16 }}>Lưu ý:</p>
        <p style={{ fontSize: 16 }}>
          Hội viên F.Friends mua trả thẳng, mua trả góp qua nhà tài chính và mua
          trả góp qua thẻ tín dụng offline được hưởng mức giảm giá như sau: Hội
          viên được hưởng toàn bộ CTKM tháng, hotsale tại thời điểm mua hàng
          (Không áp dụng kèm Flash Sale, Máy cũ). Đồng thời, hội viên được hoàn
          tiền 5% (tối đa 500.000 VNĐ) quy đổi bằng voucher: Khách hàng được
          tặng phiếu mua hàng gia dụng/ phụ kiện và có thể sử dụng luôn trên đơn
          hàng khách hàng đang mua hoặc sử dụng cho đơn tiếp theo (trong vòng 15
          ngày). Phạm vi áp dụng mã voucher: chỉ áp dụng khi mua sản phẩm Gia
          dụng, Phụ kiện tại hệ thống cửa hàng FPT Shop. Điều kiện áp dụng: KH
          được hưởng khuyến mại F.Friends nếu tại thời điểm mua hàng đã là hội
          viên F.Friends chính thức. Khách hàng phải có tài khoản email do doanh
          nghiệp cấp (còn gọi là email service, ví dụ: abc@fpt.com). Khách hàng
          được mua hàng theo hình thức mua trả thẳng, mua trả góp qua nhà tài
          chính và mua trả góp qua thẻ tín dụng offline.
        </p>
        <p style={{ fontWeight: "bold", fontSize: 16 }}>
          2. Quy định duyệt mở tài khoản F.Friends khách hàng doanh nghiệp (FPT
          Shop tạm dừng mở mới tài khoản hội viên F.Friends từ 2/7/2024)
        </p>
        <p style={{ fontSize: 16 }}>
          2.1. Điều kiện doanh nghiệp duyệt mở tài khoản F.Friends Áp dụng cho
          Doanh nghiệp thời gian hoạt động trên 1 năm (dựa theo giấy phép kinh
          doanh hoặc ngày được cấp mã số thuế DN). Áp dụng cho Doanh nghiệp có
          thời gian mở tài khoản ngân hàng trên 1 năm. Nội dung hợp đồng phải
          nêu rõ quy mô doanh nghiệp, số lượng CBCNV. Thời gian duyệt mở doanh
          nghiệp trong vòng 03 ngày kể từ ngày nhận callog. Doanh nghiệp tham
          gia chương trình F.Friends-Bạn Đồng Hành, CBCNV được hưởng ưu đãi trả
          thẳng chỉ khi có tài khoản email do doanh nghiệp cấp (còn gọi là email
          service, ví dụ: abc@fpt.com.vn). Tài khoản F.Friends của khách hàng
          được duyệt khi có xác thực OTP gửi qua email. 2.2. Điều kiện hoạt động
          doanh nghiệp Doanh nghiệp là hội viên F.Friends, không phát sinh đơn
          hàng trong vòng 03 tháng kể từ ngày hợp đồng được duyệt thì F.Friends
          HO buộc đóng tài khoản doanh nghiệp. Trong trường hợp doanh nghiệp
          muốn tham gia đơn hàng F.Friends, Đội mở doanh nghiệp thực hiện lại
          toàn bộ các bước theo quy định mở doanh nghiệp. 2.3. Hình thức mở bán
          doanh nghiệp theo quy mô như sau: Cơ quan chính quyền, Công ty nhà
          nước, Trường học, Bệnh viện,… trực thuộc nhà nước quản lý: Áp dụng
          hình thức: Thu hộ qua doanh nghiệp hoặc thu hộ qua ngân hàng Doanh
          nghiệp đang hoạt động, có thời gian hoạt động trên 1 năm và số lượng
          CBNV lớn hơn 500 người. Áp dụng hình thức: Thu hộ qua doanh nghiệp
          hoặc thu hộ qua ngân hàng Doanh nghiệp có số lượng CBCNV dưới 500
          người Áp dụng hình thức: Thu hộ qua doanh nghiệp khi có xác nhận của
          Ban giám đốc công ty Áp dụng hình thức: Thu hộ qua ngân hàng khi doanh
          nghiệp liên kết được ngân hàng thu hộ Doanh nghiệp không được áp dụng
          hình thức thu hộ qua doanh nghiệp và thu hộ qua ngân hàng thì áp dụng
          mở trả thẳng. Với điều kiện phải có tài khoản email do doanh nghiệp
          cấp (còn gọi là email service, ví dụ: abc@fpt.com.vn). Tài khoản
          F.Friends của khách hàng được duyệt khi có xác thực OTP gửi qua email.
          Doanh nghiệp có số lượng CBCNV dưới 50 người chỉ được mở trả thẳng và
          có tài khoản email do doanh nghiệp cấp (còn gọi là email service, ví
          dụ: abc@fpt.com.vn). Tài khoản F.Friends của khách hàng được duyệt khi
          có xác thực OTP gửi qua email. Khách hàng hội viên doanh nghiệp: không
          giới hạn số lần hưởng khuyến mại F.Friends. Lưu ý: FPT Shop sẽ xác
          minh và đảm bảo doanh nghiệp đủ điều kiện trên mới duyệt mở tài khoản.
        </p>
      </div>
    ),
  },
  {
    id: "gioi-thieu-may-doi-tra",
    title: "Giới thiệu máy đổi trả",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Máy cũ kinh doanh tại FPT Shop là các sản phẩm có nguồn gốc tin cậy,
          còn đủ điều kiện bảo hành được kiểm tra kỹ lưỡng bởi FPT Shop, bao
          gồm: Máy trưng bày (demo): là máy được dùng để trưng bày tại cửa hàng,
          phục vụ nhu cầu trải nghiệm của khách hàng tại shop, sau khi hết thời
          gian trưng bày, được điều chuyển để kinh doanh. Máy đã qua sử dụng: là
          máy thu lại từ khách hàng theo chính sách đổi trả/bảo hành, đã được
          bảo hành chính hãng và được FPT Shop kiểm tra chất lượng.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Chế độ bảo hành:</p>
        <p style={{ fontSize: 16 }}>
          1 đổi 1 máy tương đương trong vòng 30 ngày nếu máy có lỗi nhà sản xuất
          (*) nếu không có máy tương đương, khách hàng có thể đổi sang sản phẩm
          khác cao tiền hơn hoặc FPT Shop thu hồi lại máy. Áp dụng bảo hành theo
          chính sách của Hãng nếu máy còn bảo hành mặc định của Hãng, trường hợp
          hết bảo hành mặc định, máy sẽ được bảo hành từ 1 đến 12 tháng theo
          chính sách của FPT Shop tùy từng loại sản phẩm.(**) Tiếp nhận bảo hành
          tại tất cả các cửa hàng FPT Shop trên toàn quốc. Với mẫu mã đa dạng,
          giá cả hợp lý, chất lượng tốt, Khách hàng có thể hoàn toàn yên tâm
          chọn mua và sử dụng các sản phẩm máy cũ tại FPT Shop đang kinh doanh
          phù hợp với nhu cầu của mình. Quý khách có thể đến trực tiếp FPT Shop
          để xem và mua máy, hoặc tìm kiếm máy đổi trả phù hợp về mức giá và nhu
          cầu sử dụng trên Website. Nếu tìm thấy sản phẩm vừa ý trên website,
          Quý khách có thể đặt giữ hàng trong 24 tiếng. (*) Theo kết quả kết
          luận của hãng (**) Hạn bảo hành của sản phẩm được thể hiện trên hóa
          đơn bán hàng và trên website https://fptshop.com.vn/
        </p>
      </div>
    ),
  },
  {
    id: "huong-dan-mua-hang",
    title: "Hướng dẫn mua hàng và thanh toán online",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Bước 1: Tại giao diện trang chủ của FPT Shop (https://fptshop.com.vn/)
          Quý khách gõ vào thanh tìm kiếm tên sản phẩm mà mình quan tâm. Ví dụ
          Quý khách đang muốn mua sản phẩm iPhone, sau khi gõ hệ thống sẽ truy
          xuất ra các sản phẩm liên quan tới từ khóa mà Quý khách muốn tìm.
        </p>
        <p style={{ fontSize: 16 }}>
          Bước 2: Bây giờ Quý khách hãy click chọn sản phẩm mà mình muốn tham
          khảo. Ví dụ Quý khách chọn sản phẩm iPhone 15, sau khi click chọn sẽ
          hiển thị trang chi tiết sản phẩm như dưới. Quý khách có thể xem các
          thông số thuộc tính cũng như bài viết đánh giá về sản phẩm phía bên
          dưới trang web.
        </p>
        <p style={{ fontSize: 16 }}>
          Bước 3: Sau khi đã chọn được sản phẩm phù hợp, Quý khách vui lòng
          click vào nút “MUA NGAY”. Sau đó Quý khách có thể thấy được giỏ hàng
          của mình đang gồm những sản phẩm đã chọn mua.
        </p>
        <p style={{ fontSize: 16 }}>
          Bước 4: Quý khách kiểm tra thông tin sản phẩm đã chọn, sau đó điền
          thông tin đặt hàng. Quý khách lựa chọn hình thức giao hàng mong muốn:
          Giao hàng tận nơi/Nhận tại cửa hàng và điền form thông tin khách hàng
          bao gồm: “Anh/Chị”, “Họ và tên”, “Số điện thoại”, “Email”. Trường
          “Email” Quý khách có thể bỏ qua nếu không muốn.
        </p>
        <p style={{ fontSize: 16 }}>
          Đối với phương án giao hàng tận nơi: Quý khách điền thông tin địa chỉ
          nhận hàng và thời gian giao hàng.
        </p>
        <p style={{ fontSize: 16 }}>
          Đối với phương án nhận tại cửa hàng: Quý khách chọn tỉnh, huyện mong
          muốn và chọn cửa hàng phù hợp trong danh sách kết quả.
        </p>
        <p>
          Bước 5: Thanh Toán. Quý khách có thể lựa chọn hình thức thanh toán
          bằng tiền mặt khi nhận hàng, trả góp qua nhà tài chính hoặc qua thẻ
          ATM và thẻ tín dụng hoặc theo chương trình bạn đồng hành F.Friends.
          Nếu Quý khách chọn hình thức thanh toán tiền mặt khi nhận hàng. Vui
          lòng bấm nút "Đặt hàng" để hoàn tất. Vậy là Quý khách đã hoàn tất việc
          đặt hàng và thanh toán, tư vấn viên của FPT Shop sẽ gọi điện để xác
          nhận đơn hàng trong thời gian sớm nhất, đồng thời giải đáp các thắc
          mắc liên quan nếu khách hàng có nhu cầu.
        </p>
      </div>
    ),
  },
  {
    id: "quy-dinh-ho-tro-ky-thuat-va-sao-luu-du-lieu",
    title: "Quy định hỗ trợ kỹ thuật và sao lưu dữ liệu",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Đối tượng áp dụng: Khách hàng có nhu cầu hỗ trợ phần mềm bảo hành sửa
          chữa sản phẩm tại FPT Shop. Nhằm đảm bảo đầy đủ quyền lợi của khách
          hàng khi cài đặt, bảo hành sửa chữa sản phẩm, FPT Shop xin thông báo
          Quy định như sau: Để bảo vệ dữ liệu cá nhân, Quý khách vui lòng sao
          lưu và XOÁ các dữ liệu cá nhân trước khi bàn giao sản phẩm cho nhân
          viên FPT Shop. FPT Shop không chịu trách nhiệm về việc mất dữ liệu của
          Quý khách trong quá trình cài đặt, bảo hành sửa chữa. Để đảm bảo Quyền
          lợi, Quý khách vui lòng ký xác nhận để thông tin bàn giao thiết bị của
          Quý khách được ghi nhận trên hệ thống FPT Shop. FPT Shop không hỗ trợ
          cài đặt phần mềm không có bản quyền trên máy tính của Quý khách. Quý
          khách vui lòng kiểm tra tài khoản iCloud/ Google và các tài khoản xã
          hội khác trên máy trước khi rời cửa hàng. Tài khoản cài đặt trên máy
          phải là tài khoản cá nhân của Quý khách (chủ sở hữu máy). Nếu chưa có
          tài khoản iCloud, Quý khách liên hệ NV Kỹ thuật để được hỗ trợ tạo Tài
          khoản iCloud (Apple ID)/ Google và các tài khoản khác miễn phí tại cửa
          hàng. Đồng thời yêu cầu nhân viên cung cấp thông tin, mật khẩu tài
          khoản vừa được tạo trước khi rời cửa hàng.
        </p>
      </div>
    ),
  },
  {
    id: "nha-nhap-khau-truc-tiep",
    title: "Đại lý uỷ quyền và TTBH uỷ quyền của Apple",
    body: (
      <div>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          1. Đại lý ủy quyền toàn cầu Apple (Apple Authorized Reseller)
        </p>
        <p style={{ fontSize: 16 }}>
          FPT Shop là đại lý Apple ủy quyền toàn cầu tại Việt Nam và nhập khẩu,
          kinh doanh tất cả các sản phẩm từ Apple. Khách hàng không chỉ được
          trải nghiệm sản phẩm mới một cách hoàn hảo với khu trải nghiệm Apple
          Corner đạt tiêu chuẩn hãng mà còn được tư vấn đầy đủ trước khi quyết
          định mua. Đội ngũ chuyên viên tư vấn và cố vấn kỹ thuật FPT Shop và
          F.Studio by FPT được đào tạo bởi các chuyên gia Apple, sẽ tư vấn cũng
          như hỗ trợ kỹ thuật dành cho khách hàng một cách chuyên nghiệp nhất về
          sản phẩm, ứng dụng và các công nghệ mới nhất từ Apple.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          2. Trung tâm bảo hành ủy quyền Apple F.Care by FPT – Apple Authorized
          Service Provider
        </p>
        <p style={{ fontSize: 16 }}>
          F.Care by FPT là một chuỗi các trung tâm bảo hành được Apple Việt Nam
          ủy quyền về mặt pháp lý và kỹ thuật để thực hiện các dịch vụ sửa chữa,
          bảo hành đối với sản phẩm của hãng theo tiêu chuẩn do Apple quy định.
          Được vận hành và xây dựng bởi FPT Retail. Đến với F.Care, khách hàng
          sẽ được trải nghiệm dịch vụ chuẩn hãng, với đội ngũ kỹ thuật viên có
          kinh nghiệm dày dặn, được đào tạo bài bản bởi Apple.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-bao-mat",
    title: "Chính sách bảo mật",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          FPTshop.com.vn cam kết sẽ bảo mật những thông tin mang tính riêng tư
          của bạn. Bạn vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu
          hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ
          quyền lợi của người truy cập.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          1. Mục đích và phạm vi thu thập?
        </p>
        <p style={{ fontSize: 16 }}>
          Để truy cập và sử dụng một số dịch vụ tại FPTshop.com.vn, bạn có thể
          sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ
          tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính
          xác và hợp pháp. FPTshop.com.vn không chịu mọi trách nhiệm liên quan
          đến pháp luật của thông tin khai báo. Chúng tôi cũng có thể thu thập
          thông tin về số lần viếng thăm, bao gồm số trang bạn xem, số links
          (liên kết) bạn click và những thông tin khác liên quan đến việc kết
          nối đến site FPTshop.com.vn. Chúng tôi cũng thu thập các thông tin mà
          trình duyệt Web (Browser) bạn sử dụng mỗi khi truy cập vào
          FPTshop.com.vn, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng,
          thời gian và những địa chỉ mà Browser truy xuất đến.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          2. Phạm vi sử dụng thông tin
        </p>
        <p style={{ fontSize: 16 }}>
          FPTshop.com.vn thu thập và sử dụng thông tin cá nhân bạn với mục đích
          phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này.
          Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ
          trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, đơn đặt hàng,
          thư cảm ơn, sms, thông tin về kỹ thuật và bảo mật…
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          3. Thời gian lưu trữ thông tin
        </p>
        <p style={{ fontSize: 16 }}>
          Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu
          hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong
          mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy
          chủ của FPTshop.com.vn.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
        </p>
        <p style={{ fontSize: 16 }}>
          Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT Địa chỉ đăng ký kinh doanh: 261
          - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh Văn phòng: 261 - 263 Khánh
          Hội, P2, Q4, TP. Hồ Chí Minh Điện thoại văn phòng: 028.38345837
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu
          cá nhân
        </p>
        <p style={{ fontSize: 16 }}>
          Hiện website chưa triển khai trang quản lý thông tin cá nhân của thành
          viên, vì thế việc tiếp cận và chỉnh sửa dữ liệu cá nhân dựa vào yêu
          cầu của khách hàng bằng cách hình thức sau: Gọi điện thoại đến tổng
          đài chăm sóc khách hàng 1800 6601, bằng nghiệp vụ chuyên môn xác định
          thông tin cá nhân và nhân viên tổng đài sẽ hỗ trợ chỉnh sửa thay người
          dùng Để lại bình luận hoặc gửi góp ý trực tiếp từ website
          FPTshop.com.vn, quản trị viên kiểm tra thông tin và xem xét nội dung
          bình luận có phù hợp với pháp luật và chính sách của FPTshop.com.vn
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          6. Cam kết bảo mật thông tin cá nhân khách hàng
        </p>
        <p style={{ fontSize: 16 }}>
          Thông tin cá nhân của thành viên trên FPTshop.com.vn được
          FPTshop.com.vn cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông
          tin cá nhân của FPTshop.com.vn. Việc thu thập và sử dụng thông tin của
          mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó
          trừ những trường hợp pháp luật có quy định khác. Không sử dụng, không
          chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá
          nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.
          Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến
          mất mát dữ liệu cá nhân thành viên, FPTshop.com.vn sẽ có trách nhiệm
          thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và
          thông báo cho thành viên được biết. Bảo mật tuyệt đối mọi thông tin
          giao dịch trực tuyến của Thành viên bao gồm thông tin hóa đơn kế toán
          chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của
          FPTshop.com.vn. Hệ thống thanh toán thẻ được cung cấp bởi các đối tác
          cổng thanh toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động
          hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ
          tại FPTShop đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành. Ban
          quản lý FPTshop.com.vn yêu cầu các cá nhân khi đăng ký/mua hàng là
          thành viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan như:
          Họ và tên, địa chỉ liên lạc, email, số chứng minh nhân dân, điện
          thoại, số tài khoản, số thẻ thanh toán …., và chịu trách nhiệm về tính
          pháp lý của những thông tin trên. Ban quản lý FPTshop.com.vn không
          chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan
          đến quyền lợi của Thành viên đó nếu xét thấy tất cả thông tin cá nhân
          của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>7. Quy định bảo mật</p>
        <p style={{ fontSize: 16 }}>
          Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa
          (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối
          Tác Cổng Thanh Toán gồm: Thông tin tài chính của Khách hàng sẽ được
          bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL 256-bit
          (Secure Sockets Layer). Mật khẩu sử dụng một lần (OTP) được gửi qua
          SMS để đảm bảo việc truy cập tài khoản được xác thực. Các nguyên tắc
          và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy
          định của Ngân hàng nhà nước Việt Nam. Chính sách bảo mật giao dịch
          trong thanh toán của FPTShop áp dụng với Khách hàng: Thông tin thẻ
          thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch
          KHÔNG được lưu trên hệ thống của FPTShop. Đối Tác Cổng Thanh Toán sẽ
          lưu giữ và bảo mật theo tiêu chuẩn quốc tế PCI DSS. Đối với thẻ nội
          địa (internet banking), FPTShop chỉ lưu trữ mã đơn hàng, mã giao dịch
          và tên ngân hàng. FPTShop cam kết đảm bảo thực hiện nghiêm túc các
          biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện
          trên trang FPTShop.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          8. Làm cách nào để yêu cầu xóa dữ liệu?
        </p>
        <p style={{ fontSize: 16 }}>
          Bạn có thể gửi yêu cầu xóa dữ liệu qua email Trung tâm hỗ trợ của
          chúng tôi: fptshop@fpt.com.vn. Vui lòng cung cấp càng nhiều thông tin
          càng tốt về dữ liệu nào bạn muốn xóa. Yêu cầu sẽ được chuyển đến nhóm
          thích hợp để đánh giá và xử lý. Chúng tôi sẽ liên hệ từng bước để cập
          nhật cho bạn về tiến trình xóa.
        </p>
      </div>
    ),
  },
  {
    id: "gioi-thieu",
    title: "Giới thiệu về Wumiibo Shop",
    body: (
      <div>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>1. Về chúng tôi</p>
        <p style={{ fontSize: 16 }}>
          FPT Shop là chuỗi chuyên bán lẻ các sản phẩm kỹ thuật số di động bao
          gồm điện thoại di động, máy tính bảng, laptop, phụ kiện và dịch vụ
          công nghệ… cùng các mặt hàng gia dụng, điện máy chính hãng, chất lượng
          cao đến từ các thương hiệu lớn, với mẫu mã đa dạng và mức giá tối ưu
          nhất cho khách hàng. FPT Shop là hệ thống bán lẻ đầu tiên ở Việt Nam
          được cấp chứng chỉ ISO 9001:2000 về quản lý chất lượng theo tiêu chuẩn
          quốc tế. Hiện nay, FPT Shop là chuỗi bán lẻ lớn thứ 2 trên thị trường
          bán lẻ hàng công nghệ.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>2. Sứ mệnh</p>
        <p style={{ fontSize: 16 }}>
          Hệ thống FPT Shop kỳ vọng mang đến cho khách hàng những trải nghiệm
          mua sắm tốt nhất thông qua việc cung cấp các sản phẩm chính hãng, dịch
          vụ chuyên nghiệp cùng chính sách hậu mãi chu đáo. FPT Shop không ngừng
          cải tiến và phát triển, hướng tới việc trở thành nhà bán lẻ công nghệ
          hàng đầu Việt Nam, đồng thời mang lại giá trị thiết thực cho cộng
          đồng.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Giá trị cốt lõi</p>
        <ul>
          <li>
            Chất lượng và Uy tín: FPT Shop cam kết cung cấp các sản phẩm chính
            hãng, chất lượng cao với chính sách bảo hành uy tín và dịch vụ chăm
            sóc khách hàng chu đáo, nhằm đem đến cho khách hàng sự an tâm tuyệt
            đối khi mua sắm các sản phẩm công nghệ, điện máy - gia dụng.
          </li>
          <li>
            Khách hàng là trọng tâm: Phục vụ khách hàng luôn là ưu tiên số 1.
            FPT Shop luôn chú trọng hoàn thiện chất lượng dịch vụ, bồi dưỡng đội
            ngũ nhân viên nhiệt tình, trung thực, chân thành, mang lại lợi ích
            và sự hài lòng tối đa cho khách hàng.
          </li>
          <li>
            Đổi mới và phát triển: FPT Shop luôn cập nhật và đổi mới sản phẩm,
            công nghệ cũng như dịch vụ để đáp ứng nhu cầu thay đổi liên tục của
            thị trường và khách hàng.{" "}
          </li>
          <li>
            Đồng hành cùng cộng đồng: FPT Shop không chỉ tập trung vào phát
            triển kinh doanh mà còn chú trọng đến các hoạt động xã hội, đóng góp
            tích cực cho sự phát triển của cộng đồng và xã hội.
          </li>
        </ul>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          4. Định hướng phát triển
        </p>
        <p style={{ fontSize: 16 }}>
          Với mục tiêu “Tạo trải nghiệm xuất sắc cho khách hàng”, FPT Shop tiếp
          tục đẩy mạnh chuyển đổi số để ứng dụng vào công tác bán hàng, quản lý
          và đào tạo nhân sự... theo chiến lược tận tâm phục vụ nhằm gia tăng
          trải nghiệm khách hàng. Đầu tư mạnh mẽ kinh doanh trực tuyến đa nền
          tảng, khai thác và ứng dụng công nghệ để thấu hiểu và tiếp cận khách
          hàng một cách linh hoạt và hiệu quả nhất, không ngừng khẳng định vị
          thế là một trong những thương hiệu bán lẻ uy tín tại Việt Nam.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          5. Cột mốc phát triển
        </p>
        <ul>
          <li>2013: FPT Shop chính thức đạt mốc 100 cửa hàng.</li>
          <li>
            2014: Trở thành nhà nhập khẩu trực tiếp của iPhone chính hãng.
          </li>
          <li>
            2015: Đạt mức tăng trưởng nhanh nhất so với các công ty trực thuộc
            cùng Công ty Cổ phần FPT.
          </li>
          <li>
            2016: Doanh thu online tăng gấp đôi. Khai trương 80 khu trải nghiệm
            Apple corner trên toàn quốc.
          </li>
          <li>
            08/2024: Đồng loạt khai trương 10 cửa hàng điện máy trên toàn quốc,
            đánh dấu việc mở rộng lĩnh vực kinh doanh sang điện máy, gia dụng.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "chinh-sach-bao-hanh",
    title: "Chính sách bảo hành",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Tất cả sản phẩm tại FPT Shop kinh doanh đều là sản phẩm chính hãng và
          được bảo hành theo đúng chính sách của nhà sản xuất(*). Ngoài ra FPT
          Shop cũng hỗ trợ gửi bảo hành miễn phí giúp khách hàng đối với cả sản
          phẩm do FPT Shop bán ra và sản phẩm Quý khách mua tại các chuỗi bán lẻ
          khác.
        </p>
        <p style={{ fontSize: 16 }}>
          Mua hàng tại FPT Shop, Quý khách sẽ được hưởng những đặc quyền sau:
        </p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Bảo hành đổi sản phẩm mới ngay tại shop trong 30 ngày nếu có lỗi
            NSX.(**)
          </li>
          <li style={{ fontSize: 16 }}>
            Gửi bảo hành chính hãng không mất phí vận chuyển.(***)
          </li>
          <li style={{ fontSize: 16 }}>
            Theo dõi tiến độ bảo hành nhanh chóng qua kênh hotline hoặc tự tra
            cứu Tại đây.
          </li>
          <li style={{ fontSize: 16 }}>
            Hỗ trợ làm việc với hãng để xử lý phát sinh trong quá trình bảo
            hành.
          </li>
        </ul>
        <p style={{ fontSize: 16 }}>
          Bên cạnh đó Quý khách có thể tham khảo một số các trường hợp thường
          gặp nằm ngoài chính sách bảo hành sau để xác định sơ bộ máy có đủ điều
          kiện bảo hành hãng:
        </p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Sản phẩm hết hạn bảo hành (Vui lòng tra cứu thời hạn bảo hành sản
            phẩm Tại đây).
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm đã bị thay đổi, sửa chữa không thuộc các Trung Tâm Bảo Hành
            Ủy Quyền của Hãng.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm lắp đặt, bảo trì, sử dụng không đúng theo hướng dẫn của Nhà
            sản xuất gây ra hư hỏng.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm lỗi do ngấm nước, chất lỏng và bụi bẩn. Quy định này áp
            dụng cho cả những thiết bị đạt chứng nhận kháng nước/kháng bụi cao
            nhất là IP68.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm bị biến dạng, nứt vỡ, cấn móp, trầy xước nặng do tác động
            nhiệt, tác động bên ngoài.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa chất.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm bị hư hại do thiên tai, hỏa hoạn, lụt lội, sét đánh, côn
            trùng, động vật vào.
          </li>
          <li style={{ fontSize: 16 }}>
            Sản phẩm trong tình trạng bị khóa tài khoản cá nhân như: Tài khoản
            khóa máy/màn hình, khóa tài khoản trực tuyến Xiaomi Cloud, Samsung
            Cloud, iCloud, Gmail...
          </li>
          <li style={{ fontSize: 16 }}>
            Khách hàng sử dụng phần mềm, ứng dụng không chính hãng, không bản
            quyền.
          </li>
          <li style={{ fontSize: 16 }}>
            Màn hình có bốn (04) điểm chết trở xuống.
          </li>
        </ul>
        <p style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>Lưu ý:</p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Chương trình bảo hành bắt đầu có hiệu lực từ thời điểm FPT Shop xuất
            hóa đơn cho Quý khách.
          </li>
          <li style={{ fontSize: 16 }}>
            Với mỗi dòng sản phẩm khác nhau sẽ có chính sách bảo hành khác nhau
            tùy theo chính sách của Hãng/Nhà cung cấp.
          </li>
          <li style={{ fontSize: 16 }}>
            Để tìm hiểu thông tin chi tiết về chính sách bảo hành cho sản phẩm
            cụ thể, xin liên hệ bộ phận Chăm sóc Khách hàng của FPT Shop 1800
            6616.
          </li>
          <li style={{ fontSize: 16 }}>
            Tra cứu tình trạng máy gửi bảo hành bất cứ lúc nào Tại đây.
          </li>
          <li style={{ fontSize: 16 }}>
            Trong quá trình thực hiện dịch vụ bảo hành, các nội dung lưu trữ
            trên sản phẩm của Quý khách sẽ bị xóa và định dạng lại. Do đó, Quý
            khách vui lòng tự sao lưu toàn bộ dữ liệu trong sản phẩm, đồng thời
            gỡ bỏ tất cả các thông tin cá nhân mà Quý khách muốn bảo mật. FPT
            Shop không chịu trách nhiệm đối với bất kỳ mất mát nào liên quan tới
            các chương trình phần mềm, dữ liệu hoặc thông tin nào khác lưu trữ
            trên sản phẩm bảo hành.
          </li>
          <li style={{ fontSize: 16 }}>
            Vui lòng tắt tất cả các mật khẩu bảo vệ, FPT Shop sẽ từ chối tiếp
            nhận bảo hành nếu thiết bị của bạn bị khóa bởi bất cứ phương pháp
            nào.
          </li>
          <p style={{ fontSize: 16 }}>
            (*) Áp dụng với các sản phẩm bán mới hoặc còn hạn bảo hành mặc định
            nếu đã qua sử dụng.
          </p>
          <p style={{ fontSize: 16 }}>
            (**) Áp dụng với các sản phẩm thuộc diện đổi mới trong 30 ngày nếu
            có lỗi NSX được công bố trên website Chính sách đổi trả.
          </p>
          <p style={{ fontSize: 16 }}>
            (***) Trừ các sản phẩm có chính sách bảo hành tại nhà, sản phẩm
            thuộc diện cồng kềnh.
          </p>
        </ul>
      </div>
    ),
  },
  {
    id: "chinh-sach-giao-hang",
    title: "Chính sách giao hàng & lắp đặt",
    body: (
      <div>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Giao hàng tại nhà</p>
        <p style={{ fontSize: 16 }}>
          Mua hàng tại FPT Shop, khách hàng sẽ được hỗ trợ giao hàng tại nhà hầu
          như trên toàn quốc. Với độ phủ trên khắp 63 tỉnh thành, Quý khách sẽ
          nhận được sản phẩm nhanh chóng mà không cần mất thời gian di chuyển
          tới cửa hàng.
        </p>
        <p style={{ fontSize: 16 }}>Giao hàng</p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Áp dụng với tất cả các sản phẩm có áp dụng giao hàng tại nhà, không
            giới hạn giá trị.
          </li>
          <li style={{ fontSize: 16 }}>
            Miễn phí giao hàng trong bán kính 20km có đặt shop (Đơn hàng giá trị
            nhỏ hơn 100.000 VNĐ thu phí 10.000 VNĐ).
          </li>
          <li style={{ fontSize: 16 }}>
            Với khoảng cách lớn hơn 20km, nhân viên FPT Shop sẽ tư vấn chi tiết
            về cách thức giao nhận thuận tiện nhất.
          </li>
        </ul>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Thanh toán</p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Đơn hàng có giá trị từ 50 triệu trở lên: Quý khách phải thanh toán
            trước 100% giá trị đơn hàng nếu muốn giao hàng tại nhà.
          </li>
          <li style={{ fontSize: 16 }}>
            Đơn hàng có giá trị dưới 50 triệu: Quý khách có thể nhận hàng và
            thanh toán tại nhà khi đồng ý mua hàng.
          </li>
        </ul>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Hỗ trợ lắp đặt</p>
        <p>
          Đối với các sản phẩm có chính sách lắp đặt tại nhà (VD: TV, Điều
          hòa,...) sau khi sản phẩm được giao tới nơi. FPT Shop sẽ hỗ trợ tư
          vấn, lắp đặt và hướng dẫn sử dụng miễn phí cho khách hàng.
        </p>
      </div>
    ),
  },
  {
    id: "cau-hoi-thuong-gap",
    title: "Câu hỏi thường gặp",
    body: (
      <div>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          1. Mua sản phẩm FPT Shop được bảo hành như thế nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Để đảm bảo quyền lợi của Quý khách hàng khi mua sản phẩm tại các cửa
          hàng thuộc hệ thống cửa hàng FPT Shop. Chúng tôi cam kết tất cả các
          sản phẩm được tuân theo các điều khoản bảo hành của sản phẩm tại thời
          điểm xuất hóa đơn cho Quý khách hàng. Các sản phẩm điện thoại sẽ có
          chính sách bảo hành khác nhau tùy thuộc vào hãng sản xuất. Khách hàng
          có thể bảo hành máy tại các cửa hàng FPT Shop trên toàn quốc cũng như
          các trung tâm bảo hành chính hãng sản phẩm. Khách hàng có thể truy cập
          các đường dẫn sau để tìm kiếm địa chỉ trung tâm bảo hoặc cửa hàng FPT
          Shop gần nhất và tham khảo chính sách bảo hành: Chính sách bảo hành:
          Quý khách vui lòng Xem tại đây. Cửa hàng FPT Shop gần nhất: Quý khách
          vui lòng Xem tại đây. Để tra cứu thông tin máy gửi bảo hành, Quý khách
          hàng vui lòng tra cứu tại Trang kiểm tra bảo hành.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          2. Mua sản phẩm tại FPT Shop có được đổi trả không? Nếu được thì phí
          đổi trả sẽ được tính như thế nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm các
          sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung lượng. Trong
          tình huống sản phẩm đổi hết hàng, khách hàng có thể đổi sang một sản
          phẩm khác tương đương hoặc cao hơn về giá trị so với sản phẩm lỗi.
          Trường hợp khách hàng muốn trả sản phẩm: FPTShop sẽ kiểm tra tình
          trạng máy và thông báo đến Khách hàng về giá trị thu lại sản phẩm ngay
          tại cửa hàng. Để biết thêm thông tin chi tiết, Quý khách hàng có thể
          tra cứ phí đổi trả chi tiết Tại đây.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          3. FPT Shop có chính sách giao hàng tận nhà không? Nếu giao hàng tại
          nhà mà không ưng sản phẩm có được trả lại không?
        </p>
        <p style={{ fontSize: 16 }}>
          FPT Shop cam kết giao hàng toàn bộ 63 tỉnh thành, FPT Shop nhận giao
          đơn hàng có thời gian hẹn giao tại nhà trước 20h00. Miễn phí giao hàng
          với các đơn hàng trong bán kính 20km có đặt shop (Với đơn hàng có giá
          trị nhỏ hơn 100.000đ sẽ thu phí 10.000đ) nhân viên FPT Shop sẽ tư vấn
          chi tiết về cách thức giao nhận thuận tiện nhất. Nếu Quý khách hàng
          không ưng ý với sản phẩm khi nhận hàng, Quý khách có thể từ chối mua
          hàng mà không mất bất cứ chi phí nào. Để biết thêm thông tin, Quý
          khách có thể tham khảo Chính sách giao hàng Tại đây. Lưu ý: Đối với
          các sản phẩm còn nguyên seal, khách hàng muốn bóc seal sẽ phải thanh
          toán 100% giá trị sản phẩm. Nếu không ưng, FPT Shop sẽ hỗ trợ đổi sản
          phẩm cho khách hàng theo chính sách đổi trả. Đối với các sản phẩm
          không seal, Quý khách hàng có thể kiểm tra máy mà không phải chịu bất
          cứ chi phí nào nếu không mua.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          4. Làm thế nào để được mua hàng theo chính sách F.Friends?
        </p>
        <p style={{ fontSize: 16 }}>
          Để được mua hàng và hưởng quyền lợi theo chính sách mua hàng
          F.Friends, Quý khách hàng phải là hội viên. Để biết bạn có là hội viên
          hay không, bạn cần biết doanh nghiệp bạn đang công tác đã ký hợp đồng
          tham gia chương trình F.Friends hay chưa. Điều kiện tiếp theo là bạn
          đã ký hợp đồng chính thức với doanh nghiệp đó chưa. Nếu bạn đã là hội
          viên của chương trình này, bạn sẽ được hưởng ưu đãi trả thẳng giảm 3%
          khi mua sản phẩm. Để được trả góp bạn phải đủ 8 tháng công tác tại
          doanh nghiệp. Quý khách có thể tham khảo chi tiết về Chính sách F.
          Friends Tại đây.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          5. Làm thế nào để kiểm tra được tình trạng máy đã gửi đi bảo hành tại
          FPT Shop?
        </p>
        <p style={{ fontSize: 16 }}>
          Để tra cứu thông tin máy gửi bảo hành, Quý khách hàng có thể truy cập
          Tại đây. → Chọn mục "Tra cứu thông tin máy".
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          6. Muốn kiểm tra sản phẩm đã mua từ FPT Shop có chính hãng của Apple
          thì xem như thế nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Để tra cứu thông tin sản phẩm chính hãng của Apple, Quý khách hàng có
          thể truy cập Tại đây. → Nhập số sê-ri của thiết bị.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          7. Cần hướng dẫn cách sử dụng về sản phẩm thì liên hệ hoặc xem ở đâu
          được?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách có thể tham khảo sách hướng dẫn sử dụng kèm theo sản phẩm
          hoặc gọi vào tổng đài 1800.6601 nhánh số 2 để gặp điện thoại viên
          hướng dẫn thêm.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          8. Muốn xem giá thay thế linh kiện cho sản phẩm đã mua tại FPT Shop
          thì xem ở đâu?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách tham khảo bảng giá sửa chữa Tại đây.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          9. Đặt đơn hàng thành công và muốn theo dõi tiến độ đơn hàng đã được
          đi giao chưa thì xem ở đâu?
        </p>
        <p style={{ fontSize: 16 }}>
          Để tra cứu thông tin đơn hàng đã đặt thành công và tiến độ xử lý đơn
          hàng, Quý khách hàng có thể truy cập Tại đây.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          10. Sản phẩm mới mua về bị lỗi không sử dụng được thì liên hệ ai để xử
          lý nhanh mà không bị mất thời gian di chuyển nhiều lần?
        </p>
        <p style={{ fontSize: 16 }}>
          Khách hàng có thể mang máy đến tại các cửa hàng FPT Shop trên toàn
          quốc cũng như các trung tâm bảo hành chính hãng sản phẩm nơi gần nhà
          khách hàng nhất. Khách hàng có thể truy cập Tại đây để tìm kiếm địa
          chỉ cửa hàng FPT Shop gần nhất.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          11. Làm thế nào để tra cứu về hóa đơn đã mua hàng tại FPT Shop?
        </p>
        <p style={{ fontSize: 16 }}>Quý khách thực hiện tra cứu Tại đây.</p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          12. Cần hướng dẫn vấn đề điều chỉnh hoặc xuất lại hóa đơn do bị sai
          thông tin khách hàng?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách vui lòng liên hệ tổng đài 1800.6616 để gặp điện thoại viên
          tư vấn hỗ trợ hoặc Quý khách tham khảo qua hướng dẫn Tại đây nếu liên
          quan đến hóa đơn công ty.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          13. Điện thoại mua tại FPT Shop bị lỗi và gửi đi bảo hành nhưng muốn
          mượn một máy khác để dùng trong thời gian chờ bảo hành thì có được
          không và liên hệ đến ai để hỗ trợ vấn đề này?
        </p>
        <p style={{ fontSize: 16 }}>
          FPT Shop sẽ hỗ trợ cho khách hàng mượn điện thoại khác sử dụng theo
          quy định của công ty, mời Quý khách liên hệ tại cửa hàng FPT Shop nơi
          khách hàng gửi máy đi bảo hành để được tư vấn hỗ trợ.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          14. Muốn thanh toán tiền thu hộ qua kênh online thì thực hiện bằng
          cách nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách thực hiện truy cập Tại đây vào đường dẫn sau để thực hiện
          thanh toán.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          15. Cần tra cứu điểm mua hàng tại FPT Shop đã tích điểm được bao nhiêu
          thì xem ở đâu?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách thực hiện tra cứu Tại đây và đăng nhập số điện thoại mua
          hàng của Quý khách.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          16. Muốn cập nhật máy Apple có thời gian bảo hành không đúng hoặc chưa
          kích hoạt bảo hành trên hệ thống Website của Apple thì làm thế nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách vui lòng chờ thêm và kiểm tra lại thông tin bảo hành sau 72h
          kể từ khi kích hoạt máy (không tính lễ, Tết, Thứ 7, CN). Nếu sau thời
          gian này vẫn chưa cập nhật thời gian bảo hành thì Quý khách vui lòng
          liên hệ tổng đài 1800.6616 để gặp tổng đài viên hỗ trợ.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          17. Cách tra cứu về thông tin trúng thưởng của FPT Shop khi tham gia
          các chương trình mini game?
        </p>
        <p style={{ fontSize: 16 }}>Quý khách thực hiện tra cứu Tại đây.</p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          18. Máy gửi đi sửa dịch vụ và đã nhận thông tin báo phí nhưng muốn
          thanh toán phí online thì thực hiện bằng cách nào?
        </p>
        <p style={{ fontSize: 16 }}>
          Quý khách vui lòng liên hệ tổng đài 1800.6616 để gặp điện thoại viên
          tư vấn hỗ trợ.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          19. Phụ kiện nhập khẩu Apple đã hết hạn bảo hành và muốn gửi sửa chữa
          dịch vụ tại FPT Shop thì có được không?
        </p>
        <p style={{ fontSize: 16 }}>
          Đối với Phụ kiện nhập khẩu nếu Quý khách có nhu cầu gửi hãng để làm
          dịch vụ FPT Shop tiếp nhận sản phẩm gửi về TTBH kiểm tra, có chi phí
          báo lại Quý khách sau.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-tra-gop",
    title: "Chính sách trả góp",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Nhằm mang tới sự thuận tiện trong quá trình mua hàng, giúp Quý khách
          nhanh chóng sở hữu sản phẩm mong muốn, đi kèm với đó là các chương
          trình hấp dẫn. FPT Shop cung cấp dịch vụ trả góp đa dạng, dễ dàng tiếp
          cận, trong đó bao gồm trả góp qua thẻ tín dụng, trả góp qua Kredivo,
          trả góp qua Home PayLater, trả góp qua MoMo và trả góp qua Công ty tài
          chính.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          1. Trả góp qua thẻ tín dụng
        </p>
        <p style={{ fontSize: 16 }}>
          Hiệu lực còn lại của thẻ phải lớn hơn kỳ hạn trả góp, riêng MB, Kiên
          Long Bank thì hiệu lực của thẻ phải lớn hơn kỳ hạn trả góp ít nhất
          (01) tháng. Số dư thẻ phải lớn hơn hoặc bằng tổng giá trị trả góp.
          Khách hàng phải nhập đúng số thẻ, ngày hết hạn và số CVV khi thực hiện
          giao dịch. Thời gian trả góp 3, 6, 9, 12, 15, 18, 24, 36 tháng (tuỳ
          từng ngân hàng). Số lần mua trả góp tuỳ thuộc vào hạn mức thẻ tín
          dụng. Giá trị thanh toán phải đạt số tiền trả góp tối thiểu như sau:
        </p>
        <ul>
          <li style={{ fontSize: 16 }}>
            Từ 500.000đ trở lên với Muadee by HDBank.
          </li>
          <li style={{ fontSize: 16 }}>
            Từ 1.000.000đ trở lên với NCB, Sacombank.
          </li>
          <li style={{ fontSize: 16 }}>
            Từ 2.000.000đ trở lên đối với Techcombank, FE Credit, VIB, Home
            Credit và Lotte Finance.
          </li>
          <li style={{ fontSize: 16 }}>
            Từ 3.000.000đ trở lên đối với các ngân hàng còn lại.
          </li>
        </ul>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Lưu ý:</p>
        <p style={{ fontSize: 16 }}>
          Không nên giao dịch cận ngày sao kê. Đối với riêng các ngân hàng bao
          gồm VietcomBank, MB, SHB, OCB, Liên Việt Postbank, HDBank, PVcombank,
          TPBank, Shinhan Finance (SVFC), Mcredit, Wooribank, Lotte Finance,
          Ngân Lượng khoá trên hệ thống các ngày gần sao kê tuỳ theo từng Ngân
          hàng, loại thẻ. Trong thời gian đó chủ thẻ vui lòng sử dụng thẻ của
          các Ngân hàng còn lại để thực hiện giao dịch trả góp. Chương trình
          không áp dụng cho thẻ phụ, thẻ Debit và thẻ tín dụng phát hành tại
          nước ngoài.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          2. Trả góp qua nhà tài chính
        </p>
        <p style={{ fontSize: 16 }}>
          Khách hàng mang hồ sơ được yêu cầu tới FPT Shop gần nhất để đăng ký,
          hoàn tất thủ tục trả góp qua nhà tài chính.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>3. Trả góp qua MoMo</p>
        <p style={{ fontSize: 16 }}>
          Chương trình trả góp MoMo áp dụng cho các sản phẩm chính thuộc ngành
          hàng Apple, gồm: iPhone, iPad, Apple Watch, MacBook, iMac, Màn hình
          Apple. Ngoài ra, khách hàng có thể mua thêm các sản phẩm phụ đi kèm
          như phụ kiện hoặc dịch vụ tại FPT Shop, tạo điều kiện thuận lợi để bạn
          sở hữu trọn bộ sản phẩm mong muốn. Lưu ý: Chương trình không áp dụng
          cho các sản phẩm Apple đã qua sử dụng. Điều kiện và quy định áp dụng
          Để tham gia chương trình trả góp qua MoMo tại FPT Shop, khách hàng cần
          tuân thủ một số điều kiện và quy định như sau: 3.1. Khách hàng được
          MoMo cấp hạn mức Trước tiên, khách hàng cần có tài khoản MoMo với hạn
          mức được phê duyệt sẵn. Quá trình này rất dễ dàng và bạn có thể hoàn
          tất trong vài phút ngay trên ứng dụng MoMo. 3.2. Điều kiện đối với sản
          phẩm iPhone Sau khi xuất hóa đơn, khách hàng cần khui seal và kích
          hoạt máy tại cửa hàng FPT Shop. Điều này nhằm đảm bảo sản phẩm là mới
          100% và không có lỗi kỹ thuật trước khi giao đến tay khách hàng. 3.3.
          Quy định về giá trị khoản vay Tổng giá trị khoản vay cho đơn hàng trả
          góp qua MoMo dao động từ 3 triệu đồng đến tối đa 100 triệu đồng. Mỗi
          đơn hàng trả góp chỉ được phép mua 1 sản phẩm chính, đồng thời có thể
          mua kèm tối đa 5 sản phẩm phụ (bao gồm phụ kiện và dịch vụ). Tổng giá
          trị các sản phẩm phụ không được vượt quá 5 triệu đồng và không được
          nhiều hơn giá trị sản phẩm chính. 3.4. Chính sách hoàn hủy Hợp đồng
          trả góp sau khi đã hoàn tất và kích hoạt khoản vay sẽ không được hoàn
          hoặc hủy dưới bất kỳ hình thức nào. FPT Shop chỉ chấp nhận trả hàng
          trong trường hợp khoản vay đã được tất toán.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>4. Trả góp qua Kredivo</p>
        <p style={{ fontSize: 16 }}>
        Chính sách đang được cập nhật.
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>5. Trả góp qua Home PayLater</p>
        <p style={{ fontSize: 16 }}>
        Chính sách đang được cập nhật.
        </p>
      </div>
    ),
  },
  {
    id: "diem-cung-cap-dich-vu-vien-thong-fpt",
    title: "Danh sách điểm cung cấp dịch vụ viễn thông FPT",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Danh sách đang được cập nhật.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-goi-cuoc-di-dong-fpt",
    title: "Chính sách gói cước di động FPT",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Chính sách đang được cập nhật.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-doi-san-pham",
    title: "Chính sách đổi trả",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Chính sách đang được cập nhật.
        </p>
      </div>
    ),
  },
  {
    id: "chinh-sach-gia-cuoc",
    title: "Chính sách đổi trả",
    body: (
      <div>
        <p style={{ fontSize: 16 }}>
          Chính sách đang được cập nhật.
        </p>
      </div>
    ),
  },
];

const SupportContent = () => {
  return <div></div>;
};

export default SupportContent;
