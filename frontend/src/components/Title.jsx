import Helmet from "react-helmet";

const Title = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Title.defautoProps = {
  title: "Bem vindo ao Moderna Houses",
  description: "Vendemos, alugamos ou compramos a casa dos seus sonhos!",
  keywords: "Casas, Ap's, Estudios",
};

export default Title;
