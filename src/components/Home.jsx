import React, { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";




const Home = () => {

  const [title, setTitle] = useState('')
  const [text,setText] = useState('')
  const [searchParams,setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")
  const allPastes = useSelector((state) => state.paste.pastes)

  const dispatch = useDispatch()

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find(
        (p) => p._id === pasteId
      );

      if (paste) {
        setTitle(paste.title);
        setText(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste(){
    const paste = {
      title : title,
      content : text,
      _id : pasteId || Date.now().toString(36),
      createdAt :new Date().toISOString(),
    }

    if(pasteId){
      // update
      dispatch(updateToPastes(paste))

    }
    else{
      // create
      dispatch(addToPastes(paste))
    }

    // after creation/updation clear info
    setTitle('');
    setText('');
    searchParams({});
  }

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-10 pb-10 px-4">
      <div
        id="entry"
        className="w-full max-w-3xl bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-700"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Create New Note
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Title Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <button
            onClick={createPaste}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105">
              {pasteId ? "Update" : "Save"}
          </button>
        </div>

        <div className="mt-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text Here..."
            rows={15}
            className="w-full resize-none rounded-2xl bg-gray-700 text-white placeholder-gray-400 p-4 pt-2 outline-none border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-lg shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
