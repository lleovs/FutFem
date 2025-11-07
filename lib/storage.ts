export interface Post {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  image?: string
  hashtags: string[]
}

export interface Game {
  id: string
  title: string
  status: "Aberto" | "Lotado"
  organizer: {
    name: string
    avatar: string
  }
  date: string
  time: string
  location: string
  city: string
  players: string
  price: string
  description: string
  level: "Intermediário" | "Avançado" | "Profissional"
  participants: number
  avatars: string[]
}

export function getPosts(): Post[] {
  if (typeof window === "undefined") return []
  const posts = localStorage.getItem("futfem-posts")
  return posts ? JSON.parse(posts) : getDefaultPosts()
}

export function savePosts(posts: Post[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("futfem-posts", JSON.stringify(posts))
}

export function deletePost(postId: string) {
  const posts = getPosts()
  const updatedPosts = posts.filter((post) => post.id !== postId)
  savePosts(updatedPosts)
}

export function getGames(): Game[] {
  if (typeof window === "undefined") return []
  const games = localStorage.getItem("futfem-games")
  return games ? JSON.parse(games) : getDefaultGames()
}

function getDefaultPosts(): Post[] {
  return [
    {
      id: "1",
      author: {
        name: "Marta Vieira",
        username: "@marta10oficial",
        avatar: "/marta-vieira.jpg",
        verified: true,
      },
      content: "Que jogo incrível hoje! O futebol feminino brasileiro está cada vez mais forte. Parabéns meninas! ⚽️👏",
      timestamp: "2h",
      likes: 1247,
      comments: 89,
      shares: 156,
      hashtags: ["#FutFem", "#OrgulhoBrasileiro"],
    },
  ]
}

function getDefaultGames(): Game[] {
  return [
    {
      id: "1",
      title: "Pelada no Parque Ibirapuera",
      status: "Aberto",
      organizer: { name: "Ana Silva", avatar: "/ana-portrait.png" },
      date: "Hoje",
      time: "16:00",
      location: "Campo do Parque Ibirapuera, São Paulo",
      city: "São Paulo",
      players: "18/22 jogadoras",
      price: "R$ 10,00",
      description: "Jogo amistoso para se divertir e fazer novos contatos. Tragam água e protetor solar!",
      level: "Intermediário",
      participants: 15,
      avatars: ["/ana-portrait.png", "/marta-vieira.jpg", "/portrait-Juliana.png"],
    },
  ]
}
