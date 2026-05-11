const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'AI Lyric Studio Backend Running'
  });
});

app.post('/api/render', (req, res) => {
  res.json({
    success: true,
    videoUrl: 'https://example.com/video.mp4'
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
