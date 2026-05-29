"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default function Admin(){

const [file,setFile]=useState(null)

async function uploadImage(){

if(!file){

alert("Pilih foto dulu bro")
return

}

const filename =
Date.now()+"-"+file.name

const {data,error} =
await supabase.storage
.from("gallery")
.upload(filename,file)

if(error){

console.log(error)
alert(error.message)
return

}

alert("UPLOAD BERHASIL 🔥")

}

return(

<main className="
min-h-screen
flex
justify-center
items-center
bg-slate-950
text-white
">

<div className="text-center">

<h1 className="text-5xl font-bold mb-10">

Admin Upload

</h1>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button
onClick={uploadImage}
className="
bg-green-500
px-8
py-3
rounded-xl
ml-4
"
>

Upload

</button>

</div>

</main>

)

}