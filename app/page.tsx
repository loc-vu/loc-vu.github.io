import profilePic from '/images/profile_pic.jpg'
import Image from 'next/image';

import { BlogPosts } from 'app/components/posts'
import {PortfolioGrid} from 'app/components/portfolio_grid'

export default function Page() {
  return (
    <section>
      {/* Profile Picture Placeholder */}
      {/* TODO: Fix image not showing up */}
      <div className="w-[250px] h-[250px] mb-10 bg-gray-300 rounded-full">
        <img 
        className="rounded-full" 
        src={`/images/profile_pic.jpg`}
        width={250} height={250}
        alt="Profile" />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me - Website under contruction
      </h1>
      <p className="mb-4">
        {`Hi! My name is Loc Vu, I graduted from UCSD with a B.S. in Computer Science and am currently working
          as a Software Engineer at Intel.`}
      </p>
      <div className="my-8">
        <PortfolioGrid />
        <BlogPosts />

      </div>
    </section>
  )
}
