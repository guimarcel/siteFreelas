import {
  Container,
  Background,
  Title,
  Subtitle,
  Description,
  ContainerImage,
} from "./styles";

export default function Home() {
  return (
    <Background>
      <Container>
        <Title>Meu Portifólio</Title>
        <Subtitle>Olá, Sou o Margareth também conhecida como Mosca.</Subtitle>
        <ContainerImage>
          <img src="../../public/margareth.png" alt="MinhaFoto" />
        </ContainerImage>
        <Description>
          Ao longo dessas três décadas, tive o privilégio de trabalhar em uma
          variedade de projetos, sempre buscando a inovação e a excelência em
          cada linha de código. Atualmente, meu foco é o desenvolvimento mobile,
          onde me dedico a criar aplicativos funcionais e intuitivos. Além
          disso, estou profundamente envolvida na implementação de
          funcionalidades inteligentes utilizando Inteligência Artificial.
          Acredito que a IA tem o poder de transformar a forma como interagimos
          com a tecnologia, trazendo soluções mais eficientes e personalizadas.
        </Description>
      </Container>
    </Background>
  );
}
