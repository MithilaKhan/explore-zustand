import { X } from 'lucide-react'

const PostModal = ({
  editingPost,
  setEditingPost,
  handleCloseModal,
  handleSubmit,
}: {
  editingPost: { id: number | null; title: string; body: string }
  setEditingPost: React.Dispatch<
    React.SetStateAction<{ id: number | null; title: string; body: string }>
  >
  handleCloseModal: () => void
  handleSubmit: (e: React.FormEvent) => void
}) => {
  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="posts-header">
          <h3 className="modal-title">
            {editingPost.id ? 'Edit Post' : 'Create New Post'}
          </h3>
          <button onClick={handleCloseModal} className="action-btn">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({ ...editingPost, title: e.target.value })
              }
              required
              placeholder="Enter post title"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              value={editingPost.body}
              onChange={(e) =>
                setEditingPost({ ...editingPost, body: e.target.value })
              }
              required
              placeholder="Write something amazing..."
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              onClick={handleCloseModal}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {editingPost.id ? 'Save Changes' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default PostModal
