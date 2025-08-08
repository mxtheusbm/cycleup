import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export const Input = ({ id, type, labelText, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </div>
  );
};
