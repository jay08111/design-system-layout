import { header, footer, sideMenu } from "../../data";
import { useState } from "react";

function PageOne() {
    const [size, setSize] = useState(980);
    const [fontSize, setFontSize] = useState(16);
    const [headerFont, setHeaderFont] = useState(18);
    const [footerHeight, setFooterHeight] = useState(120);
    const [footerPadding, setFooterPadding] = useState(10);
    const [innerHeight, setInnerHeight] = useState(40);
    const [innerPadding, setInnerPadding] = useState(40);
    const [gridWidth, setGridWidth] = useState(200);
    const [asideType, setAsideType] = useState("grid");
    const [toggleAside, setToggleAside] = useState(true);

    return (
        <main className="main-one">
            <header className="header-one">
                <div
                    className="header-one-child"
                    style={{ width: `${size}px` }}
                >
                    <div>
                        {header.map((el) => (
                            <span
                                style={{ fontSize: `${headerFont}px` }}
                                key={el.id}
                            >
                                {el.word}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <section className="section-one">
                <div
                    className="container-one"
                    style={{
                        width: `${size}px`,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        className="inner-menu"
                        style={{
                            height: `${innerHeight}px`,
                            paddingLeft: `${innerPadding}px`,
                            paddingRight: `${innerPadding}px`,
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            M1
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                justifyItems: "flex-start",
                            }}
                        >
                            <div>M2</div>
                            <div>M3</div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: `${gridWidth}px 1fr`,
                            height: "100%",
                        }}
                    >
                        {toggleAside && (
                            <div className="inner-container-side-menu">
                                <ul
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                        padding: "15px",
                                    }}
                                >
                                    {sideMenu.map((el) => (
                                        <li
                                            style={{
                                                listStyle: "none",
                                            }}
                                        >
                                            {el.word}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                marginLeft: "15px",
                                marginTop: "15px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                }}
                            >
                                애플은 가운데 길이 980를 사용하더라구요.
                                <div>
                                    <button
                                        onClick={() =>
                                            setToggleAside(!toggleAside)
                                        }
                                    >
                                        {toggleAside ? "가리기" : "보여줘?"}
                                    </button>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                }}
                            >
                                왼쪽사이드 메뉴 토글
                                <div>
                                    <button
                                        onClick={() =>
                                            setToggleAside(!toggleAside)
                                        }
                                    >
                                        {toggleAside ? "가리기" : "보여줘?"}
                                    </button>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "7px",
                                }}
                            >
                                왼쪽 사이드 메뉴 넓이
                                <div>
                                    <input
                                        type="text"
                                        value={gridWidth}
                                        onChange={(e) =>
                                            setGridWidth(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "7px",
                                }}
                            >
                                이너 메뉴 패딩
                                <div>
                                    <input
                                        type="text"
                                        value={innerPadding}
                                        onChange={(e) =>
                                            setInnerPadding(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "7px",
                                }}
                            >
                                이너 메뉴 높이
                                <div>
                                    <input
                                        type="text"
                                        value={innerHeight}
                                        onChange={(e) =>
                                            setInnerHeight(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                }}
                            >
                                헤더 폰트 사이즈
                                <div>
                                    <input
                                        type="text"
                                        value={headerFont}
                                        onChange={(e) =>
                                            setHeaderFont(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                }}
                            >
                                컨테이너 내부길이
                                <div>
                                    <input
                                        type="text"
                                        value={size}
                                        onChange={(e) =>
                                            setSize(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div style={{ marginBottom: "40px" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    푸터 높이
                                    <div>
                                        <input
                                            type="text"
                                            value={footerHeight}
                                            onChange={(e) =>
                                                setFooterHeight(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                    }}
                                >
                                    푸터 패딩
                                    <div>
                                        <input
                                            type="text"
                                            value={footerPadding}
                                            onChange={(e) =>
                                                setFooterPadding(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                    }}
                                >
                                    푸터 폰트 사이즈
                                    <div>
                                        <input
                                            type="text"
                                            value={fontSize}
                                            onChange={(e) =>
                                                setFontSize(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer
                className="footer-one"
                style={{
                    height: `${footerHeight}px`,
                    padding: `${footerPadding}px`,
                }}
            >
                <div
                    className="footer-one-child"
                    style={{ width: `${size}px` }}
                >
                    <div>
                        {footer.slice(0, 4).map((el) => (
                            <span
                                className="footer-item"
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                {el.word}
                            </span>
                        ))}
                    </div>
                    <div>
                        {footer.slice(4, 8).map((el) => (
                            <span
                                className="footer-item"
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                {el.word}
                            </span>
                        ))}
                    </div>
                    <div>
                        {footer.slice(8, 12).map((el) => (
                            <span
                                className="footer-item"
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                {el.word}
                            </span>
                        ))}
                    </div>
                    <div>
                        {footer.slice(12, 16).map((el) => (
                            <span
                                className="footer-item"
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                {el.word}
                            </span>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default PageOne;
