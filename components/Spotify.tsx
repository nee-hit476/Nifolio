

const Spotify = () => {
  return (
    <div className="opacity-70 sm:w-[75%]">
        <div className="project-box bg-gray-400/10 cursor-pointer hover:bg-gray-300/10 transition-colors duration-100 border border-zinc-700 rounded-md py-3 px-2 mb-3 text-amber-50 my-3">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/2RtvqFqXJ67Rb2OcOoWyu2?utm_source=generator&theme=0"
        width="100%"
        height="160"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>

      </div>
    </div>
  );
};

export default Spotify;
