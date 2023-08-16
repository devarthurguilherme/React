interface Props {
    children: string;
    color: string;
    onClick: () => void;
}

const styles = {
    btn:"btn btn-"
}

const Btn = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" className={styles.btn + color} onClick={onClick}>{children}</button>
  )
}

export default Btn