import Link from "next/link";

export default function DropDown() {

  return (
    <div className="absolute top-10 bg-white border p-2 shadow-md rounded-lg w-72">
      <Link href="/Stack Overflow for Teams">
        <div className="mb-2 hover:bg-gray-300 p-2 rounded-md">
          <h1 className="text-black">Stack Overflow for Teams</h1>
          <p className="leading-5 ">
            Where developers & technologists share private knowledge with
            coworkers
          </p>
        </div>
      </Link>

      <Link href="/Advertising-&-Talent">
        <div className="mb-2 p-2 hover:bg-gray-300 rounded-md border-b ">
          <h1 className="text-black">Advertising & Talent</h1>
          <p className="leading-5">
            Reach devs & technologists worldwide about your product, service or
            employer brand
          </p>
        </div>
      </Link>

      <Link href="/OverflowAI">
        <div className=" mb-2 p-2 hover:bg-gray-300 rounded-md leading-5 ">
          <h1 className="text-black">OverflowAI</h1>
          <p>GenAI features for Teams</p>
        </div>
      </Link>

      <Link  href="/OverflowAPI">
        <div className="border-b pb-2 mb-2 p-2 hover:bg-gray-300 rounded-md leading-5">
          <h1 className="text-black">OverflowAPI</h1>
          <p>Train & fine-tune LLMs</p>
        </div>
      </Link>

      <Link  href="/Labs">
        <div className=" border-b mb-2 p-2 hover:bg-gray-300 rounded-md leading-5">
          <h1 className="text-black">Labs</h1>
          <p>The future of collective knowledge sharing</p>
        </div>
      </Link>

      <Link  href="/About-the-company">
        <div className="mb-4 pl-2 rounded-md">
          <p className="mb-3 hover:text-black ">About the company</p>
          <p className="hover:text-black ">Visit the blog</p>
        </div>
      </Link>
    </div>
  );
}
