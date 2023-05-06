import { Button } from "@material-tailwind/react";
import { Link } from "@remix-run/react";

export default function About() {
    return (
        <main className="relative min-h-screen bg-gray-100 sm:flex sm:items-center sm:justify-center">
            <div className="max-w-screen-xl mx-auto pt-32 pb-18 md:flex">
                <div className="flex flex-col px-5 mb-20 md:w-1/2">
                    <span className="text-2xl mb-8">About Company</span>
                    <span className='text-6xl mb-8 font-[poppins] italic'>Professional Affordable Service</span>
                    <span className="mb-8">Peak Fencing has been serving our Southern Colorado community in Colorado Springs, Pueblo, Woodland Park, and the surrounding areas
                        since 2001. We offer both personal home and commercial custom fencing, fence install, and fencing repair services; using only the best
                        specialty products in the industry. We work with only the top suppliers and professionals in the industry to ensure that every fence
                        is carefully crafted with expert precision and quality, and will exceed the expectations of our clients in the most timely and efficient
                        manner. Our mission is to provide you with an effortless way to find the perfect fence for your home or business and exceed expectations
                        through our top quality customer service. Surround yourself with the best today by contacting Peak Fencing for your FREE estimate.
                    </span>
                    <Link to={"/contact"}>
                        <Button className="px-36" variant="outlined">Contact</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-11 grid-rows-11 px-5 md:w-1/2 pb-16">
                    <img className="row-start-1 row-span-6 col-start-1 col-span-6 self-center " src="https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <img className="row-start-2 row-span-6 col-span-6 col-end-11 self-center"  src="https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <img className="row-start-5 md:row-start-3 row-span-6 col-span-6 col-start-2 self-center"  src="https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        </main>
    );
}
