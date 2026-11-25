"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playbackNotice, setPlaybackNotice] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const pauseWhenHidden = () => {
      if (document.hidden) video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pauseWhenHidden);
    };
  }, []);

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    setLoading(true);
    setPlaybackNotice("");
    try {
      await video.play();
      video.focus();
    } catch {
      setLoading(false);
      setPlaybackNotice("Use the video controls to start playback.");
    }
  }

  return (
    <div className="architecture-video-frame">
      <video
        ref={videoRef}
        className="architecture-video"
        width={720}
        height={1296}
        controls
        muted
        playsInline
        preload="none"
        poster="/images/architecture-film-poster.jpg"
        tabIndex={0}
        aria-label="27-second architectural inspiration film: land, contemporary homes, and interiors"
        aria-describedby="architecture-video-description"
        onPlay={() => {
          setStarted(true);
          setLoading(false);
          setPlaybackNotice("");
        }}
        onError={() => {
          setFailed(true);
          setLoading(false);
        }}
      >
        <source
          src="/videos/architecture-film-mobile.mp4"
          type="video/mp4"
          media="(max-width: 640px)"
        />
        <source src="/videos/architecture-film.mp4" type="video/mp4" />
        Your browser does not support video playback.{" "}
        <a href="https://www.pinterest.com/pin/618611698867111273/">
          Watch the film on Pinterest.
        </a>
      </video>
      <p className="sr-only" id="architecture-video-description">
        Silent visual film showing residential land, a contemporary villa in
        changing weather, and furnished living and dining spaces. Includes a
        brief lightning scene.
      </p>
      {!started && !failed && (
        <div className="film-play-overlay">
          <button
            type="button"
            className="film-play-button"
            onClick={play}
            disabled={loading}
            aria-label="Play the 3D architecture film"
          >
            <span className="film-play-icon">
              <Play size={24} fill="currentColor" aria-hidden="true" />
            </span>
            <span>{loading ? "Loading film…" : "Play the 3D film"}</span>
          </button>
          {playbackNotice && (
            <p role="status" className="film-playback-notice">
              {playbackNotice}
            </p>
          )}
        </div>
      )}
      {failed && (
        <div className="film-error" role="status">
          <p>The film couldn’t load.</p>
          <a
            href="https://www.pinterest.com/pin/618611698867111273/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Watch on Pinterest
          </a>
        </div>
      )}
    </div>
  );
}
