export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface GoalItem {
  target: string;
  description: string;
  category: 'Short-term' | 'Long-term';
}

export interface Profile {
  name: string;
  title: string;
  role: string;
  tagline: string;
  bio: string;
  detailedBio: string[];
  location: string;
  email: string;
  phone?: string;
  availableForWork: boolean;
  statusText: string;
  careerOrientation: string;
  education: EducationItem[];
  timeline: TimelineItem[];
  futureGoals: GoalItem[];
}

export const profileData: Profile = {
  name: "Khánh",
  title: "Software Engineer & Creative Web Developer",
  role: "Frontend / Fullstack Developer",
  tagline: "Kiến tạo không gian web hiện đại trong kỷ nguyên vũ trụ số & AI",
  bio: "Lập trình viên đam mê kiến trúc phần mềm hiệu năng cao, tối ưu hóa trải nghiệm người dùng hiện đại và tích hợp các công nghệ Web & AI tiên tiến.",
  detailedBio: [
    "Tôi là một kỹ sư phần mềm tập trung vào việc xây dựng các ứng dụng web tốc độ cao, có tính thẩm mỹ và kiến trúc vững chắc. Với tư duy định hướng người dùng và đam mê công nghệ vũ trụ số (Cosmic Tech), tôi luôn tìm cách kết hợp giữa khoa học máy tính chuẩn mực và nghệ thuật hiển thị trực quan sáng tạo.",
    "Bên cạnh lập trình web hiện đại với Astro, TypeScript và hệ sinh thái JavaScript, tôi dành thời gian nghiên cứu các giải pháp AI ứng dụng, đồ họa Canvas 2D/3D tương tác và xây dựng hệ thống phần mềm mở rộng linh hoạt."
  ],
  location: "Việt Nam (GMT+7)",
  email: "khanh.dev@ituniverse.local",
  availableForWork: true,
  statusText: "Sẵn sàng đón nhận cơ hội dự án mới & Hợp tác công nghệ",
  careerOrientation: "Phát triển trở thành Senior Software Architect & Creative Technologist, chuyên sâu về kiến trúc Web tốc độ cao, thiết kế hệ thống phân tán và ứng dụng AI trong trải nghiệm số.",
  education: [
    {
      degree: "Cử nhân Công nghệ Thông tin",
      institution: "Khoa Công nghệ Thông tin",
      period: "2022 - 2026",
      description: "Chuyên ngành Kỹ thuật Phần mềm. Tập trung nghiên cứu Cấu trúc dữ liệu & Giải thuật, Kiến trúc hệ thống, Lập trình hướng đối tượng và Phát triển Ứng dụng Web tiên tiến."
    }
  ],
  timeline: [
    {
      year: "2026",
      title: "Phát triển Hệ thống IT UNIVERSE & Nghiên cứu AI",
      organization: "IT Universe Project",
      description: "Khởi xướng và xây dựng nền tảng portfolio kiến trúc Astro kết hợp TypeScript, tối ưu hóa SEO Static Generation, Canvas particles và tích hợp các thử nghiệm tương tác AI.",
      badge: "Hiện tại"
    },
    {
      year: "2025",
      title: "Xây dựng Ứng dụng Web Đa nền tảng & Fullstack",
      organization: "Academic & Personal Projects",
      description: "Phát triển các ứng dụng quản lý, RESTful APIs, hệ thống xác thực bảo mật và áp dụng các mẫu thiết kế phần mềm (Design Patterns) tiêu chuẩn.",
      badge: "Dự án"
    },
    {
      year: "2024",
      title: "Chuyên sâu Frontend Hiện đại & TypeScript",
      organization: "Learning & Practice",
      description: "Nắm vững TypeScript nâng cao, Component-driven Architecture, tối ưu hóa render và quản lý state phức tạp trong các framework hiện đại.",
      badge: "Kỹ năng"
    },
    {
      year: "2022 - 2023",
      title: "Bắt đầu Hành trình Lập trình & Khoa học Máy tính",
      organization: "University",
      description: "Xây dựng nền tảng vững chắc về thuật toán, cơ sở dữ liệu, mạng máy tính và tư duy kỹ thuật phần mềm chuẩn chỉ.",
      badge: "Nền tảng"
    }
  ],
  futureGoals: [
    {
      category: "Short-term",
      target: "Làm chủ Astro 5/7 & Frameworks Hiện Đại",
      description: "Tận dụng tối đa Content Layer, Server Islands và tối ưu hóa Lighthouse 100/100 trên toàn bộ các dự án web cá nhân."
    },
    {
      category: "Short-term",
      target: "Mở rộng Thư viện Thử nghiệm Lab",
      description: "Triển khai ít nhất 5 tương tác đồ họa Canvas 2D/Three.js và mô hình mini AI trên không gian số IT Universe."
    },
    {
      category: "Long-term",
      target: "Trở thành Senior Software Architect",
      description: "Dẫn dắt các giải pháp kiến trúc phần mềm quy mô lớn, đóng góp tích cực cho cộng đồng mã nguồn mở quốc tế."
    }
  ]
};
