import "./App.css";
import Select from "react-select";
import { lineOptions, yearOptions, monthOptions } from "./js/setOption";

function App() {
    return (
        <div className="App">
            <h1>Transit Trend</h1>
            <p>서울시 지하철 호선별 승하차 통계 시각화</p>
            <div className="container">
                <label htmlFor="line">호선</label>
                <Select
                    id="line"
                    className="select-box"
                    defaultValue={lineOptions[0]}
                    onChange={() => console.log("asdf")}
                    options={lineOptions}
                />
                <label htmlFor="year">년도</label>
                <Select
                    id="year"
                    className="select-box"
                    defaultValue={yearOptions[0]}
                    onChange={() => console.log("qwer")}
                    options={yearOptions}
                />
                <label htmlFor="month">월</label>
                <Select
                    id="month"
                    className="select-box"
                    defaultValue={monthOptions[0]}
                    onChange={() => console.log("zxcv")}
                    options={monthOptions}
                />
            </div>
        </div>
    );
}

export default App;
