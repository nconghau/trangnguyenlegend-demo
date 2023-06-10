import React from "react";
import Api from "../../../api/apis";

import Profile_9 from "../../../Lib/images/profile-9.jpg";
import Profile_13 from "../../../Lib/images/profile-13.jpg";
import Profile_11 from "../../../Lib/images/profile-11.jpg";
import Profile_15 from "../../../Lib/images/profile-15.jpg";
import Profile_7 from "../../../Lib/images/profile-7.jpg";
import Preview_9 from "../../../Lib/images/preview-9.jpg";
import Preview_7 from "../../../Lib/images/preview-7.jpg";
import Preview_14 from "../../../Lib/images/preview-14.jpg";
import Preview_8 from "../../../Lib/images/preview-8.jpg";

export default function ConvertProduct() {
  const [fileUpload, setFileUpload] = React.useState([]);

  const handleChange = (event) => {
    const files = event.target.files;
    const updatedFiles = [...fileUpload];

    for (const file of files) {
      updatedFiles.push(file);
    }

    setFileUpload(updatedFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...fileUpload];
    updatedFiles.splice(index, 1);
    setFileUpload(updatedFiles);
  };

  const handleSubmit = async () => {
    // Handle form submission logic
    alert("Uploading...")
    try {
      const formData = new FormData();
      for (const file of fileUpload) {
        formData.append('file', file);
      }

      const response = await Api.uploadFile(formData);
      // Handle the response and any further actions
      console.log('Upload successful:', response.data);
      if (response) {
        window.location.href = "/manager";
      }

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
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
              <li className="breadcrumb-item active" aria-current="page">
                Bảng điều khiển
              </li>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="search"
                className="lucide lucide-search search__icon dark:text-slate-500"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <a className="notification sm:hidden" href="">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="search"
                className="lucide lucide-search notification__icon dark:text-slate-500"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </a>
            <div className="search-result">
              <div className="search-result__content">
                <div className="search-result__content__title">Trang</div>
                <div className="mb-5">
                  <a href="" className="flex items-center">
                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-inbox w-4 h-4"
                        data-lucide="inbox"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
                      </svg>
                    </div>
                    <div className="ml-3">Cài đặt thư</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users w-4 h-4"
                        data-lucide="users"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <div className="ml-3">Người dùng &amp; Quyền</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-credit-card w-4 h-4"
                        data-lucide="credit-card"
                      >
                        <rect
                          x={1}
                          y={4}
                          width={22}
                          height={16}
                          rx={2}
                          ry={2}
                        />
                        <line x1={1} y1={10} x2={23} y2={10} />
                      </svg>
                    </div>
                    <div className="ml-3">Báo cáo giao dịch</div>
                  </a>
                </div>
                <div className="search-result__content__title">Người dùng</div>
                <div className="mb-5">
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src={Profile_9}
                      />
                    </div>
                    <div className="ml-3">Robert De Niro</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      robertdeniro@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src={Profile_13}
                      />
                    </div>
                    <div className="ml-3">Russell Crowe</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      russellcrowe@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src={Profile_11}
                      />
                    </div>
                    <div className="ml-3">Leonardo DiCaprio</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      leonardodicaprio@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src={Profile_15}
                      />
                    </div>
                    <div className="ml-3">Denzel Washington</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      denzelwashington@left4code.com
                    </div>
                  </a>
                </div>
                <div className="search-result__content__title">Products</div>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Preview_9}
                    />
                  </div>
                  <div className="ml-3">Dell XPS 13</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    PC &amp; Laptop
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Preview_7}
                    />
                  </div>
                  <div className="ml-3">Sony Master Series A9G</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Electronic
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
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
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Preview_8}
                    />
                  </div>
                  <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Smartphone &amp; Tablet
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="bell"
                className="lucide lucide-bell notification__icon dark:text-slate-500"
              >
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <div className="notification-content pt-2 dropdown-menu">
              <div className="notification-content__box dropdown-content">
                <div className="notification-content__title">Notifications</div>
                <div className="cursor-pointer relative flex items-center ">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_9}
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Robert De Niro
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_13}
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Russell Crowe
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_11}
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Leonardo DiCaprio
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomi
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={Profile_15}
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
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been thes standard
                      dummy text ever since the 1500
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
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Arnold Schwarzenegger
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
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
                src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
              />
            </div>
            <div className="dropdown-menu w-56">
              <ul className="dropdown-content bg-primary text-white">
                <li className="p-2">
                  <div className="font-medium">Robert De Niro</div>
                  <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                    DevOps Engineer
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="user"
                      className="lucide lucide-user w-4 h-4 mr-2"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="edit"
                      className="lucide lucide-edit w-4 h-4 mr-2"
                    >
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Add Account
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="lock"
                      className="lucide lucide-lock w-4 h-4 mr-2"
                    >
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Reset Password
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="help-circle"
                      className="lucide lucide-help-circle w-4 h-4 mr-2"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                      <line x1={12} y1={17} x2="12.01" y2={17} />
                    </svg>
                    Help
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="toggle-right"
                      className="lucide lucide-toggle-right w-4 h-4 mr-2"
                    >
                      <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
                      <circle cx={16} cy={12} r={3} />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* END: Account Menu */}
        </div>
        {/* END: Top Bar */}
        <div className="intro-y flex items-center mt-8">
          <h2 className="text-lg font-medium mr-auto">Thêm bài học mới</h2>
        </div>
        <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
          {/* BEGIN: Notification */}
          {/* BEGIN: Notification */}
          <div className="intro-y col-span-11 2xl:col-span-9">
            {/* BEGIN: Uplaod Product */}
            <div className="intro-y box p-5">
              <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="chevron-down"
                    className="lucide lucide-chevron-down w-4 h-4 mr-2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  Tải bài học lên
                </div>
                <div className="mt-5">
                  <div className="flex items-center text-slate-500">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="lightbulb"
                        className="lucide lucide-lightbulb w-5 h-5 text-warning"
                      >
                        <line x1={9} y1={18} x2={15} y2={18} />
                        <line x1={10} y1={22} x2={14} y2={22} />
                        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
                      </svg>
                    </span>
                    <div className="ml-2">
                      <span className="mr-1">
                      </span>
                      <a
                        href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                        className="text-primary font-medium"
                        target="blank"
                      >
                        Tìm hiểu thêm
                      </a>
                    </div>
                  </div>
                  <div className="form-inline items-start flex-col xl:flex-row mt-10">
                    <div className="form-label w-full xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Ảnh bài học</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Bắt buộc
                          </div>
                        </div>
                        <div className="leading-relaxed text-slate-500 text-xs mt-3">
                          <div>
                            Định dạng hình ảnh là png và tối thiểu
                            kích thước 300 x 300 pixel (Để có hình ảnh tối ưu, hãy sử dụng
                            kích thước tối thiểu 700 x 700 pixel).
                          </div>
                          <div className="mt-2">
                            Chọn ảnh bài học hoặc kéo thả tối đa 20 hình ảnh cùng một lúc ở đây.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                      <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
                        {
                          fileUpload?.map((item, index) => {
                            return (
                              <div key={index} className="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                {item.type.startsWith('image/') ? (
                                  <img
                                    className="rounded-md"
                                    alt="Image"
                                    src={URL.createObjectURL(item)}
                                  />
                                ) : item.type === 'application/pdf' ? (
                                  <div className="pdf-placeholder">
                                    <div className="flex justify-center mb-5">
                                      <img
                                        width="95px"
                                        className="pdf-icon"
                                        alt="PDF Icon"
                                        src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685377542/pdficon_tayxsd.png" // Replace with the actual PDF icon URL
                                      />
                                    </div>
                                    <span>{item.name.slice(0, 16) + "..."}</span>
                                  </div>
                                ) : (
                                  <div className="placeholder">File type not supported</div>
                                )}
                                <div onClick={() => handleRemoveFile(index)} className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-lucide="x"
                                    className="lucide lucide-x w-4 h-4"
                                  >
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                  </svg>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                      {/* Input */}
                      <div className="px-4 pb-4 mt-10 flex items-center justify-center cursor-pointer relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          data-lucide="image"
                          className="lucide lucide-image w-4 h-4 mr-2"
                        >
                          <rect
                            x={3}
                            y={3}
                            width={18}
                            height={18}
                            rx={2}
                            ry={2}
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-primary mr-1">Upload tài liệu</span>
                        (Kéo thả)
                        <input
                          id="horizontal-form-1"
                          type="file"
                          className="w-full h-full top-0 left-0 absolute opacity-0"
                          multiple // Allow selecting multiple files
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* END: Uplaod Product */}
            {/* BEGIN: Product Information */}
            <div className="intro-y box p-5 mt-5">
              <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="chevron-down"
                    className="lucide lucide-chevron-down w-4 h-4 mr-2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  Thông tin bài học
                </div>
                <div className="mt-5">
                  <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div className="form-label xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Tên bài học</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Bắt buộc
                          </div>
                        </div>
                        <div className="leading-relaxed text-slate-500 text-xs mt-3">

                          Đặt tên bài học sao cho dễ nhớ thuận tiện cho việc tìm kiếm bài học.
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-3 xl:mt-0 flex-1">
                      <input
                        id="product-name"
                        type="text"
                        className="form-control"
                        placeholder="Product name"
                      />
                      <div className="form-help text-right">
                        Kí tự tối đa là 0/70
                      </div>
                    </div>
                  </div>
                  <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div className="form-label xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Loại môn học</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Bắt buộc
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-3 xl:mt-0 flex-1">
                      <select id="category" className="form-select">
                        <option value="Hobby">Kinh Tế Chính Trị Mác - Lenin</option>
                        <option value="Kids & Baby"> Tư Tưởng Hồ Chí Minh</option>
                        <option value="Kids & Baby"> Nhập môn Công Nghệ Thông Tin</option>
                        <option value="Photography">Chủ nghĩa xã hội khoa học</option>
                        <option value="Hobby">Triết học Mác - Lênin</option>
                        <option value="PC & Laptop">Toán cao cấp</option>
                        <option value="Home Appliance">Lịch sử Đảng</option>
                        <option value="Photography">Luật hành chính</option>
                        <option value="Electronic">Luật dân sự</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div className="form-label xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Thể loại môn học</div>
                        </div>
                        <div className="leading-relaxed text-slate-500 text-xs mt-3">

                          Bạn có thể thêm một thể loại môn học mới hoặc chọn từ
                          danh sách các thể loại hiện có. Nhằm sắp xếp bài học gọn gàng và dễ tìm hơn.
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-3 xl:mt-0 flex-1">
                      <select
                        id="subcategory"
                        data-placeholder="Etalase"
                        className="tom-select w-full tomselected"
                        multiple="multiple"
                        tabIndex={-1}
                        hidden="hidden"
                      >
                        <option value="Hobby" selected="true">
                          ChinhTri
                        </option>
                        <option value="Kids & Baby" selected="true">
                          ChuyenNganh
                        </option>
                      </select>
                      <div
                        className="ts-control tom-select w-full multi plugin-dropdown_input plugin-remove_button"
                        tabIndex={0}
                      >
                        <div className="items ts-input not-full has-items">
                          <div data-value="Hobby" className="item">
                            LichSu
                            <a
                              href="javascript:void(0)"
                              className="remove"
                              tabIndex={-1}
                              title="Remove this item"
                            >
                              ×
                            </a>
                          </div>
                          <div data-value="Kids & Baby" className="item">
                            ToanCaoCap
                            <a
                              href="javascript:void(0)"
                              className="remove"
                              tabIndex={-1}
                              title="Remove this item"
                            >
                              ×
                            </a>
                          </div>
                        </div>
                        <div
                          className="ts-dropdown multi tom-select w-full plugin-dropdown_input plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="dropdown-input-wrap">
                            <input
                              type="select-multiple"
                              autoComplete="off"
                              className="dropdown-input"
                              placeholder="Etalase"
                              role="combobox"
                              aria-expanded="false"
                              aria-controls="subcategory-ts-dropdown"
                              id="subcategory-tomselected"
                            />
                          </div>
                          <div
                            role="listbox"
                            id="subcategory-ts-dropdown"
                            tabIndex={-1}
                            className="ts-dropdown-content"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
                <button type="button" className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">Hủy</button>
                <button type="button" className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">Lưu &amp; Thêm bài học mới</button>
                <button type="button" className="btn py-3 btn-primary w-full md:w-52" onClick={handleSubmit}>Lưu bài học</button>
              </div>
            </div>

          </div>
          <div className="intro-y col-span-2 hidden 2xl:block">
            <div className="pt-10 sticky top-0">
              <ul className="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
                <li className="mb-4 border-l-2 pl-5 border-primary dark:border-primary text-primary font-medium">

                  <a href="">Tải bài học lên</a>
                </li>
                <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">

                  <a href="">Thông tin bài học</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
