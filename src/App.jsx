import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";

function App() {
    const [slide, setSlide] = useState(0);

    function onClickShowNext() {
        setSlide(slide + 1);
        if (slide === 3) {
            setSlide(0);
        }
    }

    function onClickShowPrev() {
        setSlide(slide - 1);

        if (slide === 0) {
            setSlide(3);
        }
    }

    function displayPageShows() {
        switch (slide) {
            case 0:
                return <PageOne />;
            case 1:
                return <PageTwo />;
            case 2:
                return <PageThree />;
            case 3:
                return <PageFour />;
            // case 4:
            //     return <PageFive />;
            default:
                break;
        }
    }

    return (
        <section className="all-section">
            <div className="all-wrapper">
                <AiOutlineArrowLeft
                    className="arrow-left"
                    onClick={() => onClickShowPrev()}
                />
                {displayPageShows()}
                <AiOutlineArrowRight
                    className="arrow-right"
                    onClick={() => onClickShowNext()}
                />
            </div>
            <span className="currentPage">{slide + 1} / 4</span>
        </section>
    );
}

export default App;
