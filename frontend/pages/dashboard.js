import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../lib/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const router = useRouter();

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      if (err.response?.status === 401) router.push("/login");
    }
  };

  const addTask = async () => {
    if (!newTask) return;
    await API.post("/tasks", { title: newTask });
    setNewTask("");
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await API.put(`/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>
          <button
            onClick={logout}
            className="text-red-500 font-semibold hover:text-red-700"
          >
            Logout
          </button>
        </div>

        <div className="flex mb-4">
          <input
            className="flex-1 border p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-indigo-500 text-white px-4 rounded-r-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {tasks.length === 0 && (
            <p className="text-center text-gray-500">No tasks yet 😅</p>
          )}
          {tasks.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-indigo-50 border border-indigo-100 p-3 rounded-lg"
            >
              <span
                onClick={() => toggleTask(t.id, t.completed)}
                className={`cursor-pointer text-lg ${
                  t.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {t.title}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-400 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
