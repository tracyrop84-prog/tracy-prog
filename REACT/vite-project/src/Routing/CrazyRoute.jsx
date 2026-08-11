import { useEffect, useState } from "react";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import { useNavigate } from "react-router";

function CrazyRoute() {
  const [countDown, setCountDown] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((c) => c - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if  (countDown <= 0) {
      navigate(-1);
    }
  }, [countDown]);
  return (
    <div>
      <Navigation1 />
      <Navigation2 />
      <h1>this is CrazyRoute</h1>
      <h4>times running out in {countDown}</h4>
    </div>
  );
}
export default CrazyRoute;
