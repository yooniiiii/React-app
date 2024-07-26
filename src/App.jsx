import { House } from "@phosphor-icons/react/dist/ssr";
import "./App.css";
import { BookBookmark, UserCircle, Users } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <header>
        <div className="logo">logo</div>
        <div className="profile">profile</div>
      </header>
      <main>
        <section className="sec sec01">
          <p className="title fs32">@ 출석체크하고 POINT 쌓자~!</p>
          <div className="stamp">
            <div className="week">
              <p>1주 차</p>
              <button className="stamp-button">출석체크 하기</button>
            </div>
            <ul className="stamp-wrap">
              <li className="stamp-circle-on">
                <img src="../src/assets/stamp-on.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
              <li className="stamp-circle">
                <img src="../src/assets/stamp-off.png" alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section className="sec sec02">
          <p className="title fs32">@ HOT한 레시피 TOP5</p>
          <ul className="hot-list">
            <li>
              <a href="#">
                <img src="../src/assets/list00.png" />
                <p className="list-tit">
                  집에서 간단하고 빠르게 만드는 수제버거
                </p>
                <p className="list-own">
                  <span>작성자</span> yoon cook
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../src/assets/list01.png" />
                <p className="list-tit">김밥이 질린다면 캘리포니아 롤!</p>
                <p className="list-own">
                  <span>작성자</span> yoon cook
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../src/assets/list02.png" />
                <p className="list-tit">
                  에어프라이기로 가능한 오지치즈후라이 레시피
                </p>
                <p className="list-own">
                  <span>작성자</span> yoon cook
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../src/assets/list03.png" />
                <p className="list-tit">
                  10분만에 만들 수 있는 딸기 요거트 레시피
                </p>
                <p className="list-own">
                  <span>작성자</span> yoon cook
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../src/assets/list04.png" />
                <p className="list-tit">간단한 술 안주 바지락 술찜 만들기</p>
                <p className="list-own">
                  <span>작성자</span> yoon cook
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section className="sec sec03">
          <p className="title fs32">@ 주목받는 COMMUNITY</p>
          <ul className="com-list">
            <li>
              <a href="#">
                <p className="com-tit">
                  집에서 간단하고 빠르게 만드는 수제버거
                </p>
                <p className="com-view">
                  <span>조회수</span> 12,324
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className="com-tit">김밥이 질린다면 캘리포니아 롤!</p>
                <p className="com-view">
                  <span>조회수</span> 9,234
                </p>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <House />
            <p>HOME</p>
          </li>
          <li>
            <BookBookmark />
            <p>RECIPE</p>
          </li>
          <li>
            <Users />
            <p>COMMUNITY</p>
          </li>
          <li>
            <UserCircle />
            <p>MY PAGE</p>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
