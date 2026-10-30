export interface SkillItem {
  name: string;
  category: string;
  level: string;
  experienceYears?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillsGroups: SkillGroup[] = [
  {
    id: "languages",
    name: "Ngôn ngữ Lập trình",
    description: "Các ngôn ngữ chính sử dụng trong phát triển phần mềm và kiến trúc hệ thống",
    skills: [
      { name: "TypeScript", category: "languages", level: "Thành thạo", highlight: true },
      { name: "JavaScript (ES6+)", category: "languages", level: "Thành thạo", highlight: true },
      { name: "HTML5 & Modern CSS3", category: "languages", level: "Thành thạo", highlight: true },
      { name: "Python", category: "languages", level: "Cơ bản / Nghiên cứu AI" },
      { name: "SQL", category: "languages", level: "Khá" },
      { name: "C/C++", category: "languages", level: "Nền tảng học thuật" },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Thư viện Web",
    description: "Hệ sinh thái công nghệ xây dựng giao diện và kiến trúc ứng dụng",
    skills: [
      { name: "Astro", category: "frameworks", level: "Chuyên sâu", highlight: true },
      { name: "React", category: "frameworks", level: "Thành thạo", highlight: true },
      { name: "Tailwind CSS", category: "frameworks", level: "Thành thạo", highlight: true },
      { name: "Node.js / Express", category: "frameworks", level: "Khá" },
      { name: "Canvas 2D API", category: "frameworks", level: "Khá / Đồ họa sáng tạo", highlight: true },
      { name: "Next.js", category: "frameworks", level: "Khá" },
    ],
  },
  {
    id: "tools",
    name: "Công cụ & Môi trường Phát triển",
    description: "Bộ công cụ tối ưu hóa quy trình làm việc và chất lượng sản phẩm",
    skills: [
      { name: "Git & GitHub", category: "tools", level: "Thành thạo", highlight: true },
      { name: "VS Code & Extension", category: "tools", level: "Thành thạo" },
      { name: "Vite & npm / pnpm", category: "tools", level: "Thành thạo" },
      { name: "GitHub Pages & Actions", category: "tools", level: "Khá" },
      { name: "Figma UI/UX Design", category: "tools", level: "Cơ bản / Prototyping" },
      { name: "Chrome DevTools", category: "tools", level: "Tối ưu hiệu năng / Debug" },
    ],
  },
];

export const featuredSkills = [
  "Astro",
  "TypeScript",
  "JavaScript ES6+",
  "React",
  "HTML5/CSS3",
  "Canvas 2D",
  "Git & GitHub",
  "Tailwind CSS",
];
