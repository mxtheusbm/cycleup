import { useEffect } from "react";
import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/container";
import { CountDown } from "../../components/count-down";

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
        {/* <MainForm /> */}
        aa
      </Container>
    </MainTemplate>
  );
};
