//@ts-nocheck
import React from "react";
import moment from "moment";
import { FcAcceptDatabase } from "react-icons/fc";
import { SiTicktick } from "react-icons/si";

interface User {
  id: string;
  SNo: string;
  UserName: string;
  YourPlane: string;
  Amount: string;
  OrderDate: string;
  Orderexpire: string;
  //   Email: string;
  Status: string;
}

interface Props {
  data: User[];
  handleApprove: (id: string) => void;
  handleReject: (id: string) => void;
}

const InvesterTable: React.FC<Props> = ({
  data,
  handleApprove,
  handleReject,
}) => {

  return (
    <div className="w-full overflow-x-auto ml-10 sm:ml-14 mt-10">
      <table className="w-full min-w-[500px] ">
        <thead className="w-full">
          <tr className="w-full border-b-[1.5px] pr-12 pl-6 font-medium">
            <th className="py-2 px-3 text-nowrap text-left text-sm font-semibold font-OpenSans leading-6 text-[#092C4C] pl-10">
              S/No
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              UserName
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              email
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              plans
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              startDate
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              expireDate
            </th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className="w-full  text-[#092C4C] text-sm font-NotoSans text-nowrap whitespace-nowrap font-semibold rounded-[3px] pr-12 pl-6"
            >
              <td className="py-1 px-3 text-left pl-12">{index + 1}</td>
              <td className="py-1 px-3 text-center">{row?.userId?.name}</td>
              <td className="py-1 px-3 text-center">{row?.userId?.email}</td>
              <td className="py-1 px-3 text-center">{"Basic Plans"}</td>
              <td className="py-1 px-3 text-center">
                {moment(row?.purchaseDate).format("YYYY-MM-DD")}
              </td>
              <td className="py-1 px-3 text-center">
                {moment(row?.endDate).format("YYYY-MM-DD")}
              </td>
              <td className="py-1 px-3 text-center">
                <button
                  onClick={() => handleApprove(row?.id)}
                  className="text-[8px] px-2 font-extrabold rounded-sm mr-2 mt-2"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 172 172"
                    style=" fill:#092C4C;"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#1fb141">
                        <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
                      </g>
                    </g>
                  </svg> */}
                  <img
                    className=" text-[#092C4C] object-contain "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO3VPytFYRwH8E/Xxl14B/cVKBMls3cgxCIsYmEwiNEqqxQvQDHaDExsFuXfwEDJYJHk0ann1u3UPeekR7nlW786f+p8+j2/p+fwn07PCFYwi77UH+/CLkJLPWIoJbKYA5p1j3oq5KYNktVkKuSjAFlNhVwXIBOpkIU2wB16UiE17OSABwz6hQxjGTPo1WmpYRTbOMEFTrGHaXSnWJ7Lgp0V8IKxnwLZ1vwsAQKOsYErvOIQjSpAP94rAM9Yzz17w22V4+agAhCwHzto3j9hPl6PlyFnFZGtuETnOMJcPJ2zd0tlSLama9gsqak4gxBP6ubv4AsDEqYRZxBagGxOyVOPM8i6SdrB38o3PrOHIO5P1swAAAAASUVORK5CYII="
                  ></img>
                  {/* <SiTicktick  /> */}
                </button>
                <button
                  onClick={() => handleReject(row?.id)}
                  className="text-[8px] px-2 font-extrabold rounded-sm"
                >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="40" className="pt-4" viewBox="0 0 72 72">
<path d="M36,12c13.255,0,24,10.745,24,24c0,13.255-10.745,24-24,24S12,49.255,12,36C12,22.745,22.745,12,36,12z M40.243,44.485	c1.171,1.171,3.071,1.172,4.243,0c1.172-1.172,1.171-3.071,0-4.243C44.253,40.01,42.063,37.82,40.243,36	c1.82-1.82,4.01-4.01,4.243-4.243c1.171-1.171,1.172-3.071,0-4.243c-1.171-1.171-3.071-1.171-4.243,0	C40.01,27.747,37.82,29.937,36,31.757c-1.82-1.82-4.01-4.01-4.243-4.243c-1.171-1.171-3.071-1.172-4.243,0	c-1.172,1.172-1.171,3.071,0,4.243c0.232,0.232,2.423,2.423,4.243,4.243c-1.82,1.82-4.01,4.01-4.243,4.243	c-1.171,1.171-1.171,3.071,0,4.243c1.172,1.172,3.071,1.171,4.243,0c0.232-0.232,2.423-2.423,4.243-4.243	C37.82,42.063,40.01,44.253,40.243,44.485z"></path>
</svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvesterTable;
