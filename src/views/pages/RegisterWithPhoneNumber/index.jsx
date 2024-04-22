import { useState } from "react";
import OTPInput from "react-otp-input";
import { signWithPhonenumber, verifyOtp } from "../../../firebase/config";

const RegisterWithPhoneNumber = () => {
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (code) => setOtp(code);
  const [isVerifyOtp, setIsVerifyOtp] = useState(true);

  const handleSubmit = () => {
    signWithPhonenumber(`+84${phoneNumber.slice(1)}`);
    setIsVerifyOtp(false);
  };

  const handleVerifyOtp = () => {
    verifyOtp(otp);
  };
  return (
    <div>
      {isVerifyOtp ? (
        <div className="space-y-6" action="" method="POST">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6 text-gray-900">
              Nhập số điện thoại
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
            id="sign-in-button">
            Gửi mã xác nhận
          </button>
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 gap-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Nhập mã xác nhận
            </h2>
          </div>
          <OTPInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderSeparator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "1px solid ",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none",
            }}
          />
          <div
            className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            onClick={handleSubmit}>
            Gửi lại mã
          </div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleVerifyOtp}>
            Xác nhận
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterWithPhoneNumber;
