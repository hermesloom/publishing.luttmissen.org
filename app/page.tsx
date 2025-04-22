import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Making the revolution irresistible
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Luttmissen Publishing stands for rediscoveries and
              experimentation, for ancient wisdom phrased in modern systems
              language, for the works which more people should know about, for
              rigurously breaking taboos, and for knowledge which has always
              been within us.
            </p>
            <div className="inline-block">
              <Link
                href="#catalogue"
                className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Luttmissen Publishing focuses on translations of groundbreaking
              works of their time, especially between German and English. Each
              translation is crafted with precision and care, preserving the
              author's original intent while making these important works
              accessible to new audiences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The selected translations—D.H. Lawrence's "The Rainbow", Silvio
              Gesell's "Natural Economic Order", and Theodor Reik's "From
              Suffering to Joy"—reflect a commitment to ideas that challenge
              conventional thinking. Lawrence explored the depths of human
              relationships and sexuality in ways that were revolutionary for
              his time, while Gesell questioned established economic systems and
              proposed alternatives that consider human welfare at their core.
              Reik's exploration of masochism and society delves into the
              paradoxical nature of human psychology, revealing how the search
              for happiness often leads through unexpected paths.
            </p>
            <p className="text-lg text-gray-700">
              Bringing these works across linguistic borders connects readers
              with perspectives that illuminate what it means to be
              human—desires, economic lives, psychological complexities, and the
              search for meaning—in ways that remain relevant across generations
              and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Catalogue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* D.H. Lawrence */}
            <div className="rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="mb-4">
                <div className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                  English / German
                </div>
                <h3 className="text-2xl font-bold">
                  The Rainbow / Der Regenbogen
                </h3>
                <p className="text-gray-500 mt-1">D. H. Lawrence</p>
              </div>
              <p className="text-gray-700 flex-grow mb-4 italic">
                "She saw in the rainbow the earth's new architecture, the old,
                brittle corruption of houses and factories swept away, the world
                built up in a living fabric of Truth, fitting to the
                over-arching heaven."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link
                  href="https://www.youtube.com/watch?v=YxxhBgQg9xk"
                  className="text-gray-600 font-medium inline-flex items-center border-b border-gray-600 pb-1 hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
                <Link
                  href="mailto:publishing@luttmissen.org"
                  className="text-black font-medium inline-flex items-center border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Buy now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Silvio Gesell */}
            <div className="rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="mb-4">
                <div className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                  German / English
                </div>
                <h3 className="text-2xl font-bold">
                  Die Natürliche Wirtschaftsordnung / Natural Economic Order
                </h3>
                <p className="text-gray-500 mt-1">Silvio Gesell</p>
              </div>
              <p className="text-gray-700 flex-grow mb-4 italic">
                "For labor is the only weapon of the civilized man in his
                'struggle for existence'."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link
                  href="https://archive.org/details/DasWunderVonWrglDEAD"
                  className="text-gray-600 font-medium inline-flex items-center border-b border-gray-600 pb-1 hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
                <Link
                  href="mailto:publishing@luttmissen.org"
                  className="text-black font-medium inline-flex items-center border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Buy now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Theodor Reik */}
            <div className="rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="mb-4">
                <div className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                  German / English
                </div>
                <h3 className="text-2xl font-bold">
                  Aus Leiden Freuden. Masochismus und Gesellschaft / From
                  Suffering to Joy: Masochism and Society
                </h3>
                <p className="text-gray-500 mt-1">Theodor Reik</p>
              </div>
              <p className="text-gray-700 flex-grow mb-4 italic">
                "The secret of human happiness is not in self-seeking but in
                self-forgetting."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link
                  href="https://en.wikipedia.org/wiki/Theodor_Reik"
                  className="text-gray-600 font-medium inline-flex items-center border-b border-gray-600 pb-1 hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
                <Link
                  href="mailto:publishing@luttmissen.org"
                  className="text-black font-medium inline-flex items-center border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Buy now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
            <Link
              href="mailto:publishing@luttmissen.org"
              className="text-xl md:text-2xl text-gray-700 hover:text-black transition-colors"
            >
              publishing@luttmissen.org
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-bold">Luttmissen Publishing</h2>
              <p className="text-gray-600 mt-1 text-xs">
                Bridging languages, sharing ideas.
              </p>
            </div>
            <div className="flex gap-8">
              <Link
                href="https://github.com/hermesloom/publishing.luttmissen.org"
                className="text-gray-600 hover:text-black transition-colors flex items-center text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Luttmissen Publishing. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
