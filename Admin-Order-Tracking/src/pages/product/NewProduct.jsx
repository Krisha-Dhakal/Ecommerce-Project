import { Formik, Form } from "formik";
import {
  newProductSchema,
  defaultAddProductValue,
} from "../../utils/formSchema";
import Input from "../../components/input/Input";
import Textarea from "../../components/input/Textarea";
import Button from "../../components/button/Button";
import Swal from "sweetalert2";

import { getProductById, createProduct } from "../../services/apiService";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewProduct = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(
    Boolean(productId && currentProduct)
  );

  const fetchProductById = async () => {
    if (!!productId) {
      const product = await getProductById(productId);
      setCurrentProduct(product.data);
      setIsLoading(false);
      setEditMode(true);
    } else {
      setIsLoading(false);
    }
  };
  const handleFormSubmit = async (data, action) => {
    const newProduct = {
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
    };
    console.log(newProduct, "submit bhitra");
    try {
      if (editMode) {
        const response = await updateProduct(productId, newProduct);
        console.log(response);
      } else {
        console.log("Etta create ma pugyo");
        console.log(newProduct);
        const response = await createProduct(newProduct);

        Swal.fire({
          icon: "success",
          title: "Added New Product",
          showConfirmButton: false,
          timer: 1500,
        });
        action.resetForm();
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  console.log(editMode);
  // console.log(newProduct);

  return (
    <main className="rounded-md overflow-hidden w-full shadow-xl">
      <div className="mb-2 ml-3">
        <a
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 w-max rounded-full text-primary hover:-translate-x-[2px] ease-in-out duration-300 cursor-pointer underline"
        >
          <FaArrowAltCircleLeft />
          <span>Back</span>
        </a>
      </div>
      <h2 className="uppercase text-lg font-semibold p-4 bg-[#763996] text-white">
        Add Product
      </h2>
      <section className="flex flex-col px-4 py-6">
        <Formik
          initialValues={currentProduct ?? defaultAddProductValue}
          validationSchema={newProductSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            handleReset,
            isSubmitting,
          }) => {
            return (
              <Form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="title"
                    className="uppercase text-md font-semibold"
                  >
                    Name:
                  </label>
                  <Input
                    placeholder="Product name"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    type="text"
                    value={values?.title}
                    onBlur={handleBlur}
                    error={errors.title}
                  />
                  {errors.title && touched.title ? (
                    <div className="text-red-600">{errors.title}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="uppercase text-md font-semibold"
                  >
                    Price
                  </label>

                  <Input
                    placeholder="Price in NRs"
                    name="price"
                    onChange={handleChange}
                    type="text"
                    value={values.price}
                    onBlur={handleBlur}
                    error={errors.price}
                  />
                  {errors.price && touched.price ? (
                    <div className="text-red-600">{errors.price}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="Category"
                    className="uppercase text-md font-semibold"
                  >
                    Category
                  </label>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={values.category}
                    error={errors.category}
                  />
                  {errors.category && touched.category ? (
                    <div className="text-red-600">{errors.category}</div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="title"
                    className="uppercase text-md font-semibold"
                  >
                    Image URL:
                  </label>
                  <Input
                    placeholder="Image Url"
                    name="image"
                    onChange={handleChange}
                    type="text"
                    value={values.image}
                    onBlur={handleBlur}
                    error={errors.image}
                  />
                  {errors.image && touched.image ? (
                    <div className="text-red-600">{errors.image}</div>
                  ) : null}
                </div>
                <div className=" col-span-2">
                  <label
                    htmlFor="title"
                    className="uppercase text-md font-semibold"
                  >
                    Description:
                  </label>
                  <Textarea
                    placeholder="Product description"
                    name="description"
                    onChange={handleChange}
                    type="textarea"
                    value={values.description}
                    onBlur={handleBlur}
                    error={errors.description}
                  />
                  {errors.description && touched.description ? (
                    <div className="text-red-600">{errors.description}</div>
                  ) : null}
                </div>
                <div className="flex justify-end col-span-2 gap-4">
                  <Button
                    bgColor="#763996"
                    title={editMode ? "Save" : "Add"}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  />
                  <Button
                    bgColor="#a6a6a6"
                    title="Reset"
                    onClick={handleReset}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </main>
  );
};

export default NewProduct;
