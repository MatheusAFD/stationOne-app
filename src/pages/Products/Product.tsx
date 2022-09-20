import { useNavigate, useParams } from "react-router-dom";

import { useGetProductsQuery } from "../../graphql/generated";

import { ButtonSetps } from "../../components/Button/ButtonSteps";
import { CardProduct } from "../../components/Card/CardProduct";
import { Header } from "../../components/Header/Header";
import { LoadingCircle } from "../../components/Loading/LoadingCircle";

export function Product() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string | any }>();
  const slugFormatted = slug?.replace("-", " ");

  const { data } = useGetProductsQuery({
    variables: {
      slug,
    },
  });

  if (!data) {
    return <LoadingCircle />;
  }

  sessionStorage.clear();

  return (
    <>
      <Header
        hasBack={true}
        title={slugFormatted}
        returnNav={() => {
          navigate(-1);
        }}
      />

      <div className="flex flex-col items-center">
        <img
          src={data.products[0].shop?.imgLogoLoja}
          alt=""
          className="w-[390px] h-[190px] object-cover"
          width={390}
          height={190}
        />

        <div className="relative top-[-30px] w-[95%] max-w-[370px] h-16 bg-white rounded">
          <h2 className="text-center mt-3 font-bold text-xl capitalize text-[#424242]">
            {slugFormatted}
          </h2>
        </div>
      </div>

      <section className="flex flex-col items-center md:flex-row md:gap-4 md:justify-center md:flex-wrap">
        {data?.products.map(
          ({ id, imgUrl, name, price, deliveryIn, description }) => {
            return (
              <CardProduct
                key={id}
                id={id}
                name={name}
                deliveryIn={deliveryIn}
                price={price}
                description={description}
                img={imgUrl}
              />
            );
          }
        )}
      </section>

      <ButtonSetps
        nameStep="START ORDER"
        slug={data.products[0].shop?.slugFood}
      />
    </>
  );
}
