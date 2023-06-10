import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faFile, faFileText, faPen } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {
  return (
    <div className="intro-y box p-5 mt-6">
      <div className="mt-1">
        <Link to="/manager" className=" flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faFile} className="w-4 h-4 mr-2" />
          Tài liệu đầy đủ
        </Link>
        {/* <p className="flex items-center px-3 py-2 mt-2 rounded-md">
          <i className="w-4 h-4 mr-2" data-lucide="folder-plus" /> Tài liệu đã
          tải lên
        </p> */}
        <Link to="/convertText" className="flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faFileText} className="w-4 h-4 mr-2" />
          Tài liệu văn bản
        </Link>
        <Link to="/summary" className="flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faFileText} className="w-4 h-4 mr-2" />
          Tài liệu tóm tắt
        </Link>
        <Link to="/quiz" className="flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faPen} className="w-4 h-4 mr-2" />
          Làm bài tập
        </Link>
        <Link to="/statistical" className="flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faBarChart} className="w-4 h-4 mr-2" />
          Thống kê
        </Link>
        {/* <p className="flex items-center px-3 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 text-slate-950	 font-bold">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4 mr-2" />
          Hỏi đáp
        </p> */}
      </div>
    </div>
  )
}