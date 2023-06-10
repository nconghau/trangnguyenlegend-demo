import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <div className="mobile-menu md:hidden">
        <div className="scrollable" data-simplebar="init">
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: 0, bottom: 0 }}
              >
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    <ul className="scrollable__content py-2">
                      <li>
                        <a href="#" className="menu menu--active">
                          <div className="menu__icon">

                            <img
                              src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
                              alt=""
                              className="w-6"
                            />
                          </div>
                          <div className="menu__title"> Dashboard </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu">
                          <div className="menu__icon">

                            <img
                              src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
                              alt=""
                              className="w-6"
                            />
                          </div>
                          <div className="menu__title"> E-Commerce </div>
                        </a>
                      </li>
                      <li>
                        <a href="side-menu-light-inbox.html" className="menu">
                          <div className="menu__icon">
                            <img
                              src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
                              alt=""
                              className="w-6"
                            />
                          </div>
                          <div className="menu__title"> Inbox </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="side-menu-light-file-manager.html"
                          className="menu"
                        >
                          <div className="menu__icon">

                            <img
                              src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
                              alt=""
                              className="w-6"
                            />
                          </div>
                          <div className="menu__title"> File Manager </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="side-menu-light-point-of-sale.html"
                          className="menu"
                        >
                          <div className="menu__icon">

                            <img
                              src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
                              alt=""
                              className="w-6"
                            />
                          </div>
                          <div className="menu__title"> Point of Sale </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 266 }}
            />
          </div>
        </div>
      </div>
      <nav className="side-nav">
        <a href="" className="intro-x flex items-center pl-5 pt-4">
          <img
            className="w-6"
            src="https://res.cloudinary.com/dcnzwz9sp/image/upload/v1685376876/logo_mo6gxg.png"
          />
          <span className="hidden xl:block text-white text-lg ml-3"> Hi! </span>
        </a>
        <div className="side-nav__devider my-6" />
        <ul>
          <li>
            <a href="#.html" className="side-menu side-menu--active">
              <div className="side-menu__icon">
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
                  data-lucide="home"
                  className="lucide lucide-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <Link to="/" className="side-menu__title">Trang chủ</Link>
            </a>
            <ul className="side-menu__sub-open" />
          </li>
          <li>
            <a
              href="#"
              className="side-menu side-menu--open"
            >
              <div className="side-menu__icon">
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
                  className="lucide lucide-file"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <Link to="/product-list" className="side-menu__title">Tài liệu của tôi</Link>
            </a>
          </li>
          {/* <li>
      <a href="#" className="side-menu side-menu--open">
        <div className="side-menu__icon">
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
            className="lucide lucide-folder-clock"
          >
            <path d="M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2" />
            <circle cx={16} cy={16} r={6} />
            <path d="M16 14v2l1 1" />
          </svg>
        </div>
        <div className="side-menu__title">Lịch sử bài tập</div>
      </a>
    </li> */}
          <li>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
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
                  className="lucide lucide-help-circle"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <Link to="/chat" className="side-menu__title">Hỏi đáp</Link>
            </a>
          </li>
          <li>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
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
                  className="lucide lucide-folder-open"
                >
                  <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <Link to="/manager" className="side-menu__title">File Manager</Link>
            </a>
          </li>
          {/* <li>
      <a href="#" className="side-menu">
        <div className="side-menu__icon">
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
            data-lucide="message-square"
            className="lucide lucide-message-square"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <div className="side-menu__title">Hỗ trợ</div>
      </a>
    </li> */}
          <li />
        </ul>
      </nav>

    </div>
  );
}
