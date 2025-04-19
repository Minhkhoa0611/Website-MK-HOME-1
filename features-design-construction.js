document.addEventListener("DOMContentLoaded", () => {
    const sections = `
        <section class="features">
            <div class="container">
                <h2>Liên tục cập nhật mẫu mới</h2>
                <p>Chúng tôi luôn theo sát các xu hướng hiện nay trong lĩnh vực thiết kế. Vì vậy, khách hàng của chúng tôi chỉ nhận được những nội thất hiện đại và được ưa chuộng.</p>
        
                <h2>Thi công nhất quán</h2>
                <p>Chúng tôi tự mình đảm nhận tất cả các dự án – chúng tôi cung cấp một chu trình làm việc đầy đủ. Cách tiếp cận này đảm bảo kết quả chất lượng.</p>
        
                <h2>Cá nhân hoá mẫu thiết kế</h2>
                <p>Chúng tôi không thực hiện các dự án trên khuôn mẫu có sẵn. Chúng tôi tiếp cận từng khách hàng từ quan điểm giải quyết các vấn đề cụ thể của họ, thay vì đề xuất các giải pháp có sẵn.</p>
        
                <h2>Đội xây dựng của chúng tôi</h2>
                <p>Chúng tôi chuyên cung cấp đội ngũ chuyên gia có trình độ để thực hiện dự án chính xác nhất và đảm bảo chất lượng cao, đúng tiến độ hoàn thành.</p>
            </div>
        </section>

        <section class="design-process">
            <div class="container">
                <h2>Quy trình tư vấn thiết kế</h2>
                <div class="steps">
                    <div class="step">
                        <h3>01</h3>
                        <p><strong>Tiếp nhận</strong><br>Tiếp nhận thông tin và yêu cầu của khách hàng</p>
                    </div>
                    <div class="step">
                        <h3>02</h3>
                        <p><strong>Tư vấn báo giá</strong><br>Tư vấn báo giá gói thiết kế và dự trù gói thi công</p>
                    </div>
                    <div class="step">
                        <h3>03</h3>
                        <p><strong>Khảo sát ký hợp đồng</strong><br>Khảo sát địa hình và tư vấn chi tiết, ký hợp đồng thiết kế</p>
                    </div>
                    <div class="step">
                        <h3>04</h3>
                        <p><strong>Mặt bằng công năng</strong><br>Triển khai mặt bằng công năng theo yêu cầu của khách hàng</p>
                    </div>
                    <div class="step">
                        <h3>05</h3>
                        <p><strong>Thiết kế 3D kiến trúc</strong><br>Thiết kế 3D kiến trúc công trình</p>
                    </div>
                    <div class="step">
                        <h3>06</h3>
                        <p><strong>Hồ sơ xin phép thi công</strong><br>Triển khai hồ sơ xin phép và hồ sơ thi công công trình</p>
                    </div>
                    <div class="step">
                        <h3>07</h3>
                        <p><strong>Thiết kế 3D và triển khai nội thất</strong><br>Thiết kế 3D nội thất công trình và triển khai hồ sơ chi tiết nội thất</p>
                    </div>
                    <div class="step">
                        <h3>08</h3>
                        <p><strong>Bàn giao</strong><br>Bàn giao hồ sơ toàn bộ công trình tới tay khách hàng</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="construction-process">
            <div class="container">
                <h2>Quy trình thi công</h2>
                <div class="steps">
                    <div class="step">
                        <h3>01</h3>
                        <p><strong>Chuẩn bị thi công</strong><br>Tiếp nhận hồ sơ thiết kế, lập kế hoạch và chuẩn bị vật tư</p>
                    </div>
                    <div class="step">
                        <h3>02</h3>
                        <p><strong>Giải phóng mặt bằng & định vị công trình</strong><br>Dọn dẹp mặt bằng, xác định vị trí móng và cao độ</p>
                    </div>
                    <div class="step">
                        <h3>03</h3>
                        <p><strong>Thi công phần móng & kết cấu chính</strong><br>Thi công móng, cột, dầm, sàn theo thiết kế</p>
                    </div>
                    <div class="step">
                        <h3>04</h3>
                        <p><strong>Thi công phần thân & mái</strong><br>Xây tường, thi công mái nhà, lắp đặt cửa và cầu thang</p>
                    </div>
                    <div class="step">
                        <h3>05</h3>
                        <p><strong>Thi công hệ thống điện, nước</strong><br>Lắp đặt hệ thống điện, nước, điều hòa, chống sét</p>
                    </div>
                    <div class="step">
                        <h3>06</h3>
                        <p><strong>Hoàn thiện công trình</strong><br>Sơn, ốp lát, lắp đặt nội thất, kiểm tra hoàn thiện</p>
                    </div>
                    <div class="step">
                        <h3>07</h3>
                        <p><strong>Nghiệm thu & bàn giao</strong><br>Kiểm tra công trình, nghiệm thu và bàn giao cho khách hàng</p>
                    </div>
                    <div class="step">
                        <h3>08</h3>
                        <p><strong>Bảo hành & bảo trì</strong><br>Bảo hành kết cấu, thiết bị, hỗ trợ bảo trì khi cần</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    document.body.insertAdjacentHTML("beforeend", sections);
});
