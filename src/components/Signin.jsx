import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../Style/Signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({email: "", password: "",});
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("jwt")) {
      navigate("/sidebar", { replace: true });
    }
  }, []);
  const callOnSubmit = async () => {
    console.log("formdata", {
      email: formData.email,
      password: formData.password,
    });

    const api = await fetch(
      "https://gatisheel.azurewebsites.net/admin/auth/login",
      {
        method: "post",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
        }),
      }
    );
    console.log("response data before json filter", api);
    if (api.status === 200) {
      const response = await api.json();
      cookies.set("jwt", response.data.jwt);

      navigate("/dashboard");
    }
  };

  const { register, handleSubmit } = useForm();
  return (
    <div className="check">
      <svg
        className="absolute bottom-[30vh] -left-[32vw]"
        width="2050"
        height="570"
        viewBox="0 0 1728 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-535 284.967L-498.712 332.461C-460.846 381.086 -388.27 476.075 -314.116 452.328C-239.961 428.581 -165.807 284.967 -93.2311 297.406C-19.077 308.714 55.077 476.075 129.231 511.13C201.807 547.317 275.961 452.328 350.116 463.636C424.27 476.075 496.846 594.811 571 582.372C645.154 571.064 717.73 428.581 791.884 381.086C866.038 332.461 940.193 381.086 1012.77 452.328C1086.92 523.57 1161.08 618.558 1235.23 653.614C1307.81 689.8 1381.96 666.053 1456.12 582.372C1530.27 499.822 1602.85 356.208 1677 321.153C1751.15 284.967 1823.73 356.208 1897.88 404.833C1972.04 452.328 2046.19 476.075 2118.77 416.142C2192.92 356.208 2267.08 213.725 2341.23 178.67C2413.81 142.483 2487.96 213.725 2562.12 226.164C2636.27 237.472 2708.85 189.978 2746.71 166.23L2783 142.483V0H2746.71C2708.85 0 2636.27 0 2562.12 0C2487.96 0 2413.81 0 2341.23 0C2267.08 0 2192.92 0 2118.77 0C2046.19 0 1972.04 0 1897.88 0C1823.73 0 1751.15 0 1677 0C1602.85 0 1530.27 0 1456.12 0C1381.96 0 1307.81 0 1235.23 0C1161.08 0 1086.92 0 1012.77 0C940.193 0 866.038 0 791.884 0C717.73 0 645.154 0 571 0C496.846 0 424.27 0 350.116 0C275.961 0 201.807 0 129.231 0C55.077 0 -19.077 0 -93.2311 0C-165.807 0 -239.961 0 -314.116 0C-388.27 0 -460.846 0 -498.712 0H-535V284.967Z"
          fill="url(#paint0_linear_2026_6067)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2026_6067"
            x1="-535"
            y1="411.477"
            x2="5317.84"
            y2="411.478"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#075418" />
            <stop offset="0.485" stop-color="#70BC2D" />
          </linearGradient>
        </defs>
      </svg>

      <div className=" absolute left-16 top-6 flex gap-2">
        <img src="src\assets\Gatisheel Logo.svg" alt="" />
        <div className=" text-center text-zinc-100">
          <h1 className="font-semibold text-2xl">GATISHEEL</h1>
          <h6 className="text-xs font-semibold ">Manage Remotely</h6>
        </div>
      </div>

      <div className="checkkar w-[34vw] h-[60vh] bg-white shadow-2xl rounded-xl text-center p-10 flex flex-col gap-14">
        <h1 className="font-bold text-4xl text-[#075418] ">Sign In</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setFormData({...data});
            console.log(formData);
            callOnSubmit();
          })}
        >
          <div>
            {/* <label htmlFor="username">Username: </label> */}
            <input
              id="username"
              {...register("email")}
              required
              className="border border-zinc-600 w-[100%] h-[7vh] rounded-md"
              placeholder="   Phone Number or Email"
              type="text"
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password: </label> */}
            <input
              id="password"
              {...register("password")}
              required
              className="border border-zinc-600 w-[100%] h-[7vh] rounded-md mt-5"
              placeholder="   Password"
              type="password"
            />
          </div>
          <input
            className=" w-[100%] h-[7vh] rounded-md mt-14 text-bold font-semibold text-white text-sm bgcheck"
            type="submit"
            value="SIGN IN"
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
