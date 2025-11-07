"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { PostCard } from "@/components/post-card"
import { SearchModal } from "@/components/search-modal"
import { Button } from "@/components/ui/button"
import { getPosts } from "@/lib/storage"
import { Search } from "lucide-react"

export default function ExplorarPage() {
  const [posts, setPosts] = useState(getPosts())
  const [showSearch, setShowSearch] = useState(false)

  const handlePostUpdate = () => {
    setPosts(getPosts())
  }

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button
            onClick={() => setShowSearch(true)}
            variant="outline"
            className="w-full justify-start text-muted-foreground"
          >
            <Search className="mr-2 h-4 w-4" />
            Buscar pessoas, hashtags, posts...
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onUpdate={handlePostUpdate} />
          ))}
        </div>
      </div>

      <SearchModal open={showSearch} onClose={() => setShowSearch(false)} />
    </AppLayout>
  )
}
