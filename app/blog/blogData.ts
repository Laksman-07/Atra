// app/blog/blogData.ts

export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Future of Fitness Training",
    author: "John Doe",
    date: "2025-06-15",
    excerpt: "Discover how technology is reshaping personal training and workouts...",
    content: `
      <h2>Introduction</h2>
      <p>Fitness is evolving at a rapid pace, driven by new technology, apps, and training methods. The future looks exciting for athletes and everyday gym-goers.</p>
      
      <h2>Wearable Technology</h2>
      <p>Smartwatches and fitness trackers are providing real-time insights into performance, sleep quality, and recovery, helping athletes optimize training.</p>
      
      <h2>Virtual Training</h2>
      <p>Online platforms and VR/AR technologies are making training accessible from home, guided by AI trainers or live experts across the globe.</p>
      
      <h2>Conclusion</h2>
      <p>The future of fitness will be highly personalized, data-driven, and accessible, empowering more people to reach their health goals.</p>
    `,
    image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
  },
  {
    id: "2",
    title: "10 Healthy Meals for Athletes",
    author: "Jane Smith",
    date: "2025-06-10",
    excerpt: "Fuel your body with these quick and nutritious recipes...",
    content: `
      <h2>Introduction</h2>
      <p>Nutrition is the backbone of athletic performance. These meals are designed to fuel workouts, speed up recovery, and build strength.</p>

      <h2>Breakfast Ideas</h2>
      <ul>
        <li>Oatmeal with berries and almond butter</li>
        <li>Greek yogurt with honey and nuts</li>
      </ul>

      <h2>Lunch Options</h2>
      <ul>
        <li>Grilled chicken with quinoa and steamed vegetables</li>
        <li>Salmon with brown rice and broccoli</li>
      </ul>

      <h2>Dinner Favorites</h2>
      <ul>
        <li>Turkey chili with beans</li>
        <li>Lean steak with sweet potato and asparagus</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Healthy meals don’t have to be boring. These options are simple, tasty, and perfect for athletes looking to maximize performance.</p>
    `,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: "3",
    title: "Mindset Matters in Fitness",
    author: "Alex Turner",
    date: "2025-06-05",
    excerpt: "Explore how psychology plays a key role in training consistency and performance...",
    content: `
      <h2>Introduction</h2>
      <p>Physical strength is important, but mental resilience is often the deciding factor in reaching fitness goals.</p>

      <h2>Building Discipline</h2>
      <p>Motivation comes and goes, but discipline ensures consistency in workouts and diet.</p>

      <h2>Visualization</h2>
      <p>Athletes use mental imagery to improve confidence and performance before big competitions.</p>

      <h2>Conclusion</h2>
      <p>Training the mind is just as critical as training the body, making mindset a cornerstone of long-term success.</p>
    `,
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
    {
    id: "4",
    title: "The Future of Fitness Training",
    author: "John Doe",
    date: "2025-06-15",
    excerpt: "Discover how technology is reshaping personal training and workouts...",
    content: `
      <h2>Introduction</h2>
      <p>Fitness is evolving at a rapid pace, driven by new technology, apps, and training methods. The future looks exciting for athletes and everyday gym-goers.</p>
      
      <h2>Wearable Technology</h2>
      <p>Smartwatches and fitness trackers are providing real-time insights into performance, sleep quality, and recovery, helping athletes optimize training.</p>
      
      <h2>Virtual Training</h2>
      <p>Online platforms and VR/AR technologies are making training accessible from home, guided by AI trainers or live experts across the globe.</p>
      
      <h2>Conclusion</h2>
      <p>The future of fitness will be highly personalized, data-driven, and accessible, empowering more people to reach their health goals.</p>
    `,
    image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
  },
  {
    id: "5",
    title: "10 Healthy Meals for Athletes",
    author: "Jane Smith",
    date: "2025-06-10",
    excerpt: "Fuel your body with these quick and nutritious recipes...",
    content: `
      <h2>Introduction</h2>
      <p>Nutrition is the backbone of athletic performance. These meals are designed to fuel workouts, speed up recovery, and build strength.</p>

      <h2>Breakfast Ideas</h2>
      <ul>
        <li>Oatmeal with berries and almond butter</li>
        <li>Greek yogurt with honey and nuts</li>
      </ul>

      <h2>Lunch Options</h2>
      <ul>
        <li>Grilled chicken with quinoa and steamed vegetables</li>
        <li>Salmon with brown rice and broccoli</li>
      </ul>

      <h2>Dinner Favorites</h2>
      <ul>
        <li>Turkey chili with beans</li>
        <li>Lean steak with sweet potato and asparagus</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Healthy meals don’t have to be boring. These options are simple, tasty, and perfect for athletes looking to maximize performance.</p>
    `,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: "6",
    title: "Mindset Matters in Fitness",
    author: "Alex Turner",
    date: "2025-06-05",
    excerpt: "Explore how psychology plays a key role in training consistency and performance...",
    content: `
      <h2>Introduction</h2>
      <p>Physical strength is important, but mental resilience is often the deciding factor in reaching fitness goals.</p>

      <h2>Building Discipline</h2>
      <p>Motivation comes and goes, but discipline ensures consistency in workouts and diet.</p>

      <h2>Visualization</h2>
      <p>Athletes use mental imagery to improve confidence and performance before big competitions.</p>

      <h2>Conclusion</h2>
      <p>Training the mind is just as critical as training the body, making mindset a cornerstone of long-term success.</p>
    `,
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
    {
    id: "7",
    title: "The Future of Fitness Training",
    author: "John Doe",
    date: "2025-06-15",
    excerpt: "Discover how technology is reshaping personal training and workouts...",
    content: `
      <h2>Introduction</h2>
      <p>Fitness is evolving at a rapid pace, driven by new technology, apps, and training methods. The future looks exciting for athletes and everyday gym-goers.</p>
      
      <h2>Wearable Technology</h2>
      <p>Smartwatches and fitness trackers are providing real-time insights into performance, sleep quality, and recovery, helping athletes optimize training.</p>
      
      <h2>Virtual Training</h2>
      <p>Online platforms and VR/AR technologies are making training accessible from home, guided by AI trainers or live experts across the globe.</p>
      
      <h2>Conclusion</h2>
      <p>The future of fitness will be highly personalized, data-driven, and accessible, empowering more people to reach their health goals.</p>
    `,
    image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
  },
  {
    id: "8",
    title: "10 Healthy Meals for Athletes",
    author: "Jane Smith",
    date: "2025-06-10",
    excerpt: "Fuel your body with these quick and nutritious recipes...",
    content: `
      <h2>Introduction</h2>
      <p>Nutrition is the backbone of athletic performance. These meals are designed to fuel workouts, speed up recovery, and build strength.</p>

      <h2>Breakfast Ideas</h2>
      <ul>
        <li>Oatmeal with berries and almond butter</li>
        <li>Greek yogurt with honey and nuts</li>
      </ul>

      <h2>Lunch Options</h2>
      <ul>
        <li>Grilled chicken with quinoa and steamed vegetables</li>
        <li>Salmon with brown rice and broccoli</li>
      </ul>

      <h2>Dinner Favorites</h2>
      <ul>
        <li>Turkey chili with beans</li>
        <li>Lean steak with sweet potato and asparagus</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Healthy meals don’t have to be boring. These options are simple, tasty, and perfect for athletes looking to maximize performance.</p>
    `,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: "9",
    title: "Mindset Matters in Fitness",
    author: "Alex Turner",
    date: "2025-06-05",
    excerpt: "Explore how psychology plays a key role in training consistency and performance...",
    content: `
      <h2>Introduction</h2>
      <p>Physical strength is important, but mental resilience is often the deciding factor in reaching fitness goals.</p>

      <h2>Building Discipline</h2>
      <p>Motivation comes and goes, but discipline ensures consistency in workouts and diet.</p>

      <h2>Visualization</h2>
      <p>Athletes use mental imagery to improve confidence and performance before big competitions.</p>

      <h2>Conclusion</h2>
      <p>Training the mind is just as critical as training the body, making mindset a cornerstone of long-term success.</p>
    `,
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  }
];
