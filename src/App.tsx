import React, { Suspense, lazy } from 'react';

const VideoEditor = lazy(() => import('video_editor_remote/VideoEditor'));

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Host Application</h1>
      <p>This is the host app loading the video editor as a micro frontend</p>

      <div style={{
        border: '2px solid #2196F3',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px'
      }}>
        <h2>Video Editor (Remote MFE)</h2>
        <Suspense fallback={<div>Loading Video Editor...</div>}>
          <VideoEditor />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
