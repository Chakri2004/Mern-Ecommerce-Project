const auraItems = {
  findAStore: [
    { 
      name: "Aura Store 1", 
      location: "Mumbai, India",
      mapUrl: "https://www.google.com/maps?q=Mumbai,India" 
    },
    { 
      name: "Aura Store 2", 
      location: "London, UK",
      mapUrl: "https://www.google.com/maps?q=London,UK" 
    },
    { 
      name: "Aura Store 3", 
      location: "Guimarães, Portugal",
      mapUrl: "https://www.google.com/maps?q=Guimarães,Portugal" 
    },
    { 
      name: "Aura Store 4", 
      location: "Tokyo, Japan",
      mapUrl: "https://www.google.com/maps?q=Tokyo,Japan" 
    },
  ],
  newfeatured: [
    {
      _id: "nf1",
      name: "Aura Premium Jacket Mens",
      price: 12500,
      description: "Premium jacket made of high-quality materials.",
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-premium-jacket-men.png" }
      ],
      reviews: [{ _id: "r1", name: "John Doe", rating: 5, comment: "Excellent quality!" }]
    },
    {
      _id: "nf2",
      name: "Aura Premium Jacket Womens",
      price: 12500,
      description: "Premium jacket made of high-quality materials.",
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-premium-jacket-women.png" }
      ],
      reviews: [{ _id: "r1", name: "John Doe", rating: 5, comment: "Excellent quality!" }]
    },
    {
      _id: "nf3",
      name: "Aura Limited Edition Mens Watch",
      price: 22000,
      description: "Limited edition wristwatch for premium style.",
      Stock: 10,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-limited-edition-watch-men-1.png" },
        { url: "/images/new-featured/aura-limited-edition-watch-men-2.png" }
      ],
      reviews: [{ _id: "r2", name: "Alice", rating: 5, comment: "Absolutely love it!" }]
    },
    {
      _id: "nf4",
      name: "Aura Limited Edition Womens Watch",
      price: 22000,
      description: "Limited edition wristwatch for premium style.",
      Stock: 10,
      ratings: 4.8,
      numOfReviews: 1,
      images: [
        { url: "/images/new-featured/aura-limited-edition-watch-women-1.png" },
        { url: "/images/new-featured/aura-limited-edition-watch-women-2.png" }
      ],
      reviews: [{ _id: "r2", name: "Alice", rating: 4.8, comment: "Absolutely love it!" }]
    },
    {
      _id: "nf5",
      name: "Aura Classic Bag Womens",
      price: 9500,
      description: "Elegant and spacious classic bag.",
      Stock: 20,
      ratings: 4.5,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-classic-bag-womens-1.png" },
        { url: "/images/new-featured/aura-classic-bag-womens-2.png" }
      ],
      reviews: [{ _id: "r3", name: "Bob", rating: 4.5, comment: "Good quality bag." }]
    },
    {
      _id: "nf6",
      name: "Aura Classic Bag Mens",
      price: 9500,
      description: "classic office bag.",
      Stock: 20,
      ratings: 4.3,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-classic-bag-mens-1.png" },
        { url: "/images/new-featured/aura-classic-bag-mens-2.png" },
        { url: "/images/new-featured/aura-classic-bag-mens-3.png" }
      ],
      reviews: [{ _id: "r3", name: "Bob", rating: 4.3, comment: "Good quality bag." }]
    },
    {
      _id: "nf7",
      name: "Aura Sunglasses Mens",
      price: 7000,
      description: "Stylish sunglasses with UV protection.",
      Stock: 30,
      ratings: 4.6,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-sunglasses-mens-1.png" },
        { url: "/images/new-featured/aura-sunglasses-mens-2.png" },
        { url: "/images/new-featured/aura-sunglasses-mens-3.png" }
      ],
      reviews: [{ _id: "r4", name: "Emma", rating: 4.6, comment: "Looks great!" }]
    },
    {
      _id: "nf8",
      name: "Aura Sunglasses Womens",
      price: 7000,
      description: "Stylish sunglasses with UV protection.",
      Stock: 30,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/new-featured/aura-sunglasses-womens-1.png" },
        { url: "/images/new-featured/aura-sunglasses-womens-2.png" }
      ],
      reviews: [{ _id: "r4", name: "Emma", rating: 5, comment: "Looks great!" }]
    }
  ],

  mens: [
    {
      _id: "m1",
      name: "Aura Men's Shirt",
      price: 12000,
      description: "Elegant men's shirt, perfect for casual or formal wear.",
      Stock: 20,
      ratings: 4.3,
      numOfReviews: 1,
      images: [{ url: "/images/mens/aura-men's-shirt-1.png" },
        { url: "/images/mens/aura-men's-shirt-2.png" },
        { url: "/images/mens/aura-men's-shirt-3.png" }
      ],
      reviews: [{ _id: "r5", name: "Bob", rating: 4.3, comment: "Good fit and quality." }]
    },
    {
      _id: "m2",
      name: "Aura Men's Trousers",
      price: 15000,
      description: "Comfortable and stylish trousers for men.",
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/mens/aura-men's-trousers-1.png" },
        { url: "/images/mens/aura-men's-trousers-2.png" },
        { url: "/images/mens/aura-men's-trousers-3.png" },
        { url: "/images/mens/aura-men's-trousers-4.png" }
      ],
      reviews: [{ _id: "r6", name: "Alex", rating: 5, comment: "Perfect fit!" }]
    },
    {
      _id: "m3",
      name: "Aura Men's Jacket",
      price: 18000,
      description: "Warm jacket for winter and casual wear.",
      Stock: 12,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/mens/aura-men's-Jacket-1.png" },
        { url: "/images/mens/aura-men's-Jacket-2.png" },
        { url: "/images/mens/aura-men's-Jacket-3.png" }
      ],
      reviews: [{ _id: "r7", name: "Ethan", rating: 5, comment: "Excellent quality!" }]
    },
    {
      _id: "m4",
      name: "Aura Men's Sweater",
      price: 14000,
      description: "Cozy sweater for daily wear.",
      Stock: 18,
      ratings: 4.4,
      numOfReviews: 1,
      images: [{ url: "/images/mens/aura-men's-sweater-1.png" },
        { url: "/images/mens/aura-men's-sweater-2.png" },
        { url: "/images/mens/aura-men's-sweater-3.png" }
      ],
      reviews: [{ _id: "r8", name: "Ryan", rating: 4.4, comment: "Good quality." }]
    }
  ],

  womens: [
    {
      _id: "w1",
      name: "Aura Women's Dress",
      price: 15000,
      description: "Beautiful and elegant women's dress for all occasions.",
      Stock: 12,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/womens/aura-women's-dress-1.png" },
        { url: "/images/womens/aura-women's-dress-2.png" },
        { url: "/images/womens/aura-women's-dress-3.png" }
      ],
      reviews: [{ _id: "r9", name: "Emma", rating: 5, comment: "Stunning dress!" }]
    },
    {
      _id: "w2",
      name: "Aura Women's Skirt",
      price: 9000,
      description: "Chic skirt for casual or party wear.",
      Stock: 18,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/womens/aura-women's-skirt-1.png" },
        { url: "/images/womens/aura-women's-skirt-2.png" },
        { url: "/images/womens/aura-women's-skirt-3.png" }
      ],
      reviews: [{ _id: "r10", name: "Sophia", rating: 5, comment: "Lovely skirt!" }]
    },
    {
      _id: "w3",
      name: "Aura Women's Top",
      price: 8000,
      description: "Comfortable and stylish top.",
      Stock: 20,
      ratings: 4.4,
      numOfReviews: 1,
      images: [
        { url: "/images/womens/aura-women's-top-1.png" },
        { url: "/images/womens/aura-women's-top-2.png" },
        { url: "/images/womens/aura-women's-top-3.png" }
      ],
      reviews: [{ _id: "r11", name: "Olivia", rating: 4.4, comment: "Good quality." }]
    },
    {
      _id: "w4",
      name: "Aura Women's Jacket",
      price: 16000,
      description: "Warm jacket for all seasons.",
      Stock: 10,
      ratings: 4.6,
      numOfReviews: 1,
      images: [
        { url: "/images/womens/aura-women's-Jacket-1.png" },
        { url: "/images/womens/aura-women's-Jacket-2.png" },
        { url: "/images/womens/aura-women's-Jacket-3.png" }
    ],
      reviews: [{ _id: "r12", name: "Ava", rating: 4.6, comment: "Excellent fit!" }]
    }
  ],

  kids: [
    {
      _id: "k1",
      name: "Aura Kids' Sneakers",
      price: 11500,
      description: "Comfortable and durable sneakers for kids.",
      Stock: 25,
      ratings: 4.4,
      numOfReviews: 1,
      images: [
        { url: "/images/kids/aura-kids'-sneakers-1.png" },
        { url: "/images/kids/aura-kids'-sneakers-2.png" },
        { url: "/images/kids/aura-kids'-sneakers-3.png" },
        { url: "/images/kids/aura-kids'-sneakers-4.png" }
      ],
      reviews: [{ _id: "r13", name: "Charlie", rating: 4.4, comment: "Kids love it!" }]
    },
    {
      _id: "k2",
      name: "Aura Kids' T-shirt",
      price: 7000,
      description: "Soft and comfortable T-shirt for kids.",
      Stock: 30,
      ratings: 4.3,
      numOfReviews: 1,
      images: [
        { url: "/images/kids/aura-kids'-t-shirt-1.png" },
        { url: "/images/kids/aura-kids'-t-shirt-2.png" },
        { url: "/images/kids/aura-kids'-t-shirt-3.png" }
      ],
      reviews: [{ _id: "r14", name: "Mia", rating: 4.3, comment: "Nice T-shirt!" }]
    },
    {
      _id: "k3",
      name: "Aura Kids' Jacket",
      price: 13000,
      description: "Warm and durable jacket for kids.",
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/kids/aura-kids'-Jacket-1.png" },
        { url: "/images/kids/aura-kids'-Jacket-2.png" },
        { url: "/images/kids/aura-kids'-Jacket-3.png" }
      ],
      reviews: [{ _id: "r15", name: "Leo", rating: 5, comment: "Very comfy!" }]
    },
    {
      _id: "k4",
      name: "Aura Kids' Shorts",
      price: 6000,
      description: "Lightweight shorts for summer wear.",
      Stock: 20,
      ratings: 4.6,
      numOfReviews: 1,
      images: [
        { url: "/images/kids/aura-kids'-shorts-1.png" },
        { url: "/images/kids/aura-kids'-shorts-2.png" },
        { url: "/images/kids/aura-kids'-shorts-3.png" }
      ],
      reviews: [{ _id: "r16", name: "Ella", rating: 4.6, comment: "Good quality." }]
    }
  ],

  shoes: [
    {
      _id: "ap1",
      name: "Aura Luxe Runner",
      price: 20000,
      description: "Ultra-light running shoes with premium cushioning.",
      Stock: 10,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-luxe-runner-1.png" },
        { url: "/images/shoes/aura-luxe-runner-2.png" },
        { url: "/images/shoes/aura-luxe-runner-3.png" }
      ],
      reviews: [{ _id: "rev19", name: "Sophia", rating: 5, comment: "Super premium feel!" }]
    },
    {
      _id: "ap2",
      name: "Aura Elite Street",
      price: 19800,
      description: "Fashion-forward sneakers with top-quality materials.",
      Stock: 9,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-elite-street-1.png" },
        { url: "/images/shoes/aura-elite-street-2.png" },
        { url: "/images/shoes/aura-elite-street-3.png" }
      ],
      reviews: [{ _id: "rev20", name: "Oliver", rating: 5, comment: "Stylish and comfy!" }]
    },
    {
      _id: "ap3",
      name: "Aura Apex Trainer",
      price: 20500,
      description: "Multi-sport premium trainer with enhanced durability.",
      Stock: 8,
      ratings: 4.8,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-apex-trainer-1.png" },
        { url: "/images/shoes/aura-apex-trainer-2.png" },
        { url: "/images/shoes/aura-apex-trainer-3.png" }
      ],
      reviews: [{ _id: "rev21", name: "Liam", rating: 4.8, comment: "High-quality build!" }]
    },
    {
      _id: "ap4",
      name: "Aura Signature Pro",
      price: 21000,
      description: "Limited edition stylish shoes for collectors and enthusiasts.",
      Stock: 7,
      ratings: 4.9,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-signature-pro-1.png" },
        { url: "/images/shoes/aura-signature-pro-2.png" },
        { url: "/images/shoes/aura-signature-pro-3.png" },
        { url: "/images/shoes/aura-signature-pro-4.png" }
      ],
      reviews: [{ _id: "rev22", name: "Ava", rating: 4.9, comment: "Exclusive and premium!" }]
    },
    {
      _id: "cs1",
      name: "Aura Trendy Sneakers",
      price: 14000,
      description: "Fashionable sneakers for urban street style, lightweight and versatile.",
      Stock: 25,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-trendy-sneakers-1.png" },
        { url: "/images/shoes/aura-trendy-sneakers-2.png" },
        { url: "/images/shoes/aura-trendy-sneakers-3.png" }
      ],
      reviews: [{ _id: "rev4", name: "Mia", rating: 5, comment: "Super stylish!" }]
    },
    {
      _id: "cs2",
      name: "Aura Casual Sliders",
      price: 12000,
      description: "Stylish casual shoes for everyday wear.",
      Stock: 6,
      ratings: 4.4,
      numOfReviews: 1,
      images: [
        { url: "/images/shoes/aura-casual-sliders-1.png" },
        { url: "/images/shoes/aura-casual-sliders-2.png" }
      ],
      reviews: [{ _id: "rev3", name: "Sam", rating: 4.4, comment: "Nice shoes!" }]
    },
  ],

  laptops: [
    {
      _id: "l1",
      name: "AuraBook Pro X",
      price: 155000,
      description: "High-end laptop with premium performance.",
      Stock: 5,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/laptops/aurabook-pro-x-1.jpg" },
        { url: "/images/laptops/aurabook-pro-x-2.jpg" },
        { url: "/images/laptops/aurabook-pro-x-3.jpg" },
        { url: "/images/laptops/aurabook-pro-x-4.jpg" },
        { url: "/images/laptops/aurabook-pro-x-5.jpg" }
      ],
      reviews: [{ _id: "r21", name: "Steve", rating: 5, comment: "Perfect for work and gaming." }],
      specifications: {
        processor: "Intel Core Ultra 9 285HX (16 cores, up to 5.7GHz)",
        graphics: "NVIDIA GeForce RTX 4070 (8GB GDDR6, 140W TGP)",
        ram: "32GB LPDDR5X-7467 (soldered, dual-channel)",
        storage: "1TB PCIe 4.0 NVMe SSD (upgradable)",
        display: '16" 4K (3840x2400) OLED, 120Hz, 500 nits, 100% DCI-P3, HDR500',
        battery: "90Wh, up to 12 hours (mixed use), 100W fast charging",
        ports: "2x Thunderbolt 4, 1x USB-A 3.2, HDMI 2.1, SD card reader, audio jack",
        keyboard: "Backlit RGB, 1.5mm key travel, glass trackpad with haptic feedback",
        audio: "Quad speakers (2x 2W woofers + 2x 2W tweeters), Dolby Atmos, AI noise cancel",
        webcam: "1080p FHD IR with privacy shutter, Windows Hello",
        connectivity: "Wi-Fi 7, Bluetooth 5.4",
        dimensions: '0.7" x 14.1" x 9.8" (18mm x 358mm x 249mm)',
        weight: "4.2 lbs (1.9 kg)",
        build: "Aluminum chassis, MIL-STD-810H certified",
        os: "Windows 11 Pro",
        warranty: "2-year limited, 1-year accidental damage",
        features: "Aura AI optimization, fingerprint reader, stylus support"
      }
    },
    {
      _id: "l2",
      name: "AuraBook X",
      price: 125000,
      description: "Lightweight and powerful laptop for everyday use.",
      Stock: 7,
      ratings: 4.8,
      numOfReviews: 1,
      images: [
        { url: "/images/laptops/aurabook-x-1.jpg" },
        { url: "/images/laptops/aurabook-x-2.jpg" },
        { url: "/images/laptops/aurabook-x-3.jpg" },
        { url: "/images/laptops/aurabook-x-4.jpg" },
        { url: "/images/laptops/aurabook-x-5.jpg" }
      ],
      reviews: [{ _id: "r22", name: "Mark", rating: 4.8, comment: "Great battery life!" }],
      specifications: {
        Processor: "Intel Core Ultra 9 285HX (16 cores, up to 5.7GHz)",
        Graphics: "NVIDIA GeForce RTX 4070 (8GB GDDR6, 140W TGP)",
        Ram: "32GB LPDDR5X-7467 (soldered, dual-channel)",
        Storage: "1TB PCIe 4.0 NVMe SSD (upgradable)",
        Display: "16\" 4K OLED, 120Hz, 500 nits, 100% DCI-P3, HDR500",
        Battery: "90Wh, up to 12 hours, 100W fast charging",
        Ports: "2x Thunderbolt 4, 1x USB-A 3.2, HDMI 2.1, SD card reader, audio jack",
        Keyboard: "Backlit RGB, 1.5mm key travel, glass trackpad with haptic feedback",
        Audio: "Quad speakers (2x 2W woofers + 2x 2W tweeters), Dolby Atmos, AI noise cancel",
        Webcam: "1080p FHD IR with privacy shutter, Windows Hello",
        Connectivity: "Wi-Fi 7, Bluetooth 5.4",
        Dimensions: "0.7\" x 14.1\" x 9.8\" (18mm x 358mm x 249mm)",
        Weight: "4.2 lbs (1.9 kg)",
        Build: "Aluminum chassis, MIL-STD-810H certified",
        OS: "Windows 11 Pro",
        Warranty: "2-year limited, 1-year accidental damage",
        Features: "Aura AI optimization, fingerprint reader, stylus support",
      },
    },
    {
      _id: "l3",
      name: "AuraBook Gamer",
      price: 85000,
      description: "Laptop designed for gaming performance.",
      Stock: 4,
      ratings: 4.9,
      numOfReviews: 1,
      images: [
        { url: "/images/laptops/aurabook-gamer-1.jpg" },
        { url: "/images/laptops/aurabook-gamer-2.jpg" },
        { url: "/images/laptops/aurabook-gamer-3.jpg" },
        { url: "/images/laptops/aurabook-gamer-4.jpg" },
        { url: "/images/laptops/aurabook-gamer-5.jpg" }
      ],
      reviews: [{ _id: "r23", name: "Anna", rating: 4.9, comment: "Runs games smoothly!" }],
      specifications: {
        processor: "AMD Ryzen AI 9 HX 370 (12 cores, up to 5.1GHz)",
        graphics: "NVIDIA GeForce RTX 5070 (8GB GDDR7, 115W TGP)",
        ram: "32GB DDR5-5600 (upgradable to 64GB)",
        storage: "1TB PCIe 4.0 NVMe SSD (upgradable)",
        display: '16" QHD+ (2560x1600) IPS, 240Hz, 500 nits, G-Sync',
        battery: "80Wh, up to 6 hours (gaming), 8 hours (mixed), 280W charging",
        ports: "2x USB-C 3.2, 2x USB-A 3.2, HDMI 2.1, Ethernet, audio jack",
        keyboard: "Per-key RGB backlit, 1.7mm key travel, large glass trackpad",
        audio: "Quad speakers (2x 4W woofers + 2x 2W tweeters), DTS:X Ultra",
        webcam: "1080p FHD",
        connectivity: "Wi-Fi 7, Bluetooth 5.4",
        dimensions: '1.0" x 14.2" x 10.3" (25mm x 361mm x 261mm)',
        weight: "5.5 lbs (2.5 kg)",
        build: "Aluminum lid with plastic base, vapor chamber cooling",
        os: "Windows 11 Home",
        warranty: "2-year limited",
        features: "RGB keyboard zones, MUX switch for GPU, overclocking support"
      }
    },
    {
      _id: "l4",
      name: "AuraBook Student",
      price: 65000,
      description: "Affordable laptop for students.",
      Stock: 10,
      ratings: 4.7,
      numOfReviews: 1,
      images: [
        { url: "/images/laptops/aurabook-student-1.jpg" },
        { url: "/images/laptops/aurabook-student-2.jpg" },
        { url: "/images/laptops/aurabook-student-3.png" },
        { url: "/images/laptops/aurabook-student-4.png" },
        { url: "/images/laptops/aurabook-student-5.png" }
      ],
      specifications: {
        processor: "Intel Core i5-1335U (10 cores, up to 4.6GHz)",
        graphics: "Intel UHD Graphics (integrated)",
        ram: "8GB LPDDR4X-4266 (soldered)",
        storage: "512GB PCIe 3.0 NVMe SSD",
        display: '15.6" FHD (1920x1080) IPS, 60Hz, 300 nits',
        battery: "45Wh, up to 10 hours (mixed use), 65W charging",
        ports: "2x USB-A 3.2, 1x USB-C 3.2, HDMI 1.4, audio jack",
        keyboard: "Backlit white, 1.4mm key travel, multi-touch trackpad",
        audio: "Dual speakers (2x 2W), HD Audio",
        webcam: "720p HD",
        connectivity: "Wi-Fi 6, Bluetooth 5.2",
        dimensions: '0.7" x 14.1" x 9.3" (18mm x 358mm x 236mm)',
        weight: "3.7 lbs (1.68 kg)",
        build: "Plastic chassis with reinforced hinges",
        os: "Windows 11 Home in S Mode (upgradable)",
        warranty: "1-year limited",
        features: "Aura student dashboard, expandable storage slot"
      },
      reviews: [{ _id: "r24", name: "Sophia", rating: 4.7, comment: "Very practical!" }],
    }
  ],
  jerseyVariants: [
    {
      _id: "r1",
      name: "Red Jersey",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/jerseys/red-jersey-1.png" },
        { url: "/images/jerseys/red-jersey-2.png" },
        { url: "/images/jerseys/red-jersey-3.png" },
        { url: "/images/jerseys/red-jersey-4.png" }
      ],
      reviews: [{ _id: "rev1", name: "John", rating: 5, comment: "Great quality!" }],
      description: "Classic red jersey, perfect for sports and casual wear.",
    },
    {
      _id: "r2",
      name: "Blue Jersey",
      price: 5995,
      Stock: 15,
      ratings: 4.4,
      numOfReviews: 1,
      images: [{ url: "/images/jerseys/blue-jersey-1.png" },
        { url: "/images/jerseys/blue-jersey-2.png" },
        { url: "/images/jerseys/blue-jersey-3.png" }
      ],
      reviews: [{ _id: "rev2", name: "Alice", rating: 4.4, comment: "Looks nice!" }],
      description: "Stylish blue jersey, lightweight and comfortable.",
    },
    {
      _id: "r3",
      name: "Black Jersey",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/jerseys/black-jersey-1.png" },
        { url: "/images/jerseys/black-jersey-2.png" },
        { url: "/images/jerseys/black-jersey-3.png" }
      ],
      reviews: [{ _id: "rev3", name: "Emma", rating: 5, comment: "Excellent fit!" }],
      description: "Elegant black jersey, ideal for casual or sports activities.",
    },
    {
      _id: "r4",
      name: "White Jersey",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/jerseys/white-jersey-1.png" },
        { url: "/images/jerseys/white-jersey-2.png" },
        { url: "/images/jerseys/white-jersey-3.png" }
      ],
      reviews: [{ _id: "rev4", name: "Liam", rating: 5, comment: "Very comfortable!" }],
      description: "Classic white jersey, breathable and stylish.",
    },
  ],
  stellarVariants: [
    {
      _id: "s1",
      name: "Aura Stellar T-Shirt",
      price: 5995,
      Stock: 20,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/stellar/aura-stellar-t-shirt-1.png" },
        { url: "/images/stellar/aura-stellar-t-shirt-2.png" },
        { url: "/images/stellar/aura-stellar-t-shirt-3.png" },
        { url: "/images/stellar/aura-stellar-t-shirt-4.png" }
      ],
      reviews: [{ _id: "rev1", name: "Emma", rating: 5, comment: "Very comfy!" }],
      description: "Stylish Aura Stellar T-Shirt, lightweight and breathable.",
    },
    {
      _id: "s2",
      name: "Aura Stellar Hoodie Unisex",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/stellar/aura-stellar-hoodie-unisex-1.png" },
        { url: "/images/stellar/aura-stellar-hoodie-unisex-2.png" }
      ],
      reviews: [{ _id: "rev2", name: "Liam", rating: 5, comment: "Perfect fit!" }],
      description: "Cozy hoodie suitable for both men and women, perfect for casual wear.",
    },
    {
      _id: "s3",
      name: "Aura Stellar Shoes",
      price: 25995,
      Stock: 25,
      ratings: 4.4,
      numOfReviews: 1,
      images: [{ url: "/images/stellar/aura-stellar-shoes-1.png" },
        { url: "/images/stellar/aura-stellar-shoes-2.png" },
        { url: "/images/stellar/aura-stellar-shoes-3.png" }
      ],
      reviews: [{ _id: "rev3", name: "Sophia", rating: 4.4, comment: "Comfortable and Looks great!" }],
      description: "Stylish Shoes to complete your Aura Stellar outfit.",
    },
    {
      _id: "s4",
      name: "Aura Stellar Bicycle",
      price: 75995,
      Stock: 6,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/stellar/aura-stellar-bicycle-1.png" },
        { url: "/images/stellar/aura-stellar-bicycle-2.png" },
        { url: "/images/stellar/aura-stellar-bicycle-3.png" }
      ],
      reviews: [{ _id: "rev4", name: "Noah", rating: 5, comment: "It feels like riding on air—or perhaps !" }],
      description: "The Future is Now: A Ride Beyond Expectations with the Aura Stellar Bicycle.",
    }
  ],
  eclipseVariants: [
    {
      _id: "e1",
      name: "Aura Eclipse Hoodie Unisex",
      price: 5995,
      Stock: 20,
      ratings: 4.6,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-hoodie-unisex-1.png" },
        { url: "/images/eclipse/aura-eclipse-hoodie-unisex-2.png" },
        { url: "/images/eclipse/aura-eclipse-hoodie-unisex-3.png" }
      ],
      reviews: [{ _id: "rev1", name: "Olivia", rating: 4.6, comment: "Very cozy!" }],
      description: "Comfortable unisex hoodie from the Aura Eclipse collection, perfect for casual wear.",
    },
    {
      _id: "e2",
      name: "Aura Eclipse Joggers Men",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-joggers-men-1.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-men-2.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-men-3.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-men-4.png" }
      ],
      reviews: [{ _id: "rev2", name: "Ethan", rating: 5, comment: "Super comfy joggers!" }],
      description: "Slim-fit joggers from the Aura Eclipse collection, great for lounging or workouts.",
    },
    {
      _id: "e3",
      name: "Aura Eclipse Joggers Women",
      price: 5995,
      Stock: 15,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-joggers-women-1.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-women-2.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-women-3.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-women-4.png" },
        { url: "/images/eclipse/aura-eclipse-joggers-women-5.png" }
      ],
      reviews: [{ _id: "rev2", name: "Ethan", rating: 5, comment: "Super comfy joggers!" }],
      description: "Slim-fit joggers from the Aura Eclipse collection, great for lounging or workouts.",
    },
    {
      _id: "e4",
      name: "Aura Eclipse Shoes",
      price: 25995,
      Stock: 9,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-Shoes-1.png" },
        { url: "/images/eclipse/aura-eclipse-Shoes-2.png" },
        { url: "/images/eclipse/aura-eclipse-Shoes-3.png" },
        { url: "/images/eclipse/aura-eclipse-Shoes-4.png" }
      ],
      reviews: [{ _id: "rev1", name: "Ethan", rating: 5, comment: "Super comfy Shoes!" }],
      description: "Nice Comfy Shoes from Aura Eclipse.",
    },
    {
      _id: "e4",
      name: "Aura Eclipse Bicycle",
      price: 75995,
      Stock: 4,
      ratings: 5,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-bicycle-1.png" },
        { url: "/images/eclipse/aura-eclipse-bicycle-2.png" },
        { url: "/images/eclipse/aura-eclipse-bicycle-3.png" }
      ],
      reviews: [{ _id: "rev4", name: "Noor", rating: 5, comment: "It feels like riding on air—or perhaps !" }],
      description: "The Future is Now: A Ride Beyond Expectations with the Aura eclipse Bicycle.",
    },
    {
      _id: "e5",
      name: "Aura Eclipse Cap",
      price: 5995,
      Stock: 25,
      ratings: 4.4,
      numOfReviews: 1,
      images: [{ url: "/images/eclipse/aura-eclipse-cap-1.png" },
        { url: "/images/eclipse/aura-eclipse-cap-2.png" },
        { url: "/images/eclipse/aura-eclipse-cap-3.png" },
        { url: "/images/eclipse/aura-eclipse-cap-4.png" }
      ],
      reviews: [{ _id: "rev3", name: "Ava", rating: 4.4, comment: "Fits perfectly!" }],
      description: "Stylish Aura Eclipse cap, adjustable and suitable for all occasions.",
    },
  ],
  novaVariants: [
    {
      _id: "n1",
      name: "Aura Chrono Watch",
      price: 110000,
      Stock: 6,
      ratings: 5,
      numOfReviews: 2,
      images: [
        { url: "/images/nova/aura-chrono-watch-1.png" },
        { url: "/images/nova/aura-chrono-watch-2.png" },
        { url: "/images/nova/aura-chrono-watch-3.png" }
      ],
      reviews: [
        { _id: "r1", name: "Ananya", rating: 5, comment: "Luxury feel and premium quality!" },
        { _id: "r2", name: "Rohit", rating: 5, comment: "Stylish and elegant." }
      ],
      description: "The Aura Chrono Watch blends elegance and precision. Water-resistant and crafted with a stainless steel body."
    },
    {
      _id: "n2",
      name: "Aura Sport Watch",
      price: 88500,
      Stock: 8,
      ratings: 5,
      numOfReviews: 2,
      images: [
        { url: "/images/nova/aura-sport-watch-1.png" },
        { url: "/images/nova/aura-sport-watch-2.png" },
        { url: "/images/nova/aura-sport-watch-3.png" },
        { url: "/images/nova/aura-sport-watch-4.png" },
        { url: "/images/nova/aura-sport-watch-5.png" }
      ],
      reviews: [
        { _id: "r1", name: "Karan", rating: 5, comment: "Perfect for gym and sports!" },
        { _id: "r2", name: "saanvi", rating: 5, comment: "It is Perfect and premium quality!" }
      ],
      description: "A durable, sporty watch designed for active lifestyles. Features digital display and water resistance."
    },
    {
      _id: "n3",
      name: "Aura Platinum Watch",
      price: 285000,
      Stock: 4,
      ratings: 4.9,
      numOfReviews: 1,
      images: [
        { url: "/images/nova/aura-platinum-watch-1.png" },
        { url: "/images/nova/aura-platinum-watch-2.png" },
        { url: "/images/nova/aura-platinum-watch-3.png" }
      ],
      reviews: [
        { _id: "r1", name: "Goutham", rating: 4.9, comment: "Very premium and stylish!" },
      ],
      description: "An advanced smartwatch with health tracking, notifications, and stylish design."
    },
    {
      _id: "n4",
      name: "Aura Premium Nova Watch",
      price: 2500000,
      Stock: 2,
      ratings: 5,
      numOfReviews: 1,
      images: [
        { url: "/images/nova/aura-premium-nova-watch-1.png" },
        { url: "/images/nova/aura-premium-nova-watch-2.png" },
        { url: "/images/nova/aura-premium-nova-watch-3.png" }
      ],
      reviews: [
        { _id: "r1", name: "Vikrant", rating: 5, comment: "Luxury and stylish!" }
      ],
      description: "An advanced smartwatch with health tracking, notifications, and stylish design."
    },
  ],
  basketball: [
    { _id: "b1", name: "Aura Slam Dunk Jersey", price: 4999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/basketball/basketballjersey-1.png" },{ url: "/images/basketball/basketballjersey-2.png" },{ url: "/images/basketball/basketballjersey-3.png" }], description: "Comfortable basketball jersey for practice and games." },
    { _id: "b2", name: "Aura Pro Basketball Shoes", price: 8999, Stock: 8, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/basketball/basketballshoes-1.png" },{ url: "/images/basketball/basketballshoes-2.png" },{ url: "/images/basketball/basketballshoes-3.png" },{ url: "/images/basketball/basketballshoes-4.png" }], description: "High performance basketball shoes." },
    { _id: "b3", name: "Aura Game Shorts", price: 2999, Stock: 15, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/basketball/basketballshorts-1.png" },{ url: "/images/basketball/basketballshorts-2.png" },{ url: "/images/basketball/basketballshorts-3.png" }], description: "Breathable basketball shorts." },
    { _id: "b4", name: "Aura Basketball Headband", price: 499, Stock: 20, ratings: 5, numOfReviews: 0, images: [{ url: "/images/basketball/basketballheadband-1.png" },{ url: "/images/basketball/basketballheadband-2.png" },{ url: "/images/basketball/basketballheadband-3.png" }], description: "Headband for sweat control." },
    { _id: "b5", name: "Aura Wristband", price: 599, Stock: 25, ratings: 4.4, numOfReviews: 0, images: [{ url: "/images/basketball/basketballwristband-1.png" },{ url: "/images/basketball/basketballwristband-2.png" },{ url: "/images/basketball/basketballwristband-3.png" }], description: "Wristbands for comfort and style." },
    { _id: "b6", name: "Aura Basketball Socks", price: 499, Stock: 30, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/basketball/basketballsocks-1.png" },{ url: "/images/basketball/basketballsocks-2.png" },{ url: "/images/basketball/basketballsocks-3.png" }], description: "High-performance basketball socks." },
    { _id: "b7", name: "Aura Training Hoodie", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/basketball/basketballhoodie-1.png" },{ url: "/images/basketball/basketballhoodie-2.png" },{ url: "/images/basketball/basketballhoodie-3.png" }], description: "Warm training hoodie for basketball." },
  ],

  football: [
    { _id: "f1", name: "Aura Football Jersey", price: 4999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/football/footballjersey-1.png" },{ url: "/images/football/footballjersey-2.png" },{ url: "/images/football/footballjersey-3.png" }], description: "Comfortable football jersey for matches." },
    { _id: "f2", name: "Aura Football Shoes", price: 8999, Stock: 8, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/football/footballshoes-1.png" },{ url: "/images/football/footballshoes-2.png" },{ url: "/images/football/footballshoes-3.png" }], description: "High-performance football shoes." },
    { _id: "f3", name: "Aura Game Shorts", price: 2999, Stock: 15, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/football/footballshorts-1.png" },{ url: "/images/football/footballshorts-2.png" },{ url: "/images/football/footballshorts-3.png" }], description: "Breathable football shorts." },
    { _id: "f4", name: "Aura Football Socks", price: 499, Stock: 30, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/football/footballsocks-1.png" },{ url: "/images/football/footballsocks-2.png" },{ url: "/images/football/footballsocks-3.png" }], description: "High-performance football socks." },
    { _id: "f5", name: "Aura Training Hoodie", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/football/footballhoodie-1.png" },{ url: "/images/football/footballhoodie-2.png" },{ url: "/images/football/footballhoodie-3.png" }], description: "Warm training hoodie for football." },
  ],

  running: [
    { _id: "r1", name: "Aura Running Shoes", price: 6999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/running/runningshoes-1.png" },{ url: "/images/running/runningshoes-2.png" },{ url: "/images/running/runningshoes-3.png" }], description: "Lightweight running shoes." },
    { _id: "r2", name: "Aura Running Shorts", price: 2999, Stock: 15, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/running/runningshorts-1.png" },{ url: "/images/running/runningshorts-2.png" },{ url: "/images/running/runningshorts-3.png" }], description: "Breathable running shorts." },
    { _id: "r3", name: "Aura Running T-Shirt", price: 2499, Stock: 20, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/running/runningtshirt-1.png" },{ url: "/images/running/runningtshirt-2.png" },{ url: "/images/running/runningtshirt-3.png" }], description: "Moisture-wicking running T-Shirt." },
    { _id: "r4", name: "Aura Running Socks", price: 1499, Stock: 30, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/running/runningsocks-1.png" },{ url: "/images/running/runningsocks-2.png" }], description: "Comfortable running socks." },
    { _id: "r5", name: "Aura Running Hoodie", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/running/runninghoodie-1.png" },{ url: "/images/running/runninghoodie-2.png" },{ url: "/images/running/runninghoodie-3.png" },{ url: "/images/running/runninghoodie-4.png" }], description: "Warm running hoodie." },
    { _id: "r6", name: "Aura Running Vest", price: 2999, Stock: 18, ratings: 5, numOfReviews: 0, images: [{ url: "/images/running/runningvest-1.png" },{ url: "/images/running/runningvest-2.png" },{ url: "/images/running/runningvest-3.png" }], description: "Lightweight vest for running." },
    { _id: "r7", name: "Aura Running Arm Sleeves", price: 2499, Stock: 20, ratings: 5, numOfReviews: 0, images: [{ url: "/images/running/runningarmsleeves-1.png" }, {url: "/images/running/runningarmsleeves-2.png" }, {url: "/images/running/runningarmsleeves-3.png" }], description: "Arm sleeves for sun protection." }
  ],

  badminton: [
    { _id: "b1", name: "Aura Badminton Jersey", price: 4999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonjersey-1.png" },{ url: "/images/badminton/badmintonjersey-2.png" }], description: "Comfortable badminton jersey." },
    { _id: "b2", name: "Aura Badminton Women Jersey", price: 3999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonwomenjersey-1.png" },{ url: "/images/badminton/badmintonwomenjersey-2.png" }], description: "Comfortable badminton jersey." },
    { _id: "b3", name: "Aura Badminton Sleeves jersey For Women", price: 2999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonsleevesjerseyforwomen-1.png" },{ url: "/images/badminton/badmintonsleevesjerseyforwomen-2.png" }], description: "Comfortable badminton jersey." },
    { _id: "b4", name: "Aura Badminton Shoes", price: 6999, Stock: 8, ratings: 5, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonshoes-1.png" },{ url: "/images/badminton/badmintonshoes-2.png" },{ url: "/images/badminton/badmintonshoes-3.png" }], description: "High-performance badminton shoes." },
    { _id: "b5", name: "Aura Badminton Shorts", price: 1999, Stock: 15, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonshorts-1.png" }, {url: "/images/badminton/badmintonshorts-2.png" }], description: "Breathable badminton shorts." },
    { _id: "b6", name: "Aura Badminton Socks", price: 1499, Stock: 25, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonsocks-1.png" },{ url: "/images/badminton/badmintonsocks-2.png" },{ url: "/images/badminton/badmintonsocks-3.png" }], description: "Comfortable socks for badminton." },
    { _id: "b7", name: "Aura Badminton Hoodie", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonhoodie-1.png" },{ url: "/images/badminton/badmintonhoodie-2.png" },{ url: "/images/badminton/badmintonhoodie-3.png" },{ url: "/images/badminton/badmintonhoodie-4.png" },{ url: "/images/badminton/badmintonhoodie-5.png" }], description: "Light hoodie for practice." },
    { _id: "b8", name: "Aura Badminton Cap", price: 999, Stock: 18, ratings: 5, numOfReviews: 0, images: [{ url: "/images/badminton/badmintoncap-1.png" },{ url: "/images/badminton/badmintoncap-2.png" }], description: "Cap for sunny practice." },
    { _id: "b9", name: "Aura Womens Headband", price: 1499, Stock: 20, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/badminton/badmintonheadband-1.png" },{ url: "/images/badminton/badmintonheadband-2.png" }], description: "Headband for sweat control." }
  ],

  tennis: [
    { _id: "t1", name: "Aura Tennis Jersey", price: 3999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/tennis/tennisjersey-1.png" },{ url: "/images/tennis/tennisjersey-2.png" },{ url: "/images/tennis/tennisjersey-3.png" }], description: "Comfortable tennis jersey." },
    { _id: "t2", name: "Aura Tennis Shoes", price: 6999, Stock: 8, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/tennis/tennisshoes-1.png" },{ url: "/images/tennis/tennisshoes-2.png" },{ url: "/images/tennis/tennisshoes-3.png" }], description: "High-performance tennis shoes." },
    { _id: "t3", name: "Aura Tennis Women Shorts", price: 2999, Stock: 15, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/tennis/tenniswomenshorts-1.png" },{ url: "/images/tennis/tenniswomenshorts-2.png" },{ url: "/images/tennis/tenniswomenshorts-3.png" }], description: "Breathable tennis shorts." },
    { _id: "t4", name: "Aura Tennis Men Shorts", price: 2999, Stock: 15, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/tennis/tennismenshorts-1.png" },{ url: "/images/tennis/tennismenshorts-2.png" },{ url: "/images/tennis/tennismenshorts-3.png" }], description: "Breathable tennis shorts." },
    { _id: "t5", name: "Aura Tennis Socks", price: 1499, Stock: 25, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/tennis/tennissocks-1.png" },{ url: "/images/tennis/tennissocks-2.png" },{ url: "/images/tennis/tennissocks-3.png" }], description: "Comfortable tennis socks." },
    { _id: "t6", name: "Aura Tennis Hoodie", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/tennis/tennishoodie-1.png" },{ url: "/images/tennis/tennishoodie-2.png" },{ url: "/images/tennis/tennishoodie-3.png" },{ url: "/images/tennis/tennishoodie-4.png" }], description: "Light hoodie for practice." },
    { _id: "t7", name: "Aura Tennis Cap", price: 1999, Stock: 18, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/tennis/tenniscap-1.png" },{ url: "/images/tennis/tenniscap-2.png" },{ url: "/images/tennis/tenniscap-3.png" }], description: "Cap for sunny practice." },
    { _id: "t8", name: "Aura Wristbands", price : 1299, Stock: 20, ratings: 4.4, numOfReviews: 0, images: [{ url: "/images/tennis/tenniswristbands-1.png" },{ url: "/images/tennis/tenniswristbands-2.png" }], description: "Sweat wristbands." },
    { _id: "t9", name: "Aura Headband", price: 1499, Stock: 20, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/tennis/tennisheadband-1.png" },{ url: "/images/tennis/tennisheadband-2.png" },{ url: "/images/tennis/tennisheadband-3.png "}], description: "Headband for sweat control." }
  ],

  cricket: [
    { _id: "c1", name: "Aura Cricket Jersey", price: 3999, Stock: 10, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/cricket/cricketjersey1.png" },{ url: "/images/cricket/cricketjersey2.png" },{ url: "/images/cricket/cricketjersey3.png" }], description: "Durable cricket jersey." },
    { _id: "c2", name: "Aura Test Cricket Jersey", price: 3999, Stock: 10, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/cricket/testcricketjersey1.png" },{ url: "/images/cricket/testcricketjersey2.png" },{ url: "/images/cricket/testcricketjersey3.png" }], description: "Durable test cricket jersey." },
    { _id: "c3", name: "Aura Cricket Shoes", price: 6999, Stock: 8, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/cricket/cricketshoes1.png" },{ url: "/images/cricket/cricketshoes2.png" },{ url: "/images/cricket/cricketshoes3.png" }], description: "Comfortable cricket shoes." },
    { _id: "c4", name: "Aura Cricket Cap", price: 999, Stock: 15, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/cricket/cricketcap1.png" },{ url: "/images/cricket/cricketcap2.png" }], description: "Lightweight cricket cap." },
    { _id: "c5", name: "Aura Test Cricket Cap", price: 999, Stock: 15, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/cricket/testcricketcap1.png" },{ url: "/images/cricket/testcricketcap2.png" }], description: "Lightweight cricket cap." },
    { _id: "c6", name: "Aura Cricket Socks", price: 499, Stock: 20, ratings: 4.4, numOfReviews: 0, images: [{ url: "/images/cricket/cricketsocks1.png" },{ url: "/images/cricket/cricketsocks2.png" },{ url: "/images/cricket/cricketsocks3.png" }], description: "Comfortable cricket socks." },
    { _id: "c7", name: "Aura Cricket Arm Sleeves", price: 499, Stock: 20, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/cricket/cricketarmsleeves1.png" },{ url: "/images/cricket/cricketarmsleeves2.png" },{ url: "/images/cricket/cricketarmsleeves3.png" }], description: "Arm sleeves for sun protection." }
  ],
  golf: [
    { _id: "g1", name: "Aura Golf Polo Shirt", price: 2999, Stock: 10, ratings: 4.8, numOfReviews: 0, images: [{ url: "/images/golf/golfpolo1.png" },{ url: "/images/golf/golfpolo2.png" }], description: "Premium golf polo shirt." },
    { _id: "g2", name: "Aura Golf Shoes", price: 7999, Stock: 6, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/golf/golfshoes1.png" },{ url: "/images/golf/golfshoes2.png" },{ url: "/images/golf/golfshoes3.png" }], description: "Comfortable golf shoes." },
    { _id: "g3", name: "Aura Golf Cap", price: 999, Stock: 20, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/golf/golfcap1.png" },{ url: "/images/golf/golfcap2.png" },{ url: "/images/golf/golfcap3.png" }], description: "Protect your eyes from sun." },
  ],

  rugby: [
    { _id: "r1", name: "Aura Rugby Jersey", price: 3999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/rugby/rugbyjersey-1.png" },{ url: "/images/rugby/rugbyjersey-2.png" },{ url: "/images/rugby/rugbyjersey-3.png" }], description: "Durable rugby jersey." },
    { _id: "r2", name: "Aura Rugby Boots With Studs", price: 7999, Stock: 6, ratings: 5, numOfReviews: 0, images: [{ url: "/images/rugby/rugbybootswithstuds-1.png" },{ url: "/images/rugby/rugbybootswithstuds-2.png" },{ url: "/images/rugby/rugbybootswithstuds-3.png" },{ url: "/images/rugby/rugbybootswithstuds-4.png" }], description: "Professional rugby shoes." },
    { _id: "r3", name: "Aura Long Rugby Socks", price: 499, Stock: 25, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/rugby/longrugbysocks-1.png" },{ url: "/images/rugby/longrugbysocks-2.png" },{ url: "/images/rugby/longrugbysocks-3.png" }], description: "Comfortable rugby socks." },
    { _id: "r4", name: "Aura Rugby Shorts", price: 1999, Stock: 18, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/rugby/rugbyshorts-1.png" },{ url: "/images/rugby/rugbyshorts-2.png" }], description: "Breathable rugby shorts." },
  ],

  skateboarding: [
    { _id: "s1", name: "Aura Skateboarding Shoes", price: 4999, Stock: 10, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/skateboarding/skateboardingshoes1.png" },{ url: "/images/skateboarding/skateboardingshoes2.png" },{ url: "/images/skateboarding/skateboardingshoes3.png" }], description: "Durable skateboarding shoes." },
    { _id: "s3", name: "Aura Skateboarding Cap", price: 1999, Stock: 5, ratings: 4.7, numOfReviews: 0, images: [{ url: "/images/skateboarding/skateboardingcap1.png" },{ url: "/images/skateboarding/skateboardingcap2.png" }], description: "Cap for sunny skateboarding days." },
    { _id: "s4", name: "Aura Skateboarding T-Shirt", price: 1999, Stock: 12, ratings: 4.6, numOfReviews: 0, images: [{ url: "/images/skateboarding/skateboardingtshirt1.png" },{ url: "/images/skateboarding/skateboardingtshirt2.png" }], description: "Light T-shirt for skating." },
    { _id: "s5", name: "Aura Skateboarding Shorts", price: 1999, Stock: 15, ratings: 4.5, numOfReviews: 0, images: [{ url: "/images/skateboarding/skateboardingshorts1.png" },{ url: "/images/skateboarding/skateboardingshorts2.png" },{ url: "/images/skateboarding/skateboardingshorts3.png" }], description: "Comfortable shorts for skateboarding." },
  ],
};

export default auraItems;
