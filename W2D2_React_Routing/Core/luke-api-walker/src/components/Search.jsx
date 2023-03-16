import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    //const [api, setApi] = useState({});
    const [infoId, setInfoId] = useState(0);
    const [category, setCategory] = useState("people");
    const navigate = useNavigate();

    /*     const handleSubmit = (e) => {
        e.preventDefault();
        props.category(category);
        props.id(infoId);
    }; */
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/" + category + "/" + infoId);
    };

    /*     useEffect(() => {
        axios.get("https://swapi.dev/api/").then((response) => {
            setApi(response.data);
            console.log(response);
        });
        console.log(api);
        // Object.keys(api) generate an array with keys
        console.log(Object.keys(api));
    }, []); */
    return (
        <div className="search">
            <form
                onSubmit={handleSubmit}
                className="d-flex justify-content-center align-items-end p-3 gap-3 flex-wrap"
            >
                <div>
                    <label htmlFor="select" className="form-label">
                        Search for
                    </label>
                    <select
                        id="select"
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-select"
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>

                        {/*                     {Object.keys(api)
                        .filter((v) => v === "people" || v === "planets")
                        .map((key, i) => (
                            <option key={i} value={key}>
                                {key}
                            </option>
                        ))} */}
                    </select>
                </div>
                <div>
                    <label htmlFor="id" className="form-label">
                        ID
                    </label>
                    <input
                        id="id"
                        type="number"
                        onChange={(e) => setInfoId(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
