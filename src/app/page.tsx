import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl  font-mono text-sm flex flex-col items-center ">
        <h1 className="text-5xl bold  font-bold">1. What is React?</h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building reusable UI components.
          It is used for developing complex and interactive web and mobile UI.
          Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

        </h2>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl bold  font-bold">2. What are the features of React? </h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          Major features of React are listed below:
          <ul className="list-disc">
            <li>It uses the virtual DOM instead of the real DOM.</li>
            <li>It uses server-side rendering.</li>
            <li>It follows uni-directional data flow or data binding.</li>
          </ul>

        </h2>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl bold  font-bold">List some of the major advantages of React.</h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building reusable UI components.
          It is used for developing complex and interactive web and mobile UI.
          Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

        </h2>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl bold  font-bold">1. What is React?</h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building reusable UI components.
          It is used for developing complex and interactive web and mobile UI.
          Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

        </h2>

        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl bold  font-bold">1. What is React?</h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building reusable UI components.
          It is used for developing complex and interactive web and mobile UI.
          Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

        </h2>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl bold  font-bold">1. What is React?</h1>
        <br />
        <h2 className="text-2xl bold  font-bold">
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building reusable UI components.
          It is used for developing complex and interactive web and mobile UI.
          Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

        </h2>


      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


    </main>
  );
}
