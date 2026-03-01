interface Author {
  _id: string;
  name: string;
  value: string;
  image: string;
}

interface Tag {
  _id: string;
  name: string;
}

interface Question {
  _id: string;
  title: string;
  description: string;
  upvotes: number;
  views: number;
  answers: number;
  createdAt: Date;
  author: Author;
  tags: Tag[];
}
