"use client"

import Link from "next/link"
import { useState } from "react"
import BookingModal from "./BookingModal"

export default function Navbar(){

const [open,setOpen]=useState(false)

console.log("STATE:",open)

return(

<>

<nav className="fixed w-full z-[9999] bg-black/40 backdrop-blur-md">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

<Link href="/">
<h1 className="text-2xl font-bold text-white">
KomodoTrip
</h1>
</Link>

<div className="flex gap-8 text-white">

<Link href="/">Home</Link>
<Link href="/trips">Trips</Link>
<Link href="/gallery">Gallery</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>

</div>

<button
onClick={()=>{
console.log("CLICKED")
setOpen(true)
}}
className="bg-green-500 px-5 py-2 rounded-xl text-white"
>

Book Now

</button>

</div>

</nav>

<BookingModal
open={open}
setOpen={setOpen}
/>

</>

)

}