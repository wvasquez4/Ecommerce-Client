import Link from 'next/link'
import { Button } from 'semantic-ui-react'

export default function Index() {
  return (
    <div>
        <h2>
          Games Shop!
        </h2>
        <div>
            <Link href="/join/sign-in">
          <Button primary>
              Ir login
          </Button>
            </Link>
        </div>
    </div>
  )
}
