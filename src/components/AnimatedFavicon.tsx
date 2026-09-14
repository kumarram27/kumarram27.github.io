"use client";

import { useEffect } from "react";
import { decompressFrames, parseGIF } from "gifuct-js";

export default function AnimatedFavicon() {
    useEffect(() => {
        let stopped = false;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        async function start() {
            try {
                const response = await fetch("/run.gif");

                if (!response.ok) {
                    throw new Error(`Failed to load favicon.gif: ${response.status}`);
                }

                const buffer = await response.arrayBuffer();

                const gif = parseGIF(buffer);
                const frames = decompressFrames(gif, true);

                if (!frames.length) {
                    throw new Error("No frames found in GIF");
                }

                const width = gif.lsd.width;
                const height = gif.lsd.height;

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                const canvasContext = canvas.getContext("2d");

                if (!canvasContext) {
                    throw new Error("Could not create canvas context");
                }

                const ctx: CanvasRenderingContext2D = canvasContext;

                let frameIndex = 0;

                const favicon =
                    document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
                    document.createElement("link");

                favicon.rel = "icon";

                if (!favicon.parentNode) {
                    document.head.appendChild(favicon);
                }

                const speed = 3;

                function renderFrame() {
                    if (stopped) return;

                    const frame = frames[frameIndex];

                    const imageData = ctx.createImageData(
                        frame.dims.width,
                        frame.dims.height,
                    );

                    imageData.data.set(frame.patch);

                    ctx.putImageData(
                        imageData,
                        frame.dims.left,
                        frame.dims.top,
                    );

                    favicon.href = canvas.toDataURL("image/png");

                    frameIndex = (frameIndex + 1) % frames.length;

                    const delay =
                        frame.delay > 0
                            ? (frame.delay * 10) / speed
                            : 50;

                    timeoutId = setTimeout(renderFrame, delay);
                }

                renderFrame();
            } catch (error) {
                console.error("Animated favicon failed:", error);
            }
        }

        start();

        return () => {
            stopped = true;

            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return null;
}