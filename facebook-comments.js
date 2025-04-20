document.addEventListener("DOMContentLoaded", function () {
    const contactInfoSection = document.querySelector(".contact-info");
    const footerSection = document.querySelector(".site-footer");

    if (contactInfoSection && footerSection) {
        const fbCommentsHTML = `
            <div id="fb-root"></div>
            <div class="fb-comments-container" style="margin: 50px auto; max-width: 1200px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); background-color: #f9f9f9;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333; margin-bottom: 20px; text-align: center;">Ý Kiến Khách Hàng</h3>
                <div class="fb-comments" 
                     data-href="https://www.xaydungminhkhoa.online" 
                     data-width="100%" 
                     data-numposts="5">
                </div>
            </div>
        `;

        contactInfoSection.insertAdjacentHTML("afterend", fbCommentsHTML);

        // Load Facebook SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
});
