import { useState } from "react";

function PageFour() {
    const [grid, setGrid] = useState(3);
    const [box, setBoxes] = useState(3);

    function displayDivs() {
        let o = [];
        for (let i = 0; i < box; i++) {
            o.push(i);
        }
        return o;
    }

    return (
        <main className="main-four">
            <section className="section-four">
                <header className="header-four">
                    <nav>nav</nav>
                </header>
                <div className="header-div-four">
                    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                        그리드 수
                        <input
                            type="text"
                            value={grid}
                            onChange={(e) => setGrid(e.target.value)}
                        />
                    </div>
                    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                        상자 수
                        <input
                            type="text"
                            value={box}
                            onChange={(e) => setBoxes(e.target.value)}
                        />
                    </div>
                </div>

                <article
                    className="article-four"
                    style={{ gridTemplateColumns: `repeat(${grid},1fr)` }}
                >
                    {displayDivs().map((_) => (
                        <div className="div-four">section</div>
                    ))}

                    {/* <div className="div-four">section</div>
                    <div className="div-four">section</div>
                    <div className="div-four">section</div>
                    <div className="div-four">section</div>
                    <div className="div-four">section</div> */}
                </article>
            </section>
            <footer className="footer-four">footer 입니다.</footer>
        </main>
    );
}

export default PageFour;
