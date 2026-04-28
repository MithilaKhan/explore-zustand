import { myFetch } from '../../helpers/myFetch'
import { create } from 'zustand'

interface Post {
  id: number
  title: string
  body: string
}

interface PostState {
  posts: Post[]
  loading: boolean
  error: string | null

  fetchPosts: () => Promise<void>
  createPost: (data: Partial<Post>) => Promise<void>
  updatePost: (id: number, data: Partial<Post>) => Promise<void>
  deletePost: (id: number) => Promise<void>
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  loading: false,
  error: null,

  // ✅ GET
  fetchPosts: async () => {
    set({ loading: true, error: null })
    const res = await myFetch<Post[]>('/posts')
    if (res.success && res.data) {
      set({ posts: res.data, loading: false })
    } else {
      set({ error: res.message || 'Failed', loading: false })
    }
  },

  // ✅ POST
  createPost: async (data) => {
    set({ loading: true })

    const res = await myFetch<Post>('/posts', {
      method: 'POST',
      body: data,
    })

    if (res.success && res.data) {
      set({
        posts: [res.data, ...get().posts],
        loading: false,
      })
    } else {
      set({ error: res.message || 'Failed', loading: false })
    }
  },

  // ✅ PATCH
  updatePost: async (id, data) => {
    set({ loading: true })

    const res = await myFetch<Post>(`/posts/${id}`, {
      method: 'PATCH',
      body: data,
    })

    if (res.success && res.data) {
      set({
        posts: get().posts.map((p) =>
          p.id === id ? { ...p, ...res.data } : p
        ),
        loading: false,
      })
    } else {
      set({ error: res.message || 'Failed', loading: false })
    }
  },

  // ✅ DELETE
  deletePost: async (id) => {
    set({ loading: true })

    const res = await myFetch(`/posts/${id}`, {
      method: 'DELETE',
    })

    if (res.success) {
      set({
        posts: get().posts.filter((p) => p.id !== id),
        loading: false,
      })
    } else {
      set({ error: res.message || 'Failed', loading: false })
    }
  },
}))
