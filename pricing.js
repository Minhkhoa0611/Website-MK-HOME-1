document.addEventListener("DOMContentLoaded", () => {
    const pricingSection = `
        <div id="baogia" class="baogia">
            <h1>BÁO GIÁ DỊCH VỤ CỦA XAYDUNGMINHKHOA</h1>
            <h2>📋 Dịch vụ Giám Sát</h2>
            <table>
                <tr>
                    <th>Gói dịch vụ</th>
                    <th>Thời gian giám sát</th>
                    <th>Thời gian (h)/Ngày</th>
                    <th>Nhà phố</th>
                    <th>Biệt thự</th>
                </tr>
                <tr>
                    <td>Gói tiêu chuẩn</td>
                    <td>3 buổi/tuần</td>
                    <td>3 – 4 giờ</td>
                    <td>8.000.000đ</td>
                    <td>10.000.000đ</td>
                </tr>
                <tr>
                    <td>Tư vấn Giám Sát bán thời gian</td>
                    <td>5 buổi/tuần</td>
                    <td>3 – 4 giờ</td>
                    <td>12.000.000đ</td>
                    <td>14.000.000đ</td>
                </tr>
                <tr>
                    <td>Tư vấn Giám Sát nguyên ngày</td>
                    <td>Thứ 2 – Thứ 7</td>
                    <td>7 – 8 giờ</td>
                    <td>18.000.000đ</td>
                    <td>22.000.000đ</td>
                </tr>
            </table>
            <h2>📐 Dịch vụ Thiết Kế & Thi Công</h2>
            <table>
                <tr>
                    <th>Dịch vụ</th>
                    <th>Nhà phố</th>
                    <th>Biệt thự</th>
                </tr>
                <tr>
                    <td>Thiết kế Full Hồ Sơ</td>
                    <td>70.000đ/m²</td>
                    <td>150.000đ/m²</td>
                </tr>
                <tr>
                    <td>Đơn giá thi công trọn gói (Không bao gồm Nội thất rời)</td>
                    <td>6.000.000đ/m²</td>
                    <td>6.000.000đ/m²</td>
                </tr>
                <tr>
                    <td>Đơn giá thi công Nhân Công (Không bao gồm Vật Tư)</td>
                    <td>2.500.000đ/m²</td>
                    <td>2.500.000đ/m²</td>
                </tr>
            </table>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", pricingSection);

    const pricingContent = `
        <div class="pricing">
            <h2>Báo giá dịch vụ</h2>
            <p>Chúng tôi cung cấp các gói dịch vụ với mức giá hợp lý, phù hợp với nhu cầu của khách hàng.</p>
        </div>
    `;
    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
        pricingElement.innerHTML = pricingContent;
    }
});
