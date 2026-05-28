"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Admin() {

  const [file,setFile]=useState(null)

  async function uploadFile(){

    if(!file){
      alert("Pilih foto dulu")
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
    console.log(data)

  }

  return(
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">

      <h1 className="text-4xl font-bold">
        Upload Foto Trip
      </h1>

      <input
        type="file"
        onChange={(e)=>
          setFile(e.target.files[0])
        }
      />

      <button
        onClick={uploadFile}
        className="bg-green-500 px-6 py-3 rounded-xl text-white"
      >
        Upload
      </button>

    </main>
  )
}