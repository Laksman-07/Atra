import Image from "next/image";
import Link from "next/link";
import { Blog } from "./blogData";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition group">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full h-52">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>
        <div className="p-5 text-left">
          <h3 className="text-xl font-bold text-black group-hover:text-yellow-500 transition">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            By {blog.author} • {new Date(blog.date).toLocaleDateString("en-GB")}
          </p>
          <p className="text-gray-600 mt-3 line-clamp-2">{blog.excerpt}</p>
          <span className="inline-block mt-4 text-yellow-500 font-medium group-hover:underline">
            Read More →
          </span>
        </div>
      </Link>
    </div>
  );
}
