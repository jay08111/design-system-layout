import { useState } from "react";

function PageTwo() {
    const [showFooter, setShowFooter] = useState(false);
    const [asideWidth, setAsideWidth] = useState(400);
    return (
        <main
            className="main-one main-aside"
            style={{
                display: "grid",
                gridTemplateColumns: `${asideWidth}px 1fr`,
            }}
        >
            <aside className="aside-two">aside</aside>
            <section>
                <header className="header-two">
                    <nav>nav</nav>
                </header>
                <article className="article-two">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        section
                        <button onClick={() => setShowFooter(!showFooter)}>
                            {showFooter ? "푸터 빼보기(개추)" : "푸터 넣어보기"}
                        </button>
                        <div>
                            <p>aside 길이 {asideWidth}</p>
                            <input
                                type="text"
                                value={asideWidth}
                                onChange={(e) => setAsideWidth(e.target.value)}
                            />
                        </div>
                    </div>
                    {showFooter && (
                        <footer className="footer-two">
                            여기 푸터 안쓰고싶어요
                        </footer>
                    )}
                </article>
            </section>
        </main>
    );
}

export default PageTwo;
