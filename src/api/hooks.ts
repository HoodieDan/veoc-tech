import { useQuery } from "@tanstack/react-query";
import { jobService, JobsResponse, articleService, ArticlesResponse, Job, Article } from "./services";

export function useJobs(status?: string) {
  return useQuery<JobsResponse, Error>({
    queryKey: ["jobs", status],
    queryFn: () => jobService.getAll(status),
  });
}

export function useJob(id: string) {
  return useQuery<Job, Error>({
    queryKey: ["job", id],
    queryFn: () => jobService.getById(id),
    enabled: !!id,
  });
}

export function useArticles(status?: string) {
  return useQuery<ArticlesResponse, Error>({
    queryKey: ["articles", status],
    queryFn: () => articleService.getAll(status),
  });
}

export function useArticle(id: string) {
  return useQuery<Article, Error>({
    queryKey: ["article", id],
    queryFn: () => articleService.getById(id),
    enabled: !!id,
  });
}
