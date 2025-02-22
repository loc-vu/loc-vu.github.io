import Link from "next/link";
import Image from 'next/image';

const portfolioItems = [
  { id: "bls_dashboard", title: "BLS Dashboard", image: `/images/project1.jpg`, link: "https://github.com/loc-vu/projects_home" },
  { id: "yt_trend", title: "YouTube Trend Analysis", image: `/images/project2.jpg`, link: "https://github.com/loc-vu/yt-trends" },
];

export function PortfolioGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <a key={item.id} href={item.link} className="bg-white p-4 my-6 rounded-lg shadow-md hover:scale-105 transition-transform place-items-center">
              {/* <Image 
              src={item.image} 
              alt={item.title} 
              width={100}
              height={100}
              className="object-cover rounded-md" 
              /> */}
              <h2 className="text-black font-bold mt-2">{item.title}</h2>
            </a>
          ))}
        </div>
      )
}
