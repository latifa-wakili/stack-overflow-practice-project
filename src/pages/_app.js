import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex w-full justify-center items-center flex-col min-h-screen m-0 p-0">
      <div className="min-h-screen w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
