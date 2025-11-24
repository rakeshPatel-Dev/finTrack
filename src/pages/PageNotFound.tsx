import { SearchX } from "lucide-react"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="dark:bg-[#102218] bg-[#f6f8f7]">
      <main className="flex-1 flex items-center justify-center">
  <div className="flex flex-col items-center gap-6 px-4 py-6 text-center">
    <div className="text-[#13ec6d]/30 -mb-8">
      <SearchX size={150} />
    </div>
    <div className="flex max-w-[480px] flex-col items-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-9xl font-black tracking-tighter text-[#13ec6d]">
          404
        </h1>
        <p className="text-white text-2xl font-bold leading-tight tracking-tight">
          Oops! Page Not Found
        </p>
        <p className="text-gray-400 text-base font-normal leading-normal max-w-[480px] text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link  to="/" className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13ec6d] text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#13ec6d]/80 transition-colors">
        Return to Dashboard
      </Link>
    </div>
  </div>
</main>

    </div>
  )
}

export default PageNotFound
