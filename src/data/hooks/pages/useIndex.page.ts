import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Classes no TypeScript',
      slug: 'classes-no-typescript',
      description: 'Neste artigo você aprenderá criar classes, implementar métodos e instanciar objetos no TypeScript us...',
      picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/10/tipagem-no-typescript-400x280.png'
    },
    {
      id: '2',
      title: ' Diferença entre os atributos async e defer ',
      slug: 'diferenca-entre-os-atributos-async-e-defer',
      description: 'Nesse artigo vamos ver em detalhes como os atributos async e defer se comportam ao declarar seus arq...',
      picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/11/diferenca_entre_os_atributos_async_e_defer-400x280.png'
    }
  ];

  return {
    posts
  }
}