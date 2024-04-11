import { useLocation } from "react-router-dom";

function Detail(props) {
    const { state } = useLocation();
    console.log(props);
    console.log(state);
    return (
        <span>Hello</span>
    );
}

export default Detail;