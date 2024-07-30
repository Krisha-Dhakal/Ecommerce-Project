import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postOrder } from "../../services/apiService";

// import { getProductById } from "../../services/apiService";

const CartItemCard = ({ selectedProduct, closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const orderSubmit = async ({ fullName, email, contact }) => {
    if (!fullName || !email || !contact) {
      return null;
    }

    const orderDetails = {
      status: "pending",
      product: {
        productName: selectedProduct.title,
        productId: selectedProduct._id,
        productImage: selectedProduct.image,
        price: selectedProduct.price,
      },
      customer: {
        fullName: fullName,
        email: email,
        contact: contact,
      },
    };

    try {
      let response = await postOrder(orderDetails);
      console.log(response.status);
      if (response.status === 201) {
        toast.success("Successfully added order", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            reset();
            closeModal();
          },
        });
      } else {
        toast.error("Order Failed", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {selectedProduct && (
        <section className="bg-white flex flex-col items-center  w-[640px] mx-auto py-4 shadow-lg shadow-zinc-400 rounded-lg cursor-pointer overflow-hidden">
          <div className="flex items-center p-4 w-3/5">
            <ToastContainer />
            <div className="border-r-2 w-[100px] flex justify-center h-42 ">
              <img
                src={selectedProduct?.image}
                alt="product"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-left p-3 flex-1">
              <h2 className="font-bold text-xl uppercase line-clamp-2">
                {selectedProduct?.title}
              </h2>
              <div className="flex gap-2">
                <p className="text-zinc-500 text-md font-semibold line-clamp-3">
                  {selectedProduct?.price}
                </p>
                <p className="text-zinc-500 text-md font-semibold line-clamp-3">
                  {selectedProduct?.category}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 h-full w-[1px]"></div>
          <div className="flex-1 w-full h-full">
            <form
              className="px-6 py-4 flex flex-col gap-3"
              onSubmit={handleSubmit(orderSubmit)}
            >
              <h2 className="text-center font-bold text-xl uppercase text-primary">
                Order Confirmation
              </h2>
              <div>
                <label htmlFor="fullName" className="font-medium">
                  Fullname:
                </label>
                <br />
                <input
                  className="w-full px-4 py-1 rounded-[4px] border-[1px]"
                  type="text"
                  id="username"
                  {...register("fullName", {
                    required: "*required",
                    minLength: {
                      value: 2,
                      message: "Username must be at least 2 characters long",
                    },
                  })}
                />
                {errors.fullName && (
                  <span className="text-[12px] text-red-400">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="contact" className="font-medium">
                  Contact:
                </label>
                <br />

                <input
                  type="tel"
                  className="w-full px-4 py-1 rounded-[4px] border-[1px]"
                  id="contact"
                  {...register("contact", {
                    required: "*required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Please enter a 10-digit contact number",
                    },
                  })}
                />
                {errors.contact && (
                  <span className="text-[12px] text-red-400">
                    {errors.contact.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="font-medium">
                  Email:
                </label>
                <br />

                <input
                  type="email"
                  className="w-full px-4 py-1 rounded-[4px] border-[1px]"
                  id="email"
                  {...register("email", {
                    required: "*required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-[12px] text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="bg-primary text-white mt-2 px-3 py-1 shadow-xl rounded-[4px] active:translate-y-[1px]"
                >
                  Confirm Order
                </button>
                <p
                  onClick={() => {
                    reset();
                    closeModal();
                  }}
                  className="bg-neutral-400 text-white mt-2 px-3 py-1 shadow-xl rounded-[4px] active:translate-y-[1px]"
                >
                  Cancel
                </p>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default CartItemCard;
