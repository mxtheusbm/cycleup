import { useEffect } from "react";
import { Container } from "../../components/container";
import { CountDown } from "../../components/count-down";
import { MainTemplate } from "../../templates/main-template";
import { MainForm } from "./components/main-form";

export const Home = () => {
  useEffect(() => {
    document.title = "Cycleup Pomodoro";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
