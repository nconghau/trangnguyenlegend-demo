import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Mg_content(props) {
  return (
    <>
      <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
        <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
          <i
            className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"
            data-lucide="search"
          />
          <input
            type="text"
            className="form-control w-full sm:w-64 box px-10"
            placeholder="Search files"
          />
          <div
            className="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center"
            data-tw-placement="bottom-start"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <i
              className="dropdown-toggle w-4 h-4 cursor-pointer text-slate-500"
              role="button"
              aria-expanded="false"
              data-tw-toggle="dropdown"
              data-lucide="chevron-down"
            />
            <div className="inbox-filter__dropdown-menu dropdown-menu pt-2">
              <div className="dropdown-content">
                <div className="grid grid-cols-12 gap-4 gap-y-3 p-3">
                  <div className="col-span-6">
                    <label
                      htmlFor="input-filter-1"
                      className="form-label text-xs"
                    >
                      File Name
                    </label>
                    <input
                      id="input-filter-1"
                      type="text"
                      className="form-control flex-1"
                      placeholder="Type the file name"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="input-filter-2"
                      className="form-label text-xs"
                    >
                      Shared With
                    </label>
                    <input
                      id="input-filter-2"
                      type="text"
                      className="form-control flex-1"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="input-filter-3"
                      className="form-label text-xs"
                    >
                      Created At
                    </label>
                    <input
                      id="input-filter-3"
                      type="text"
                      className="form-control flex-1"
                      placeholder="Important Meeting"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="input-filter-4"
                      className="form-label text-xs"
                    >
                      Size
                    </label>
                    <select id="input-filter-4" className="form-select flex-1">
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div className="col-span-12 flex items-center mt-3">
                    <button className="btn btn-secondary w-32 ml-auto">
                      Create Filter
                    </button>
                    <button className="btn btn-primary w-32 ml-2">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto flex">
          <button className="btn shadow-md mr-2">
            Scan tài liệu
          </button>
          <Link to="/scan" className="btn btn-primary shadow-md mr-2 ">Tải tài liệu lên</Link>
        </div>
      </div>

      <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
        {props?.fileList?.map((item, index) => {
          return (
            <>
              {
                item?.type != "image" && <a href={item?.link} target="_blank" className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <div className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">{item?.type}</div>
                    </div>
                    <div className="block font-medium mt-4 text-center truncate">
                      {item?.name}
                    </div>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      {item?.size}
                    </div>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <a href="" className="dropdown-item">
                            <i data-lucide="users" className="w-4 h-4 mr-2" />
                            Share File
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            <i
                              data-lucide="trash"
                              className="w-4 h-4 mr-2"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              }
              {
                item?.type == "image" && <a href={item?.link} target="_blank" className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <div className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="img"
                          src={item?.link}
                        />
                      </div>
                    </div>
                    <div className="block font-medium mt-4 text-center truncate">
                      {item?.name}
                    </div>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      {item?.size}
                    </div>
                  </div>
                </a>
              }
            </>
          )
        })}
      </div>

      <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6">
        <nav className="w-full sm:w-auto sm:mr-auto">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">

                <i className="w-4 h-4" data-lucide="chevrons-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">

                <i className="w-4 h-4" data-lucide="chevron-left" />
              </a>
            </li>
            <li className="page-item">

              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">

              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">

              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">

              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">

              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">

                <i className="w-4 h-4" data-lucide="chevron-right" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">

                <i className="w-4 h-4" data-lucide="chevrons-right" />
              </a>
            </li>
          </ul>
        </nav>
        <select className="w-20 form-select box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
    </>
  )
}
