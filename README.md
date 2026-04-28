# Posts Manager with Zustand

A modern React application for managing blog posts with full CRUD operations, built with Zustand state management and TypeScript.

## 🚀 Features

- **Complete CRUD Operations**: Create, read, update, and delete posts
- **Zustand State Management**: Efficient and scalable state management
- **TypeScript Support**: Full type safety throughout the application
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **API Integration**: RESTful API calls using JSONPlaceholder
- **Modern UI**: Clean interface with Tailwind CSS and Lucide icons
- **Error Handling**: Comprehensive error handling and loading states
- **Modal Forms**: Intuitive modal dialogs for creating and editing posts

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Zustand** - Lightweight state management
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JSONPlaceholder** - Free REST API for testing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MithilaKhan/explore-zustand.git
cd explore-zustand
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `https://explore-zustand.vercel.app/`.

## 🎯 Posts Management

### View Posts
- Browse up to 9 recent posts in a responsive grid layout
- Each post displays title and content
- Clean card-based design for easy reading

### Create Posts
- Click the "Add Post" button to open the creation modal
- Fill in title and body fields
- Submit to add the new post to the top of the list

### Edit Posts
- Click the edit icon on any post card
- Modify title and body in the modal form
- Save changes to update the post

### Delete Posts
- Click the delete icon on any post card
- Post is immediately removed from the list
- Changes are reflected in the UI instantly

## 📁 Project Structure

```
src/
├── components/
│   ├── Posts.tsx          # Main posts list component
│   └── PostModal.tsx      # Modal for create/edit operations
├── store/
│   └── postStore.ts       # Zustand store for posts state
├── App.tsx                # Root application component
└── main.tsx               # React application entry point

helpers/
└── myFetch.ts             # Custom API fetch wrapper
```

## 🔧 API Integration

The app integrates with JSONPlaceholder API endpoints:
- `GET /posts` - Fetch all posts
- `POST /posts` - Create new post
- `PATCH /posts/:id` - Update existing post
- `DELETE /posts/:id` - Delete post

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 UI Features

- **Responsive Grid**: Posts displayed in a flexible grid layout
- **Loading States**: Visual feedback during API operations
- **Error Messages**: User-friendly error notifications
- **Modal Dialogs**: Clean modal forms for data entry
- **Icon Integration**: Lucide icons for actions and UI elements
- **Modern Styling**: Tailwind CSS for consistent design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
3. **Immutability** - Never mutate state directly
4. **Derived State** - Computed values from store state
5. **Selective Subscriptions** - Components only re-render when needed
6. **Clear File Structure** - Easy to navigate and maintain

## 🔗 Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

---

**Created**: 2026-04-27
**Author**: MithilaKhan
