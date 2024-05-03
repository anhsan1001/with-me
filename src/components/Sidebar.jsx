import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { logOut } from "../firebase/services";
import { AppContext } from "../Context/AppContext";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/16/solid";
const Siderbar = () => {
  const { user, friendRequest } = useContext(AppContext);
  const lengthFriendRequest = Object.entries(friendRequest).length;
  return (
    <>
      <Card className="p-4 shadow-xl shadow-blue-gray-900/5 card-content ">
        <div className="mb-2 p-4">
          <NavLink to={`/`}>
            <Typography variant="h5">With Me</Typography>
          </NavLink>
        </div>
        <List className="text-white">
          <NavLink to={`/search`}>
            <ListItem>
              <ListItemPrefix>
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
              </ListItemPrefix>
              Tìm kiếm
            </ListItem>
          </NavLink>

          <NavLink to={"/friend-request-list"}>
            <ListItem className="">
              <ListItemPrefix>
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
              </ListItemPrefix>
              Thông báo
              {lengthFriendRequest > 0 && (
                <ListItemSuffix>
                  <Chip
                    value={lengthFriendRequest}
                    size="sm"
                    variant="gradient"
                    color="red"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          </NavLink>
          <NavLink to={`/messages`}>
            <ListItem>
              <ListItemPrefix>
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
              </ListItemPrefix>
              Tin nhắn
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="gradient"
                  color="red"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </NavLink>
          <hr className="my-2 border-blue-gray-50" />

          <NavLink to={`/music`}>
            <ListItem>
              <ListItemPrefix>
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
              </ListItemPrefix>
              Danh sách nhạc
            </ListItem>
          </NavLink>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Cài đặt
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <div className="avtar h-10 w-10">
                <img src={user?.photoURL} className="rounded-full" />
              </div>
            </ListItemPrefix>
            <div className="name">
              <div>{user?.displayName}</div>
            </div>
            <ListItemSuffix onClick={logOut}>
              <Tooltip content="Đăng xuất" placement="top">
                <PowerIcon className="h-5 w-5" />
              </Tooltip>
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Siderbar;
