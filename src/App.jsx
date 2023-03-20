import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PageOne from "./components/PageOne";

function App() {
    const [slide, setSlide] = useState(0);

    function onClickShowNext() {
        setSlide(slide + 1);
        console.log(slide, "slide");
    }

    function onClickShowPrev() {
        setSlide(slide - 1);
        console.log(slide, "slide2");
    }

    function displayPageShows() {
        switch (slide) {
            case 0:
                return <PageOne />;
            default:
                break;
        }
    }

    return (
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
    );
}

export default App;
