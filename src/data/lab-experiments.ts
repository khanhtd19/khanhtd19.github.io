export interface LabExperiment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Canvas Graphics' | 'CLI & Systems' | 'Physics & Simulation' | 'AI & Data';
  technologies: string[];
  status: 'Tương tác thực tế' | 'Hoàn thành' | 'Nghiên cứu';
  features: string[];
}

export const labExperiments: LabExperiment[] = [
  {
    id: 'particle-network',
    title: 'Interactive Particle Network',
    subtitle: 'Mạng Lưới Hạt Tương Tác Chuột 60 FPS',
    description: 'Thử nghiệm hệ thống hạt chuyển động tự do trong không gian 2D, tự động tính toán khoảng cách Euclid và liên kết các đường truyền năng lượng Neon khi các hạt tiến lại gần nhau hoặc tương tác với con trỏ chuột.',
    category: 'Canvas Graphics',
    technologies: ['HTML5 Canvas 2D', 'Vector Math', 'RequestAnimationFrame', 'Event Listeners'],
    status: 'Tương tác thực tế',
    features: [
      'Thuật toán liên kết động theo bán kính lân cận',
      'Tương tác lực hút và kết nối theo vị trí chuột người dùng',
      'Tùy chỉnh số lượng hạt, tốc độ và màu sắc quang phổ (Cyan / Violet)',
      'Tối ưu hóa vòng lặp render giữ vững 60 FPS'
    ]
  },
  {
    id: 'cyber-terminal',
    title: 'Cosmic Cyber Terminal',
    subtitle: 'Trình Giả Lập Dòng Lệnh Trực Tiếp (CLI)',
    description: 'Bảng điều khiển tương tác mô phỏng Terminal không gian, cho phép người dùng nhập các lệnh hệ thống để truy vấn thông tin tác giả, khám phá dự án, xem kỹ năng, hoặc kích hoạt hiệu ứng Matrix Rain.',
    category: 'CLI & Systems',
    technologies: ['TypeScript', 'DOM Manipulation', 'Command Parser', 'History Buffer'],
    status: 'Tương tác thực tế',
    features: [
      'Bộ xử lý lệnh phong phú: help, about, skills, projects, matrix, clear, date',
      'Hỗ trợ duyệt lịch sử lệnh bằng phím Mũi tên lên / xuống (Arrow Up/Down)',
      'Hiệu ứng Matrix Rain tương tác trực tiếp trong khung terminal',
      'Thiết kế giao diện Neon Cyberpunk tối ưu trải nghiệm gõ phím'
    ]
  },
  {
    id: 'orbital-simulator',
    title: 'Orbital Gravity Simulator',
    subtitle: 'Mô Phỏng Quỹ Đạo Chuyển Động Hành Tinh',
    description: 'Mô hình vật lý 2D trực quan hóa chuyển động quay quanh tâm hấp dẫn của các thiên thể vũ trụ, mô phỏng các chu kỳ quỹ đạo và đường đi vệt sáng (orbital trails).',
    category: 'Physics & Simulation',
    technologies: ['Canvas 2D', 'Trigonometry (Sin/Cos)', 'Physics Coordinates', 'Color Gradients'],
    status: 'Tương tác thực tế',
    features: [
      'Mô phỏng đa hành tinh với chu kỳ quỹ đạo và bán kính riêng biệt',
      'Hiển thị vệt sáng quỹ đạo phát quang (Glowing Trails)',
      'Điều khiển tốc độ thời gian thời gian thực (0.5x, 1x, 2x, 4x)',
      'Nhấp chuột vào canvas để thêm thiên thể mới vào quỹ đạo'
    ]
  }
];
