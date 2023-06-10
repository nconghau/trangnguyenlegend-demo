import React from "react";
import Api from "../../api/apis";
import Categories from "../Categories";
import Menu from "../Menu";
import Mg_content from "./Mg_content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Manager() {

  const [fileList, setFileList] = React.useState([])
  React.useEffect(() => {
    Api.getFileUpload().then(res => {
      setFileList(res)
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
            <nav
              aria-label="breadcrumb"
              className="-intro-x mr-auto hidden sm:flex"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Ứng dụng</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Bảng điều khiển</li>
                <li className="breadcrumb-item active" aria-current="page">Tên bài học</li>
              </ol>
            </nav>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
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
              <a className="notification sm:hidden" href="">

                <i
                  data-lucide="search"
                  className="notification__icon dark:text-slate-500"
                />
              </a>
              <div className="search-result">
                <div className="search-result__content">
                  <div className="search-result__content__title">Trang</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center">
                      <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">

                        <i className="w-4 h-4" data-lucide="inbox" />
                      </div>
                      <div className="ml-3">Cài đặt thư</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">

                        <i className="w-4 h-4" data-lucide="users" />
                      </div>
                      <div className="ml-3">Người dùng &amp; Quyền</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">

                        <i className="w-4 h-4" data-lucide="credit-card" />
                      </div>
                      <div className="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Users</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-13.jpg"
                        />
                      </div>
                      <div className="ml-3">Kevin Spacey</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        kevinspacey@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-11.jpg"
                        />
                      </div>
                      <div className="ml-3">Denzel Washington</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        denzelwashington@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-15.jpg"
                        />
                      </div>
                      <div className="ml-3">Christian Bale</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        christianbale@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-5.jpg"
                        />
                      </div>
                      <div className="ml-3">Tom Cruise</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        tomcruise@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-13.jpg"
                      />
                    </div>
                    <div className="ml-3">Apple MacBook Pro 13</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      PC &amp; Laptop
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-1.jpg"
                      />
                    </div>
                    <div className="ml-3">Sony A7 III</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Photography
                    </div>
                  </a>
                  <a href="." className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-1.jpg"
                      />
                    </div>
                    <div className="ml-3">Nike Air Max 270</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Sport &amp; Outdoor
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-8.jpg"
                      />
                    </div>
                    <div className="ml-3">Sony A7 III</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Photography
                    </div>
                  </a>
                </div>
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
                <FontAwesomeIcon icon={faBell}
                  className="notification__icon dark:text-slate-500"
                />
              </div>
              <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-content">
                  <div className="notification-content__title">Notifications</div>
                  <div className="cursor-pointer relative flex items-center ">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-13.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Kevin Spacey
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature
                        from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-11.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Denzel Washington
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature
                        from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-15.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Christian Bale
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-5.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Tom Cruise
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature
                        from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-14.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Al Pacino
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500
                      </div>
                    </div>
                  </div>
                </div>
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
                  src="dist/images/profile-3.jpg"
                />
              </div>
              <div className="dropdown-menu w-56">
                <ul className="dropdown-content bg-primary text-white">
                  <li className="p-2">
                    <div className="font-medium">Kevin Spacey</div>
                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                      Backend Engineer
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">

                      <i className="w-4 h-4 mr-2" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">

                      <i data-lucide="edit" className="w-4 h-4 mr-2" /> Add Account
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">

                      <i data-lucide="lock" className="w-4 h-4 mr-2" /> Reset
                      Password
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">

                      <i
                        data-lucide="help-circle"
                        className="w-4 h-4 mr-2"
                      /> Help
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">

                      <i data-lucide="toggle-right" className="w-4 h-4 mr-2" />
                      Logout
                    </a>
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
              {/* BEGIN: File Manager Filter */}
              <Mg_content fileList={fileList} />
              {/* END: Pagination */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
