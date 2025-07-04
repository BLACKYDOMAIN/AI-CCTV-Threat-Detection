import React, { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

const HeatmapOverlay = ({ data }) => {
  const heatmapContainerRef = useRef(null);

  useEffect(() => {
    if (!heatmapContainerRef.current || !data || !data.length) return;

    const heatmapInstance = h337.create({
      container: heatmapContainerRef.current,
      radius: 30,
      maxOpacity: 0.6,
      minOpacity: 0.2,
      blur: 0.75,
    });

    const heatmapData = {
      max: 100,
      data: data.map((point) => ({
        x: point.x,
        y: point.y,
        value: point.intensity || 50,
      })),
    };

    heatmapInstance.setData(heatmapData);
  }, [data]);

  return (
    <div
      ref={heatmapContainerRef}
      className="w-full h-[500px] border border-green-500 rounded-md relative overflow-hidden"
    >
      <p className="absolute z-10 px-2 py-1 text-white rounded top-2 left-2 bg-black/60">
        Threat Movement Heatmap
      </p>
    </div>
  );
};

export default HeatmapOverlay;
