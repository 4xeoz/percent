import { Policy } from "@/lib/data"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 font-mono">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
        <div className="text-xs sm:text-sm text-center text-gray-600">Last Updated: 2/12/2025</div>
        {Policy.map((section, index) => (
          <section key={index} className="space-y-2 sm:space-y-3 py-4 sm:py-5 border-b border-gray-200 last:border-b-0">
            <h2 className="text-2xl sm:text-3xl font-semibold">{section.title}</h2>
            <p className="text-sm sm:text-base leading-relaxed">{section.data}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

