import { useEffect, useState } from 'react'
import { usePostStore } from '../store/postStore'
import { Edit2, Trash2, Plus } from 'lucide-react'
import PostModal from './PostModal'

const Posts = () => {
  const {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  } = usePostStore()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<{id: number | null, title: string, body: string}>({ id: null, title: '', body: '' })

  useEffect(() => {
    fetchPosts()
  }, []) 

  const handleOpenModal = (post?: {id: number, title: string, body: string}) => {
    if (post) {
      setEditingPost(post)
    } else {
      setEditingPost({ id: null, title: '', body: '' })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingPost({ id: null, title: '', body: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPost.id) {
      updatePost(editingPost.id, { title: editingPost.title, body: editingPost.body })
    } else {
      createPost({ title: editingPost.title, body: editingPost.body })
    }
    handleCloseModal()
  }

  return (
    <div>
      <div className="posts-header">
        <h2 className="posts-title">Latest Posts</h2>
        <button
          onClick={() => handleOpenModal()}
          className="btn btn-primary"
        >
          <Plus size={18} />
          Add Post
        </button>
      </div>

      {loading && <p className="status-message">Loading amazing posts...</p>}
      {error && <p className="status-message error-message">{error}</p>}

      {!loading && !error && (
        <div className="posts-grid">
          {posts.slice(0, 9).map((post: { id: number; title: string; body: string }) => (
            <div key={post.id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>

              <div className="post-actions">
                <button
                  onClick={() => handleOpenModal(post)}
                  className="action-btn edit"
                  aria-label="Edit post"
                  title="Edit"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="action-btn delete"
                  aria-label="Delete post"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit/Create Modal */}
      {isModalOpen && (
        <PostModal
          editingPost={editingPost}
          setEditingPost={setEditingPost}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Posts