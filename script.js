/* ==========================================================================
   VIỆT Ý COFFEE MAKER - MINIMALIST APP LOGIC WITH SCROLL ANIMATIONS
   ========================================================================== */

const PRODUCTS = [
    // WEGA
    {
        id: 1,
        title: "Máy pha cà phê Wega Polaris EVD 2 Group",
        brand: "Wega",
        category: "wega",
        price: 150000000,
        oldPrice: 170000000,
        badge: "Ý Chính Hãng",
        image: "images/polaris-1.png",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 12L | Công suất 3400W"
    },
    {
        id: 2,
        title: "Máy pha cà phê WEGA ROVER 2GR",
        brand: "Wega",
        category: "wega",
        price: 130000000,
        oldPrice: 140000000,
        badge: "Bán Chạy",
        image: "images/wega-rover.png",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 10.5L | Thép chống gỉ"
    },
    {
        id: 3,
        title: "Máy pha cà phê WEGA AIRY EVD 2 GROUP",
        brand: "Wega",
        category: "wega",
        price: 169000000,
        oldPrice: 185000000,
        badge: "Flagship 2026",
        image: "images/máy-pha-cà-phê-wega-airy-2-group.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Shot Timer | Nồi hơi 12L"
    },
    {
        id: 4,
        title: "Máy pha cà phê Wega Pegaso 2 Group",
        brand: "Wega",
        category: "wega",
        price: 69500000,
        oldPrice: 72500000,
        badge: "Giá Cực Tốt",
        image: "images/wega_pegaso.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 10.5L | 350 ly/ngày"
    },
    {
        id: 5,
        title: "Máy pha cà phê Wega Lunna A1 Group",
        brand: "Wega",
        category: "wega",
        price: 45000000,
        oldPrice: 48000000,
        badge: "Ưu Đãi",
        image: "images/máy-pha-cà-phê-wega-lunna-2-group.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 5L | 150 ly/ngày"
    },

    // CASADIO
    {
        id: 6,
        title: "Máy pha cà phê Casadio Undici A2 Group",
        brand: "Casadio",
        category: "casadio",
        price: 73900000,
        oldPrice: 77900000,
        badge: "Ý Chính Hãng",
        image: "images/casadio_undici.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 10.5L | Thân máy thép không gỉ"
    },
    {
        id: 7,
        title: "Máy pha cà phê Casadio Undici A1 Group",
        brand: "Casadio",
        category: "casadio",
        price: 41900000,
        oldPrice: 45900000,
        badge: "Quán Nhỏ",
        image: "images/casadio_undici.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 5L | Thích hợp takeaway"
    },

    // LA CIMBALI
    {
        id: 8,
        title: "Máy pha cà phê La Cimbali M27 2 Groups",
        brand: "La Cimbali",
        category: "lacimbali",
        price: 80000000,
        oldPrice: 92000000,
        badge: "Huyền Thoại",
        image: "images/m27.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 11L | Nồi đồng nguyên khối"
    },
    {
        id: 9,
        title: "Máy pha cafe Lacimbali M27 (Lướt 98%)",
        brand: "La Cimbali",
        category: "lacimbali",
        price: 34000000,
        oldPrice: 42000000,
        badge: "Tiết Kiệm",
        image: "images/LaCimbali-M27.jpg",
        origin: "Ý (Italy)",
        warranty: "12 Tháng",
        specs: "Kiểm định kĩ thuật 99%"
    },

    // NUOVA SIMONELLI
    {
        id: 10,
        title: "Máy pha cà phê Nuova Simonelli Appia Life A2 Group",
        brand: "Nuova Simonelli",
        category: "nuova",
        price: 89900000,
        oldPrice: 98000000,
        badge: "Thế Hệ Mới",
        image: "images/Máy pha cà phê Nuova Simonelli Appia II 2 Group.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Công nghệ SIS gia nhiệt tự động | Nồi 11L"
    },
    {
        id: 11,
        title: "Máy pha cà phê Nuova Simonelli Appia Life A1 Group",
        brand: "Nuova Simonelli",
        category: "nuova",
        price: 63500000,
        oldPrice: 70000000,
        badge: "Bán Chạy",
        image: "images/nuova-simonelli-appia-1.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Nồi hơi 5L | 200 ly/ngày"
    },

    // RANCILIO & EXPOBAR
    {
        id: 12,
        title: "Máy pha cà phê Rancilio Classe 5 USB A2 Group",
        brand: "Rancilio",
        category: "rancilio",
        price: 49000000,
        oldPrice: 53000000,
        badge: "Cổng USB",
        image: "images/racilio-classe-5.jpg",
        origin: "Ý (Italy)",
        warranty: "24 Tháng",
        specs: "Steady Brew | Inox cao cấp"
    },
    {
        id: 13,
        title: "Máy pha cà phê Expobar Markus 2 Group",
        brand: "Expobar",
        category: "expobar",
        price: 38000000,
        oldPrice: 48000000,
        badge: "Bền Bỉ",
        image: "images/may-pha-ca-phe-expobar-markus-2-gr.jpg",
        origin: "Tây Ban Nha",
        warranty: "24 Tháng",
        specs: "Nồi hơi 11.5L | Định lượng tự động"
    },

    // MÁY XAY CÀ PHÊ
    {
        id: 14,
        title: "Máy xay cà phê Eureka Firenze 75",
        brand: "Eureka",
        category: "grinder",
        price: 13900000,
        oldPrice: 16900000,
        badge: "Xay Định Lượng",
        image: "images/fizenre-75.jpg",
        origin: "Ý (Italy)",
        warranty: "12 Tháng",
        specs: "Đĩa xay 75mm mạ Titan"
    },
    {
        id: 15,
        title: "Máy xay cà phê Fiorenzato F64E On-Demand",
        brand: "Fiorenzato",
        category: "grinder",
        price: 18900000,
        oldPrice: 22000000,
        badge: "Cảm Ứng",
        image: "images/May-pha-ca-phe-Fiorenzato-F64E.jpg",
        origin: "Ý (Italy)",
        warranty: "12 Tháng",
        specs: "Đĩa xay 64mm | Cảm ứng màu"
    },
    {
        id: 16,
        title: "Máy xay cà phê Nuova Simonelli MDXS On Demand",
        brand: "Nuova Simonelli",
        category: "grinder",
        price: 18000000,
        oldPrice: 22000000,
        badge: "Chống Ồn",
        image: "images/may-xay-ca-phe-nuova-simonelli-mdxs-on-demand-6.jpg",
        origin: "Ý (Italy)",
        warranty: "12 Tháng",
        specs: "Silent Tech | Đĩa xay 65mm"
    }
];

