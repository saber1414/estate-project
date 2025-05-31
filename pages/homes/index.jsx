import React, { useEffect, useState } from "react";
import data from "../../data/db.json";
import Home from "@/components/modules/Home";
import Link from "next/link";

const Index = () => {
  const [homes, setHomes] = useState([]);
  const [shownHomes, setShownHomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [homesPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setHomes(data.homes);
    setShownHomes(data.homes);
  }, [homes]);

  // pagination
  const pageNumbers = [];
  const indexOfLastPage = currentPage * homesPerPage;
  const indexOfFirstPage = indexOfLastPage - homesPerPage;
  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(shownHomes.length / homesPerPage); i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const totalPage = pageNumbers.length;
    const maxVisiblePage = 5;
    const halfPage = Math.floor(maxVisiblePage / 2);

    let startPage = Math.max(currentPage - halfPage, 1);
    let endPage = Math.min(startPage + maxVisiblePage - 1, totalPage);

    if (endPage - startPage + 1 < maxVisiblePage) {
      startPage = Math.max(endPage - maxVisiblePage + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  // sorted homes
  const sortHomes = (state) => {
    if (!homes) return;

    let sortedHomes = [...homes];

    switch (state) {
      case "expensive": {
        sortedHomes.sort((a, b) => b.price - a.price);
        break;
      }
      case "cheep": {
        sortedHomes.sort((a, b) => a.price - b.price);
        break;
      }
      case "old": {
        sortedHomes.reverse();
      }
      default:
        break;
    }
    setShownHomes(sortedHomes);
  };

  // search homes
  const searchHandler = (e) => {
    const tram = e.target.value.toLowerCase();
    setSearch(tram);

    let filteredHomes = [...homes];

    if (tram) {
      filteredHomes = filteredHomes.filter((home) => home.title.includes(tram));
    }

    setShownHomes(filteredHomes);
  };

  return (
    <>
      <div className="home-section" id="houses">
        <div className="home-filter-search">
          <div className="home-filter">
            <select onChange={(e) => sortHomes(e.target.value)}>
              <option value="" selected>
                انتخاب کنید
              </option>
              <option value="new">بر اساس اولین</option>
              <option value="old">بر اساس آخرین</option>
              <option value="cheep">بر اساس ارزان ترین</option>
              <option value="expensive">بر اساس گران ترین</option>
            </select>
          </div>
          <div className="home-search">
            <input
              type="text"
              value={search}
              onChange={searchHandler}
              placeholder="جستجو کنید"
            />
          </div>
        </div>

        <div className="homes">
          {shownHomes.slice(indexOfFirstPage, indexOfLastPage).map((home) => (
            <Home key={home} {...home} />
          ))}
          {
            shownHomes.length === 0 && (
              <p style={{ textAlign: "center" }}>هیج خانه ای یافت نشد</p>
            )
          }
        </div>

        <ul className="pagination__list">
          {getVisiblePageNumbers().map((number, index) => (
            <li
              key={index}
              className={`pagination__item ${
                currentPage === number ? "active" : ""
              }`}
            >
              <Link onClick={() => paginated(number)} href="#" className="">
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
