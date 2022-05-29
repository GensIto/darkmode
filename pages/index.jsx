import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined && darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">HI</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={darkTheme}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>Dark Mode🚀 </h1>
            <h3>NEXT.JS</h3>
            <p>COFFEE☕</p>
            <button className="primary-btn">CONTACT</button>
          </div>
        </section>
      </div>
    </div>
  );
}
