"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Blog {
  title: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Building Scalable Backend Systems",
    link: "https://medium.com/@ayushkumar2601/building-scalable-backend-systems",
  },
  {
    title: "System Design Patterns for High Performance",
    link: "https://medium.com/@ayushkumar2601/system-design-patterns",
  },
 
];

export const RecentBlogs = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-md ">
      <h2 className="text-lg mb-3 text-secondary-foreground/90 font-light">Recent Blogs</h2>
      <ul className="space-y-2 font-extralight text-secondary">
        {blogs.map((blog, idx) => (
          <li key={idx}>
            <Link
              href={blog.link}
              target="_blank"
              className="text-secondary hover:underline flex"
            >
              {blog.title} 
              <ArrowUpRight/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
