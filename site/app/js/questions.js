export default {
  current: null,
  more: [
    {
      question: "Năm nào iPhone đầu tiên được ra mắt?",
      answers: [
        "2007",
        "2005",
        "2008",
        "2006",
        "2009",
        "2010",
        "2004",
        "2011",
        "2003",
        "2012",
      ],
    },
    {
      question: "Đàn violin có bao nhiêu dây?",
      answers: ["4", "5", "6", "3", "8", "2", "7", "9", "10", "12"],
    },
    {
      question: "Thủ đô của Nhật Bản là gì?",
      answers: [
        "Tokyo",
        "Kyoto",
        "Osaka",
        "Nagoya",
        "Yokohama",
        "Sapporo",
        "Hiroshima",
        "Kobe",
        "Fukuoka",
        "Kawasaki",
      ],
    },
    {
      question: "Trái đất có bao nhiêu châu lục?",
      answers: ["7", "5", "6", "8", "4", "9", "3", "10", "2", "11"],
    },
    {
      question: "Chuối chín thường có màu gì?",
      answers: [
        "Vàng",
        "Xanh",
        "Nâu",
        "Đỏ",
        "Tím",
        "Cam",
        "Trắng",
        "Đen",
        "Hồng",
        "Xanh dương",
      ],
    },
    {
      question: "Một giờ có bao nhiêu phút?",
      answers: ["60", "50", "70", "40", "80", "30", "100", "120", "45", "90"],
    },
    {
      question: "Hành tinh nào gần Mặt Trời nhất?",
      answers: [
        "Sao Thủy",
        "Sao Kim",
        "Trái Đất",
        "Sao Hỏa",
        "Sao Mộc",
        "Sao Thổ",
        "Sao Thiên Vương",
        "Sao Hải Vương",
        "Sao Diêm Vương",
        "Tiểu hành tinh",
      ],
    },

    // ❤️ FINAL QUESTION
    {
      question:
        "Câu hỏi cuối cùng: ",
      isFinalQuestion: true,
      answers: [
        "Có 💕",    
        "Để em suy nghĩ thêm",
        "Có thể, nhưng chưa phải bây giờ",
        "Em cần thêm thời gian",
        "Em chưa sẵn sàng",
        "Anh hỏi nghiêm túc à?",
      ],
    },
  ],

  nextQuestion: function () {
    this.current = this.more.shift();
    return !!this.current;
  },
};
