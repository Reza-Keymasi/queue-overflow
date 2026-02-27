interface Author {
  _id: string;
  name: string;
  createdAt: string;
}

interface Tag {
  _id: string;
  name: string;
}

interface Questions {
  _id: string;
  title: string;
  description: string;
  upvotes: number;
  views: number;
  answer: number;
  createdAt: Date;
  author: Author[];
  tags: Tag[];
}

export const questions: Questions[] = [
  {
    _id: "q1",
    title:
      "What is the difference between controlled and uncontrolled components in React?",
    description:
      "Explain how controlled and uncontrolled components work in React. When should you use each approach and what are the trade-offs in terms of performance and maintainability?",
    upvotes: 24,
    views: 312,
    answer: 5,
    createdAt: new Date("2026-02-20T10:15:00Z"),
    author: [
      {
        _id: "a1",
        name: "Alice Johnson",
        createdAt: "2026-02-20T10:15:00Z",
      },
    ],
    tags: [
      { _id: "t1", name: "react" },
      { _id: "t2", name: "forms" },
      { _id: "t3", name: "frontend" },
    ],
  },
  {
    _id: "q2",
    title: "How does server-side rendering work in Next.js?",
    description:
      "Describe how server-side rendering (SSR) works in Next.js. What are the benefits compared to client-side rendering and when should SSR be used?",
    upvotes: 41,
    views: 540,
    answer: 8,
    createdAt: new Date("2026-02-18T08:30:00Z"),
    author: [
      {
        _id: "a2",
        name: "Michael Smith",
        createdAt: "2026-02-18T08:30:00Z",
      },
    ],
    tags: [
      { _id: "t4", name: "nextjs" },
      { _id: "t5", name: "ssr" },
      { _id: "t6", name: "react" },
    ],
  },
  {
    _id: "q3",
    title: "What problems does TanStack Query solve in React applications?",
    description:
      "Explain the core problems TanStack Query addresses such as caching, synchronization, background updates, and stale data. Why is it preferred over manual data fetching with useEffect?",
    upvotes: 37,
    views: 489,
    answer: 6,
    createdAt: new Date("2026-02-15T12:00:00Z"),
    author: [
      {
        _id: "a3",
        name: "Sophia Lee",
        createdAt: "2026-02-15T12:00:00Z",
      },
    ],
    tags: [
      { _id: "t7", name: "tanstack-query" },
      { _id: "t8", name: "data-fetching" },
      { _id: "t9", name: "react" },
    ],
  },
  {
    _id: "q4",
    title: "What is the difference between useState and useReducer in React?",
    description:
      "Compare useState and useReducer hooks. In what scenarios is useReducer more suitable, especially in complex state management cases?",
    upvotes: 29,
    views: 368,
    answer: 4,
    createdAt: new Date("2026-02-14T09:45:00Z"),
    author: [
      {
        _id: "a4",
        name: "Daniel Martinez",
        createdAt: "2026-02-14T09:45:00Z",
      },
    ],
    tags: [
      { _id: "t10", name: "react-hooks" },
      { _id: "t11", name: "state-management" },
    ],
  },
  {
    _id: "q5",
    title: "How does static site generation (SSG) work in Next.js?",
    description:
      "Explain how Next.js generates static pages at build time. What are getStaticProps and getStaticPaths and how do they help in dynamic routes?",
    upvotes: 33,
    views: 410,
    answer: 7,
    createdAt: new Date("2026-02-10T11:20:00Z"),
    author: [
      {
        _id: "a5",
        name: "Emily Davis",
        createdAt: "2026-02-10T11:20:00Z",
      },
    ],
    tags: [
      { _id: "t12", name: "nextjs" },
      { _id: "t13", name: "ssg" },
      { _id: "t14", name: "routing" },
    ],
  },
  {
    _id: "q6",
    title: "What are the benefits of using Zustand for state management?",
    description:
      "Describe how Zustand works compared to Redux. What are its advantages in terms of boilerplate, performance, and developer experience?",
    upvotes: 22,
    views: 295,
    answer: 3,
    createdAt: new Date("2026-02-08T14:10:00Z"),
    author: [
      {
        _id: "a6",
        name: "James Wilson",
        createdAt: "2026-02-08T14:10:00Z",
      },
    ],
    tags: [
      { _id: "t15", name: "zustand" },
      { _id: "t16", name: "state-management" },
      { _id: "t17", name: "react" },
    ],
  },
  {
    _id: "q7",
    title: "How do React Server Components work in Next.js App Router?",
    description:
      "Explain the concept of React Server Components in the Next.js App Router. How do they differ from Client Components and what performance benefits do they provide?",
    upvotes: 45,
    views: 620,
    answer: 9,
    createdAt: new Date("2026-02-05T16:40:00Z"),
    author: [
      {
        _id: "a7",
        name: "Olivia Brown",
        createdAt: "2026-02-05T16:40:00Z",
      },
    ],
    tags: [
      { _id: "t18", name: "nextjs-app-router" },
      { _id: "t19", name: "react-server-components" },
      { _id: "t20", name: "performance" },
    ],
  },
  {
    _id: "q8",
    title: "What is hydration in React and why can hydration errors occur?",
    description:
      "Define hydration in the context of React and Next.js. What causes hydration mismatches and how can developers debug and prevent them?",
    upvotes: 31,
    views: 402,
    answer: 5,
    createdAt: new Date("2026-02-03T13:25:00Z"),
    author: [
      {
        _id: "a8",
        name: "William Taylor",
        createdAt: "2026-02-03T13:25:00Z",
      },
    ],
    tags: [
      { _id: "t21", name: "react" },
      { _id: "t22", name: "hydration" },
      { _id: "t23", name: "nextjs" },
    ],
  },
  {
    _id: "q9",
    title: "How does optimistic updating work in TanStack Query?",
    description:
      "Explain the concept of optimistic updates in TanStack Query. How do you implement them and handle rollback in case of server failure?",
    upvotes: 27,
    views: 350,
    answer: 4,
    createdAt: new Date("2026-02-01T10:05:00Z"),
    author: [
      {
        _id: "a9",
        name: "Isabella Anderson",
        createdAt: "2026-02-01T10:05:00Z",
      },
    ],
    tags: [
      { _id: "t24", name: "tanstack-query" },
      { _id: "t25", name: "optimistic-update" },
      { _id: "t26", name: "react" },
    ],
  },
  {
    _id: "q10",
    title:
      "What are the differences between Redux Toolkit and traditional Redux?",
    description:
      "Compare Redux Toolkit with traditional Redux setup. How does Redux Toolkit reduce boilerplate and improve developer productivity?",
    upvotes: 39,
    views: 510,
    answer: 6,
    createdAt: new Date("2026-01-28T09:00:00Z"),
    author: [
      {
        _id: "a10",
        name: "Benjamin Harris",
        createdAt: "2026-01-28T09:00:00Z",
      },
    ],
    tags: [
      { _id: "t27", name: "redux" },
      { _id: "t28", name: "redux-toolkit" },
      { _id: "t29", name: "state-management" },
    ],
  },
];
