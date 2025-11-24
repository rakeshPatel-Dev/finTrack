import { Mail, Phone } from 'lucide-react'
const Contact = () => {
    return (
        <div className=" bg-[#f6f8f7] dark:bg-[#102218]">
            <div className='max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 flex flex-1 justify-center py-5'>
                <main className="grow py-10 px-4">
                    <div className="flex flex-wrap justify-between gap-3 mb-10">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Get in Touch
                            </p>
                            <p className="text-[#92c9a9] text-base font-normal leading-normal">
                                Have a question, feedback, or need support? We'd love to hear from
                                you.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-white text-base font-medium leading-normal pb-2">
                                            Your Name
                                        </p>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#13ec6d]/50 border border-[#13ec6d] bg-[#193324] focus:border-[#13ec6d] h-14 placeholder:text-[#92c9a9] p-[15px] text-base font-normal leading-normal"
                                            placeholder="Enter your full name"
                                            defaultValue=""
                                        />
                                    </label>
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-white text-base font-medium leading-normal pb-2">
                                            Email Address
                                        </p>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#13ec6d]/50 border border-[#13ec6d] bg-[#193324] focus:border-[#13ec6d] h-14 placeholder:text-[#92c9a9] p-[15px] text-base font-normal leading-normal"
                                            placeholder="you@example.com"
                                            type="email"
                                            defaultValue=""
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">
                                        Subject
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#13ec6d]/50 border border-[#13ec6d] bg-[#193324] focus:border-[#13ec6d] h-14 placeholder:text-[#92c9a9] p-[15px] text-base font-normal leading-normal"
                                        placeholder="What is this about?"
                                        defaultValue=""
                                    />
                                </label>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">
                                        Message
                                    </p>
                                    <textarea
                                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#13ec6d]/50 border border-[#13ec6d] bg-[#193324] focus:border-[#13ec6d] min-h-[160px] placeholder:text-[#92c9a9] p-[15px] text-base font-normal leading-normal"
                                        placeholder="Write your message here..."
                                        defaultValue={""}
                                    />
                                </label>
                                <button
                                    className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#13ec6d] text-[#102218] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors"
                                    type="submit"
                                >
                                    <span className="truncate">Send Message</span>
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="bg-[#193324] border border-[#13ec6d] rounded-xl p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#234833] rounded-full p-3 flex items-center justify-center">
                                                <Mail color='#13ec6d'/>
                                            </div>
                                            <div>
                                                <p className="text-[#92c9a9] text-sm">Email us</p>
                                                <a
                                                    className="text-white font-medium hover:text-[#13ec6d] transition-colors"
                                                    href="mailto:support@expensetracker.com"
                                                >
                                                    support@expensetracker.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#234833] rounded-full p-3 flex items-center justify-center">
                                                <Phone color='#13ec6d'/>
                                            </div>
                                            <div>
                                                <p className="text-[#92c9a9] text-sm">Call us</p>
                                                <a
                                                    className="text-white font-medium hover:text-[#13ec6d] transition-colors"
                                                    href="tel:+11234567890"
                                                >
                                                    +1 (123) 456-7890
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                    <div className="flex items-center gap-4">
                                        <a
                                            className="text-[#92c9a9] hover:text-[#13ec6d] transition-colors"
                                            data-alt="Twitter social media link"
                                            href="#"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a
                                            className="text-[#92c9a9] hover:text-[#13ec6d] transition-colors"
                                            data-alt="GitHub social media link"
                                            href="#"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            className="text-[#92c9a9] hover:text-[#13ec6d] transition-colors"
                                            data-alt="LinkedIn social media link"
                                            href="#"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Contact
