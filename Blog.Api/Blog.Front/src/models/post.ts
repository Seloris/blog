export interface PostResume {
  id: number;
  title: string;
  description: string;
  url: string;
  creationDate: Date;
  publicationDate: Date;
}
export interface UpsertPostData extends PostData {
  markdown: string;
}

export interface PostData {
  title: string;
  description: string;
  url: string;
  html: string;
  publicationDate: string;
}
