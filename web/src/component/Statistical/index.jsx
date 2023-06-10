import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import Categories from "../Categories";
import Menu from "../Menu/";
import Profile_8 from "../../Lib/images/profile-8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Statistical() {
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
              <h2 className="intro-y text-lg font-medium mr-auto mt-2">
                Tên bài học
              </h2>
              {/* BEGIN: File Manager Menu */}
              <Categories />
              {/* END: File Manager Menu */}
            </div>
            <div className="col-span-12 lg:col-span-9 2xl:col-span-9">
              {/* BEGIN: File Manager Filter */}
              {/* END: File Manager Filter */}
              {/* BEGIN: Directory & Files */}
              <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
                <div className="col-span-12 mt-8">
                  <div className="intro-y flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Thống kê : Dế mèn
                    </h2>
                    <div className="ml-auto flex items-center text-primary">
                      <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3" />
                      Reload Data
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="col-span-12 sm:col-span-6 xl:col-span-6 intro-y">
                      <div className="report-box zoom-in">
                        <div className="box p-5">
                          <div className="flex">
                            <i
                              data-lucide="smartphone"
                              className="report-box__icon text-warning"
                            />
                            <div className="ml-auto">
                              <div
                                className="report-box__indicator bg-success tooltip cursor-pointer"
                                title="12% Higher than last month"
                              >
                                12%
                                <i
                                  data-lucide="chevron-up"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-medium leading-8 mt-6">
                            2.149
                          </div>
                          <div className="text-base text-slate-500 mt-1">
                            Số chữ đã tóm tắt
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 xl:col-span-6 intro-y">
                      <div className="report-box zoom-in">
                        <div className="box p-5">
                          <div className="flex">
                            <i
                              data-lucide="book"
                              className="report-box__icon text-success"
                            />
                            <div className="ml-auto">
                              <div
                                className="report-box__indicator bg-success tooltip cursor-pointer"
                                title="22% Higher than last month"
                              >
                                22%
                                <i
                                  data-lucide="chevron-up"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-medium leading-8 mt-6">
                            152.040
                          </div>
                          <div className="text-base text-slate-500 mt-1">
                            Số bài tập
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6 mt-10">
                    <div className="col-span-12 sm:col-span-6 xl:col-span-6 intro-y">
                      <div className="report-box zoom-in">
                        <div className="box p-5">
                          <div className="flex">
                            <i
                              data-lucide="book-open"
                              className="report-box__icon text-warning"
                            />
                            <div className="ml-auto">
                              <div
                                className="report-box__indicator bg-success tooltip cursor-pointer"
                                title="12% Higher than last month"
                              >
                                12%
                                <i
                                  data-lucide="chevron-up"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-medium leading-8 mt-6">
                            2.149
                          </div>
                          <div className="text-base text-slate-500 mt-1">
                            Tổng số file đã tải lên
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 xl:col-span-6 intro-y">
                      <div className="report-box zoom-in">
                        <div className="box p-5">
                          <div className="flex">
                            <i
                              data-lucide="clipboard"
                              className="report-box__icon text-success"
                            />
                            <div className="ml-auto">
                              <div
                                className="report-box__indicator bg-success tooltip cursor-pointer"
                                title="22% Higher than last month"
                              >
                                22%
                                <i
                                  data-lucide="chevron-up"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-medium leading-8 mt-6">
                            152.040
                          </div>
                          <div className="text-base text-slate-500 mt-1">
                            Tổng số chữ đã tải lên
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-y box mt-5">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                      <h2 className="font-medium text-base mr-auto">
                        Bài học cần xem lại
                      </h2>
                    </div>
                    <div id="boxed-accordion" className="p-5">
                      <div className="preview">
                        <div
                          id="faq-accordion-2"
                          className="accordion accordion-boxed"
                        >
                          <div className="accordion-item">
                            <div
                              id="faq-accordion-content-5"
                              className="accordion-header"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-tw-toggle="collapse"
                                data-tw-target="#faq-accordion-collapse-5"
                                aria-expanded="true"
                                aria-controls="faq-accordion-collapse-5"
                              >
                                OpenSSL Essentials: Working with SSL Certificates,
                                Private Keys
                              </button>
                            </div>
                            <div
                              id="faq-accordion-collapse-5"
                              className="accordion-collapse show"
                              aria-labelledby="faq-accordion-content-5"
                              data-tw-parent="#faq-accordion-2"
                            >
                              <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              id="faq-accordion-content-6"
                              className="accordion-header"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-tw-toggle="collapse"
                                data-tw-target="#faq-accordion-collapse-6"
                                aria-expanded="false"
                                aria-controls="faq-accordion-collapse-6"
                              >
                                Understanding IP Addresses, Subnets, and CIDR
                                Notation
                              </button>
                            </div>
                            <div
                              id="faq-accordion-collapse-6"
                              className="accordion-collapse collapse"
                              aria-labelledby="faq-accordion-content-6"
                              data-tw-parent="#faq-accordion-2"
                            >
                              <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              id="faq-accordion-content-7"
                              className="accordion-header"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-tw-toggle="collapse"
                                data-tw-target="#faq-accordion-collapse-7"
                                aria-expanded="false"
                                aria-controls="faq-accordion-collapse-7"
                              >
                                How To Troubleshoot Common HTTP Error Codes
                              </button>
                            </div>
                            <div
                              id="faq-accordion-collapse-7"
                              className="accordion-collapse collapse"
                              aria-labelledby="faq-accordion-content-7"
                              data-tw-parent="#faq-accordion-2"
                            >
                              <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              id="faq-accordion-content-8"
                              className="accordion-header"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-tw-toggle="collapse"
                                data-tw-target="#faq-accordion-collapse-8"
                                aria-expanded="false"
                                aria-controls="faq-accordion-collapse-8"
                              >
                                An Introduction to Securing your Linux VPS
                              </button>
                            </div>
                            <div
                              id="faq-accordion-collapse-8"
                              className="accordion-collapse collapse"
                              aria-labelledby="faq-accordion-content-8"
                              data-tw-parent="#faq-accordion-2"
                            >
                              <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Pagination */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
