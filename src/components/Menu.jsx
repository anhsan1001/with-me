import { NavLink } from "react-router-dom";
import { RiPlayListLine } from "react-icons/ri";
const Menu = () => {
  return (
    <>
      <nav className="text-white  sticky left-0 top-0   ">
        <ul className="card-content">
          <li>
            <NavLink to={`/`} className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/`} className="nav-item">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Tìm kiếm
            </NavLink>
          </li>
          <li>
            <NavLink to={`/`} className="nav-item">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
              Thông báo
            </NavLink>
          </li>
          <li>
            <NavLink to={`/messages`} className="nav-item">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Tin nhắn
            </NavLink>
          </li>
        </ul>
        <ul className="card-content">
          <li>
            <NavLink
              to={`/music`}
              className="nav-item flex flex-row items-center">
              {" "}
              <RiPlayListLine />
              Danh sách nhạc
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-between items-center text-white">
        <div id="user" className="flex flex-row gap-3 items-center">
          <div className="avtar">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMD0lEQVR4nO1ZeXCTZRrvzuzMHn+su7M7swv5knC0XM33JWmaND1oSo+06ZE06X03bZM235embUq55HABy6IocguisILLiDoIKgiIgsihMrgcuopyLKJQkWN0UJCmv533DY1NL5pyrOvmN/Ob+fo23/H8nud9nud935CQIIIIIogggggiiCCCCCKIIH7C0M36pZjj4xgZP4NhhWcZGb+VYfmdIpnwMsPyK0UsbxOH148M+blBKq34NRMuTJSy/DmGFSCR8R0Kuf1airr6ukVr7YhV26+NjeBvkP8xrNAhZoVdQ1lncsjPASKOj5Ky/AkxK8CiKPM8p87Ax4mJhy8U6dvbilLhY3Ha6cPuhmuPFTVApRHavWLw60ao7A+E/K9CFO6wiFn+RiRna39Fk4YL2lgcj9Jdf0Kff9Uxvgz50VbkRFtRHFOJloQSrDEVH7s4042vZrgxL78BUo73SFnhuFgpDP3vhC1XJxOxdVoSjoGTbxHLeE+qvNLzsTYen0bFozGiAFLO0UG8qxxfi4zcauSWVSIpswZhKgcJfyg1gmettRFXZrmxnW9EmEJoJxEUGlr/u3tutIit0zKssEjMCh8xLE8/dLCUsDx08mqc1o7HAU0S1AobpHIeza7im4f3pePymRQ/fnVSj80vZiPdJNwk99sMLhoJO/hGSDihg2Edz98zw4eEO2MlMv5AZ4IyKio8D0XkYqnKhDWxxs82Z2W3b8kyoztfqW38dqujCd2Zn+zCCI7H+5pEHI2aALnCDnl0DTavisalU/6Gd+fFg8ZvFyxshZhzosZQj8sz3Xik0EVFFYU7JtwVg4fLXH8ewgoRjMxlFtNSJEDB2W8uUxnxSZSOzlXC81Ex7W0F+pN+yaoLL89sukxCtSuPTWwiHsODEXn0GSnySoQqHVjYmoh9a+I6+jOeRsLxFM97+5fBNWkWNfrxIhfaZrgRqRHaxSz/zqCNHqGyP0Dqr4Tl/9UZplKWx3COxyMqC/6tHe8z3CdAku5QX8b3JQBJXkQA4vl5qhy/aSHmBEx9sLhP4z98Px1JRpvfPVJ5Pb6c7saCogZviRxMnyBi+VwJy18Vs3yHRVHeMUmZhzDWAY6rxS6NvofhPlqS3w5UgOQ4J0yKCnp/hNyGEepmmBpeoozNXUyN2rDO0qsARVYrRqobkGZfT3+fXLmG/v6vuS58PKkJpJQyLN8SqPFNRLl0eYXnHU0yjkUlQMnZoZXX4GhUQt/GExbqzwUiwGdTvB85X2XGGa2OzuPonEUwuV5EWPRkWB/eizBtM1zNpdTgD/ZnYNsWE85+lIpLp1MwIoLH+IJlKJi6DSM1E1E8YweGq5oQEy3Q5+tinO0M59wRiP2/YGT894WKMpzTjqfUK6wYw9bRzNyf8edj4y70Z3xvApAESDy2TZOKJZEmep3p3IjSWbuQZluHomnbIVU4MXtuEQ68lQmp3BvmiVk1VJDIxDrI9XNQPmc39FVrqWCqzPkYpnDS57uNLkg4/uuAIkDCCp+OYevacxTliJNX0xduVKf373ltLNqSE94LVIBlpXSegtT9CmUJvc6b/Cri8pdCnjwbI1QNCI/h8clhA44cyMDIW7XfUlJFBXh6VS79e1R0C5SGeVS0xPLVdOzDliYsKvFWA6m84fcDFuAv4Y6xIpnwD0bGvymR8T8QIW5nPGVG4u5ABWjNJx4ScF4bC6OiEgzrRGiUG8OUPJIyyjFpUgk+OmSg4U7Cf8+OLDzcWogThw04/p6BirBpYzaqrLYbmhQ3NZZMBRpVfCPWWRu9yXSQiXAaSYJ71MkDEqAtO3nPYCPgRJQOZYpSej1G48C25yJxbMc4XDzqTXZvvGakFWHJ4jwcezcdBRWVUCfafcnw64NlVy6dexpPLJ7nqwYfuN1Ycuv5g1ofSFj+JEmEA/I+ESBPfzBQATbavB56S5OChapsel1QnE+NJ2x7P6Wjs+sjLbCva5QLWL0q1yfApYNVVADC0EgXLYWXZroxJdtFkuz3JLcFZPxQtm40edGjKjMGLECB/migApyd5sZwOQ/SRZ7VxiGUcyDBUI6j270CfP5WssfX8Z1Koa3vkyvycGhvhl85vHSo6Rti/OF3l9NEmZdcT59/qxnaFLD3GRlfRQS4Xeb3Y4H+VKACEOYl1UMjt+HzqDisjszy1vHpeirAya0T2m/XCVIBjs698eWpp5BVMBnjIp04OdWN13lvdIk4R3nAAohkwiOkPpMyOGABilK/GIwAu5zeXqBVlUOToVVZQuf7lOZ0HN8Y7bmt8SdSOo4dWobs4imQcgKdVmSJnBDrbJdwwmmySr19yI/jFV2Xpky4c0c4W9tj/n+mjccWdSo2q9N6cGOG5VpvC6Cu3Gxv+K7rImhPfSOdqzZDPV0MvaZOxTltHBwRhdR76vHVmD27CM8/Z8bWl7P9+NomE9Y8kwN7jbU9LNKJ0SonNlR7l8Ut2bcWQzJHxm2Nl3DO4b0tT+O4mh5erlMWDXq52xeJEGemupEY68QozoHOjZBNagPyleWQ3Ob+sSqeNjyk9SWen2b2Zn6GFeYNMNwdHLmh8q+tmLVhMWVc3hQkKHsKUK4sxbi4RtS0/u2OWTBpDv3QF2oafG2xLsZJ+4JGZSFtjsg7P8jKxL4cE14xZvtF0+umbOyuLMRXM71T6W1XE1LG19/yPL9lQMZ3FWDKMwux/vhayrTq6X0KoDZM9P3uTvjo1uV+AhCen+4Gn1lPc8IwjkexsgyPqbKxsrACW4wWPwFeysvHKpsLc/IaoIvzGj4mxut9srUWEqgA7pXzr645urKNMKli6vW+BFClurHh4BI/rtq/DMsPLL/Zef9A2Lr5iUvdBSB8t9GbvVPLp4CN987l/kgSZoy55Ye6BQ9/89Dzj18etADGx3Nhe8NAqSqphE5Z3asA4Sk23+/uhIXPehc/fQnQ+T3WVzNQtN4E8woLzMtzfLQst8C8LAfZi3ORNjcfCc0liCiy4qcpwE7D9zU7067U7DS01exMO2vbaTiVt9p0sl8BXAWom2tCSUsOzI4CJJSUYmxGNUJ1tu8kKsf1ntHAtzNy/kuJsv7toeEOccAC6OfknajYathfvs2wlzVXXdQpqjt6E2B0vB3NT6bCvSIVzhV6SuOiDCQtzbye9nf96ZQ1qWeTn0m5mPy0/sqE1SnXJzylR3cmPJkKzYPe1rcvAbpzmJwHw1FDj3hPhYSHRKxgJ2VbwjpGkFOkARvdmwDqyWbfB44xV0Kn6D0CwhJqehjUnbqlaYh5OAvqaWZENOSBrSzGWEs5wvRVHmlM7Q9dDeszAqKqsD49B7uzjfg034B3zFmBh/c9EUBnQ9yCDETNzIaqOQeKugKEF5ViVLoVw+Nt7WJFnae790Qcf4PhhDPkXO9H7zlm9yfAtIRivy7yvgmgW5qGUelVvQpQoiilG6O9haeY5b9jWH4jOScQscJkEevMk7AOlYR1/KG/93YXYH+jd5doxgR/AfaYjd6szwrGeyKANLLOw8i9pzCE8fKeAiTJqzCcc3SsNeRiu8mEI7mZ+KIoDUnqag85uR3Me7sLsMnujYD5yQV+AryQaemMpqi7KgCjbfoNI+NfFLHCetI+MqyDZ1hhX7y8ur2r8f/UTCBeBqus9XT9MCIC2TghGyh3Q4CGLBeknBPrDDl+Ajjjy0hbfC00tP5XIfcaDCu8FM/5C0BXaTKHJ0Zl9zultcZVEAGui9h65k4FONjYRA44aRRuSLf43rHXbCRnhB4RKywJuR9gughAlsTuiHxv+LHCsfhIGxXgi8I0NOu8G5kB7733IsBeVyPkkeRgU2jrKsCbJiM4RS058Dw3RGX/072xuBtELL+D42o9rSoL2RKnHiF7BHRcWeuZl1yI0YofxwPecqJH4bVycn+j0YVyvbflFXPOCyLOYSHXLl05ymK822BiTrgglvPhIfcLIpY/7c24JBz5r0WscLLnuNM3PhgMkQkpvj0+lr96q8SV+43LfhwPuZ9gWGELwwonho4R/kimA8MKR/obHww6pwAjE+qHynlFZ43vazzkfoLhhEKxTHDTD+WEHPIx3ce7Xg8GQ1T235LKQ5LnQK7vonlBBBFEEEEEEUQQQQQRRBAh/5f4D4w7If1Nr6EEAAAAAElFTkSuQmCC" />
          </div>
          <div className="name">
            <div>Anh San</div>
            <div className="tag-name">anhsan@</div>
          </div>
        </div>
        <button className="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Menu;
