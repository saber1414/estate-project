import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <input
          type="checkbox"
          name="toggle"
          id="sidebar-toggle"
          className="sidebar__input"
        />
        <label htmlFor="sidebar-toggle" className="sidebar__label">
          <div className="sidebar__btn"></div>
        </label>

        <div className="sidebar__bg"></div>
        <ul className="list">
          <li className="list__item">
            <a href="index.html" className="list__link">
              صفحه اصلی
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="list__link">
              ویژگی ها
            </a>
          </li>
          <li className="list__item">
            <a href="" className="list__link">
              نظرات
            </a>
          </li>
          <li className="list__item">
            <a href="houses.html" className="list__link">
              خانه ها
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="list__link">
              گالری
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
