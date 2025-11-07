"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Share2, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/storage"

interface PostCardProps {
  post: Post
  currentUser?: string
  onDelete?: (postId: string) => void
}

export function PostCard({ post, currentUser = "@marta10oficial", onDelete }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const isOwnPost = currentUser === post.author.username

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  const handleDelete = () => {
    if (confirm("Tem certeza que deseja excluir este post?")) {
      onDelete?.(post.id)
    }
  }

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up relative">
      {isOwnPost && onDelete && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

      <div className="flex gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-bold">{post.author.name}</span>
            {post.author.verified && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                ✓
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">{post.author.username}</span>
            <span className="text-sm text-muted-foreground">· {post.timestamp}</span>
          </div>

          <p className="text-base leading-relaxed">{post.content}</p>

          {post.hashtags && post.hashtags.length > 0 && (
            <div className="flex gap-2">
              {post.hashtags.map((tag) => (
                <span key={tag} className="text-green-600 hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.image && (
            <div className="rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Post image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-6 pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`gap-2 transition-all duration-200 hover:scale-110 ${
                liked ? "text-red-500" : "text-muted-foreground"
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span>{likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            >
              <Share2 className="h-4 w-4" />
              <span>{post.shares}</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
