export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
    description: "Kho lưu trữ mã nguồn và các dự án mở",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
    description: "Kết nối mạng lưới sự nghiệp chuyên môn",
  },
  {
    name: "Email",
    url: "mailto:contact@ituniverse.dev",
    icon: "mail",
    description: "Gửi tín hiệu liên lạc trực tiếp",
  },
];
