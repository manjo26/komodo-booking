import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TripCard from "@/components/TripCard"

export default function Home() {

return(

<main className="bg-slate-950 min-h-screen text-white">

<Navbar/>

{/* HERO */}

<section
className="
min-h-screen
bg-cover
bg-center
flex
items-center
justify-center
relative
"
style={{
backgroundImage:"url('/komodo.jpg')"
}}
>

<div className="absolute inset-0 bg-black/60"/>

<div className="relative text-center px-8">

<h1 className="text-6xl md:text-8xl font-extrabold mb-8">

Explore
<br/>

Komodo Island

</h1>

<p className="text-xl text-gray-300 mb-10">

Luxury Sailing • Open Trip • Private Experience

</p>

<a
href="https://wa.me/6281234567890"
target="_blank"
className="
bg-green-500
px-10
py-4
rounded-2xl
font-bold
hover:bg-green-600
"
>

BOOK NOW

</a>

</div>

</section>

{/* FEATURED TRIPS */}

<section className="max-w-7xl mx-auto py-24 px-8">

<h2 className="text-5xl font-bold text-center mb-16">

Featured Trips

</h2>

<div className="grid md:grid-cols-3 gap-10">

<TripCard
title="Open Trip Komodo"
image="/komodo4.jpg"
desc="Join group adventure to Padar Island, Pink Beach & snorkeling spots."
/>

<TripCard
title="Private Trip"
image="/komodo3.jpg"
desc="Exclusive Komodo experience for couples, family, or private groups."
/>

<TripCard
title="Luxury Sailing"
image="/komodo2.jpg"
desc="Premium phinisi boat experience with unforgettable sunset views."
/>

</div>

</section>

{/* WHY US */}

<section className="bg-slate-900 py-24 px-8">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center mb-16">

Why Choose Us

</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-4">

Experienced Guide

</h3>

<p className="text-gray-400">

Professional local operator with unforgettable travel experiences.

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-4">

Premium Boat

</h3>

<p className="text-gray-400">

Comfortable boat, amazing destinations, professional service.

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-4">

Best Memories

</h3>

<p className="text-gray-400">

Capture amazing moments during your Komodo journey.

</p>

</div>

</div>

</div>

</section>

<Footer/>

</main>

)

}