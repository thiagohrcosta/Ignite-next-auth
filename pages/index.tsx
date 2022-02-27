import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const data = {
      email,
      password,
    }
    await signIn(data);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <label className={styles.formLabel}>Email</label>
        <input className={styles.formInput} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label className={styles.formLabel}>Password</label>
        <input className={styles.formInput} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button className={styles.btnForm} type="submit">Login</button>
      </form>
    </div>  
    )
}