import { apiGet } from ".";

export interface Job {
  _id: string;
  title: string;
  dept: string;
  location: string;
  desc: string;
  status: string;
  job_type: string;
  experience?: string;
  date?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export interface JobsResponse {
  success: boolean;
  jobs: Job[];
}

export interface Article {
  _id: string;
  title: string;
  author: string;
  tags: string;
  coverImage: string;
  status: string;
  content: any[];
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export interface ArticlesResponse {
  success: boolean;
  articles: Article[];
}

export const jobService = {
  getAll: (status?: string) => {
    const url = status ? `/api/jobs?status=${status}` : `/api/jobs`;
    return apiGet<JobsResponse>(url);
  },
  getById: (id: string) => apiGet<Job>(`/api/jobs/${id}`)
};

export const articleService = {
  getAll: (status?: string) => {
    const url = status ? `/api/articles?status=${status}` : `/api/articles`;
    return apiGet<ArticlesResponse>(url);
  },
  getById: (id: string) => apiGet<Article>(`/api/articles/${id}`)
};
