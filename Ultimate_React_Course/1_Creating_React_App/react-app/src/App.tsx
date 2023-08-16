import { useState } from "react";
import Alert from "./components/Alert";
import Btn from "./components/Btn";

function App () {
  const handleClick = () => {
    setAlertVisible(true);
  }

  const handleOnClose = () => {
    setAlertVisible(false);
  }
  
  const styles = {
    btn: "primary"
  }

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={handleOnClose}>My Alert</Alert>}
      <Btn color={styles.btn} onClick={handleClick}>Button</Btn>
    </div>
  )
};

export default App;