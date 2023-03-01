import { FC } from "react";
import {
  ColorLabel,
  Container,
  Image,
  ImageContainer,
  PriceTag,
} from "./styles";
import red from "../../images/red.png";

export type Props = {
  color?: string;
  image_url?: string;
  price?: number;
};

export const OrderItem: FC<Props> = ({ color, image_url, price }) => {
  return (
    <Container>
      <ColorLabel>{color ? color : "Червоний"}</ColorLabel>
      <ImageContainer>
        <Image src={image_url ? image_url : red} />
      </ImageContainer>
      <PriceTag>₴{price ? price : 1500}</PriceTag>
    </Container>
  );
};
