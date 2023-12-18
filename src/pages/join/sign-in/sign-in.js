import Link from "next/link"
import { JoinLayout } from "@/layouts/JoinLayout"
import { LoginForm } from "@/components/Auth"
import styles from "./sign-in.module.scss"

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>
          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  )
}
