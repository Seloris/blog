import { PostResume } from './models/post-resume';
import { resolve } from 'q';

export function initFactory() {
  return () => {
    return new Promise((resolve, reject) => {
      const fakePosts: PostResume[] = [
        {
          creationDate: new Date(),
          shortDescription: "ANO : la communauté de l'ANO",
          id: 1,
          title: 'Premier post'
        },
        {
          creationDate: new Date(),
          shortDescription: 'ANO : le retour du malaise',
          id: 2,
          title: 'Second post'
        },
        {
          creationDate: new Date(),
          shortDescription: 'ANO : les deux malaises',
          id: 3,
          title: 'Troizieme post'
        },
        {
          creationDate: new Date(),
          shortDescription: 'ANO THE BEST',
          id: 4,
          title: 'Quatrième post'
        },
        {
          creationDate: new Date(),
          shortDescription: "Description d'un post ne parlant pas d'ANO",
          id: 5,
          title: 'Cinquième post'
        }
      ];
      localStorage.setItem('POSTS', JSON.stringify(fakePosts));
      resolve();
    });
  };
}
