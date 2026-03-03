import { Link, Outlet } from 'react-router';

function FrontendLayout() {
  return (
    <>
      <header>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              找寶物
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              我要分享
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              愛心轉送
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/articles">
              爸媽交流站
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              育兒資源
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              購物車
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              登入
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-5 text-center">
        <p>版權所有 © 2025 B.B. Station</p>
      </footer>
    </>
  );
}

export default FrontendLayout;