// App State
let cart = [];
let activeFilter = 'all';
let searchQuery = '';
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initCalculator();
    initEventListeners();
    initScrollReveal();
});

// Format Currency VND
function formatVND(amount) {
    if (!amount || amount === 0) return "Liên hệ báo giá";
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   PRODUCT CATALOG & FILTERING & SORTING
   -------------------------------------------------------------------------- */
function initCatalog() {
    renderProducts();
}

function sortProducts(sortType) {
    currentSort = sortType;
    renderProducts();
}

function renderProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    let filtered = PRODUCTS.filter(p => {
        const matchesBrand = (activeFilter === 'all') || 
                             (activeFilter === p.category) ||
                             (p.brand.toLowerCase().includes(activeFilter.toLowerCase()));
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBrand && matchesSearch;
    });

    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-muted);">
                <i class="fa-solid fa-mug-hot" style="font-size: 2.5rem; margin-bottom: 12px; display: block; color: var(--primary-blue);"></i>
                <p>Không tìm thấy sản phẩm phù hợp. Vui lòng chọn danh mục khác!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(p => `
        <div class="product-card reveal">
            <div class="product-image">
                <span class="product-badge">${p.badge}</span>
                <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="product-body">
                <span class="product-brand">${p.brand} • ${p.origin}</span>
                <h3 class="product-title">${p.title}</h3>
                <div class="product-specs">${p.specs}</div>
                <div class="product-price-row">
                    <span class="price-main">${formatVND(p.price)}</span>
                    ${p.oldPrice ? `<span class="price-old">${formatVND(p.oldPrice)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-outline btn-card" onclick="openQuickView(${p.id})">Chi Tiết</button>
                    <button class="btn btn-blue btn-card" onclick="addToCart(${p.id})">Chọn Mua</button>
                </div>
            </div>
        </div>
    `).join('');

    setTimeout(initScrollReveal, 50);
}

/* --------------------------------------------------------------------------
   CALCULATOR LOGIC
   -------------------------------------------------------------------------- */
function initCalculator() {
    const slider = document.getElementById('cupsRange');
    const valDisplay = document.getElementById('cupsVal');
    if (!slider || !valDisplay) return;

    slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        valDisplay.textContent = `${val} ly/ngày`;
        updateCalculatorOutput(val);
    });

    updateCalculatorOutput(parseInt(slider.value));
}

function selectModelType(btn, type) {
    document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const slider = document.getElementById('cupsRange');
    if (slider) updateCalculatorOutput(parseInt(slider.value));
}

function updateCalculatorOutput(cups) {
    const packageName = document.getElementById('calcPackageName');
    const packageItems = document.getElementById('calcPackageItems');
    const totalPrice = document.getElementById('calcTotalPrice');

    if (!packageName || !packageItems || !totalPrice) return;

    let title = "";
    let items = [];
    let price = 0;

    if (cups <= 100) {
        title = "Gói Takeaway / Quán Nhỏ";
        items = [
            "Máy pha Wega Lunna / Nuova Appia 1 Group",
            "Máy xay LD 021 / HC600V2 tự động",
            "Trọn bộ dụng cụ Barista chuyên nghiệp",
            "Miễn phí lắp đặt & Bảo hành 24 tháng"
        ];
        price = 64500000;
    } else if (cups <= 250) {
        title = "Gói Quán Chuyên Nghiệp";
        items = [
            "Máy pha Wega Rover / La Cimbali M27 2 Group",
            "Máy xay định lượng Fiorenzato F64E",
            "Lọc nước chuyên dụng Doulton UK",
            "Tặng khóa đào tạo Barista miễn phí"
        ];
        price = 130000000;
    } else {
        title = "Gói Flagship / Chuỗi Lounge";
        items = [
            "Máy pha Wega Polaris / Wega Airy EVD 2GR",
            "Máy xay Nuova Simonelli MDXS On Demand",
            "Hệ thống lọc nước tinh khiết RO công nghiệp",
            "Bảo trì định kỳ 3 tháng/lần trọn đời"
        ];
        price = 169000000;
    }

    packageName.textContent = title;
    packageItems.innerHTML = items.map(item => `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`).join('');
    totalPrice.textContent = formatVND(price);
}

/* --------------------------------------------------------------------------
   CART DRAWER & EVENT LISTENERS
   -------------------------------------------------------------------------- */
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty++;
    else cart.push({ ...product, qty: 1 });

    updateCartUI();
    showToast(`Đã thêm <strong>${product.title}</strong> vào giỏ hàng!`);
    openCartDrawer();
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = formatVND(totalPrice);

    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
                    <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.4;"></i>
                    <p>Giỏ hàng đang trống</p>
                </div>
            `;
        } else {
            cartContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div style="color: var(--primary-blue); font-weight: 700;">${formatVND(item.price)}</div>
                        <div style="display: flex; gap: 6px; margin-top: 6px; align-items: center;">
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.add('active');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.remove('active');
}

function initEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    document.querySelectorAll('.subfilter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.subfilter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter || 'all';
            renderProducts();
        });
    });
}

