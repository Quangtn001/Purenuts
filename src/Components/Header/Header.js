import React from "react";

const Header = ({ header }) => {
  return (
    <div
      className={`header bg-red-800 flex items-center justify-between px-10  w-full transition-all`}
    >
      <p className="text-white">Hạt dinh dưỡng nhập khẩu chính ngạch</p>
      <p className="text-white">Liên hệ</p>
    </div>
  );
};

export default Header;
