import Link from "next/link";
import { JoinLayout } from "@/layouts/JoinLayout";
import { RegisterForm } from "@/components/Auth/RegisterForm";
import styles from "./sign-up.module.scss";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  )
}
