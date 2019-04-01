import { Link } from '../server/next-routes/routesFrontEnd'

export default function secondPage() {
  return (
    <div>
        <Link route="/"><a>go to homepage</a></Link>
        <Link route="/404"><a>go to 404</a></Link>
    </div>
  )
}
