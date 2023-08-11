import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetData } from "../redux/authSlice";
function Protected(props) {
  let Protecting = props.Protecting;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userData = sessionStorage.getItem("auth") || "";
  useEffect(() => {
    if (userData === null || userData === undefined || userData === "") {
      navigate("/login");
      dispatch(resetData());
    }
  }, []);
  return (
    <div>
      <Protecting />
    </div>
  );
}
export default Protected;
