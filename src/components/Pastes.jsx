import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId))
  }

  const handleShare = async (paste) => {
  try {
    await navigator.share({
      title: paste.title,
      text: paste.content,
      url: `${window.location.origin}/pastes/${paste._id}`,
    });
  } catch (error) {
    console.log("Share cancelled");
  }
};

  

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">

      {/* Search Box */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="search"
          placeholder="Search your pastes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl bg-gray-800 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 shadow-lg"
        />
      </div>

      {/* paste cards */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => {
            return (
              <div
                key={paste._id}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-3 pt-2 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Title */}
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {paste.title}
                </h2>

                {/* Content */}
                <p className="text-gray-300 line-clamp-3">
                  {paste.content}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-blue-300">
                    {paste.createdAt.slice(0,10) || "Recently Added"}
                  </span>

                  <div className="flex flex-wrap gap-3 mt-4">

                    <button
                      onClick={() => handleDelete(paste._id)}
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-200 font-medium"
                    >
                      Delete
                    </button>

                    <Link to={`/?pasteId=${paste._id}`}>
                      <button className="px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600">
                        Edit
                      </button>
                    </Link>

                    <Link to={`/pastes/${paste._id}`}>
                      <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium">
                        View
                      </button>
                    </Link>

                    <button
                      onClick={() => {navigator.clipboard.writeText(paste.content),
                        toast("Copied To Clipboard!")}
                      }
                    className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-200 font-medium">
                      Copy
                    </button>

                    <button
                      onClick={() => handleShare(paste)}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-200 font-medium"
                    >
                      Share
                    </button>

                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-400 text-xl mt-10">
            No Pastes Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Pastes;