<script setup lang="ts">
import ResourceCard from '@/components/ResourceCard.vue';
import { type IResource } from "@/types/Resource";
const resources: IResource[] = [
  {
    "_id": "1",
    "title": "JavaScript Basics: Understanding the Fundamentals",
    "description": "A comprehensive guide covering the fundamental concepts of JavaScript for beginners.",
    "url": "https://example.com/js-basics",
    "difficulty": "Beginner",
    "createdAt": new Date("2022-03-01")
  },
  {
    "_id": "2",
    "title": "ES6 Features and Beyond: Mastering Modern JavaScript",
    "description": "Explore the latest features introduced in ECMAScript 6 and beyond to enhance your JavaScript skills.",
    "url": "https://example.com/es6-masterclass",
    "difficulty": "Intermediate",
    "createdAt": new Date("2022-05-15")
  },
  {
    "_id": "3",
    "title": "Building Responsive Web Applications with JavaScript and CSS3",
    "description": "Learn to create responsive and user-friendly web applications using JavaScript and CSS3.",
    "url": "https://example.com/responsive-apps",
    "difficulty": "Intermediate",
    "createdAt": new Date("2022-07-10")
  },
  {
    "_id": "4",
    "title": "Node.js Crash Course: Server-side JavaScript",
    "description": "A quick crash course on Node.js, covering server-side development with JavaScript.",
    "url": "https://example.com/nodejs-crash-course",
    "difficulty": "Intermediate",
    "createdAt": new Date("2022-09-05")
  },
  {
    "_id": "5",
    "title": "React.js Fundamentals: Building User Interfaces with React",
    "description": "Get started with React.js and build interactive user interfaces for your web applications.",
    "url": "https://example.com/react-fundamentals",
    "difficulty": "Intermediate",
    "createdAt": new Date("2022-11-20")
  },
  {
    "_id": "6",
    "title": "Advanced JavaScript Design Patterns",
    "description": "Explore advanced design patterns in JavaScript to write scalable and maintainable code.",
    "url": "https://example.com/js-design-patterns",
    "difficulty": "Advanced",
    "createdAt": new Date("2023-01-15")
  },
  {
    "_id": "7",
    "title": "Vue.js: Building Reactive Web Applications",
    "description": "A hands-on guide to building reactive and dynamic web applications with Vue.js.",
    "url": "https://example.com/vuejs-guide",
    "difficulty": "Intermediate",
    "createdAt": new Date("2023-03-02")
  },
  {
    "_id": "8",
    "title": "D3.js Data Visualization: Creating Stunning Charts and Graphs",
    "description": "Learn D3.js for data visualization and create visually appealing charts and graphs.",
    "url": "https://example.com/d3js-visualization",
    "difficulty": "Intermediate",
    "createdAt": new Date("2023-05-18")
  },
  {
    "_id": "9",
    "title": "TypeScript Fundamentals: Adding Types to JavaScript",
    "description": "An introduction to TypeScript, adding static typing to enhance JavaScript development.",
    "url": "https://example.com/typescript-fundamentals",
    "difficulty": "Intermediate",
    "createdAt": new Date("2023-07-12")
  },
  {
    "_id": "10",
    "title": "Full-Stack JavaScript Development with MERN Stack",
    "description": "Master full-stack development using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    "url": "https://example.com/mern-stack-guide",
    "difficulty": "Advanced",
    "createdAt": new Date("2023-09-08")
  },
  {
    "_id": "11",
    "title": "Testing JavaScript Applications: Best Practices and Tools",
    "description": "Learn effective testing practices and tools for ensuring the reliability of your JavaScript applications.",
    "url": "https://example.com/js-testing-guide",
    "difficulty": "Intermediate",
    "createdAt": new Date("2023-11-25")
  },
  {
    "_id": "12",
    "title": "GraphQL for JavaScript Developers: Building APIs with Apollo",
    "description": "A comprehensive guide to implementing GraphQL APIs using Apollo in JavaScript applications.",
    "url": "https://example.com/graphql-apollo-guide",
    "difficulty": "Advanced",
    "createdAt": new Date("2024-01-10")
  },
  {
    "_id": "13",
    "title": "WebAssembly and JavaScript: Boosting Web Performance",
    "description": "Explore the integration of WebAssembly with JavaScript to enhance web application performance.",
    "url": "https://example.com/wasm-js-performance",
    "difficulty": "Advanced",
    "createdAt": new Date("2024-03-05")
  },
  {
    "_id": "14",
    "title": "Serverless JavaScript with AWS Lambda",
    "description": "Learn how to build serverless applications using AWS Lambda and JavaScript.",
    "url": "https://example.com/serverless-js-aws",
    "difficulty": "Advanced",
    "createdAt": new Date("2024-05-20")
  },
  {
    "_id": "15",
    "title": "Jest Testing Framework: Comprehensive Guide for JavaScript Developers",
    "description": "Master Jest, a popular testing framework for JavaScript, and ensure the reliability of your code.",
    "url": "https://example.com/jest-testing-guide",
    "difficulty": "Intermediate",
    "createdAt": new Date("2024-07-15")
  },
  {
    "_id": "16",
    "title": "WebSockets in JavaScript: Real-Time Communication on the Web",
    "description": "Explore the implementation of WebSockets for real-time communication in JavaScript applications.",
    "url": "https://example.com/websockets-js",
    "difficulty": "Intermediate",
    "createdAt": new Date("2024-09-10")
  },
  {
    "_id": "17",
    "title": "JavaScript Security: Best Practices for Secure Web Development",
    "description": "Learn best practices to secure your JavaScript code and prevent common security vulnerabilities.",
    "url": "https://example.com/js-security-guide",
    "difficulty": "Intermediate",
    "createdAt": new Date("2024-11-25")
  },
  {
    "_id": "18",
    "title": "Angular.js Essentials: Building Dynamic Web Applications",
    "description": "Get started with Angular.js and build dynamic and feature-rich web applications.",
    "url": "https://example.com/angularjs-essentials",
    "difficulty": "Intermediate",
    "createdAt": new Date("2025-01-10")
  }
]
</script>

<template>
  <div class="home-container">
    <div class="resources">
      <div class="resource" v-for="resource in resources" :key="resource._id">
        <ResourceCard :resource="resource" />
      </div>
    </div>
  </div>
</template>
