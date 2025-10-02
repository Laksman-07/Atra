"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function BlogPage() {
  const blogsPerPage = 6; // show 6 blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs by search
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Blog Section */}
      <section className="py-24 px-6 md:px-20 bg-yellow-400 flex-1">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 animate-fade-in-up">
          Our Latest
          <span className="block md:inline text-white animate-pulse"> Blogs</span>
        </h2>
          <p className="text-gray-700 mt-3">Explore our latest posts & updates</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => {
              setCurrentPage(1); // reset to first page on new search
              setSearchQuery(e.target.value);
            }}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-center text-lg text-gray-700 col-span-full">
              No blogs found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-white border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
