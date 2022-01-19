import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../redux/reducers/products/actions";
import Spinner from "../Spinner";
import ImageGalery from "./ImageGalery";
import ProductInfo from "./ProductInfo";
import { StyledProductDetail } from "./styled";

export default function ProductDetail() {
  const { idProduct } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoading);

  const loadProduct = () => dispatch(fetchProductDetail(idProduct));
  useEffect(loadProduct, []);

  return (
    <StyledProductDetail>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="mainProductWrapper">
          <ImageGalery images={product.images} defaulImage={product.mainImg} />
          <ProductInfo product={product} />
        </section>
      )}
    </StyledProductDetail>
  );
}
