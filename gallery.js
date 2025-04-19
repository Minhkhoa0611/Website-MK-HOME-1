// Danh sách ảnh theo nhóm
const galleries = {
    "galleryNhadep2T": {
        title: "Mẫu Nhà Phố 2 Tầng 2025",
        images: ["Mẫu 2 Tầng (1).jpg", "Mẫu 2 Tầng (2).jpg", "Mẫu 2 Tầng (3).jpg", "Mẫu 2 Tầng (4).jpg", "Mẫu 2 Tầng (5).jpg", "Mẫu 2 Tầng (6).jpg", "Mẫu 2 Tầng (7).jpg"]
    },
    "galleryNhadep": {
        title: "Mẫu Nhà Hộp Đẹp Xinh 2025",
        images: ["Mẫu 1.webp", "Mẫu 2.webp", "Mẫu 3.webp", "Mẫu 4.webp", "Mẫu 5.webp", "Mẫu 6.webp", "Mẫu 7.webp"]
    },
    "galleryNVS": {
        title: "Mẫu Thiết Kế NVS Hiện Đại 2025",
        images: ["Mẫu NVS1.webp", "Mẫu NVS2.webp", "Mẫu NVS3.webp", "Mẫu NVS4.webp", "Mẫu NVS5.webp"]
    },
    "galleryBep": {
        title: "Thiết Kế Phòng Bếp Sang Trọng 2025",
        images: ["PhongBep (1).webp", "PhongBep (2).webp", "PhongBep (3).webp", "PhongBep (4).webp", "PhongBep (5).webp", "PhongBep (6).webp", "PhongBep (7).webp"]
    },
    "galleryPhongKhach": {
        title: "Thiết Kế Mẫu Phòng Khách 2025",
        images: ["Phòng Khách (1).webp", "Phòng Khách (2).webp", "Phòng Khách (3).webp", "Phòng Khách (4).webp", "Phòng Khách (5).webp", "Phòng Khách (6).webp"]
    },
    "galleryCongNha": {
        title: "Mẫu Cổng Nhà Đẹp 2025",
        images: ["Cổng Nhà (1).webp", "Cổng Nhà (2).webp", "Cổng Nhà (3).webp", "Cổng Nhà (4).webp", "Cổng Nhà (5).webp"]
    },
    "galleryShopTT": {
        title: "Mẫu Shop Thời Trang Đẹp",
        images: ["Shop TT (1).webp", "Shop TT (2).webp", "Shop TT (3).webp", "Shop TT (4).webp", "Shop TT (5).webp", "Shop TT (6).webp", "Shop TT (7).webp"]
    },
    "galleryCafe": {
        title: "Thiết Kế Quán Cafe Sang Trọng",
        images: ["CF1.webp", "CF2.webp", "CF3.webp", "CF4.webp", "CF5.webp", "CF6.webp", "CF7.webp", "CF8.webp"]
    }
};

// Hàm tạo gallery tự động
const createGallery = (containerId, titleText, images) => {
    // Tạo container nếu chưa tồn tại
    let gallery = document.getElementById(containerId);
    if (!gallery) {
        gallery = document.createElement("div");
        gallery.id = containerId;
        gallery.style.margin = "50px auto";
        gallery.style.maxWidth = "1200px";
        gallery.style.padding = "20px";
        gallery.style.border = "1px solid #ddd";
        gallery.style.borderRadius = "10px";
        gallery.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        gallery.style.backgroundColor = "#fff";
        document.body.appendChild(gallery); // Thêm vào cuối body
    }

    // Tạo phần section cho gallery
    const section = document.createElement("div");
    section.style.width = "100%";
    section.style.textAlign = "center";
    section.style.marginBottom = "30px";

    // Tạo tiêu đề cho gallery
    const sectionTitle = document.createElement("h2");
    sectionTitle.innerText = titleText;
    sectionTitle.style.fontSize = "28px";
    sectionTitle.style.fontWeight = "bold";
    sectionTitle.style.margin = "20px 0";
    sectionTitle.style.color = "#333";
    sectionTitle.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.1)";
    section.appendChild(sectionTitle);

    // Tạo container cho ảnh
    const sectionGallery = document.createElement("div");
    sectionGallery.style.display = "flex";
    sectionGallery.style.flexWrap = "wrap";
    sectionGallery.style.justifyContent = "center";
    sectionGallery.style.gap = "15px";
    sectionGallery.style.padding = "20px";

    // Thêm ảnh vào gallery
    images.forEach(name => {
        const img = document.createElement("img");
        img.src = "DuanNP/" + name;
        img.alt = name;
        img.style.width = "auto";
        img.style.maxWidth = "220px";
        img.style.borderRadius = "10px";
        img.style.objectFit = "cover";
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

        // Hiệu ứng hover
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        });

        sectionGallery.appendChild(img);
    });

    section.appendChild(sectionGallery);
    gallery.appendChild(section);
};

// Tự động tạo gallery cho tất cả phần tử trong danh sách
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(galleries).forEach(id => {
        const { title, images } = galleries[id];
        createGallery(id, title, images);
    });
});
