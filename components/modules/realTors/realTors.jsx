import React from "react";

const RealTors = () => {
  return (
    <>
      <div className="real-tors">
        <p className="real-tors__tittle">سه مالک برتر</p>
        <div className="real-tors__list">
          <img
            src="/img/realtor-1.jpeg"
            alt="real-tors top 1"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">مهدی ایلخانی نسب</h3>
            <p className="real-tors__text">869 فروش خانه</p>
          </div>

          <img
            src="/img/realtor-2.jpeg"
            alt="real-tors top 2"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">کوثر بهشتی</h3>
            <p className="real-tors__text">243 فروش خانه</p>
          </div>

          <img
            src="/img/realtor-3.jpeg"
            alt="real-tors top 3"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">عرشیا احسنی</h3>
            <p className="real-tors__text">130 فروش خانه</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTors;
