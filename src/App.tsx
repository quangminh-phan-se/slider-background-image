import DeerImage from "./assets/deer.webp";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./styles.css";

function App() {
  const handleNextClick = () => {
    const lists = document.querySelectorAll(".item");
    document.getElementById("slide")?.appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    const lists = document.querySelectorAll(".item");
    document.getElementById("slide")?.prepend(lists[lists.length - 1]);
  };

  return (
    <div className="container">
      <div className="slide" id="slide">
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DeerImage})` }}>
          <div className="content">
            <div className="name">Deer</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ornare imperdiet.
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="prev" onClick={handlePrevClick}>
          <ArrowLeftOutlined />
        </button>
        <button className="next" onClick={handleNextClick}>
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
}

export default App;