function openQuickView(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const modalBody = document.getElementById('quickViewContent');
    if (!modalBody) return;

    const discountPercent = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

    modalBody.innerHTML = `
        <div class="quickview-grid">
            <div class="qv-image-box">
                <span class="product-badge">${product.badge}</span>
                <img src="${product.image}" alt="${product.title}" class="qv-img">
                <div class="qv-guarantee">
                    <i class="fa-solid fa-shield-halved blue-text"></i> Cam kết chính hãng 100% Ý
                </div>
            </div>

            <div class="qv-details">
                <span class="qv-brand-tag">${product.brand} • ${product.origin}</span>
                <h2 class="qv-title">${product.title}</h2>
                
                <div class="qv-rating-row">
                    <span class="qv-stars">⭐ 4.9 / 5</span>
                    <span class="qv-votes">(1.491+ đánh giá từ chủ quán)</span>
                </div>

                <div class="qv-price-box">
                    <div class="qv-price-row">
                        <span class="qv-price-main">${formatVND(product.price)}</span>
                        ${product.oldPrice ? `<span class="qv-price-old">${formatVND(product.oldPrice)}</span>` : ''}
                        ${discountPercent > 0 ? `<span class="qv-discount">-${discountPercent}%</span>` : ''}
                    </div>
                    <div class="qv-price-note">Giá đã bao gồm thuế & miễn phí lắp đặt toàn quốc</div>
                </div>

                <div class="qv-specs-wrapper">
                    <h4 class="qv-specs-heading">Thông Số Kỹ Thuật Chi Tiết:</h4>
                    <table class="qv-specs-table">
                        <tr>
                            <td class="qv-spec-label">Xuất xứ:</td>
                            <td class="qv-spec-val">${product.origin}</td>
                        </tr>
                        <tr>
                            <td class="qv-spec-label">Bảo hành:</td>
                            <td class="qv-spec-val highlight-green">${product.warranty}</td>
                        </tr>
                        <tr>
                            <td class="qv-spec-label">Cấu hình:</td>
                            <td class="qv-spec-val">${product.specs}</td>
                        </tr>
                        <tr>
                            <td class="qv-spec-label">Quà tặng:</td>
                            <td class="qv-spec-val highlight-blue">Gói Barista + Lọc Doulton UK</td>
                        </tr>
                    </table>
                </div>

                <div class="qv-actions">
                    <button class="btn btn-blue qv-buy-btn" onclick="addToCart(${product.id}); closeModal('quickViewModal');">
                        <i class="fa-solid fa-cart-plus"></i> Chọn Mua Ngay
                    </button>
                    <a href="tel:0972006789" class="btn btn-outline qv-call-btn">
                        <i class="fa-solid fa-phone blue-text"></i> 0972.006.789
                    </a>
                </div>
            </div>
        </div>
    `;
    openModal('quickViewModal');
}

