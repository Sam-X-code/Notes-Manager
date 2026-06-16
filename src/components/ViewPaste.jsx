import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ViewPaste = () => {

  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const handleCopy = () => {navigator.clipboard.writeText(paste.content);
                            toast.success("Copied to Clipboard!");
b };
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="text-white text-center mt-10 text-2xl">
        Paste Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">

      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl">

        {/* Title */}
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-blue-400 mb-6">
            {paste.title}
          </h1>

          <button
          onClick={handleCopy}
          className="px-2 h-12.5 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-200 font-medium"
          >Copy
          </button>
        </div>
        

        {/* Date */}
        <p className="text-gray-400 mb-6">
          Created At:{" "}
          {new Date(paste.createdAt).toLocaleString()}
        </p>

        {/* Content */}
        <div className="bg-gray-700 rounded-2xl p-5 whitespace-pre-wrap text-lg leading-8">
          {paste.content}
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;