const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const chatbotData = {
    "MK Home là gì?": "MK Home là công ty chuyên về thiết kế và xây dựng các dự án lớn nhỏ tại Việt Nam.",
    "Dịch vụ của MK Home?": "Chúng tôi cung cấp các dịch vụ thiết kế kiến trúc, kết cấu, nội thất, và thi công xây dựng.",
    "Liên hệ MK Home như thế nào?": "Bạn có thể liên hệ qua email: mkcons.az@gmail.com hoặc hotline: 0867544809.",
    "Công ty ở đâu?": "Cty chúng tôi ở Thôn Bình Trị, Xã Ninh Bình, Thị xã Ninh Hòa, Tỉnh Khánh Hòa",
    "Thời gian làm việc của công ty?": "Công ty chúng tôi hoặt động từ t2-t6 từ 8h- 17h. CN chúng tôi nghĩ để đi Chill",
    "Tôi cần 1 số mẫu nhà đẹp": "Dưới đây là một số mẫu nhà đẹp:",
    "Chi phí xây dựng nhà là bao nhiêu?": "Chi phí xây dựng phụ thuộc vào diện tích, thiết kế và vật liệu. Hãy liên hệ để được báo giá chi tiết.",
    "Thời gian hoàn thành một dự án là bao lâu?": "Thời gian hoàn thành phụ thuộc vào quy mô và yêu cầu của dự án. Thông thường từ 3-6 tháng.",
    "MK Home có hỗ trợ thiết kế nội thất không?": "Có, chúng tôi cung cấp dịch vụ thiết kế nội thất chuyên nghiệp, phù hợp với nhu cầu của khách hàng.",
    "Vật liệu xây dựng nào tốt nhất?": "Vật liệu xây dựng tốt nhất phụ thuộc vào ngân sách và yêu cầu của bạn. Chúng tôi sẽ tư vấn vật liệu phù hợp nhất."
};

// Thư mục chứa ảnh
const folder = "DuanNP/";
const imageNames = [
    "Mẫu 1.webp", "Mẫu 2.webp", "Mẫu 3.webp", "Mẫu 4.webp",
    "Mẫu 5.webp", "Mẫu 6.webp", "Mẫu 7.webp", "Mẫu NVS1.webp", "Mẫu NVS2.webp",
    "Mẫu NVS3.webp", "Mẫu NVS4.webp", "Mẫu NVS5.webp"
];

const suggestionsContainer = document.createElement("div"); // Tạo container cho các gợi ý
suggestionsContainer.classList.add("suggestions-container");
chatBody.appendChild(suggestionsContainer);

// Thêm tin nhắn vào giao diện
function addMessage(message, isBot = false) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", isBot ? "bot" : "user");
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    scrollToBottom();
}

// Thêm hình ảnh vào giao diện
function addImageMessage(images) {
    images.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = folder + img;
        imgElement.classList.add("chat-image"); // Thêm class để dễ CSS
        chatBody.appendChild(imgElement);
    });
    scrollToBottom();
}

// Cuộn xuống cuối cùng
function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Hiển thị các gợi ý trong khung chat
function showSuggestions() {
    // Không tự động hiển thị gợi ý khi tải trang
    console.warn("showSuggestions is no longer used for auto-display.");
}

// Gọi hàm hiển thị gợi ý khi trang tải
window.addEventListener("load", () => {
    // Không gọi showSuggestions khi tải trang
    console.info("Suggestions will only appear in the menu.");
});

// Tính độ tương đồng giữa hai chuỗi
function calculateSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().split(" ");
    const s2 = str2.toLowerCase().split(" ");
    const intersection = s1.filter(word => s2.includes(word));
    return intersection.length / Math.max(s1.length, s2.length);
}

