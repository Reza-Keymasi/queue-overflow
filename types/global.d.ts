import { NextResponse } from "next/server";

declare global {
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
    content: string;
    upvotes: number;
    views: number;
    answers: number;
    createdAt: Date;
    author: Author;
    tags: Tag[];
  }

  type ActionResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: {
      message: string;
      datails?: Record<string, string[]>;
    };
    status?: number;
  };

  type SuccessResponse<T = null> = ActionResponse<T> & {
    success: true;
  };

  type ErrorResponse<T = null> = ActionResponse<undefined> & {
    success: false;
  };

  type APIErrorResponse = NextResponse<ErrorResponse>;
  type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;

  interface RouteParams {
    params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
  }
}
