---
title: "Ứng Dụng Canvas 2D Để Tạo Hiệu Ứng Vũ Trụ Tương Tác"
description: "Hướng dẫn xây dựng hệ thống hạt (Particle Network) và trường sao chuyển động (Starfield) tối ưu FPS bằng Canvas 2D API."
pubDate: 2026-11-01
category: "Creative Coding"
tags:
  - Canvas
  - Animation
  - JavaScript
cover: "/favicon.svg"
draft: false
---

Hiệu ứng thị giác là yếu tố tạo nên linh hồn cho các website phong cách vũ trụ (Cosmic UI). Tuy nhiên, nếu lạm dụng hàng trăm thẻ DOM `div` với CSS animation, trình duyệt sẽ nhanh chóng bị tụt khung hình (FPS drop) nghiêm trọng. Giải pháp tối ưu chính là **HTML5 Canvas 2D**.

## 1. Bản Chất Hoạt Động Của Canvas 2D

Canvas là một bề mặt vẽ đồ họa điểm ảnh (pixel surface). Thay vì quản lý các nút phần tử DOM phức tạp trong bộ nhớ, chúng ta chỉ cần chạy một vòng lặp hoạt ảnh `requestAnimationFrame`:

```javascript
class Star {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.random() * 1.5 + 0.5;
    this.speed = Math.random() * 0.5 + 0.2;
    this.alpha = Math.random() * 0.7 + 0.3;
  }

  update(height) {
    this.y -= this.speed;
    if (this.y < 0) this.y = height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(85, 214, 255, ${this.alpha})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#55D6FF';
    ctx.fill();
  }
}
```

## 2. Kỹ Thuật Tối Ưu Hóa Hiệu Năng (60 FPS)

Khi phát triển hiệu ứng đồ họa trên web, bạn cần chú ý các nguyên tắc vàng sau:

### 1. Giới hạn số lượng hạt theo cấu hình thiết bị
Trên thiết bị di động (màn hình hẹp hơn 768px), giảm số hạt từ `150` xuống `40-50` để tiết kiệm pin và đảm bảo thiết bị không bị nóng.

### 2. Tôn trọng tùy chọn giảm chuyển động (`prefers-reduced-motion`)
Một số người dùng có cơ địa nhạy cảm với chuyển động hoặc muốn tiết kiệm tài nguyên. Hãy kiểm tra:

```javascript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
  // Hiển thị một khung ảnh tĩnh hoặc vô hiệu hóa vòng lặp animation
}
```

### 3. Tạm dừng khi chuyển tab (Page Visibility API)
Không lãng phí xung nhịp CPU khi người dùng đang ở tab trình duyệt khác:

```javascript
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationFrameId);
  } else {
    requestAnimationFrame(renderLoop);
  }
});
```

Canvas 2D mang lại sức mạnh to lớn trong việc tạo nên không gian vũ trụ sống động mà vẫn giữ được độ mượt mà cho trải nghiệm người dùng!
