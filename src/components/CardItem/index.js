import {
  CardItemEl,
  LogoEL,
  LogoAndTitle,
  TitleDiv,
  Title,
  Service,
  LinkEl,
  Para,
} from "./styledComponent";

const CardItem = (props) => {
  const { details } = props;
  const { title, category, description, iconUrl, link } = details;

  return (
    <CardItemEl className="app-item">
      <LogoAndTitle>
        <LogoEL src={iconUrl} alt={title} />
        <TitleDiv>
          <Title>{title}</Title>
          <Service>{category}</Service>
        </TitleDiv>
      </LogoAndTitle>
      <LinkEl href={link} target="_blank">
        {link}
      </LinkEl>
      <Para>{description}</Para>
    </CardItemEl>
  );
};
export default CardItem;