// Gửi tin nhắn
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage); // Hiển thị tin nhắn người dùng
    suggestionsContainer.innerHTML = ''; // Xóa hoàn toàn gợi ý sau khi gửi

    let botResponse = null;
    let isImageResponse = false;

    // Tìm tin nhắn có nội dung gần giống
    Object.keys(chatbotData).forEach(key => {
        if (!botResponse) {
            const similarity = calculateSimilarity(userMessage, key);
            if (similarity > 0.5) { // Ngưỡng tương đồng là 50%
                botResponse = chatbotData[key];
                if (key === "Tôi cần 1 số mẫu nhà đẹp") {
                    isImageResponse = true; // Đánh dấu nếu cần gửi ảnh
                }
            }
        }
    });

    if (!botResponse) {
        // Nếu không tìm thấy phản hồi, tạo phản hồi mặc định dựa trên từ khóa
        if (userMessage.includes("MK Home") && userMessage.includes("là gì")) {
            botResponse = chatbotData["MK Home là gì?"];
        } else if (userMessage.includes("dịch vụ") || userMessage.includes("cung cấp")) {
            botResponse = chatbotData["Dịch vụ của MK Home?"];
        } else if (userMessage.includes("liên hệ") || userMessage.includes("email") || userMessage.includes("hotline")) {
            botResponse = chatbotData["Liên hệ MK Home như thế nào?"];
        } else if (userMessage.includes("công ty") && userMessage.includes("ở đâu")) {
            botResponse = chatbotData["Công ty ở đâu?"];
        } else if (userMessage.includes("thời gian") && userMessage.includes("làm việc")) {
            botResponse = chatbotData["Thời gian làm việc của công ty?"];
        } else if (userMessage.includes("mẫu") && userMessage.includes("nhà")) {
            botResponse = chatbotData["Tôi cần 1 số mẫu nhà đẹp"];
            isImageResponse = true;
        } else if (userMessage.includes("chi phí") || userMessage.includes("giá")) {
            botResponse = chatbotData["Chi phí xây dựng nhà là bao nhiêu?"];
        } else if (userMessage.includes("thời gian") && userMessage.includes("hoàn thành")) {
            botResponse = chatbotData["Thời gian hoàn thành một dự án là bao lâu?"];
        } else if (userMessage.includes("thiết kế") && userMessage.includes("nội thất")) {
            botResponse = chatbotData["MK Home có hỗ trợ thiết kế nội thất không?"];
        } else if (userMessage.includes("vật liệu") && userMessage.includes("xây dựng")) {
            botResponse = chatbotData["Vật liệu xây dựng nào tốt nhất?"];
        } else {
            botResponse = "Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể thử hỏi một câu khác.";
        }
    }

    setTimeout(() => {
        addMessage(botResponse, true); // Hiển thị phản hồi từ bot
        if (isImageResponse) {
            addImageMessage(imageNames); // Gửi ảnh nếu phù hợp
        }
    }, 500);

    userInput.value = ""; // Xóa ô nhập
}

// Gửi tin nhắn khi nhấn nút
sendBtn.addEventListener("click", sendMessage);

// Gửi tin nhắn khi nhấn Enter
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Cập nhật gợi ý khi người dùng nhập
userInput.addEventListener("input", showSuggestions);

const menuBtn = document.getElementById("menu-btn");
const sampleMessagesMenu = document.getElementById("sample-messages-menu");

// Hiển thị hoặc ẩn menu mẫu tin nhắn
menuBtn.addEventListener("click", () => {
    sampleMessagesMenu.classList.toggle("hidden");
    if (!sampleMessagesMenu.classList.contains("hidden")) {
        displaySampleMessagesInMenu(); // Chỉ hiển thị trong menu
    }
});

// Hiển thị các mẫu tin nhắn trong menu
function displaySampleMessagesInMenu() {
    sampleMessagesMenu.innerHTML = ""; // Xóa nội dung cũ
    const sampleMessages = Object.keys(chatbotData); // Lấy tất cả câu hỏi từ chatbotData
    sampleMessages.forEach((message) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("sample-message");
        messageElement.textContent = message;
        messageElement.onclick = () => {
            userInput.value = message; // Gán câu hỏi vào ô nhập
            sampleMessagesMenu.classList.add("hidden"); // Ẩn menu sau khi chọn
            sendMessage(); // Tự động gửi tin nhắn
        };
        sampleMessagesMenu.appendChild(messageElement);
    });
}
