import Link from "next/link"
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";


export default function Home() {
  return (
    <div>
      <ul>
        <li className={x['red']}>
          {/* <Link href={"/facebook"}>Facebook</Link> */}
          <a href="/facebook"> facebook</a>
        </li>
        <li className={y['green']}>
          <a href="/google"> Google</a>
        </li>
      </ul>
    </div>)
}
