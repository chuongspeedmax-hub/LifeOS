"use client";

import { useState } from "react";

const menuItems = [
  {
    title: "Tổng quan",
    icon: "⌂",
    description: "Theo dõi lịch trình và các hoạt động tổng thể.",
    children: ["Dashboard", "Lịch trình", "Việc cần làm"],
  },
  {
    title: "Cá nhân",
    icon: "◉",
    description: "Quản lý bản thân, thói quen, sức khỏe và mục tiêu.",
    children: ["Thông tin cá nhân", "Thói quen", "Sức khỏe", "Mục tiêu"],
  },
  {
    title: "Học tập",
    icon: "▤",
    description: "Lưu trữ kiến thức và phát triển năng lực.",
    children: ["Kiến thức", "Ghi chú", "Khóa học", "Sơ đồ tư duy"],
  },
  {
    title: "Gia đình",
    icon: "⌂",
    description: "Tổ chức thông tin và hoạt động gia đình.",
    children: ["Thành viên", "Công việc gia đình", "Tài liệu"],
  },
  {
    title: "Bạn bè",
    icon: "♧",
    description: "Quản lý danh bạ và các mối quan hệ.",
    children: ["Danh bạ", "Mối quan hệ", "Sự kiện"],
  },
  {
    title: "Tài chính",
    icon: "◇",
    description: "Theo dõi thu chi, tài sản và ngân sách.",
    children: ["Thu chi", "Tài sản", "Ngân sách", "Báo cáo"],
  },
  {
    title: "Công việc",
    icon: "▣",
    description: "Quản lý dự án, nhiệm vụ và kế hoạch.",
    children: ["Dự án", "Nhiệm vụ", "Kế hoạch", "Ghi chú công việc"],
  },
];

const childDescriptions: Record<string, string> = {
  "Lịch trình": "Quản lý thời gian và các hoạt động của bạn.",
  "Việc cần làm": "Theo dõi những công việc cần hoàn thành.",
  "Thông tin cá nhân": "Lưu trữ thông tin và hồ sơ cá nhân.",
  "Thói quen": "Xây dựng và theo dõi những thói quen tốt.",
  "Sức khỏe": "Theo dõi thông tin và kế hoạch chăm sóc sức khỏe.",
  "Mục tiêu": "Thiết lập và theo dõi mục tiêu cá nhân.",
  "Kiến thức": "Tổ chức và liên kết hệ thống kiến thức.",
  "Ghi chú": "Lưu trữ ý tưởng và ghi chú.",
  "Khóa học": "Quản lý các khóa học và tiến độ học tập.",
  "Sơ đồ tư duy": "Tổ chức ý tưởng dưới dạng sơ đồ tư duy.",
  "Thành viên": "Quản lý thông tin thành viên gia đình.",
  "Công việc gia đình": "Theo dõi các công việc chung.",
  "Tài liệu": "Lưu trữ tài liệu gia đình.",
  "Danh bạ": "Lưu trữ thông tin liên hệ.",
  "Mối quan hệ": "Theo dõi và tổ chức các mối quan hệ.",
  "Sự kiện": "Quản lý những sự kiện và dịp quan trọng.",
  "Thu chi": "Theo dõi các khoản thu nhập và chi tiêu.",
  "Tài sản": "Quản lý thông tin tài sản.",
  "Ngân sách": "Lập kế hoạch và theo dõi ngân sách.",
  "Báo cáo": "Tổng hợp và phân tích tình hình tài chính.",
  "Dự án": "Tổ chức và theo dõi các dự án.",
  "Nhiệm vụ": "Quản lý công việc và trạng thái thực hiện.",
  "Kế hoạch": "Xây dựng và theo dõi kế hoạch.",
  "Ghi chú công việc": "Lưu trữ thông tin phục vụ công việc.",
};

