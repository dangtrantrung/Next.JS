'use client'

import Link from "next/link"
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import AppTable from "@/components/app.table";


export default function Home() {
  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href={"/facebook"}>Facebook</Link></li>
        <li className={x['red']}>

          <a className={y['red']} href="/facebook"> facebook</a>
        </li>
        <li className={y['green']}>
          <a href="/google"> Google</a>
        </li>
      </ul>
      <AppTable />
    </div>)
}
