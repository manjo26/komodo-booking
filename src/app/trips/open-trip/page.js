import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function OpenTrip(){

return(

<main className="bg-slate-950 text-white min-h-screen">

<Navbar/>

<section
className="
h-[80vh]
bg-cover
bg-center
flex
items-center
justify-center
relative
"
style={{
backgroundImage:"url('/openhero.jpg')"
}}
>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative text-center px-8">

<h1 className="text-7xl font-extrabold mb-8">

Open Trip Komodo

</h1>

<p className="text-xl text-gray-300">

Join unforgettable group adventure

</p>

</div>

</section>

<section className="max-w-7xl mx-auto py-24 px-8">

<div className="grid md:grid-cols-2 gap-20">

<div>

<img
src="/open1.jpg"
className="rounded-3xl"
/>

</div>

<div>

<h2 className="text-5xl font-bold mb-10">

Trip Overview

</h2>

<p className="text-gray-400 text-lg leading-9 mb-10">

3D2N Open Trip around Labuan Bajo.

Perfect for solo traveler,
couples,
or friends.

Explore iconic destinations
with shared adventure experience.

</p>

<h3 className="text-3xl font-bold mb-8">

Destinations

</h3>

<ul className="space-y-4 text-gray-400">

<li>✓ Padar Island</li>

<li>✓ Pink Beach</li>

<li>✓ Taka Makassar</li>

<li>✓ Manta Point</li>

<li>✓ Kanawa Island</li>

</ul>

</div>

</div>

</section>

<section className="bg-slate-900 py-24 text-center">

<h2 className="text-6xl font-bold mb-10">

Start From Rp1.500.000

</h2>

<a
href="https://wa.me/6281234567890"
target="_blank"
className="
bg-green-500
text-black
font-bold
px-10
py-5
rounded-2xl
"
>

BOOK NOW

</a>

</section>

<Footer/>

</main>

)

}