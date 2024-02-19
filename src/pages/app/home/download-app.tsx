import appBg from '@/assets/app-bg.png'
import appleStoreButtonImage from '@/assets/apple-store-app.svg'
import googlePlayButtonImage from '@/assets/google-play-app.svg'

export const DownloadApp = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-stone-200 py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-6 self-center lg:items-start">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h3 className="max-w-2xl text-center font-[Poppins] text-4xl font-bold lg:text-left lg:text-5xl">
            Download our app to get most out of it
          </h3>

          <p className="max-w-xl text-center text-zinc-700 lg:text-left">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img
              src={googlePlayButtonImage}
              alt="google play download button"
            />

            <img
              src={appleStoreButtonImage}
              alt="apple store download button"
            />
          </div>
        </div>

        <img
          className="absolute bottom-0 right-0 hidden lg:flex"
          src={appBg}
          alt=""
        />
      </div>
    </section>
  )
}
