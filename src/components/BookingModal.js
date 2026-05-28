"use client"

export default function BookingModal({ open, setOpen }) {

if (!open) return null

return (

<div
onClick={()=>setOpen(false)}
className="
fixed
inset-0
bg-black/80
z-[9999]
flex
justify-center
items-center
p-6
"
>

<div
onClick={(e)=>e.stopPropagation()}
className="
bg-slate-900
border
border-slate-700
rounded-3xl
max-w-md
w-full
p-10
text-center
text-white
relative
shadow-2xl
"
>

<button
onClick={()=>setOpen(false)}
className="
absolute
top-4
right-5
text-3xl
hover:text-red-400
"
>

✕

</button>

<img
src="/owner.jpg"
alt="owner"
className="
w-36
h-36
rounded-full
mx-auto
object-cover
border-4
border-green-500
mb-8
"
/>

<h2 className="text-4xl font-bold mb-3">

MANJO KOMODO TOUR

</h2>

<p className="text-gray-400 mb-6">

Local Trip Organizer

<br/>

Komodo Specialist

<br/>

Luxury Sailing Experience

</p>

<div className="mb-8 text-lg">

<p>📍 Labuan Bajo</p>

<p>📞 6281234567890</p>

</div>

<a
href="https://wa.me/6281234567890"
target="_blank"
className="
bg-green-500
hover:bg-green-400
text-black
font-bold
px-8
py-4
rounded-2xl
inline-block
duration-300
"
>

CHAT WHATSAPP

</a>

</div>

</div>

)

}