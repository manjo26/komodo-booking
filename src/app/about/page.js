import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About(){

return(

<main className="bg-slate-950 text-white min-h-screen">

<Navbar/>

{/* HERO */}

<section
className="
h-[70vh]
bg-cover
bg-center
flex
items-center
justify-center
relative
"
style={{
backgroundImage:"url('/abouthero.jpg')"
}}
>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative text-center px-8">

<h1 className="text-6xl md:text-8xl font-extrabold mb-8">

About Us

</h1>

<p className="text-xl text-gray-300">

Creating unforgettable Komodo experiences

</p>

</div>

</section>

{/* STORY */}

<section className="max-w-7xl mx-auto py-24 px-8">

<div className="grid md:grid-cols-2 gap-20 items-center">

<div>

<img
src="/about1.jpg"
className="rounded-3xl"
/>

</div>

<div>

<h2 className="text-5xl font-bold mb-10">

Our Story

</h2>

<p className="text-gray-400 text-lg leading-9 mb-8">

KomodoTrip was created to share the beauty
of Komodo Island through unforgettable
travel experiences.

We specialize in open trips, private trips,
and luxury sailing adventures around
Labuan Bajo.

</p>

<p className="text-gray-400 text-lg leading-9">

Our mission is simple:

provide authentic journeys,
premium experiences,
and lifelong memories.

</p>

</div>

</div>

</section>

{/* WHY CHOOSE US */}

<section className="bg-slate-900 py-24 px-8">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center mb-20">

Why Travel With Us

</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-6">

Local Expertise

</h3>

<p className="text-gray-400">

Deep knowledge of Komodo destinations,
hidden gems, and best experiences.

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-6">

Professional Service

</h3>

<p className="text-gray-400">

Comfortable trip experience with
professional handling.

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl">

<h3 className="text-3xl font-bold mb-6">

Amazing Memories

</h3>

<p className="text-gray-400">

Beautiful moments,
sunsets,
snorkeling,
and island adventures.

</p>

</div>

</div>

</div>

</section>

{/* CTA */}

<section className="py-28 text-center">

<h2 className="text-6xl font-extrabold mb-8">

Ready For Your Komodo Journey?

</h2>

<a
href="https://wa.me/6281234567890"
target="_blank"
className="
bg-green-500
px-10
py-5
rounded-2xl
font-bold
text-black
"
>

BOOK NOW

</a>

</section>

<Footer/>

</main>

)

}