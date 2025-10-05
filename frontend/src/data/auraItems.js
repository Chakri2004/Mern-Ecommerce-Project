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
      name: "Aura Premium Jacket",
      price: 12500,
      description: "Premium jacket made of high-quality materials.",
      Stock: 15,
      ratings: 4.5,
      numOfReviews: 10,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Premium+Jacket" }],
      reviews: [{ _id: "r1", name: "John Doe", rating: 5, comment: "Excellent quality!" }]
    },
    {
      _id: "nf2",
      name: "Aura Limited Edition Watch",
      price: 22000,
      description: "Limited edition wristwatch for premium style.",
      Stock: 10,
      ratings: 4.8,
      numOfReviews: 8,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Limited+Watch" }],
      reviews: [{ _id: "r2", name: "Alice", rating: 5, comment: "Absolutely love it!" }]
    },
    {
      _id: "nf3",
      name: "Aura Classic Bag",
      price: 9500,
      description: "Elegant and spacious classic bag.",
      Stock: 20,
      ratings: 4.3,
      numOfReviews: 5,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Classic+Bag" }],
      reviews: [{ _id: "r3", name: "Bob", rating: 4, comment: "Good quality bag." }]
    },
    {
      _id: "nf4",
      name: "Aura Sunglasses",
      price: 7000,
      description: "Stylish sunglasses with UV protection.",
      Stock: 30,
      ratings: 4.6,
      numOfReviews: 12,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Sunglasses" }],
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
      numOfReviews: 5,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Mens+Shirt" }],
      reviews: [{ _id: "r5", name: "Bob", rating: 4, comment: "Good fit and quality." }]
    },
    {
      _id: "m2",
      name: "Aura Men's Trousers",
      price: 15000,
      description: "Comfortable and stylish trousers for men.",
      Stock: 15,
      ratings: 4.5,
      numOfReviews: 6,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Mens+Trousers" }],
      reviews: [{ _id: "r6", name: "Alex", rating: 5, comment: "Perfect fit!" }]
    },
    {
      _id: "m3",
      name: "Aura Men's Jacket",
      price: 18000,
      description: "Warm jacket for winter and casual wear.",
      Stock: 12,
      ratings: 4.6,
      numOfReviews: 7,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Mens+Jacket" }],
      reviews: [{ _id: "r7", name: "Ethan", rating: 5, comment: "Excellent quality!" }]
    },
    {
      _id: "m4",
      name: "Aura Men's Sweater",
      price: 14000,
      description: "Cozy sweater for daily wear.",
      Stock: 18,
      ratings: 4.4,
      numOfReviews: 5,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Mens+Sweater" }],
      reviews: [{ _id: "r8", name: "Ryan", rating: 4, comment: "Good quality." }]
    }
  ],

  womens: [
    {
      _id: "w1",
      name: "Aura Women's Dress",
      price: 15000,
      description: "Beautiful and elegant women's dress for all occasions.",
      Stock: 12,
      ratings: 4.7,
      numOfReviews: 7,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Womens+Dress" }],
      reviews: [{ _id: "r9", name: "Emma", rating: 5, comment: "Stunning dress!" }]
    },
    {
      _id: "w2",
      name: "Aura Women's Skirt",
      price: 9000,
      description: "Chic skirt for casual or party wear.",
      Stock: 18,
      ratings: 4.5,
      numOfReviews: 6,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Womens+Skirt" }],
      reviews: [{ _id: "r10", name: "Sophia", rating: 5, comment: "Lovely skirt!" }]
    },
    {
      _id: "w3",
      name: "Aura Women's Top",
      price: 8000,
      description: "Comfortable and stylish top.",
      Stock: 20,
      ratings: 4.4,
      numOfReviews: 5,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Womens+Top" }],
      reviews: [{ _id: "r11", name: "Olivia", rating: 4, comment: "Good quality." }]
    },
    {
      _id: "w4",
      name: "Aura Women's Jacket",
      price: 16000,
      description: "Warm jacket for all seasons.",
      Stock: 10,
      ratings: 4.6,
      numOfReviews: 8,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Womens+Jacket" }],
      reviews: [{ _id: "r12", name: "Ava", rating: 5, comment: "Excellent fit!" }]
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
      numOfReviews: 6,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Kids+Sneakers" }],
      reviews: [{ _id: "r13", name: "Charlie", rating: 4, comment: "Kids love it!" }]
    },
    {
      _id: "k2",
      name: "Aura Kids' T-shirt",
      price: 7000,
      description: "Soft and comfortable T-shirt for kids.",
      Stock: 30,
      ratings: 4.3,
      numOfReviews: 5,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Kids+Tshirt" }],
      reviews: [{ _id: "r14", name: "Mia", rating: 4, comment: "Nice T-shirt!" }]
    },
    {
      _id: "k3",
      name: "Aura Kids' Jacket",
      price: 13000,
      description: "Warm and durable jacket for kids.",
      Stock: 15,
      ratings: 4.5,
      numOfReviews: 6,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Kids+Jacket" }],
      reviews: [{ _id: "r15", name: "Leo", rating: 5, comment: "Very comfy!" }]
    },
    {
      _id: "k4",
      name: "Aura Kids' Shorts",
      price: 6000,
      description: "Lightweight shorts for summer wear.",
      Stock: 20,
      ratings: 4.2,
      numOfReviews: 4,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Kids+Shorts" }],
      reviews: [{ _id: "r16", name: "Ella", rating: 4, comment: "Good quality." }]
    }
  ],

  shoes: [
    {
      _id: "s1",
      name: "Aura Running Shoes",
      price: 16000,
      description: "High-performance running shoes for all terrains.",
      Stock: 18,
      ratings: 4.6,
      numOfReviews: 9,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Running+Shoes" }],
      reviews: [{ _id: "r17", name: "David", rating: 5, comment: "Extremely comfortable!" }]
    },
    {
      _id: "s2",
      name: "Aura Casual Shoes",
      price: 14000,
      description: "Stylish casual shoes for everyday wear.",
      Stock: 20,
      ratings: 4.4,
      numOfReviews: 7,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Casual+Shoes" }],
      reviews: [{ _id: "r18", name: "Sam", rating: 4, comment: "Nice shoes!" }]
    },
    {
      _id: "s3",
      name: "Aura Formal Shoes",
      price: 18000,
      description: "Elegant formal shoes for work or parties.",
      Stock: 12,
      ratings: 4.7,
      numOfReviews: 8,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Formal+Shoes" }],
      reviews: [{ _id: "r19", name: "Oliver", rating: 5, comment: "Excellent design!" }]
    },
    {
      _id: "s4",
      name: "Aura Sports Shoes",
      price: 17000,
      description: "Durable sports shoes for all activities.",
      Stock: 15,
      ratings: 4.5,
      numOfReviews: 6,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=Sports+Shoes" }],
      reviews: [{ _id: "r20", name: "Liam", rating: 5, comment: "Super comfy!" }]
    }
  ],

  laptops: [
    {
      _id: "l1",
      name: "AuraBook Pro X",
      price: 85000,
      description: "High-end laptop with premium performance.",
      Stock: 5,
      ratings: 4.9,
      numOfReviews: 12,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=AuraBook+Pro+X" }],
      reviews: [{ _id: "r21", name: "Steve", rating: 5, comment: "Perfect for work and gaming." }]
    },
    {
      _id: "l2",
      name: "AuraBook Air",
      price: 75000,
      description: "Lightweight and powerful laptop for everyday use.",
      Stock: 7,
      ratings: 4.8,
      numOfReviews: 10,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=AuraBook+Air" }],
      reviews: [{ _id: "r22", name: "Mark", rating: 5, comment: "Great battery life!" }]
    },
    {
      _id: "l3",
      name: "AuraBook Gamer",
      price: 95000,
      description: "Laptop designed for gaming performance.",
      Stock: 4,
      ratings: 4.9,
      numOfReviews: 8,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=AuraBook+Gamer" }],
      reviews: [{ _id: "r23", name: "Anna", rating: 5, comment: "Runs games smoothly!" }]
    },
    {
      _id: "l4",
      name: "AuraBook Student",
      price: 65000,
      description: "Affordable laptop for students.",
      Stock: 10,
      ratings: 4.7,
      numOfReviews: 9,
      images: [{ url: "https://via.placeholder.com/300x300.png?text=AuraBook+Student" }],
      reviews: [{ _id: "r24", name: "Sophia", rating: 5, comment: "Very practical!" }]
    }
  ],
};

export default auraItems;
