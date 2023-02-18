import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item, id) => (
        <ProductCard item={item} key={id} />
      ))}
    </>
  );
};

export default ProductList;
