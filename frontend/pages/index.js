export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-sm">
        Task<span className="text-gray-700">Sphere</span> 💼
      </h1>
      <p className="mt-3 text-gray-600 text-lg max-w-md">
        Manage your tasks with ease — secure login, real-time CRUD, and a modern dashboard.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Register
        </a>
      </div>
    </div>
  );
}
