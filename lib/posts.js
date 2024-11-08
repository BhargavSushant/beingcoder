// lib/posts.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import mermaid from "remark-mermaidjs";
import html from "remark-html";
import remarkMermaid from "remark-mermaidjs";
import remarkHtml from "remark-html";

// Define the directory where your posts are stored
const postsDirectory = path.join(process.cwd(), "posts");

// Function to get sorted posts data
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get all post IDs for dynamic routing
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   { params: { id: 'ssg-ssr' } },
  //   { params: { id: 'pre-rendering' } },
  //   // ...
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Function to get post data based on id
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkMermaid)
    .use(remarkHtml, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllCategories() {
  const posts = getSortedPostsData();
  const categories = {};

  posts.forEach(({ category, subcategory, id, title }) => {
    if (category) {
      if (!categories[category]) {
        categories[category] = {};
      }
      const subcat = subcategory || "_uncategorized";
      if (!categories[category][subcat]) {
        categories[category][subcat] = [];
      }
      categories[category][subcat].push({ id, title });
    }
  });

  return categories;
}
