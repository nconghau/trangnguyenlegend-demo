import Categories from "../Categories";
import Menu from "../Menu";
import Profile_8 from "../../Lib/images/profile-8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Api from "../../api/apis";
import moment from 'moment';

export default function ConvertText() {

  const [convertText, setConvertText] = React.useState([])
  React.useEffect(() => {
    Api.getConvertText().then(res => {
      setConvertText(res)
    }).catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className="flex m-4">
        <Menu />
        <div className="content">
          {/* BEGIN: Top Bar */}
          <div className="top-bar">
            {/* BEGIN: Breadcrumb */}
            <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <div>Application</div>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Tên bài học
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6">
              <div className="search hidden sm:block">
                <input
                  type="text"
                  className="search__input form-control border-transparent"
                  placeholder="Search..."
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search__icon dark:text-slate-500"
                />
              </div>
              <div className="notification sm:hidden">

                <i
                  data-lucide="search"
                  className="notification__icon dark:text-slate-500"
                />
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notifications */}
            <div className="intro-x dropdown mr-auto sm:mr-6">
              <div
                className="dropdown-toggle notification notification--bullet cursor-pointer"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >

                <FontAwesomeIcon
                  icon={faBell}
                  className="notification__icon dark:text-slate-500"
                />
              </div>
            </div>
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <div className="intro-x dropdown w-8 h-8">
              <div
                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >
                <img
                  alt="Midone - HTML Admin Template"
                  src={Profile_8}
                />
              </div>
              <div className="dropdown-menu w-56">
                <ul className="dropdown-content bg-primary text-white">
                  <li className="p-2">
                    <div className="font-medium">Sylvester Stallone</div>
                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                      Frontend Engineer
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <div className="dropdown-item hover:bg-white/5">

                      <i data-lucide="user" className="w-4 h-4 mr-2" /> Profile
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item hover:bg-white/5">

                      <i data-lucide="edit" className="w-4 h-4 mr-2" /> Add Account
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item hover:bg-white/5">

                      <i data-lucide="lock" className="w-4 h-4 mr-2" /> Reset Password
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item hover:bg-white/5">

                      <i data-lucide="help-circle" className="w-4 h-4 mr-2" /> Help
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <div className="dropdown-item hover:bg-white/5">

                      <i
                        data-lucide="toggle-right"
                        className="w-4 h-4 mr-2"
                      /> Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* END: Account Menu */}
          </div>
          {/* END: Top Bar */}
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 lg:col-span-3 2xl:col-span-3">
              <h2 className="intro-y text-lg font-medium mr-auto mt-2">Tên bài học</h2>
              {/* BEGIN: File Manager Menu */}
              <Categories />
              {/* END: File Manager Menu */}
            </div>
            <div className="col-span-12 lg:col-span-9 2xl:col-span-9">
              {convertText?.map((item, index) => {
                return (
                  <div key={index} className="intro-y news xl:w-full p-5 box mt-8">
                    {/* BEGIN: Blog Layout */}
                    <h2 className="intro-y font-medium text-xl sm:text-2xl">
                      {item?.file?.name}
                    </h2>
                    <div className="intro-y text-slate-600 dark:text-slate-500 mt-3 text-xs sm:text-sm flex items-center">
                      {moment(item?.createdAt).format("DD/MM/YY")}
                      <span className="mx-1">•</span>
                      <div className="text-primary">
                        {item?.file?.type}
                      </div>
                    </div>
                    <div>--</div>
                    <div className="mt-2 intro-y text-justify leading-relaxed">
                      {item?.text}
                    </div>
                    <div className="page-num text-center mt-5  ">
                      <strong>{index + 1}</strong>
                    </div>
                    {/* END: Dark Mode Switcher*/}
                    {/* BEGIN: JS Assets*/}
                    {/* END: JS Assets*/}
                    {/* Code injected by live-server */}
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
