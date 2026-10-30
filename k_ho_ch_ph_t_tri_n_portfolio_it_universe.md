# IT UNIVERSE — PERSONAL PORTFOLIO REQUIREMENT DOCUMENT (PRD)

* **Concept:** Cosmic Universe – Digital Space – Technology – AI
* **Framework:** Astro + TypeScript
* **Language:** Vietnamese
* **Deployment:** GitHub Pages
* **Content Management:** Markdown

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1. Giới thiệu
IT UNIVERSE là website portfolio cá nhân được xây dựng theo phong cách vũ trụ công nghệ (Cosmic Universe).
Website không chỉ đơn thuần là nơi giới thiệu thông tin cá nhân mà còn là không gian trưng bày các dự án, kiến thức lập trình, bài viết công nghệ và những thử nghiệm liên quan đến AI.
Mục tiêu là tạo ra một website có giao diện độc đáo, hiệu ứng hiện đại, trải nghiệm mượt mà và khả năng mở rộng trong tương lai.

### 1.2. Định hướng thiết kế
* **Chủ đề chính:** Vũ trụ, ngân hà, hành tinh, công nghệ.
* **Phong cách:** Futuristic Cosmic UI.
* **Giao diện:** Dark Theme.
* **Màu chủ đạo:** Deep Navy, Cosmic Blue, Cyan, Violet.
* **Hiệu ứng:** Starfield, Nebula, Particle, Orbital Rings, Glow.
* **Ngôn ngữ hiển thị:** Tiếng Việt.
* **Responsive:** Mobile, Tablet, Desktop.

### 1.3. Công nghệ sử dụng
| Công nghệ | Mục đích |
| :--- | :--- |
| **Astro** | Framework xây dựng static website tối ưu SEO và tốc độ |
| **TypeScript** | Quản lý dữ liệu và logic an toàn |
| **HTML5 / CSS3** | Cấu trúc giao diện, styling và animation |
| **JavaScript** | Xử lý tương tác phía client |
| **Markdown** | Quản lý nội dung bài viết blog |
| **Canvas 2D** | Hiệu ứng hạt (particles) và ngôi sao tĩnh/động |
| **Three.js** | Hiệu ứng 3D nâng cao khi cần |
| **Git & GitHub Pages** | Quản lý source code & Hosting miễn phí |

> *Lưu ý:* Ưu tiên website tĩnh, không cần backend hoặc database trong phiên bản đầu tiên.

---

## 2. CẤU TRÚC WEBSITE

Website gồm 6 trang chính:

### 2.1. HOME – Trang chủ
* **Mục đích:** Giới thiệu tổng quan về chủ nhân portfolio và các nội dung tiêu biểu.
* **Thành phần:**
  * Navbar với logo IT UNIVERSE.
  * Hero Section: Tên, giới thiệu ngắn, hành tinh công nghệ/Digital Planet, vòng quỹ đạo, hiệu ứng ánh sáng.
  * Hiệu ứng nền vũ trụ (Starfield/Particles).
  * Nút khám phá dự án (CTA).
  * Thống kê dự án và bài viết.
  * Kỹ năng công nghệ nổi bật.
  * Dự án nổi bật (Featured Projects).
  * Bài viết mới nhất (Latest Posts).
  * Footer.

### 2.2. ABOUT – Giới thiệu
* **Thành phần:**
  * Ảnh đại diện (Avatar).
  * Giới thiệu bản thân & Định hướng nghề nghiệp.
  * Thông tin học tập.
  * Timeline quá trình phát triển/học tập.
  * Technical Skills (Programming Languages, Frameworks & Tools).
  * Mục tiêu tương lai.
* *Yêu cầu:* Thông tin cá nhân phải được quản lý trong file data riêng (`src/data/profile.ts`) để dễ chỉnh sửa.

### 2.3. PROJECTS – Dự án
* **Mục đích:** Trưng bày các dự án cá nhân, đồ án và sản phẩm đã thực hiện.
* **Thông tin mỗi dự án:** Tên, hình ảnh đại diện, mô tả, công nghệ sử dụng, tính năng nổi bật, vai trò thực hiện, trạng thái, GitHub URL, Demo URL.
* **Bộ lọc:** Tất cả, Web Development, Mobile Development, AI & Technology, Other.
* *Yêu cầu:* Không tạo thông tin hoặc đường dẫn dự án giả.

### 2.4. POSTS – Blog công nghệ
* **Mục tiêu:** Cho phép đăng bài bằng Markdown trong repository mà không cần sửa code giao diện.
* **Công nghệ:** Astro Content Collections, Markdown, Shiki Syntax Highlighting, Astro Static Generation.
* **Frontmatter Schema:**
  ```yaml
  ---
  title: "Tên bài viết"
  description: "Mô tả ngắn về bài viết."
  pubDate: 2026-10-30
  updatedDate: 2026-11-01
  category: "Technology"
  tags:
    - Programming
    - Technology
  cover: "/images/posts/example.webp"
  draft: false
  ---
  ```
* **Chức năng:**
  1. Hiển thị danh sách bài viết & phân trang.
  2. Tìm kiếm theo tiêu đề/mô tả, lọc theo Danh mục & Tag.
  3. Sắp xếp mới nhất, hiển thị thời gian đọc, ảnh bìa, bài viết nổi bật.
  4. **Trang chi tiết:** Mục lục tự động (TOC), Syntax Highlighting, Reading Progress Bar, Bài viết liên quan.

