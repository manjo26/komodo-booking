"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabase"

export default function Gallery(){

const [images,setImages]=useState([])

async function getImages(){

const {data,error}=await supabase
.storage
.from("gallery")
.list()

if(error){
console.log(error)
return
}

setImages(data)

}

useEffect(()=>{

getImages()

},[])

return(

<main className="bg-slate-950 text-white min-h-screen">

<Navbar/>

{/* HERO */}

<section
className="
h-[60vh]
bg-cover
bg-center
flex
items-center
justify-center
relative
"
style={{
backgroundImage:"url('/galleryhero.jpg')"
}}
>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative text-center">

<h1 className="text-6xl md:text-8xl font-extrabold mb-6">

Trip Gallery

</h1>

<p className="text-xl text-gray-300">

Real memories from our Komodo adventures

</p>

</div>

</section>

{/* GALLERY GRID */}

<section className="max-w-7xl mx-auto py-24 px-8">

<div className="grid md:grid-cols-3 gap-10">

{images.map((img)=>{

const {data}=supabase
.storage
.from("gallery")
.getPublicUrl(img.name)

return(

<div
key={img.name}
className="
group
overflow-hidden
rounded-3xl
shadow-2xl
"
>

<img
src={data.publicUrl}
className="
w-full
h-80
object-cover
group-hover:scale-110
duration-500
"
/>

</div>

)

})}

</div>

</section>

<Footer/>

</main>

)

}