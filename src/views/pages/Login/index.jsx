import signGoogle from "../../../firebase/config";

const Login = () => {
  return (
    <div>
      <h3>Đăng nhập</h3>
      <button className="text-white" onClick={signGoogle}>
        Đăng nhập bằng google
      </button>
    </div>
  );
};

export default Login;
