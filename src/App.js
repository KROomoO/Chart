import "./App.css";
import Select from "react-select";

function App() {
    const options = [
        { value: "1호선", label: "1호선" },
        { value: "2호선", label: "2호선" },
    ];

    return (
        <div className="App">
            <h1>Transit Trend</h1>
            <p>서울시 지하철 호선별 승하차 통계 시각화</p>
            <div className="container">
                <label htmlFor="line">호선</label>
                <Select
                    id="line"
                    className="select-box"
                    defaultValue={options[0]}
                    onChange={() => console.log("asdf")}
                    options={options}
                />
            </div>
        </div>
    );
}

export default App;
