import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronLeft, faChevronRight, faMagnifyingGlass, faPlus, faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Profile_8 from "../../Lib/images/profile-8.jpg";

export default function List() {
  return (
    <div>
      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="-intro-x mr-auto hidden sm:flex"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>Ứng dụng</div>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Bảng điều khiển</li>
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
          <div className="notification sm:hidden" >

            <i
              data-lucide="search"
              className="notification__icon dark:text-slate-500"
            />
          </div>
          <div className="search-result">
            <div className="search-result__content">
              <div className="search-result__content__title">Trang</div>
              <div className="mb-5">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">

                    <i className="w-4 h-4" data-lucide="inbox" />
                  </div>
                  <div className="ml-3">Cài đặt thư</div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">

                    <i className="w-4 h-4" data-lucide="users" />
                  </div>
                  <div className="ml-3">Người dùng &amp; Quyền</div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">

                    <i className="w-4 h-4" data-lucide="credit-card" />
                  </div>
                  <div className="ml-3">Transactions Report</div>
                </div>
              </div>
              <div className="search-result__content__title">Users</div>
              <div className="mb-5">
                <div className="flex items-center mt-2">
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
                </div>
                <div className="flex items-center mt-2">
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
                </div>
                <div className="flex items-center mt-2">
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
                </div>
                <div className="flex items-center mt-2">
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
                </div>
              </div>
              <div className="search-result__content__title">Products</div>
              <div className="flex items-center mt-2">
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
              </div>
              <div className="flex items-center mt-2">
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
              </div>
              <div className="flex items-center mt-2">
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
              </div>
              <div className="flex items-center mt-2">
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
              </div>
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
                    <div
                      className="font-medium truncate mr-5"
                    >
                      Kevin Spacey
                    </div>
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
                    <div

                      className="font-medium truncate mr-5"
                    >
                      Denzel Washington
                    </div>
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
                    <div

                      className="font-medium truncate mr-5"
                    >
                      Christian Bale
                    </div>
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
                    <div

                      className="font-medium truncate mr-5"
                    >
                      Tom Cruise
                    </div>
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
                    <div

                      className="font-medium truncate mr-5"
                    >
                      Al Pacino
                    </div>
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
              src={Profile_8}
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
                <div className="dropdown-item hover:bg-white/5">

                  <i className="w-4 h-4 mr-2" /> Profile
                </div>
              </li>
              <li>
                <div className="dropdown-item hover:bg-white/5">

                  <i data-lucide="edit" className="w-4 h-4 mr-2" /> Add Account
                </div>
              </li>
              <li>
                <div className="dropdown-item hover:bg-white/5">

                  <i data-lucide="lock" className="w-4 h-4 mr-2" /> Reset
                  Password
                </div>
              </li>
              <li>
                <div className="dropdown-item hover:bg-white/5">

                  <i
                    data-lucide="help-circle"
                    className="w-4 h-4 mr-2"
                  /> Help
                </div>
              </li>
              <li>
                <hr className="dropdown-divider border-white/[0.08]" />
              </li>
              <li>
                <div className="dropdown-item hover:bg-white/5">

                  <i data-lucide="toggle-right" className="w-4 h-4 mr-2" />
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
      <h2 className="intro-y text-lg font-medium mt-10">Danh sách bài học</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <Link to="/scan" className="btn btn-primary shadow-md mr-2">
            Thêm bài học mới
          </Link>
          <div className="dropdown">
            <button
              className="dropdown-toggle btn px-2 box"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="w-4 h-4"
                />
              </span>
            </button>
            <div className="dropdown-menu w-40">
              <ul className="dropdown-content">
                <li>
                  <div className="dropdown-item">

                    <i
                      data-lucide="printer"
                      className="w-4 h-4 mr-2"
                    /> Print
                  </div>
                </li>
                <li>
                  <div className="dropdown-item">

                    <i data-lucide="file-text" className="w-4 h-4 mr-2" />
                    Export to Excel
                  </div>
                </li>
                <li>
                  <div className="dropdown-item">

                    <i data-lucide="file-text" className="w-4 h-4 mr-2" />
                    Export to PDF
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block mx-auto text-slate-500">
            Hiển thị 1 đến 10 trên 150 mục
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Tên bài học</th>
                <th className="text-center whitespace-nowrap">Số file</th>
              </tr>
            </thead>
            <tbody>
              <tr className="intro-x">
                <td>
                  <Link to="/manager">
                    <div

                      className="font-medium whitespace-nowrap"
                    >
                      Kinh Tế Chính Trị Mác - Lenin
                    </div>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      Kinh tế chính trị là một môn khoa học có ...
                    </div>
                  </Link>
                </td>
                <td className="text-center">50</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Tư Tưởng Hồ Chí Minh
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Tư tưởng Hồ Chí Minh là một hệ thống...
                  </div>
                </td>
                <td className="text-center">88</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Nhập môn Công Nghệ Thông Tin
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Nhập môn công nghệ thông tin là học phần...
                  </div>
                </td>
                <td className="text-center">152</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Chủ nghĩa xã hội khoa học
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Chủ nghĩa xã hội khoa học là...
                  </div>
                </td>
                <td className="text-center">50</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Triết học Mác - Lênin
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Triết học Mác - Lênin là....
                  </div>
                </td>
                <td className="text-center">91</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Tử tưởng Hồ Chí Minh
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Tử tưởng Hồ Chí Minh là...
                  </div>
                </td>
                <td className="text-center">50</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Luật hành chính
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Luật hành chính là...
                  </div>
                </td>
                <td className="text-center">88</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Luật dân sự
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Luật dân sự là...
                  </div>
                </td>
                <td className="text-center">58</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td>
                  <div className="font-medium whitespace-nowrap">
                    Nhập môn Công nghệ phần mềm
                  </div>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Nhập môn Công nghệ phần mềm là...
                  </div>
                </td>
                <td className="text-center">166</td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center mr-3" >


                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="w-4 h-4 mr-1"
                      />
                      Edit
                    </div>
                    <div
                      className="flex items-center text-danger"

                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="w-4 h-4 mr-1"
                      />
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <div className="page-link">
                  <FontAwesomeIcon icon={faChevronLeft}
                    className="w-4 h-4"
                  />
                </div>
              </li>
              <li className="page-item">
                <div className="page-link">
                  ...
                </div>
              </li>
              <li className="page-item">

                <div className="page-link">
                  1
                </div>
              </li>
              <li className="page-item active">

                <div className="page-link">
                  2
                </div>
              </li>
              <li className="page-item">

                <div className="page-link">
                  3
                </div>
              </li>
              <li className="page-item">

                <div className="page-link">
                  ...
                </div>
              </li>
              <li className="page-item">
                <div className="page-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-4 h-4"
                  />
                </div>
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
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <div
        id="delete-confirmation-modal"
        className="modal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="p-5 text-center">
                <i
                  data-lucide="x-circle"
                  className="w-16 h-16 text-danger mx-auto mt-3"
                />
                <div className="text-3xl mt-5">Are you sure?</div>
                <div className="text-slate-500 mt-2">
                  Do you really want to delete these records?
                  <br />
                  This process cannot be undone.
                </div>
              </div>
              <div className="px-5 pb-8 text-center">
                <button
                  type="button"
                  data-tw-dismiss="modal"
                  className="btn btn-outline-secondary w-24 mr-1"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger w-24">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
