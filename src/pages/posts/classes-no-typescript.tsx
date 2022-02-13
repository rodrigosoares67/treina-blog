import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost() {
  return <>
    <PostBody 
      post={{
        id: '',
        title: 'Classes no TypeScript',
        slug: 'classes-no-typescript',
        description: 'Neste artigo você aprenderá criar classes, implementar métodos e instanciar objetos no TypeScript us...',
        picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/10/tipagem-no-typescript-400x280.png',
        content: (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat quasi sed. Omnis pariatur veniam dignissimos quo. Suscipit accusantium saepe laudantium, dignissimos iure, esse deserunt officiis omnis qui harum sint?
            </p>
          </>
        )
      }}
    />
  </>
}