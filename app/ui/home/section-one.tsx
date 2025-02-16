import Link from 'next/link';

const products = [
  { name: "TN OS", url: "https://tnos.pages.dev/", content: "A website about a Linux distribution based on the Linux kernel.", },
  { name: "TN Vision", url: "https://tnvision.pages.dev/", content: "A website introducing computer vision services.", },
  { name: "TN GPT", url: "https://tngpt.vercel.app/", content: "A chatbot website using OpenAI API, Google Gemini API, Anthropic Claude API, xAI Grok API.", },
  { name: "TN News", url: "https://tnnews.pages.dev/", content: "A news website.", },
  { name: "TN Notes", url: "https://tnnotes.pages.dev/", content: "A notes website.", },
  { name: "TN Dashboard", url: "https://tndashboard.vercel.app/", content: "A dashboard website.", },
  { name: "TN Cake", url: "https://daisycake.pages.dev/", content: "A website about cake.", },
  { name: "TN Chain", url: "https://tnchain.vercel.app/", content: "A CDP Wallet Manager website.", },
  { name: "TN Tasks", url: "https://tntasks.pages.dev/", content: "A tasks website.", },
];

export default function SectionOne() {
  return (
  <>

  <section className="flex justify-center">
    <div className="m-8">
    <Link target="blank" href="https://github.com/tunguyenarea">
      <h1 className="text-center text-2xl md:text-4xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-bold text-transparent w-fit">Github.com/TuNguyenArea</h1>
    </Link>
    <p className="md:text-xl">I am a fan of NextJS, Cloudflare, Linux, Cyborg and Open Source.</p>
    <p className="md:text-xl">I love learning new technology, focusing on building tools that help people make their lives easier.</p>
    </div>
  </section>

  {products.map((product) => {
  return (
    <section key={product.name} className="m-6 md:m-8 p-3 bg-purple-100 border-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white">
      <Link target="blank" href={product.url}>
        <div>
          <h1 className="text-xl md:text-2xl text-left font-bold">{product.name}</h1>
          <p>{product.content}</p>
        </div>
      </Link>
    </section>
  );
  })}

  </>
  );
}
