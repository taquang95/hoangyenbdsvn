import { Project, Benefit, WhyReason, ContactInfo } from './types';

export const contactData: ContactInfo = {
  phone: '0865168678',
  phoneDisplay: '0865 168 678',
  facebookUrl: 'https://www.facebook.com/share/1bVcmjNK4y/?mibextid=wwXIfr',
  facebookFanpageUrl: 'https://www.facebook.com/share/1bVcmjNK4y/?mibextid=wwXIfr',
  zaloGroupUrl: 'https://zalo.me/0865168678',
  zaloChatUrl: 'https://zalo.me/0865168678'
};

export const benefitsData: Benefit[] = [
  {
    id: 'b1',
    title: 'Phân tích dự án rõ ràng',
    description: 'Bóc tách ưu và nhược điểm từng dự án. Đưa ra góc nhìn sâu sắc về dòng tiền và tiềm năng tăng giá thực tế.',
    iconName: 'LineChart'
  },
  {
    id: 'b2',
    title: 'Tư vấn căn theo nhu cầu',
    description: 'Lựa chọn phương án dựa trên mục đích thực: mua để ở lâu dài, đầu tư dòng tiền, tích sản hay tối ưu cho thuê.',
    iconName: 'Home'
  },
  {
    id: 'b3',
    title: 'Cập nhật chính sách mới',
    description: 'Cung cấp trực tiếp quỹ căn ngoại giao độc quyền, bảng giá nội bộ, tiến độ thi công và chương trình hỗ trợ ngân hàng mới nhất.',
    iconName: 'FileText'
  },
  {
    id: 'b4',
    title: 'Đồng hành sau giao dịch',
    description: 'Hỗ trợ trọn vẹn từ lúc ký hợp đồng, đóng tiền, nhận nhà, làm sổ đỏ đến khi setup khai thác cho thuê hay chuyển nhượng.',
    iconName: 'ShieldCheck'
  }
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    name: 'Vinhomes Smart City',
    status: 'active',
    description: 'Đại đô thị thông minh đẳng cấp quốc tế tại phía Tây Hà Nội. Hội tụ các phân phân khu căn hộ cao cấp nhất như Masteri West Heights, Lumiere Evergreen, The Tonkin với không gian sống thời thượng.',
    location: 'Đại lộ Thăng Long, Tây Mỗ & Đại Mỗ, Nam Từ Liêm, Hà Nội',
    developer: 'Vinhomes / Masterise Homes',
    highlights: ['3 đại công viên liên hoàn (Central Park, Sportia Park, Zen Park)', 'Kết nối trực tiếp 3 tuyến metro 5, 6, 7 trọng điểm', 'Vận hành thông minh chuẩn quốc tế & bàn giao cao cấp'],
    image: 'https://i.postimg.cc/PJ0jZFWF/vinhomes-smart-city.jpg',
    ctaText: 'Nhận bảng giá và quỹ căn mới nhất',
    priceEstimate: 'Khoảng 65 - 110 triệu/m²'
  },
  {
    id: 'p2',
    name: 'Imperia Sky Park',
    status: 'new',
    description: 'Tổ hợp căn hộ cao cấp sở hữu tọa độ vàng trên trục đường Minh Khai. Kiến tạo không gian sống sinh thái trong lòng phố thị với vườn chân mây và bể bơi vô cực ngắm trọn sông Hồng thơ mộng.',
    location: '423 Minh Khai, Hai Bà Trưng, Hà Nội',
    developer: 'MIK Group',
    highlights: ['Vị trí vàng trung tâm Hai Bà Trưng kết nối nhanh lên Phố Cổ', 'Bể bơi vô cực & Vườn chân mây tầng mái độc bản', 'Hệ thống 89 tiện ích khép kín đồng bộ chuẩn quốc tế'],
    image: 'https://i.postimg.cc/Rh2Bfb78/imperia-sky-park-kich-hoat-tam-diem-ket-noi-tay-thu-do.jpg',
    ctaText: 'Nhận tư vấn quỹ căn chuyển nhượng tốt',
    priceEstimate: 'Khoảng 70 - 90 triệu/m²'
  },
  {
    id: 'p3',
    name: 'Masterise Hà Nội Sesson Gaden',
    status: 'active',
    description: 'Siêu dự án phức hợp thương mại và căn hộ hạng sang được mong chờ nhất tại quận Thanh Xuân. Tọa lạc trên mảnh đất vàng Nguyễn Trãi, hứa hẹn biểu tượng sống xa hoa bậc nhất thủ đô.',
    location: '233 - 235 Nguyễn Trãi, Thanh Xuân, Hà Nội',
    developer: 'Masterise Homes',
    highlights: ['Siêu dự án phức hợp thương mại đắc địa nhất quận Thanh Xuân', 'Tâm điểm kết nối trực tiếp nhà ga đường sắt trên cao Metro Cát Linh', 'Hệ sinh thái dịch vụ Vingroup khép kín đẳng cấp quốc tế'],
    image: 'https://i.postimg.cc/90shTNdv/lumiere-hanoi-seasons-garden-1.jpg',
    ctaText: 'Đăng ký nhận thông tin sớm nhất',
    priceEstimate: 'Khoảng 110 - 150 triệu/m²'
  },
  {
    id: 'p4',
    name: 'Masteri Grand Coast',
    status: 'new',
    description: 'Siêu phẩm căn hộ hạng sang tiếp theo của Masterise Homes tại trái tim Ocean City (Vinhomes Ocean Park 3). Sở hữu thiết kế kính viền cong Low-E duy mỹ đẳng cấp và tầm nhìn trực diện tuyệt đỉnh ôm trọn vịnh biển bốn mùa Paradise Bay.',
    location: 'Vinhomes Ocean Park 3, Nghĩa Trụ, Văn Giang, Hưng Yên',
    developer: 'Masterise Homes',
    highlights: [
      'Vị trí độc tôn kế cận Vịnh biển bốn mùa Paradise Bay & Mega Grand World',
      'Đặc quyền đặc lợi với cụm tiện ích trong nhà đẳng cấp: Hồ bơi panorama tầng mái, phòng gym chuẩn quốc tế, rạp chiếu phim sang trọng',
      'Tiêu chuẩn bàn giao chuẩn khách sạn 5 sao quốc tế từ các thương hiệu hàng đầu thế giới'
    ],
    image: 'https://i.postimg.cc/j5S88J22/V03-CT05-OVERVIEW-02.jpg',
    ctaText: 'Đăng ký nhận bảng giá & quỹ căn ngoại giao đợt 1',
    priceEstimate: 'Khoảng 75 - 95 triệu/m²'
  }
];

