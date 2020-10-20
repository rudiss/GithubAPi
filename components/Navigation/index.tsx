import React from "react";
import Link from "next/link";
import { Container, Label, Content } from "./styles";

type NavigationProps = {
  label: string;
  to: string;
};

const Navigation: React.FC<NavigationProps> = ({ label, to = "" }) => (
  <Container>
    <Content>
      <Link href={to}>
        <img src="/back-arrow.svg" alt="back" />
      </Link>
      <Label>{label}</Label>
    </Content>
  </Container>
);

export default Navigation;
