import React from "react";


export default function SunlightLevelBar({ level }) {
    const totalBars = 5;

    const colors = ["#94ba78", "#B2CA6E", "#D3DE84", "#EEE47A", "#F9DA76"];
  
    return (
      <div style={{ display: 'flex', gap: '5px' }}>
        {Array.from({ length: totalBars }, (_, i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: '20px',
              backgroundColor: i < level ? colors[i] : '#ccc',
              borderRadius: '3px'
            }}
          ></div>
        ))}
      </div>
    );
  }
  