export const reasonsData: WhyReason[] = [
  {
    id: 'r1',
    title: 'Nhiều năm thực chiến tư vấn Vinhomes & Imperia',
    text: 'Từng trực tiếp tư vấn và giao dịch thành công hàng trăm căn hộ cao cấp, nắm rõ đặc thù thiết kế, pháp lý và điểm mạnh yếu từng phân khu.',
    highlightText: 'Kinh nghiệm'
  },
  {
    id: 'r2',
    title: 'Am hiểu sâu sắc thị trường BĐS Hà Nội',
    text: 'Phân tích đa chiều về dự án của Vinhomes, MIK Group & Masterise Homes từ bài toán dòng tiền chi tiết đến tiềm năng khai thác thực tế.',
    highlightText: 'Am hiểu sâu'
  },
  {
    id: 'r3',
    title: 'Tư vấn nhu cầu thực - Đặt chữ Tâm lên đầu',
    text: 'Nói KHÔNG với tư vấn lèo lái hay chốt ảo. Tôi lắng nghe mong muốn thực sự, khả năng tài chính của quý khách để tìm ra căn hộ khớp chuẩn 100%.',
    highlightText: 'Chữ Tâm hàng đầu'
  },
  {
    id: 'r4',
    title: 'Thiết lập dòng tiền thông minh chi tiết',
    text: 'Tính toán chính xác mọi phương án: Vay ngân hàng ưu đãi lãi suất, thanh toán tiến độ hay thanh toán sớm để chiết khấu tối đa.',
    highlightText: 'Chuyên nghiệp'
  },
  {
    id: 'r5',
    title: 'Đồng hành dài lâu trọn vòng đời sản phẩm',
    text: 'Không dừng lại khi nhận bàn giao, tôi hỗ trợ trọn vẹn mọi thủ tục pháp lý, nhận nhà, cho thuê hay chuyển nhượng sau này.',
    highlightText: 'Đồng hành dài lâu'
  }
];
