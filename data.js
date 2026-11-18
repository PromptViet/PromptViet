// ============================================================
//  ⚙️ CẤU HÌNH WEBSITE - Chỉ cần sửa file này để cập nhật nội dung
// ============================================================

const SITE = {
  name: "🚀 AI Academy",
  github: "https://github.com/your-username/your-repo",   // 👉 Link GitHub của bạn
  hero: {
    badge: "🔥 Mới: Khóa học Prompt Engineering 2026",
    title: "Làm chủ AI – Tăng tốc sự nghiệp của bạn",
    subtitle: "Khóa học thực chiến & kho prompt AI chất lượng cao, giúp bạn làm việc nhanh hơn 10 lần.",
    stats: [
      { number: "2,500+", label: "Học viên" },
      { number: "150+", label: "Prompt AI" },
      { number: "4.9★", label: "Đánh giá" }
    ]
  },
  contact: [
    { label: "📘 Facebook", url: "https://facebook.com/yourpage" },
    { label: "💬 Zalo", url: "https://zalo.me/0123456789" },
    { label: "✈️ Telegram", url: "https://t.me/yourusername" },
    { label: "📧 Email", url: "mailto:you@email.com" }
  ],
  footer: "© 2026 AI Academy. Made with ❤️ by NhatBinh"
};

// ------------------------------------------------------------
//  🎓 KHÓA HỌC  — Thêm/xóa/sửa khóa học tại đây
//  image: để emoji (ví dụ "🤖") hoặc link ảnh "https://..."
// ------------------------------------------------------------
const COURSES = [
  {
    tag: "Bán chạy",
    title: "Prompt Engineering từ A-Z",
    desc: "Nắm vững kỹ thuật viết prompt cho ChatGPT, Claude, Gemini. Ứng dụng thực tế trong công việc.",
    image: "🤖",
    price: 499000,
    oldPrice: 999000,
    link: "https://m.me/yourpage"       // link mua / tư vấn
  },
  {
    tag: "Mới",
    title: "Tạo ảnh AI với Midjourney",
    desc: "Từ cơ bản đến nâng cao, tạo ảnh thương mại, thiết kế, quảng cáo chuyên nghiệp.",
    image: "🎨",
    price: 399000,
    oldPrice: 799000,
    link: "https://m.me/yourpage"
  },
  {
    tag: "Tự động hóa",
    title: "Automation với AI & No-code",
    desc: "Xây dựng quy trình tự động hóa với Make, n8n, Zapier kết hợp AI.",
    image: "⚡",
    price: 699000,
    oldPrice: null,
    link: "https://m.me/yourpage"
  }
];

// ------------------------------------------------------------
//  🧠 KHO PROMPT — type: "free" (miễn phí) hoặc "paid" (có phí)
//  - free: hiện nút "Xem Prompt" và cho copy
//  - paid: hiện nút "Mua ngay" dẫn đến link
// ------------------------------------------------------------
const PROMPTS = [
  {
    type: "free",
    category: "Viết content",
    title: "Viết bài Facebook viral",
    desc: "Prompt giúp viết bài đăng Facebook thu hút, có hook mạnh.",
    content: `Bạn là chuyên gia content marketing. Hãy viết 1 bài đăng Facebook về chủ đề: [CHỦ ĐỀ].
Yêu cầu:
- Câu mở đầu gây tò mò (hook)
- Độ dài 150-200 từ
- Giọng văn gần gũi, có emoji
- Kết thúc bằng call-to-action`
  },
  {
    type: "free",
    category: "Học tập",
    title: "Gia sư giải thích đơn giản",
    desc: "Giải thích bất kỳ khái niệm nào như cho trẻ 10 tuổi.",
    content: `Hãy giải thích [KHÁI NIỆM] theo 3 cấp độ:
1. Cho trẻ 10 tuổi (dùng ví dụ đời thường)
2. Cho sinh viên đại học
3. Cho chuyên gia
Sau mỗi cấp độ, đưa ra 1 câu hỏi kiểm tra hiểu bài.`
  },
  {
    type: "paid",
    category: "Kinh doanh",
    title: "Bộ 50 Prompt bán hàng online",
    desc: "Trọn bộ prompt viết mô tả sản phẩm, chăm sóc khách hàng, xử lý từ chối.",
    price: 199000,
    link: "https://m.me/yourpage"
  },
  {
    type: "paid",
    category: "Midjourney",
    title: "100 Prompt ảnh sản phẩm chuyên nghiệp",
    desc: "Prompt tạo ảnh sản phẩm studio, lifestyle, quảng cáo cao cấp.",
    price: 299000,
    link: "https://m.me/yourpage"
  },
  {
    type: "free",
    category: "Lập trình",
    title: "Code reviewer",
    desc: "Nhờ AI review code và đề xuất cải thiện.",
    content: `Bạn là senior developer. Hãy review đoạn code sau:
[DÁN CODE]
Phân tích: lỗi tiềm ẩn, bảo mật, hiệu năng, khả năng đọc. Đề xuất phiên bản tối ưu kèm giải thích.`
  }
];
