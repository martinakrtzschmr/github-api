export interface GithubUser {
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface GithubRepo {
  name: string;
  owner: {
    login: string,
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}