function checkoutSubmit(e) {
    e.preventDefault();
    showToast("Gửi yêu cầu báo giá thành công! Kỹ thuật viên sẽ gọi lại trong 5 phút.");
    cart = [];
    updateCartUI();
    closeCartDrawer();
    closeModal('checkoutModal');
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-blue); font-size: 1.1rem;"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

/* --------------------------------------------------------------------------
   ORDER TRACKING LOGIC (HỆ THỐNG TRA CỨU ĐƠN HÀNG)
   -------------------------------------------------------------------------- */
function openOrderTrackingModal() {
    openModal('orderTrackingModal');
}

function fillTrackingDemo(code) {
    const input = document.getElementById('trackingInput');
    if (input) {
        input.value = code;
        trackOrderSubmit(new Event('submit'));
    }
}

function trackOrderSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const input = document.getElementById('trackingInput');
    const resultBox = document.getElementById('trackingResult');
    if (!input || !resultBox) return;

    const query = input.value.trim().toUpperCase();
    if (!query) return;

    const isCompletedDemo = query.includes('99120');

    if (isCompletedDemo) {
        resultBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div>
                    <span class="product-badge" style="background: #10B981; position: static;">Đã Bàn Giao Quán</span>
                    <h4 style="font-family: var(--font-heading); margin-top: 4px;">Mã Đơn: ${query}</h4>
                </div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Cập nhật: 10 phút trước</span>
            </div>

            <div class="tracking-stepper">
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-file-invoice"></i></div>
                    <div class="step-title">1. Tiếp Nhận</div>
                    <div class="step-desc">Đã duyệt</div>
                </div>
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <div class="step-title">2. Kỹ Thuật Test</div>
                    <div class="step-desc">100% Đạt</div>
                </div>
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-truck-fast"></i></div>
                    <div class="step-title">3. Vận Chuyển</div>
                    <div class="step-desc">Đã giao</div>
                </div>
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-square-check"></i></div>
                    <div class="step-title">4. Hoàn Tất</div>
                    <div class="step-desc">Đã bàn giao</div>
                </div>
            </div>

            <div class="order-detail-card">
                <div class="order-detail-row">
                    <span>Khách hàng:</span>
                    <strong>Chị Minh (Quán Cafe Chillout - Bình Thạnh, TP.HCM)</strong>
                </div>
                <div class="order-detail-row">
                    <span>Sản phẩm:</span>
                    <strong>Wega Polaris EVD 2GR + Fiorenzato F64E</strong>
                </div>
                <div class="order-detail-row">
                    <span>Trạng thái kỹ thuật:</span>
                    <span style="color: #10B981; font-weight: 700;">Đã lắp đặt & Đào tạo Barista hoàn tất</span>
                </div>
                <div class="order-detail-row">
                    <span>Kỹ thuật viên phụ trách:</span>
                    <strong>Mr. Khánh (Hotline 24/7: 0972.006.789)</strong>
                </div>
            </div>
        `;
    } else {
        resultBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div>
                    <span class="product-badge" style="background: var(--primary-blue); position: static;">Đang Giao Hàng & Lắp Đặt</span>
                    <h4 style="font-family: var(--font-heading); margin-top: 4px;">Mã Đơn: ${query || 'VY-88492'}</h4>
                </div>
                <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-solid fa-clock blue-text"></i> Dự kiến giao: 14:00 Hôm nay</span>
            </div>

            <div class="tracking-stepper">
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-file-invoice"></i></div>
                    <div class="step-title">1. Tiếp Nhận</div>
                    <div class="step-desc">08:30 Sáng</div>
                </div>
                <div class="step-item completed">
                    <div class="step-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <div class="step-title">2. Kỹ Thuật Test</div>
                    <div class="step-desc">10:15 Sáng</div>
                </div>
                <div class="step-item active">
                    <div class="step-icon"><i class="fa-solid fa-truck-fast"></i></div>
                    <div class="step-title">3. Vận Chuyển</div>
                    <div class="step-desc">Đang di chuyển</div>
                </div>
                <div class="step-item">
                    <div class="step-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div class="step-title">4. Lắp Đặt</div>
                    <div class="step-desc">Chờ bàn giao</div>
                </div>
            </div>

            <div class="order-detail-card">
                <div class="order-detail-row">
                    <span>Chủ quán nhận máy:</span>
                    <strong>Anh Hoàng (The Coffee Hub - Quận 1, TP.HCM)</strong>
                </div>
                <div class="order-detail-row">
                    <span>Gói máy đăng ký:</span>
                    <strong>WEGA ROVER 2GR + Máy xay định lượng F64E</strong>
                </div>
                <div class="order-detail-row">
                    <span>Đội xe vận chuyển:</span>
                    <span class="blue-text" font-weight: 700;">Xe tải chuyên dụng Việt Ý (Đang đến Q.1)</span>
                </div>
                <div class="order-detail-row">
                    <span>Kỹ thuật viên đồng hành:</span>
                    <strong>Mr. Tuấn (Zalo: 0972.006.789)</strong>
                </div>
            </div>
        `;
    }

    resultBox.style.display = 'block';
}