export default function Home() {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("Tổng quan");
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const sidebarExpanded = pinned || hovered;

  const selectedModule = menuItems.find(
    (item) =>
      item.title === activePage || item.children.includes(activePage)
  );

  const isDashboard = activePage === "Dashboard";

  const isModuleOverview =
    selectedModule !== undefined &&
    selectedModule.title === activePage &&
    activePage !== "Tổng quan";

  const dashboardModules = menuItems.filter(
    (item) => item.title !== "Tổng quan"
  );

  const openModule = (moduleTitle: string) => {
    setExpandedMenu(moduleTitle);
    setActivePage(moduleTitle);
    setNotice("");
  };

  const openChild = (moduleTitle: string, child: string) => {
    setExpandedMenu(moduleTitle);
    setActivePage(child);
    setNotice("");
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#20232b]">
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-[#e9ebef] bg-white transition-all duration-300 ${
          sidebarExpanded ? "w-[250px]" : "w-[76px]"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-[#f0f1f3] px-5">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#202b46] text-lg font-bold text-white">
              L
            </div>

            {sidebarExpanded && (
              <span className="whitespace-nowrap text-lg font-bold tracking-tight">
                LifeOS
              </span>
            )}
          </div>

          {sidebarExpanded && (
            <button
              onClick={() => setPinned(!pinned)}
              title={pinned ? "Bỏ ghim thanh bên" : "Ghim thanh bên"}
              className={`rounded-lg p-2 transition hover:bg-gray-100 ${
                pinned ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {pinned ? "◆" : "◇"}
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          {sidebarExpanded && (
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              Không gian của bạn
            </p>
          )}

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setHovered(true);
                    }

                    setExpandedMenu(
                      expandedMenu === item.title ? "" : item.title
                    );

                    setActivePage(
                      item.title === "Tổng quan"
                        ? "Dashboard"
                        : item.title
                    );

                    setNotice("");
                  }}
                  title={!sidebarExpanded ? item.title : undefined}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    selectedModule?.title === item.title
                      ? "bg-[#eef2f9] text-[#263b67]"
                      : "text-[#626b7b] hover:bg-gray-50"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-xl">
                    {item.icon}
                  </span>

                  {sidebarExpanded && (
                    <>
                      <span className="flex-1 whitespace-nowrap text-[13px] font-medium">
                        {item.title}
                      </span>

                      <span className="text-xs text-gray-400">
                        {expandedMenu === item.title ? "⌄" : "›"}
                      </span>
                    </>
                  )}
                </button>

                {sidebarExpanded && expandedMenu === item.title && (
                  <div className="mb-2 ml-10 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child}
                        onClick={() => openChild(item.title, child)}
                        className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                          activePage === child
                            ? "bg-[#f0f3f9] font-semibold text-[#263b67]"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {child}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#f0f1f3] p-3">
          <button
            onClick={() =>
              setNotice("Chức năng tạo không gian sẽ được phát triển tiếp.")
            }
            title="Tạo mới"
            className="mb-2 flex w-full items-center gap-3 rounded-xl bg-[#202b46] px-3 py-3 text-white transition hover:bg-[#304267]"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center text-xl">
              +
            </span>

            {sidebarExpanded && (
              <span className="text-[13px] font-medium">Tạo mới</span>
            )}
          </button>

          <button
            onClick={() =>
              setNotice("Cài đặt sẽ được phát triển ở bước tiếp theo.")
            }
            title="Cài đặt"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-gray-500 transition hover:bg-gray-50"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center text-xl">
              ⚙
            </span>

            {sidebarExpanded && (
              <span className="text-[13px] font-medium">Cài đặt</span>
            )}
          </button>
        </div>
      </aside>

      <main
        className={`min-h-screen transition-all duration-300 ${
          sidebarExpanded ? "ml-[250px]" : "ml-[76px]"
        }`}
      >
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#e9ebef] bg-white/90 px-6 backdrop-blur">
          <div>
            <p className="text-xs text-gray-400">Không gian làm việc</p>
            <p className="text-sm font-semibold">{activePage}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-xl border border-gray-200 bg-gray-50 px-3 sm:flex">
              <span className="text-gray-400">⌕</span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-40 bg-transparent px-2 py-2 text-xs outline-none"
              />
            </div>

            <button
              onClick={() => setNotice("Bạn chưa có thông báo mới.")}
              className="rounded-xl p-2 text-gray-500 hover:bg-gray-100"
              title="Thông báo"
            >
              ♧
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8edf6] text-sm font-semibold text-[#263b67]">
              C
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-10">
          {isDashboard && (
            <>
              <div className="mb-9">
                <p className="mb-2 text-sm text-gray-400">
                  Không gian cá nhân
                </p>

                <h1 className="text-3xl font-semibold tracking-tight text-[#202b46]">
                  Chào mừng đến với LifeOS
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Một nơi để quản lý, kết nối và phát triển cuộc sống của bạn.
                </p>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dashboardModules.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => openModule(item.title)}
                    className="group rounded-2xl border border-[#e9ebef] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-md"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f3f9] text-xl text-[#34496f]">
                      {item.icon}
                    </div>

                    <h2 className="font-semibold text-[#202b46]">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.description}
                    </p>

                    <p className="mt-4 text-xs font-medium text-[#526789] group-hover:text-[#202b46]">
                      Mở không gian →
                    </p>
                  </button>
                ))}
              </div>

              <section className="rounded-2xl border border-[#e9ebef] bg-white p-6">
                <h2 className="font-semibold text-[#202b46]">
                  Bắt đầu với LifeOS
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Đây là không gian tổng quan. Bạn có thể mở thanh bên để truy
                  cập các danh mục hoặc mở từng không gian để khám phá các chức
                  năng bên trong.
                </p>
              </section>
            </>
          )}

          {isModuleOverview && selectedModule && (
            <>
              <div className="mb-9">
                <button
                  onClick={() => openChild("Tổng quan", "Dashboard")}
                  className="mb-5 text-xs text-gray-400 transition hover:text-[#263b67]"
                >
                  ← Quay lại Dashboard
                </button>

                <p className="mb-2 text-sm text-gray-400">
                  Không gian / {selectedModule.title}
                </p>

                <h1 className="text-3xl font-semibold tracking-tight text-[#202b46]">
                  Không gian {selectedModule.title.toLowerCase()}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  {selectedModule.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedModule.children.map((child) => (
                  <button
                    key={child}
                    onClick={() => openChild(selectedModule.title, child)}
                    className="group rounded-2xl border border-[#e9ebef] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-md"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f3f9] text-xl text-[#34496f]">
                      {selectedModule.icon}
                    </div>

                    <h2 className="font-semibold text-[#202b46]">
                      {child}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {childDescriptions[child]}
                    </p>

                    <p className="mt-4 text-xs font-medium text-[#526789] group-hover:text-[#202b46]">
                      Mở chức năng →
                    </p>
                  </button>
                ))}
              </div>
            </>
          )}

          {!isDashboard && !isModuleOverview && selectedModule && (
            <>
              <div className="mb-9">
                <button
                  onClick={() => openModule(selectedModule.title)}
                  className="mb-5 text-xs text-gray-400 transition hover:text-[#263b67]"
                >
                  ← Quay lại {selectedModule.title}
                </button>

                <p className="mb-2 text-sm text-gray-400">
                  {selectedModule.title} / {activePage}
                </p>

                <h1 className="text-3xl font-semibold tracking-tight text-[#202b46]">
                  {activePage}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  {childDescriptions[activePage] ||
                    "Quản lý và tổ chức thông tin trong LifeOS."}
                </p>
              </div>

              <section className="rounded-2xl border border-[#e9ebef] bg-white p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f3f9] text-2xl text-[#34496f]">
                  {selectedModule.icon}
                </div>

                <h2 className="font-semibold text-[#202b46]">
                  Không gian đang được chuẩn bị
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Đây là trang riêng của chức năng {activePage}. Các công cụ
                  quản lý và dữ liệu sẽ được triển khai trong những bước tiếp
                  theo của LifeOS.
                </p>

                <p className="mt-5 text-xs text-gray-400">
                  Chưa có dữ liệu được tạo.
                </p>
              </section>
            </>
          )}

          {notice && (
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#eef2f9] px-4 py-3 text-sm text-[#263b67]">
              {notice}

              <button
                onClick={() => setNotice("")}
                className="ml-4 font-semibold"
              >
                Đóng
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
