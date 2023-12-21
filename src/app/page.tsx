import Image from 'next/image'
import Profile from './components/profile'
import FeaturedPosts from './components/featuredPosts'
import YouMayLike from './components/slidePosts'
import SlidePosts from './components/slidePosts'

export default function Home() {
  return(
    <section>
    <Profile></Profile>
    <FeaturedPosts></FeaturedPosts>
    <h1>
      You may like...
    </h1>
    <SlidePosts></SlidePosts>
    </section>
  )

}
