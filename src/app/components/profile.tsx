import Image from 'next/image'
import Link from 'next/link'


export default function Profile() {

  return <div className='flex justify-center items-center flex-col'>
      <Image alt="profile photo" src="https://images.unsplash.com/photo-1549237511-6b64e006ce65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="400" height="400" />
      <h1>
        Hi, I am Syd.
      </h1>
      <p>I love coding.</p>
      <Link href="/contact" className="rounded-md bg-yellow-300 text-black px-3 py-2">Contact Me</Link>
    </div>

}
