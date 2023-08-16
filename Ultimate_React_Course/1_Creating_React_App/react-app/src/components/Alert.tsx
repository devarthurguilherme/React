import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ( { children, onClose } : Props) => {

  const styles = {
    div: "alert alert-primary alert-dismissible"
  }
  return (
    <div className={styles.div} role="alert">
        {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert