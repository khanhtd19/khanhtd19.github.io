export type ProjectCategory = "Web Development" | "Mobile Development" | "AI & Technology" | "Other";
export type ProjectStatus = "Hoàn thành" | "Đang phát triển" | "Thử nghiệm";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  features: string[];
  role: string;
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  year: string;
}

export const projectCategories: { key: string; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "Web Development", label: "Web Development" },
  { key: "Mobile Development", label: "Mobile Development" },
  { key: "AI & Technology", label: "AI & Technology" },
  { key: "Other", label: "Other" },
];

export const projectsData: Project[] = [
  {
    id: "it-universe-portfolio",
    title: "IT Universe Cosmic Portfolio",
    description: "Website portfolio cá nhân kiến trúc Multi-page tối ưu SEO cao độ, mang phong cách vũ trụ số và giao diện Futuristic Dark UI.",
    longDescription: "Dự án phát triển nền tảng portfolio cá nhân tĩnh với Astro + TypeScript, quản lý bài viết qua Astro Content Collections, tích hợp Canvas Starfield 2D, Glassmorphism và bảng màu Neon vũ trụ.",
    category: "Web Development",
    tags: ["Astro", "TypeScript", "Canvas 2D", "CSS3", "Markdown"],
    features: [
      "Kiến trúc Multi-page tĩnh chuẩn SEO với tốc độ tải siêu tốc",
      "Quản lý nội dung bài viết với Astro Content Collections & Markdown",
      "Giao diện Futuristic Glassmorphism với bộ màu Cosmic Universe",
      "Hệ thống Responsive thích ứng trên Mobile, Tablet và Desktop"
    ],
    role: "Lead Fullstack Developer & UI Designer",
    status: "Đang phát triển",
    featured: true,
    githubUrl: "https://github.com/khanh/it-universe",
    demoUrl: "https://khanh.github.io",
    year: "2026"
  },
  {
    id: "ai-code-companion",
    title: "AI Code Companion & Visualizer",
    description: "Bộ công cụ trực quan hóa cấu trúc dữ liệu và giải thuật hỗ trợ gợi ý thuật toán với trí tuệ nhân tạo.",
    longDescription: "Công cụ trực quan hóa cây nhị phân, đồ thị và sắp xếp theo từng bước thực thi, tích hợp API gợi ý mã nguồn tối ưu hóa độ phức tạp thời gian/không gian.",
    category: "AI & Technology",
    tags: ["TypeScript", "React", "AI API", "Canvas", "Algorithms"],
    features: [
      "Mô phỏng trực quan từng bước các giải thuật sắp xếp và duyệt đồ thị",
      "Gợi ý tối ưu hóa Big-O thông qua mô hình ngôn ngữ lớn",
      "Trình biên tập code trực quan với cú pháp Syntax Highlighting"
    ],
    role: "Frontend & AI Integration Developer",
    status: "Hoàn thành",
    featured: true,
    githubUrl: "https://github.com/khanh/ai-code-visualizer",
    demoUrl: "https://khanh.github.io/ai-visualizer",
    year: "2025"
  },
  {
    id: "galaxy-task-manager",
    title: "Galaxy Task & Productivity Suite",
    description: "Ứng dụng quản lý công việc và tiến độ học tập đa nhiệm theo phong cách sơ đồ quỹ đạo không gian.",
    longDescription: "Hệ thống quản lý thời gian áp dụng phương pháp Pomodoro kết hợp Kanban board với hiệu ứng visual quỹ đạo hành tinh theo tiến độ công việc.",
    category: "Web Development",
    tags: ["TypeScript", "React", "Tailwind CSS", "Zustand", "LocalStorage"],
    features: [
      "Giao diện Kanban trực quan kéo thả mượt mà",
      "Đồng hồ Pomodoro tích hợp âm thanh tập trung thư giãn",
      "Lưu trữ dữ liệu Offline-first với LocalStorage & IndexedDB"
    ],
    role: "Frontend Developer",
    status: "Hoàn thành",
    featured: true,
    githubUrl: "https://github.com/khanh/galaxy-tasks",
    demoUrl: "https://khanh.github.io/galaxy-tasks",
    year: "2025"
  },
  {
    id: "smart-campus-mobile",
    title: "Smart Campus Student Assistant",
    description: "Ứng dụng di động hỗ trợ sinh viên tra cứu thời khóa biểu, điểm học phần và bản đồ khuôn viên thông minh.",
    longDescription: "Ứng dụng di động đa nền tảng kết nối API cổng thông tin đào tạo trường đại học, thông báo lịch thi và chỉ đường trong khuôn viên trường.",
    category: "Mobile Development",
    tags: ["React Native", "TypeScript", "REST API", "Mobile UX"],
    features: [
      "Đồng bộ thời khóa biểu tự động kèm thông báo nhắc giờ học",
      "Bản đồ khuôn viên trường định vị vị trí các phòng học và tòa nhà",
      "Chế độ ngoại tuyến tra cứu thông tin khi không có mạng Internet"
    ],
    role: "Mobile App Developer",
    status: "Hoàn thành",
    featured: false,
    githubUrl: "https://github.com/khanh/smart-campus-app",
    year: "2024"
  },
  {
    id: "cosmic-terminal-cli",
    title: "Cosmic Terminal Developer CLI",
    description: "Công cụ dòng lệnh hỗ trợ tự động hóa scaffold dự án và quản lý quy trình dev cá nhân phong cách cyber vũ trụ.",
    longDescription: "CLI xây dựng bằng Node.js & TypeScript, cung cấp bộ lệnh nhanh để kiểm tra repo, tối ưu hóa asset và xuất báo cáo dự án.",
    category: "Other",
    tags: ["Node.js", "TypeScript", "CLI", "Shell Automation"],
    features: [
      "Khởi tạo cấu trúc dự án chuẩn chỉ với 1 lệnh gõ phím",
      "Báo cáo thống kê mã nguồn và dependency dạng bảng trực quan",
      "Tích hợp các script dọn dẹp bộ nhớ đệm và build tự động"
    ],
    role: "Tooling Developer",
    status: "Thử nghiệm",
    featured: false,
    githubUrl: "https://github.com/khanh/cosmic-terminal-cli",
    year: "2025"
  }
];
