import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LuxurySailing(){

return(

<main className="bg-slate-950 text-white min-h-screen">

<Navbar/>

<section
className="
h-[85vh]
bg-cover
bg-center
flex
items-center
justify-center
relative
"
style={{
backgroundImage:"url('/luxuryhero.jpg')"
}}
>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative text-center px-8">

<h1 className="text-7xl md:text-8xl font-extrabold mb-8">

Luxury Sailing

</h1>

<p className="text-xl text-gray-300">

Premium phinisi experience in Komodo Island

</p>

</div>

</section>

<section className="max-w-7xl mx-auto py-24 px-8">

<div className="grid md:grid-cols-2 gap-20 items-center">

<div>

<img
src="/luxury1.jpg"
className="rounded-3xl"
/>

</div>

<div>

<h2 className="text-5xl font-bold mb-10">

Luxury Experience

</h2>

<p className="text-gray-400 text-lg leading-9 mb-10">

Enjoy an unforgettable premium
sailing journey around Komodo Island.

Luxury cabin,
private chef,
sunset dinner,
and cinematic ocean view.

</p>

<h3 className="text-3xl font-bold mb-8">

Included

</h3>

<ul className="space-y-4 text-gray-400">

<li>✓ Premium Phinisi Boat</li>

<li>✓ Luxury Cabin</li>

<li>✓ Sunset Dinner</li>

<li>✓ Snorkeling Gear</li>

<li>✓ Professional Crew</li>

</ul>

</div>

</div>

</section>

<section className="bg-slate-900 py-24 text-center">

<h2 className="text-6xl font-bold mb-10">

Custom Pricing

</h2>

<p className="text-gray-400 text-xl mb-10">

Tailored based on your trip needs.

</p>

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

BOOK LUXURY TRIP

</a>

</section>

<Footer/>

</main>

)

}