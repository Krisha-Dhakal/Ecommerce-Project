import Input from "../../components/input/Input";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../../components/button/SearchButton";
import { useEffect, useState } from "react";
import { getAllOrder, deleteOrder } from "../../services/apiService";
const Order = () => {
  const [orders, setOrder] = useState([]);
  const [status, setStatus] = useState("");
  const tableHeading = [
    "Id",
    "Order Date",
    "Cus contact",
    "Cus Name",
    "Product Name",
    "Total Price",
    "Status",
    "Action",
  ];

  const handleDeleteOrder = async (id) => {
    alert("Are you sure you want to delete this order?");
    let response = await deleteOrder(id);
    console.log(response);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    const fetchAllOrder = async () => {
      const response = await getAllOrder(status);
      setOrder(response.data.orders);
    };

    fetchAllOrder();
  }, [status]);

  console.log(orders);

  return (
    <main className="w-full flex flex-col gap-4 overflow-auto">
      {/* <div className="w-2/5 relative flex items-center mb-4">
        <Input placeholder="Search" />
        <FaSearch className="absolute right-6" color="gray" />
      </div> */}
      <select
        onChange={handleStatusChange}
        name="orderStatus"
        id=""
        className="w-44 text-[18px] px-4 py-2 rounded-lg border-2 border-slate-200"
      >
        <option value="">All</option>
        <option value="delivered">Delivered</option>
        <option value="pending">Pending</option>
      </select>
      <div className=" overflow-hidden p-0 h-96 w-max md:w-full overflow-y-auto">
        <table className="border-none w-full   rounded-lg">
          <thead className="bg-[#763996] text-white sticky top-0">
            <tr>
              {tableHeading?.map((headData, index) => {
                return (
                  <td
                    key={index}
                    className="border text-left uppercase font-semibold py-2 px-4 box-border"
                  >
                    {headData}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {orders?.map((data, index) => {
              let formatedDate = data.createdAt.split("").splice(2, 8);
              // console.log(data);
              return (
                <tr
                  key={index}
                  className="odd:bg-zinc-200 even:bg-zinc-300 shadow-inner text-start"
                >
                  <td className="  px-4 ">{index + 1}</td>
                  <td className="  px-4 overflow-hidden">{formatedDate}</td>
                  <td className="  px-4">{data.customer.contact}</td>
                  <td className="  px-4">{data.customer.fullName}</td>
                  <td className="  px-4">{data.product.productName}</td>
                  <td className="  px-4">{data.product.price}</td>
                  <td className="  px-4">{data.status}</td>
                  <td className="flex justify-center gap-2 py-2 px-4">
                    <SearchButton title="edit" bgColor="#763996" />
                    <SearchButton
                      title="delete"
                      bgColor="#696969"
                      onClick={() => handleDeleteOrder(data._id)}
                    ></SearchButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Order;
