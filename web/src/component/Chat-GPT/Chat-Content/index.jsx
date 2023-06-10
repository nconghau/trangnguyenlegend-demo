import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Profile_1 from "../../../Lib/images/profile-1.jpg";
import Profile_6 from "../../../Lib/images/profile-6.jpg";
import Profile_7 from "../../../Lib/images/profile-7.jpg";
import Profile_8 from "../../../Lib/images/profile-8.jpg";
import Profile_14 from "../../../Lib/images/profile-14.jpg";
import Preview_9 from "../../../Lib/images/preview-9.jpg";
import Preview_13 from "../../../Lib/images/preview-13.jpg";
import Preview_14 from "../../../Lib/images/preview-14.jpg";
import Preview_15 from "../../../Lib/images/preview-15.jpg";

export default function Content_chat() {

  return (
    <div>

      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>Ứng dụng</div>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Bảng diều khiển
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
                      src={Profile_1}
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
                      src={Profile_1}
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
                      src={Profile_8}
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
                      src={Profile_7}
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
                    src={Preview_14}
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
                    src={Preview_15}
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
                    src={Preview_13}
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
                    src={Preview_9}
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
                    src={Profile_1}
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
                    src={Profile_1}
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
                    src={Profile_8}
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
                    src={Profile_7}
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
                    src={Profile_14}
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
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Chat</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">Start New Chat</button>
        </div>
      </div>
      <div className="intro-y chat grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Chat Side Menu */}
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="tab-content">
            <div
              id="chats"
              className="tab-pane active"
              role="tabpanel"
              aria-labelledby="chats-tab"
            >
              <div className="pr-1">
                <input
                  type="text"
                  className="form-control py-3 px-4 border-transparent bg-slate-100 pr-10"
                  placeholder="Search for messages or users..."
                />
                <i
                  className="w-4 h-4 hidden sm:absolute my-auto inset-y-0 mr-3 right-0"
                  data-lucide="search"
                />
              </div>
              <div className="chat__chat-list overflow-y-auto scrollbar-hidden pr-1 pt-1 mt-4">
                <div className="intro-x cursor-pointer box relative flex items-center p-5 ">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Robert De Niro
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomi
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Kevin Spacey
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        John Travolta
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">05:09 AM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Kevin Spacey
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply random
                      text. It has roots in a piece of classical Latin literature
                      from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Johnny Depp
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomi
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Brad Pitt
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">05:09 AM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Kevin Spacey
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">05:09 AM</div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <p className="font-medium">
                        Robert De Niro
                      </p>
                      <div className="text-xs text-slate-400 ml-auto">01:10 PM</div>
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
            <div
              id="friends"
              className="tab-pane"
              role="tabpanel"
              aria-labelledby="friends-tab"
            >
              <div className="pr-1">
                <div className="box p-5 mt-5">
                  <div className="relative text-slate-500">
                    <input
                      type="text"
                      className="form-control py-3 px-4 border-transparent bg-slate-100 pr-10"
                      placeholder="Search for messages or users..."
                    />
                    <i
                      className="w-4 h-4 hidden sm:absolute my-auto inset-y-0 mr-3 right-0"
                      data-lucide="search"
                    />
                  </div>
                  <button type="button" className="btn btn-primary w-full mt-3">
                    Invite Friends
                  </button>
                </div>
              </div>
              <div className="chat__user-list overflow-y-auto scrollbar-hidden pr-1 pt-1">
                <div className="mt-4 text-slate-500">A</div>
                <div className="cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">

                      <p className="font-medium">
                        Robert De Niro
                      </p>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Last seen 2 hours ago
                    </div>
                  </div>
                  <div className="dropdown ml-auto">
                    <p
                      className="dropdown-toggle w-5 h-5 block"

                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i
                        data-lucide="more-horizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="copy" className="w-4 h-4 mr-2" /> Copy
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">

                      <p className="font-medium">
                        John Travolta
                      </p>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Last seen 2 hours ago
                    </div>
                  </div>
                  <div className="dropdown ml-auto">
                    <p
                      className="dropdown-toggle w-5 h-5 block"

                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i
                        data-lucide="more-horizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="copy" className="w-4 h-4 mr-2" /> Copy
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-slate-500">B</div>
                <div className="cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">

                      <p className="font-medium">
                        Kevin Spacey
                      </p>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Last seen 2 hours ago
                    </div>
                  </div>
                  <div className="dropdown ml-auto">
                    <p
                      className="dropdown-toggle w-5 h-5 block"

                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i
                        data-lucide="more-horizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="copy" className="w-4 h-4 mr-2" /> Copy
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">

                      <p className="font-medium">
                        Johnny Depp
                      </p>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Last seen 2 hours ago
                    </div>
                  </div>
                  <div className="dropdown ml-auto">
                    <p
                      className="dropdown-toggle w-5 h-5 block"

                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i
                        data-lucide="more-horizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="copy" className="w-4 h-4 mr-2" /> Copy
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer box relative flex items-center p-5 mt-5">
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">

                      <p className="font-medium">
                        John Travolta
                      </p>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Last seen 2 hours ago
                    </div>
                  </div>
                  <div className="dropdown ml-auto">
                    <p
                      className="dropdown-toggle w-5 h-5 block"

                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i
                        data-lucide="more-horizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="copy" className="w-4 h-4 mr-2" /> Copy
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="profile"
              className="tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="pr-1">
                <div className="box px-5 py-10 mt-5">
                  <div className="w-20 h-20 flex-none image-fit rounded-full overflow-hidden mx-auto">
                    <img
                      alt="Midone - HTML Admin Template"
                      src="https://w7.pngwing.com/pngs/521/255/png-transparent-computer-icons-data-file-document-file-format-others-thumbnail.png"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <div className="font-medium text-lg">Robert De Niro</div>
                    <div className="text-slate-500 mt-1">
                      Tailwind HTML Admin Template
                    </div>
                  </div>
                </div>
                <div className="box p-5 mt-5">
                  <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <div>
                      <div className="text-slate-500">Country</div>
                      <div className="mt-1">New York City, USA</div>
                    </div>
                    <i
                      data-lucide="globe"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 py-5">
                    <div>
                      <div className="text-slate-500">Phone</div>
                      <div className="mt-1">+32 19 23 62 24 34</div>
                    </div>
                    <i
                      data-lucide="mic"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 py-5">
                    <div>
                      <div className="text-slate-500">Email</div>
                      <div className="mt-1">robertdeniro@left4code.com</div>
                    </div>
                    <i
                      data-lucide="mail"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <div>
                      <div className="text-slate-500">Joined Date</div>
                      <div className="mt-1">22 January 2022</div>
                    </div>
                    <i
                      data-lucide="clock"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Chat Side Menu */}
        {/* BEGIN: Chat Content */}
        <div className="intro-y col-span-12 lg:col-span-8 2xl:col-span-9">
          <div className="chat__box box">
            {/* BEGIN: Chat Active */}
            <div className="hidden h-full flex-col">
              <div className="flex flex-col sm:flex-row border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                <div className="flex items-center">
                  <div className="ml-3 mr-auto">
                    <div className="font-medium text-base">Robert De Niro</div>
                    <div className="text-slate-500 text-xs sm:text-sm">
                      Hey, I am using chat <span className="mx-1">•</span> Online
                    </div>
                  </div>
                </div>
                <div className="flex items-center sm:ml-auto mt-5 sm:mt-0 border-t sm:border-0 border-slate-200/60 pt-3 sm:pt-0 -mx-5 sm:mx-0 px-5 sm:px-0">
                  <p className="w-5 h-5 text-slate-500">

                    <i data-lucide="search" className="w-5 h-5" />
                  </p>
                  <p className="w-5 h-5 text-slate-500 ml-5">

                    <i data-lucide="user-plus" className="w-5 h-5" />
                  </p>
                  <div className="dropdown ml-auto sm:ml-3">
                    <p

                      className="dropdown-toggle w-5 h-5 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-5 h-5" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="share-2"
                              className="w-4 h-4 mr-2"
                            />
                            Share Contact
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="settings"
                              className="w-4 h-4 mr-2"
                            />
                            Settings
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-y-scroll scrollbar-hidden px-5 pt-5 flex-1">
                <div className="chat__box__text-box flex items-end float-left mb-4">
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_6}
                    />
                  </div>
                  <div className="bg-slate-100 dark:bg-darkmode-400 px-4 py-3 text-slate-500 rounded-r-md rounded-t-md">
                    Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    <div className="mt-1 text-xs text-slate-500">2 mins ago</div>
                  </div>
                  <div className="hidden sm:block dropdown ml-3 my-auto">
                    <p

                      className="dropdown-toggle w-4 h-4 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-4 h-4" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="corner-up-left"
                              className="w-4 h-4 mr-2"
                            />
                            Reply
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="trash" className="w-4 h-4 mr-2" />
                            Delete
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clear-both" />
                <div className="chat__box__text-box flex items-end float-right mb-4">
                  <div className="hidden sm:block dropdown mr-3 my-auto">
                    <p

                      className="dropdown-toggle w-4 h-4 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-4 h-4" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="corner-up-left"
                              className="w-4 h-4 mr-2"
                            />
                            Reply
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="trash" className="w-4 h-4 mr-2" />
                            Delete
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-primary px-4 py-3 text-white rounded-l-md rounded-t-md">
                    Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    <div className="mt-1 text-xs text-white text-opacity-80">
                      1 mins ago
                    </div>
                  </div>
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative ml-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_8}
                    />
                  </div>
                </div>
                <div className="clear-both" />
                <div className="chat__box__text-box flex items-end float-right mb-4">
                  <div className="hidden sm:block dropdown mr-3 my-auto">
                    <p

                      className="dropdown-toggle w-4 h-4 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-4 h-4" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="corner-up-left"
                              className="w-4 h-4 mr-2"
                            />
                            Reply
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="trash" className="w-4 h-4 mr-2" />
                            Delete
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-primary px-4 py-3 text-white rounded-l-md rounded-t-md">
                    Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    <div className="mt-1 text-xs text-white text-opacity-80">
                      59 secs ago
                    </div>
                  </div>
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative ml-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_8}
                    />
                  </div>
                </div>
                <div className="clear-both" />
                <div className="text-slate-400 dark:text-slate-500 text-xs text-center mb-10 mt-5">
                  12 June 2020
                </div>
                <div className="chat__box__text-box flex items-end float-left mb-4">
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_6}
                    />
                  </div>
                  <div className="bg-slate-100 dark:bg-darkmode-400 px-4 py-3 text-slate-500 rounded-r-md rounded-t-md">
                    Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    <div className="mt-1 text-xs text-slate-500">10 secs ago</div>
                  </div>
                  <div className="hidden sm:block dropdown ml-3 my-auto">
                    <p

                      className="dropdown-toggle w-4 h-4 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-4 h-4" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="corner-up-left"
                              className="w-4 h-4 mr-2"
                            />
                            Reply
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="trash" className="w-4 h-4 mr-2" />
                            Delete
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clear-both" />
                <div className="chat__box__text-box flex items-end float-right mb-4">
                  <div className="hidden sm:block dropdown mr-3 my-auto">
                    <p

                      className="dropdown-toggle w-4 h-4 text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="more-vertical" className="w-4 h-4" />
                    </p>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content">
                        <li>
                          <p className="dropdown-item">

                            <i
                              data-lucide="corner-up-left"
                              className="w-4 h-4 mr-2"
                            />
                            Reply
                          </p>
                        </li>
                        <li>
                          <p className="dropdown-item">

                            <i data-lucide="trash" className="w-4 h-4 mr-2" />
                            Delete
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-primary px-4 py-3 text-white rounded-l-md rounded-t-md">
                    Lorem ipsum
                    <div className="mt-1 text-xs text-white text-opacity-80">
                      1 secs ago
                    </div>
                  </div>
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative ml-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_8}
                    />
                  </div>
                </div>
                <div className="clear-both" />
                <div className="chat__box__text-box flex items-end float-left mb-4">
                  <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_6}
                    />
                  </div>
                  <div className="bg-slate-100 dark:bg-darkmode-400 px-4 py-3 text-slate-500 rounded-r-md rounded-t-md">
                    Robert De Niro is typing
                    <span className="typing-dots ml-1">

                      <span>.</span> <span>.</span> <span>.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-10 sm:py-4 flex items-center border-t border-slate-200/60 dark:border-darkmode-400">
                <textarea
                  className="chat__box__input form-control dark:bg-darkmode-600 h-16 resize-none border-transparent px-5 py-3 shadow-none focus:border-transparent focus:ring-0"
                  rows={1}
                  placeholder="Type your message..."
                  defaultValue={""}
                />
                <div className="flex absolute sm:static left-0 bottom-0 ml-5 sm:ml-0 mb-5 sm:mb-0">
                  <div className="dropdown mr-3 sm:mr-5">
                    <p

                      className="dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block text-slate-500"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >

                      <i data-lucide="smile" className="w-full h-full" />
                    </p>
                    <div className="chat-dropdown dropdown-menu">
                      <div className="dropdown-content">
                        <div className="chat-dropdown__box flex flex-col">
                          <div className="px-1 pt-1">
                            <div className="relative text-slate-500">
                              <input
                                type="text"
                                className="form-control border-transparent bg-slate-100 pr-10"
                                placeholder="Search emojis..."
                              />
                              <i
                                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                                data-lucide="search"
                              />
                            </div>
                          </div>
                          <ul
                            className="chat-dropdown__box__tabs nav nav-pills px-1 mt-5"
                            role="tablist"
                          >
                            <li
                              id="history-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#history"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="history"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="smile-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#smile"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400 active"
                                role="tab"
                                aria-controls="smile"
                                aria-selected="true"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 496 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="cat-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#cat"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="cat"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="coffee-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#coffee"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="coffee"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="futbol-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#futbol"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="futbol"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="building-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#building"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="building"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="lightbulb-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#lightbulb"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="lightbulb"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 352 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li
                              id="music-tab"
                              className="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                data-tw-toggle="tab"
                                data-tw-target="#music"
                                className="nav-link border-0 w-full px-0 py-2 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                                role="tab"
                                aria-controls="music"
                                aria-selected="false"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"
                                  />
                                </svg>
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content overflow-hidden mt-5">
                            <div
                              id="history"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="history-tab"
                            >
                              <div className="font-medium px-1">Recent Emojis</div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😂
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="smile"
                              className="h-full tab-pane active"
                              role="tabpanel"
                              aria-labelledby="smile-tab"
                            >
                              <div className="font-medium px-1">
                                Smileys &amp; People
                              </div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☺️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☹️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☠️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    😾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍⚕️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍⚕️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🎓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🎓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🏫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🏫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍⚖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍⚖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🌾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🌾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🍳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🍳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🔧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🔧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🏭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🏭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍💼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍💼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🔬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🔬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍💻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍💻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🎤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🎤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🎨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🎨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍✈️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍✈️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🚀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🚀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍🚒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍🚒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👮‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👮‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕵️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕵️‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕵️‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💂‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💂‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👷‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👷‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👳‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👳‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👱‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👱‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧙‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧙‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧚‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧚‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧛‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧛‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧜‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧜‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧝‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧝‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧞‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧞‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧟‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧟‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙍‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙍‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙎‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙎‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙅‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙅‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙆‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙆‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💁‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💁‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙋‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙋‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙇‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙇‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤦‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤦‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤷‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤷‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💆‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💆‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💇‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💇‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚶‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚶‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏃‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏃‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👯‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👯‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧖‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧖‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧗‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧗‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧘‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧘‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕴️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗣️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛷️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏌️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏌️‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏌️‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏄‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏄‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚣‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚣‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏊‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏊‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛹️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛹️‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛹️‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏋️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏋️‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏋️‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚴‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚴‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚵‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚵‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏎️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏍️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤸‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤸‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤼‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤼‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤽‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤽‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤾‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤾‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤹‍♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤹‍♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍❤️‍💋‍👨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍❤️‍💋‍👨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍❤️‍💋‍👩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍❤️‍👨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍❤️‍👨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍❤️‍👩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👩‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👩‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👩‍👧‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👩‍👦‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👩‍👧‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👨‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👨‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👨‍👧‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👨‍👦‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👨‍👧‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👩‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👩‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👩‍👧‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👩‍👦‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👩‍👧‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👦‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👧‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👨‍👧‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👦‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👧‍👦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👩‍👧‍👧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☝️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✌️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖐️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✍️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🙏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🤝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👁️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👁️‍🗨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❤️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❣️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗯️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕳️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕶️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛍️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    👒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛑️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💎
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="cat"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="cat-tab"
                            >
                              <div className="font-medium px-1">
                                Animals &amp; Nature
                              </div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐿️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕊️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🐞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕷️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕸️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🦂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏵️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☘️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍃
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="coffee"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="coffee-tab"
                            >
                              <div className="font-medium px-1">
                                Food &amp; Drink
                              </div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌶️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🧀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍽️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🍴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏺
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="futbol"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="futbol-tab"
                            >
                              <div className="font-medium px-1">Activities</div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎗️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎟️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛸️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕹️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♠️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♥️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♦️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♣️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🃏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🀄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎴
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="building"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="building-tab"
                            >
                              <div className="font-medium px-1">
                                Travel &amp; Places
                              </div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗺️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏔️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏕️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏜️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏝️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏞️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏟️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏛️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏗️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏘️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏙️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏚️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛩️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖼️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛣️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛤️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛳️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛴️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛥️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✈️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛩️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛎️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛏️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛋️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⌛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⌚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏱️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏲️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌡️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⭐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☁️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛈️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌤️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌥️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌦️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌧️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌩️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌪️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌫️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌬️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛱️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❄️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☃️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☄️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🌊
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="lightbulb"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="lightbulb-tab"
                            >
                              <div className="font-medium px-1">Objects</div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎙️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎚️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎛️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🥁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☎️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖥️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⌨️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖱️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖲️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎞️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📽️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕯️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗞️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏷️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✉️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📥
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗳️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✏️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✒️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖋️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖊️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖌️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖍️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗒️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗓️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📇
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🖇️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗃️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗄️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗑️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗝️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔨
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛏️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚒️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛠️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗡️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚔️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛡️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚙️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗜️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚗️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛓️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚱️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🗿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛢️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛒
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              id="music"
                              className="h-full tab-pane"
                              role="tabpanel"
                              aria-labelledby="music-tab"
                            >
                              <div className="font-medium px-1">Symbols</div>
                              <div className="h-full pb-10 overflow-y-auto scrollbar-hidden mt-2">
                                <div className="grid grid-cols-8 text-2xl">
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🏧
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚮
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚠️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚭
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🚷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔞
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☢️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☣️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⬆️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↗️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➡️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↘️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⬇️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↙️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⬅️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↕️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↔️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↩️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ↪️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⤴️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⤵️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔃
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔄
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔝
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🛐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚛️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕉️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✡️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☸️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☯️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✝️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☦️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☪️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☮️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🕎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♈
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♉
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♊
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♋
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♍
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♏
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⛎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔀
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔂
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ▶️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏩
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏭️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏯️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ◀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏮️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔼
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏬
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏸️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏹️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏺️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⏏️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🎦
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔆
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♀️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚕️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ♻️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚜️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔱
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    📛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⭕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✅
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ☑️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✔️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✖️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❌
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➰
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ➿
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    〽️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✳️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ✴️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❇️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ‼️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⁉️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ❗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    〰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ©️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ®️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ™️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    #️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    *️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    0️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    1️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    2️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    3️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    4️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    5️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    6️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    7️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    8️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    9️⃣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔟
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔡
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔢
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔣
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔤
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🅰️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆎
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🅱️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆒
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆓
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ℹ️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆔
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    Ⓜ️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆕
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆖
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🅾️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆗
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🅿️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆙
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🆚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈁
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈂️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈷️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈯
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🉐
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈚
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🉑
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ㊗️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ㊙️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🈵
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ▪️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ▫️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ◻️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ◼️
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ◽
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ◾
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⬛
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⬜
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔶
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔷
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔸
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔹
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔺
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔻
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    💠
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔘
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔲
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔳
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚪
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    ⚫
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔴
                                  </button>
                                  <button className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400">
                                    🔵
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 relative text-slate-500 mr-3 sm:mr-5">
                    <i data-lucide="paperclip" className="w-full h-full" />
                    <input
                      type="file"
                      className="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
                <p
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex-none flex items-center justify-center mr-5"
                >

                  <i data-lucide="send" className="w-4 h-4" />
                </p>
              </div>
            </div>
            {/* END: Chat Active */}
            {/* BEGIN: Chat Default */}
            <div className="h-full flex items-center">
              <div className="mx-auto text-center">
                <div className="w-16 h-16 flex-none image-fit rounded-full overflow-hidden mx-auto">
                  <img
                    alt="Midone - HTML Admin Template"
                    src={Profile_6}
                  />
                </div>
                <div className="mt-3">
                  <div className="font-medium">Hey, Robert De Niro!</div>
                  <div className="text-slate-500 mt-1">
                    Please select a chat to start messaging.
                  </div>
                </div>
              </div>
            </div>
            {/* END: Chat Default */}
          </div>
        </div>
        {/* END: Chat Content */}
      </div>

    </div>
  )
}