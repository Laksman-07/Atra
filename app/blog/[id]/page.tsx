// app/blog/[id]/page.tsx
"use client";

import { blogs } from "../blogData"; // adjust path if needed
import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white text-black flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-16 px-6 pt-32">

        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          <p className="text-gray-600 text-sm">
            By <span className="font-medium">{blog.author}</span> •{" "}
            {new Date(blog.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full h-[450px] relative mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Blog Content with structure */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12"
        >
          {/* Intro Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </section>

          {/* Key Insights Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Insights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Important takeaway point one from the article.</li>
              <li>Another strong insight summarized for quick readers.</li>
              <li>A supporting argument or fact from the content.</li>
            </ul>
          </section>

          {/* Takeaways Section */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Final Takeaways
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Summarize the most valuable lessons or conclusions of this blog.
              This helps readers leave with a clear understanding of the
              content.
            </p>
          </section>
        </motion.article>

     {/* 🔙 Back Button */}
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black bg-yellow-400 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          ← Back to Blogs
        </Link>
      </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
