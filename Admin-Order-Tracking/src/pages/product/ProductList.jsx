import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/apiService";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft, FaPlusCircle } from "react-icons/fa";
import SearchButton from "../../components/button/SearchButton";
import { deleteProduct } from "../../services/apiService";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const tableHeading = ["Id", "Image", "Name", "Category", "Price", "Action"];

  function calculateStartSno() {
    let startSno = (page - 1) * 10 + 1;
    return startSno;
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await getAllProducts(page, limit);
      setProduct(response.data.products);
      console.log(response);
    };
    fetchData();
    calculateStartSno();
  }, [page]);

  return (
    <main className="w-full flex flex-col items-end gap-3">
      <section className="flex justify-between">
        <button
          className="bg-primary flex items-center gap-3 h-full md:py-[16px] md:px-3 p-3 rounded-full md:rounded hover:opacity-85 active:translate-y-[1px] active:shadow-xl"
          onClick={() => navigate("/product/add_product")}
        >
          <FaPlusCircle color="white" size={20} />
          <span className="hidden md:block text-[12px] font-[600] text-white">
            New Product
          </span>
        </button>
      </section>
      <section className=" overflow-hidden p-0 h-96 w-max md:w-full overflow-y-auto">
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
            {products?.map((data, index) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-zinc-200 even:bg-zinc-300 shadow-inner text-left"
                >
                  <td className="  px-4 ">{calculateStartSno() + index}</td>
                  <td className="  px-4 overflow-hidden size-20">
                    <img
                      src={data.image}
                      className="h-full w-full object-contain"
                      alt="product_img"
                    />
                  </td>
                  <td className="  px-4">{data.title}</td>
                  <td className="  px-4">{data.category}</td>
                  <td className="  px-4">{data.price}</td>
                  <td className="flex justify-center gap-2 py-8 px-4">
                    <SearchButton
                      title="edit"
                      bgColor="#763996"
                      onClick={() => navigate(`/product/edit/${data._id}`)}
                    ></SearchButton>
                    <SearchButton
                      title="delete"
                      bgColor="#696969"
                      onClick={() => handleDeleteProduct(data._id)}
                    ></SearchButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="shadow-xl  rounded-md overflow-hidden flex text-[16px] text-slate-800">
        <button
          disabled={page === 1}
          className={`${
            page == 1 ? "bg-slate-200 text-white" : "bg-white"
          } px-3 py-1`}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Prev
        </button>
        <div className="bg-black h-full w-[1px]"></div>
        <button
          className="px-3 py-1 bg-white"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </section>
    </main>
  );
};

export default ProductList;
