import { useEffect, useRef } from "react";

function YoutubeShorts() {
 const shorts = [
  "MJTjEl3VZZ8", // First
  "NdymT8y_ghU", // Second - Cute Outfit of the Day
  "COI8nEvZYak", // Third
  "ucQFx7Qme3k", // Fourth
];

  const playersRef = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
          return;
        }
        const existingScript = document.getElementById("youtube-api");

        if (!existingScript) {
          const script = document.createElement("script");
          script.id = "youtube-api";
          script.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(script);
        }
        window.onYouTubeIframeAPIReady = () => {
          resolve(window.YT);
        };
      });
    };
    loadYouTubeAPI().then((YT) => {
      shorts.forEach((video, index) => {
        playersRef.current[index] = new YT.Player(
          `youtube-player-${index}`,
          {
            videoId: video,

            playerVars: {
              rel: 0,
              modestbranding: 1,
            },

            events: {
              onStateChange: (event) => {
                if (event.data === YT.PlayerState.PLAYING) {
                  playersRef.current.forEach((player, playerIndex) => {
                    if (
                      player &&
                      playerIndex !== index &&
                      typeof player.pauseVideo === "function"
                    ) {
                      player.pauseVideo();
                    }
                  });
                }
              },
            },
          }
        );
      });
    });

    return () => {
      playersRef.current.forEach((player) => {
        if (player && typeof player.destroy === "function") {
          player.destroy();
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          const player = playersRef.current[index];

          // If card is not visible → pause video
          if (!entry.isIntersecting && player) {
            if (typeof player.pauseVideo === "function") {
              player.pauseVideo();
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="youtube-shorts">
      <div className="shorts-heading">
        <p>WATCH OUR LATEST</p>
        <h2>Fashion Shorts</h2>
      </div>

      <div className="shorts-container">
        {shorts.map((video, index) => (
          <div
            className="short-card"
            key={video}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div id={`youtube-player-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default YoutubeShorts;