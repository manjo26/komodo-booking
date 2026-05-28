import Link from "next/link"

export default function TripCard({

title,
desc,
image,
link="#"

}){

return(

<div className="bg-white/5 rounded-3xl overflow-hidden">

<img
src={image}
alt={title}
className="w-full h-80 object-cover"
/>

<div className="p-8">

<h2 className="text-3xl font-bold mb-4">

{title}

</h2>

<p className="text-gray-400 mb-6 whitespace-pre-line">

{desc}

</p>

<Link href={link}>

<button className="bg-green-500 px-6 py-3 rounded-xl">

View Details

</button>

</Link>

</div>

</div>

)

}