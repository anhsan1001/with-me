import { useNavigate } from "react-router-dom";
import signGoogle, {
  auth,
  signWithPhonenumber,
  verifyOTP,
} from "../../../firebase/config";
import { useEffect, useState } from "react";

const Login = () => {
  const [valueOtp, setValueOtp] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // return navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex flex-col">
      <h3>Đăng nhập</h3>
      <button className="" onClick={signGoogle}>
        Đăng nhập bằng google
      </button>

      <button
        id="sign-in-button"
        className=""
        onClick={() => signWithPhonenumber("+84336831045")}>
        Đăng nhập bằng điện thoại
      </button>
      <label htmlFor="otp"></label>
      <input
        type="text"
        name="otp"
        value={valueOtp}
        onChange={(e) => setValueOtp(e.target.value)}
      />
      <button type="submit" onClick={() => verifyOTP(valueOtp)}>
        submit
      </button>
    </div>
  );
};

export default Login;
