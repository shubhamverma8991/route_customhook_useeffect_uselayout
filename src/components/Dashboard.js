import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function Dashboard() {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight;
      setContentHeight(height);
    }
  }, []);

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p>This is some content that may change in height.</p>
        <p>More content here.</p>
        <p>Even more content.</p>
      </div>
      <div
        style={{
          height: `${contentHeight}px`,
          border: "1px solid blue",
          padding: "10px",
        }}
      >
        This div's height matches the content's height.
      </div>
    </div>
  );
}
