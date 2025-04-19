document.addEventListener("DOMContentLoaded", function () {
    // Tạo container chính
    const container = document.createElement("div");
    container.id = "floating-contact";
    container.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px;
        background: none; /* Remove white background */
    `;

    // Common button styles
    const buttonStyle = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        color: #fff;
        border-radius: 50%;
        text-decoration: none;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    `;

    const iconStyle = `
        width: 30px;
        height: 30px;
    `;

    // Tạo nút liên hệ qua Hotline
    const hotline = document.createElement("a");
    hotline.href = "tel:0867544809";
    hotline.title = "Gọi Hotline";
    hotline.style.cssText = buttonStyle;
    hotline.innerHTML = `<img src="phone.png" alt="Hotline" style="${iconStyle}">`;
    hotline.addEventListener("mouseover", () => hotline.style.transform = "scale(1.1)");
    hotline.addEventListener("mouseout", () => hotline.style.transform = "scale(1)");
    container.appendChild(hotline);

    // Tạo nút liên hệ qua Zalo
    const zaloButton = document.createElement("a");
    zaloButton.href = "#";
    zaloButton.title = "Liên hệ qua Zalo";
    zaloButton.style.cssText = buttonStyle;
    zaloButton.innerHTML = `<img src="https://w.ladicdn.com/ladiui/icons/social/zalo.svg" alt="Zalo" style="${iconStyle}">`;
    zaloButton.addEventListener("mouseover", () => zaloButton.style.transform = "scale(1.1)");
    zaloButton.addEventListener("mouseout", () => zaloButton.style.transform = "scale(1)");

    zaloButton.addEventListener("click", function (e) {
        e.preventDefault();
        let iframeContainer = document.getElementById("zalo-iframe-container");

        if (!iframeContainer) {
            iframeContainer = document.createElement("div");
            iframeContainer.id = "zalo-iframe-container";
            iframeContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `;

            const iframe = document.createElement("iframe");
            iframe.src = "https://zalo.me/0867544809";
            iframe.style.cssText = `
                width: 90%;
                height: 80%;
                border: none;
                border-radius: 10px;
            `;
            iframeContainer.appendChild(iframe);

            document.body.appendChild(iframeContainer);

            iframeContainer.addEventListener("click", function (e) {
                if (e.target === iframeContainer) {
                    document.body.removeChild(iframeContainer);
                }
            });
        } else {
            iframeContainer.style.display = iframeContainer.style.display === "none" ? "flex" : "none";
        }
    });

    container.appendChild(zaloButton);

    // Tạo nút liên hệ qua Facebook
    const facebookButton = document.createElement("a");
    facebookButton.href = "https://www.facebook.com/xaydungkhanhhoa7979/";
    facebookButton.target = "_blank";
    facebookButton.title = "Liên hệ qua Facebook";
    facebookButton.style.cssText = buttonStyle;
    facebookButton.innerHTML = `<img src="https://w.ladicdn.com/ladiui/icons/social/facebook.svg" alt="Facebook" style="${iconStyle}">`;
    facebookButton.addEventListener("mouseover", () => facebookButton.style.transform = "scale(1.1)");
    facebookButton.addEventListener("mouseout", () => facebookButton.style.transform = "scale(1)");
    container.appendChild(facebookButton);

    // Tạo nút chatbox liên hệ qua Facebook
    const chatboxButton = document.createElement("a");
    chatboxButton.href = "#";
    chatboxButton.title = "Liên hệ qua Chatbox";
    chatboxButton.style.cssText = buttonStyle;
    chatboxButton.innerHTML = `<img src="chatbox.png" alt="Chatbox Icon" style="${iconStyle}">`;
    chatboxButton.addEventListener("mouseover", () => chatboxButton.style.transform = "scale(1.1)");
    chatboxButton.addEventListener("mouseout", () => chatboxButton.style.transform = "scale(1)");

    chatboxButton.addEventListener("click", function (event) {
        event.preventDefault();
        let iframe = document.getElementById("chatbox-iframe");

        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.id = "chatbox-iframe";
            iframe.src = "ChatBox/Chatbox.html";
            iframe.style.cssText = `
                width: 100%;
                height: 100vh;
                border: none;
                position: fixed;
                bottom: 0;
                right: 0;
                z-index: 1000;
            `;
        } else {
            iframe.style.display = iframe.style.display === "none" ? "block" : "none";
        }

        document.body.appendChild(iframe);
    });

    container.appendChild(chatboxButton);

    document.body.appendChild(container);

    // Add blinking animation to buttons
    const blinkingAnimation = `
        @keyframes blinking {
            0% { box-shadow: 0 0 10px rgba(0, 85, 255, 0.5); }
            50% { box-shadow: 0 0 20px rgba(0, 85, 255, 1); }
            100% { box-shadow: 0 0 10px rgba(0, 85, 255, 0.5); }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = blinkingAnimation;
    document.head.appendChild(styleSheet);

    // Apply blinking animation to all buttons
    const buttons = [hotline, zaloButton, facebookButton, chatboxButton];
    buttons.forEach(button => {
        button.style.animation = "blinking 1.5s infinite";
    });

    // Add bouncing animation
    const bouncingAnimation = `
        @keyframes bouncing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    const styleSheetBouncing = document.createElement("style");
    styleSheetBouncing.type = "text/css";
    styleSheetBouncing.innerHTML = bouncingAnimation;
    document.head.appendChild(styleSheetBouncing);

    // Define unique colors for each button
    const buttonColors = [
        "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.8) 70%)", // Red for hotline
        "radial-gradient(circle, rgba(0, 255, 0, 1) 0%, rgba(0, 255, 0, 0.8) 70%)", // Green for Zalo
        "radial-gradient(circle, rgba(0, 0, 255, 1) 0%, rgba(0, 0, 255, 0.8) 70%)", // Blue for Facebook
        "radial-gradient(circle, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0.8) 70%)" // Orange for Chatbox
    ];

    // Apply unique colors and bouncing animation to each button
    buttons.forEach((button, index) => {
        button.style.background = buttonColors[index];
        button.style.animation = "bouncing 1.5s infinite";
        button.style.animationDelay = `${index * 0.3}s`; // Add delay for staggered effect
    });

    // Function to create a tag element
    function createTag(text) {
        const tag = document.createElement("div");
        tag.style.cssText = `
            position: absolute;
            bottom: 70px;
            right: 0;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
        `;
        tag.textContent = text;
        return tag;
    }

    // Add tags to each button
    const hotlineTag = createTag("Gọi Hotline");
    const zaloTag = createTag("Liên hệ qua Zalo");
    const facebookTag = createTag("Liên hệ qua Facebook");
    const chatboxTag = createTag("Liên hệ qua Chatbox");

    hotline.appendChild(hotlineTag);
    zaloButton.appendChild(zaloTag);
    facebookButton.appendChild(facebookTag);
    chatboxButton.appendChild(chatboxTag);

    // Function to show and hide tags on hover
    function addHoverEffect(button, tag) {
        button.style.position = "relative";
        button.addEventListener("mouseover", () => {
            tag.style.opacity = "1";
            tag.style.transform = "translateY(0)";
        });
        button.addEventListener("mouseout", () => {
            tag.style.opacity = "0";
            tag.style.transform = "translateY(10px)";
        });
    }

    // Apply hover effects to all buttons
    addHoverEffect(hotline, hotlineTag);
    addHoverEffect(zaloButton, zaloTag);
    addHoverEffect(facebookButton, facebookTag);
    addHoverEffect(chatboxButton, chatboxTag);
});
