import Categories from "../Categories";
import Menu from "../Menu/";
import Profile_8 from "../../Lib/images/profile-8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Api from "../../api/apis";
import moment from 'moment';

export default function Summary() {

  const [chatgptResponse, setChatgptResponse] = React.useState([])
  React.useEffect(() => {
    Api.getChatGPTResponse().then(res => {
      setChatgptResponse(res)
    }).catch(error => console.log(error))
  }, [])

  const getSummary = (item) => {
    if (typeof item === 'string') {
      try {
        const result = JSON.parse(item);
        return <div>{result?.summary}</div>;
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }

    return <div></div>;
  };


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
              <div className="search-result">
                <div className="search-result__content">
                  <div className="search-result__content__title">Pages</div>
                  <div className="mb-5">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">

                        <i className="w-4 h-4" data-lucide="inbox" />
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">

                        <i className="w-4 h-4" data-lucide="users" />
                      </div>
                      <div className="ml-3">Users &amp; Permissions</div>
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
                          src="dist/images/profile-1.jpg"
                        />
                      </div>
                      <div className="ml-3">Sylvester Stallone</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        sylvesterstallone@left4code.com
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-1.jpg"
                        />
                      </div>
                      <div className="ml-3">Tom Hanks</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        tomhanks@left4code.com
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-8.jpg"
                        />
                      </div>
                      <div className="ml-3">Leonardo DiCaprio</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        leonardodicaprio@left4code.com
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="dist/images/profile-7.jpg"
                        />
                      </div>
                      <div className="ml-3">Johnny Depp</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </div>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-14.jpg"
                      />
                    </div>
                    <div className="ml-3">Oppo Find X2 Pro</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-15.jpg"
                      />
                    </div>
                    <div className="ml-3">Nike Tanjun</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Sport &amp; Outdoor
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-13.jpg"
                      />
                    </div>
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Photography
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/preview-9.jpg"
                      />
                    </div>
                    <div className="ml-3">Samsung Q90 QLED TV</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Electronic
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

                <FontAwesomeIcon
                  icon={faBell}
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
                        src="dist/images/profile-1.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <div className="font-medium truncate mr-5">
                          Sylvester Stallone
                        </div>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          06:05 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature from
                        45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-1.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <div className="font-medium truncate mr-5">
                          Tom Hanks
                        </div>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy
                        text ever since the 1500
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-8.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <div className="font-medium truncate mr-5">
                          Leonardo DiCaprio
                        </div>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          06:05 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-7.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <div className="font-medium truncate mr-5">
                          Johnny Depp
                        </div>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem
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
                        <div className="font-medium truncate mr-5">
                          Leonardo DiCaprio
                        </div>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature from
                        45 BC, making it over 20
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
              {chatgptResponse.slice(0, 2)?.map((item, index) => {
                return (
                  <div key={index} className="intro-y news xl:w-full p-5 box mt-8">
                    {/* BEGIN: Blog Layout */}
                    <h2 className="intro-y font-medium text-xl sm:text-2xl">
                      {item?.file[0]?.name}
                    </h2>
                    <div className="intro-y text-slate-600 dark:text-slate-500 mt-3 text-xs sm:text-sm flex items-center">
                      {moment(item?.createdAt).format("DD/MM/YY")}
                      <span className="mx-1">•</span>
                      <div className="text-primary">
                        {item?.file[0]?.type}
                      </div>
                    </div>
                    <div>--</div>
                    <div className="mt-2 intro-y text-justify leading-relaxed">
                      {item?.result ? getSummary(item.result) : ''}
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
