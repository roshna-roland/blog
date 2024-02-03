import './globals.css'
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
   
      <div className="text-center bg-yellow-300 p-8 my-6 rounded-md  ">
        {/* <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        /> */}
        <Link href="/">
          <h1 className="text-3xl text-white font-bold m-3">Osheen&apos;s Diary</h1>
        </Link>
        <p className="text-white"> Tech diary. 💻</p>
      </div>
  
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by me </h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className=" w-full px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}