export default function IntroSection() {
  return (
    <section className='flex flex-col items-center mb-12'>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/vid/intro_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
