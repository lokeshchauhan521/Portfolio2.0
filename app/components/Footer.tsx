import Link from 'next/link'
import GithubImg from '@/app/assets/images/handles/github.png'
import LeetcodeImg from '@/app/assets/images/handles/leetcode.png'
import LinkedInImg from '@/app/assets/images/handles/linkedin.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-7 border-theme !border-0 !border-t-[1.5px]">
      <div className="flex-center max-w-6xl mx-auto px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-1 text-2xl group">
          <span className="text-xl group-hover:-rotate-90 group-hover:scale-125 transform ease-in-out duration-300">
            ✦
          </span>
          <span className="group font-medium">Deepak</span>
          <span className="text-xl group-hover:-rotate-90 group-hover:scale-125 transform ease-in-out duration-300">
            ✦
          </span>
        </Link>
        {/* max-w-6xl mx-auto px-4 py-3 lg:px-6 */}
        <div className="flex-center gap-2 ms-4">
          <a href="https://github.com/deepak252" target="_blank">
            <Image
              src={GithubImg}
              alt="github"
              className="size-8 me-2 dark:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-chaurasiya-dc"
            target="_blank"
          >
            <Image src={LinkedInImg} alt="linkedin" className="size-8" />
          </a>
          <a href="https://leetcode.com/u/deepakchaurasiya/" target="_blank">
            <Image src={LeetcodeImg} alt="leetcode" className="size-8" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