### 2.5. LAB – Digital Laboratory
* **Mục đích:** Khu vực thử nghiệm công nghệ & sáng tạo.
* **Nội dung dự kiến:** Interactive Particle Network, Digital Planet, Orbital Animation, AI Visualization, Cyber Terminal, Data Visualization, Mini Tools.
* *Yêu cầu:* Mỗi thử nghiệm có mô tả, công nghệ và trạng thái. Ít nhất 1 thử nghiệm có tương tác thực tế.

### 2.6. CONTACT – Liên hệ
* **Thành phần:** Email, GitHub, LinkedIn, Social Links, Nút Copy Email tiện lợi.
* *Yêu cầu:* Không tạo form gửi email giả nếu chưa tích hợp service thực tế (Formspree, EmailJS,...).

---

## 3. THIẾT KẾ GIAO DIỆN & MÀU SẮC

### 3.1. Bảng màu (CSS Variables)
* **Deep Space:** `#070B18`
* **Dark Navy:** `#0D1428`
* **Surface:** `#121C34`
* **Cosmic Cyan:** `#55D6FF`
* **Electric Blue:** `#648BFF`
* **Cosmic Violet:** `#A78BFA`
* **Starlight:** `#EAF2FF`
* **Muted Text:** `#9AAAC4`

### 3.2. Typography & Layout
* **Font chính:** Inter / Sans-serif.
* **Font kỹ thuật/code:** JetBrains Mono.
* **Layout Max-width:** ~1200px (Desktop).
* **Card Style:** Glassmorphism, viền Neon mờ.

---

## 4. HỆ THỐNG HIỆU ỨNG

* **Nền:** Animated Starfield, Floating Particles, Nebula Gradient, Cosmic Grid.
* **Hero Section:** Digital Planet 3D/2D, Orbital Rings, Particle Network.
* **Tương tác:** Card Hover, Neon Border, Mouse-follow Glow, Scroll Reveal, Smooth Scrolling, Typing Animation.
* **Đặc biệt:** Reading Progress Bar, Interactive Terminal.
* *Lưu ý:* Ưu tiên Canvas 2D & CSS animation. Tôn trọng `prefers-reduced-motion` và tối ưu lượng particle trên Mobile.

---

## 5. CẤU TRÚC THƯ MỤC CHUẨN

```
portfolio/
├── public/
│   ├── images/ (avatar, projects, posts)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/      # Navbar, Footer, Starfield, HeroUniverse, ProjectCard, PostCard...
│   ├── content/
│   │   ├── config.ts    # Schema định nghĩa Markdown
│   │   └── posts/       # Nơi lưu file *.md
│   ├── data/            # profile.ts, projects.ts, skills.ts, social-links.ts
│   ├── layouts/         # BaseLayout.astro, PostLayout.astro
│   ├── pages/           # index, about, projects, posts, lab, contact, 404, rss.xml.ts
│   └── styles/          # global.css, theme.css, animations.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 6. LỘ TRÌNH PHÁT TRIỂN (DEVELOPMENT ROADMAP)

* **Phase 1 – Khởi tạo:** Khởi tạo project Astro + TypeScript, kiểm tra môi trường chạy local.
* **Phase 2 – Core UI:** Setup CSS Variables, Navbar, Footer, BaseLayout, Typography & Responsive structure.
* **Phase 3 – Main Pages:** Dựng UI các trang Home, About, Projects, Contact.
* **Phase 4 – Markdown Blog:** Thiết lập Content Collections, trang danh sách Posts, trang chi tiết, Search, Tag filter, TOC & Syntax Highlighting.
* **Phase 5 – Digital Lab:** Dựng trang Lab với Interactive Experiments (Particle/Terminal).
* **Phase 6 – Cosmic Effects:** Tích hợp hiệu ứng Starfield Canvas, Glow, Orbital Rings, Scroll Reveal.
* **Phase 7 – Optimization:** Kiểm tra Responsive, SEO (Meta/OG), Performance, Accessibility (`prefers-reduced-motion`).
* **Phase 8 – Deployment:** Cấu hình GitHub Actions, thiết lập base path chính xác và deploy lên GitHub Pages.

---

## 7. PROMPT DÀNH CHO AI CODING AGENT

> **Sao chép đoạn dưới đây vào AI Coding Agent (Cursor / Windsurf / Claude / GPT):**

```text
Bạn là Senior Frontend Developer chuyên về Astro, TypeScript, UI/UX và Creative Web Development.
Hãy đọc toàn bộ tài liệu `portfolio_plan.md` và xây dựng website IT UNIVERSE theo đúng kế hoạch.

Quy tắc bắt buộc:
1. Kiểm tra repository hiện tại trước khi chỉnh sửa.
2. Sử dụng Astro + TypeScript.
3. Xây dựng website nhiều trang thực sự (Multi-page App trong Astro).
4. Sử dụng Astro Content Collections + Markdown làm nguồn dữ liệu bài viết.
5. Triển khai đầy đủ trang danh sách và chi tiết bài viết.
6. Không dùng dữ liệu/đường dẫn giả thiếu kiểm chứng.
7. Đảm bảo GitHub Pages hoạt động đúng với base path (nếu repository có dạng /repo-name/).
8. Thực hiện lần lượt theo 8 Phase trong Lộ trình Phát triển. Sau mỗi Phase phải chạy `npm run build` kiểm tra lỗi trước khi chuyển Phase tiếp theo.

Bắt đầu bằng việc kiểm tra repository hiện tại và thực hiện Phase 1.
```