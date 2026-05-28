import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TripCard from "@/components/TripCard"

export default function Trips(){

return(

<main className="bg-slate-950 text-white min-h-screen">

<Navbar/>

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
backgroundImage:"url('/tripshero.jpg')"
}}
>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative text-center">

<h1 className="text-6xl md:text-8xl font-extrabold mb-6">

Our Trips

</h1>

<p className="text-xl text-gray-300">

Choose your perfect Komodo adventure

</p>

</div>

</section>

<section className="max-w-7xl mx-auto py-24 px-8">

<div className="grid md:grid-cols-2 gap-16">

<TripCard
title="Open Trip Komodo"
image="/komodo4.jpg"
desc={`
3D2N Open Trip experience.

Visit Padar Island,
Pink Beach,
Taka Makassar
& snorkeling spots.

Perfect for solo traveler
or friends.
`}
link="/trips/open-trip"
/>

<TripCard
title="Private Trip Komodo"
image="/komodo3.jpg"
desc={`
Exclusive private journey
with flexible itinerary,
premium service
and unforgettable
island adventure.
`}
link="/trips/private-trip"
/>

<TripCard
title="Luxury Sailing"
image="/trip4.jpg"
desc={`
Luxury phinisi experience
with sunset dinner,
premium cabin,
and cinematic
Komodo scenery.
`}
link="/trips/luxury-sailing"
/>

<TripCard
title="One Day Trip"
image="/tripshero.jpg"
desc={`
Short escape around
Labuan Bajo.

Perfect for quick
island hopping experience.
`}
link="/trips/open-trip"
/>

</div>

</section>

<section className="bg-green-500 py-24 text-center">

<h2 className="text-6xl font-extrabold text-black mb-10">

Ready To Sail?

</h2>

<a
href="https://wa.me/6281234567890"
target="_blank"
className="
bg-black
text-white
px-10
py-5
rounded-2xl
font-bold
"
>

BOOK YOUR TRIP

</a>

</section>

<Footer/>

</main>

)

}