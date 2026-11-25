"use client";

import { useState } from "react";

const menuItems = [
  {
    title: "Tổng quan",
    icon: "⌂",
    children: ["Dashboard", "Lịch trình", "Việc cần làm"],
  },
  {
    title: "Cá nhân",
    icon: "◉",
    children: ["Thông tin cá nhân", "Thói quen", "Sức khỏe", "Mục tiêu"],
  },
  {
    title: "Học tập",
    icon: "▤",
    children: ["Kiến thức", "Ghi chú", "Khóa học", "Sơ đồ tư duy"],
  },
  {
    title: "Gia đình",
    icon: "⌂",
    children: ["Thành viên", "Công việc gia đình", "Tài liệu"],
  },
  {
    title: "Bạn bè",
    icon: "♧",
    children: ["Danh bạ", "Mối quan hệ", "Sự kiện"],
  },
  {
    title: "Tài chính",
    icon: "◇",
    children: ["Thu chi", "Tài sản", "Ngân sách", "Báo cáo"],
  },
  {
    title: "Công việc",
    icon: "▣",
    children: ["Dự án", "Nhiệm vụ", "Kế hoạch", "Ghi chú công việc"],
  },
];

export default function Home() {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("Tổng quan");
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const sidebarExpanded = pinned || hovered;

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
                    setActivePage(item.children[0]);
                  }}
                  title={!sidebarExpanded ? item.title : undefined}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    expandedMenu === item.title
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
                        onClick={() => setActivePage(child)}
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
            onClick={() => setNotice("Chức năng tạo không gian sẽ được phát triển tiếp.")}
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
            onClick={() => setNotice("Cài đặt sẽ được phát triển ở bước tiếp theo.")}
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
          <div className="mb-9">
            <p className="mb-2 text-sm text-gray-400">Thứ tư · Không gian cá nhân</p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#202b46]">
              Chào mừng đến với LifeOS
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Một nơi để quản lý, kết nối và phát triển cuộc sống của bạn.
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Cá nhân", desc: "Quản lý bản thân và thói quen", icon: "◉" },
              { title: "Học tập", desc: "Lưu trữ và phát triển kiến thức", icon: "▤" },
              { title: "Gia đình", desc: "Kết nối và quản lý gia đình", icon: "⌂" },
              { title: "Bạn bè", desc: "Quản lý các mối quan hệ", icon: "♧" },
              { title: "Tài chính", desc: "Theo dõi thu chi và tài sản", icon: "◇" },
              { title: "Công việc", desc: "Tổ chức kế hoạch và dự án", icon: "▣" },
            ].map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  setExpandedMenu(item.title);
                  setActivePage(item.title);
                }}
                className="group rounded-2xl border border-[#e9ebef] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f3f9] text-xl text-[#34496f]">
                  {item.icon}
                </div>
                <h2 className="font-semibold text-[#202b46]">{item.title}</h2>
                <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
                <p className="mt-4 text-xs font-medium text-[#526789] group-hover:text-[#202b46]">
                  Mở không gian →
                </p>
              </button>
            ))}
          </div>

          <section className="rounded-2xl border border-[#e9ebef] bg-white p-6">
            <h2 className="font-semibold text-[#202b46]">Bắt đầu với LifeOS</h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Đây là không gian tổng quan. Bạn có thể mở thanh bên để truy cập
              các danh mục, hoặc tạo thêm những không gian phù hợp với cách
              quản lý của mình.
            </p>
          </section>

          {notice && (
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#eef2f9] px-4 py-3 text-sm text-[#263b67]">
              {notice}
              <button onClick={() => setNotice("")} className="ml-4 font-semibold">
                Đóng
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
