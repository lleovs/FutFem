"use client"

import { useState, useEffect } from "react"
import { AppLayout } from "@/components/app-layout"
import { CreatePost } from "@/components/create-post"
import { PostCard } from "@/components/post-card"
import { UpcomingGames } from "@/components/upcoming-games"
import { getPosts, savePosts, deletePost, type Post } from "@/lib/storage"

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: "Seu Nome",
        username: "@seunome",
        avatar: "/placeholder-user.jpg",
        verified: false,
      },
      content,
      timestamp: "Agora",
      likes: 0,
      comments: 0,
      shares: 0,
      hashtags: [],
    }
    const updatedPosts = [newPost, ...posts]
    setPosts(updatedPosts)
    savePosts(updatedPosts)
  }

  const handleDeletePost = (postId: string) => {
    deletePost(postId)
    setPosts(getPosts())
  }

  return (
    <AppLayout>
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CreatePost onPost={handleCreatePost} />
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
            ))}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <UpcomingGames />
            </div>
          </aside>
        </div>
      </div>
    </AppLayout>
  )
}
