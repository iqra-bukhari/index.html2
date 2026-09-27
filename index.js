my-ai-video/
    index.html
create videos from a simple text prompt
describe your video
Aspect ratio (landscape-16:9
             portraint-9:16)
include sound/music audio is reguested as part of the generated.
include
style.css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: #0b1020;
  color: #f7f8ff;
  min-height: 100vh;
}
.app {
  max-width: 900px;
  margin: auto;
  padding: 35px 18px 60px;
}
header {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 25px;
}
.logo {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: #6d5dfc;
  font-size: 25px;
}
h1 {
  margin: 0;
  font-size: 28px;
}
header p {
  margin: 5px 0;
  color: #aeb6cf;
}
.card {
  background: #131a2e;
  border: 1px solid #29324d;
  border-radius: 20px;
  padding: 22px;
  margin-bottom: 18px;
  box-shadow: 0 10px 35px #0003;
}
label {
  display: block;
  font-weight: 700;
  margin-bottom: 9px;
}
textarea,
select {
  width: 100%;
  background: #0d1324;
  color: #fff;
  border: 1px solid #34405e;
  border-radius: 12px;
  padding: 14px;
  font: inherit;
}
textarea {
  min-height: 150px;
  resize: vertical;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 16px;
}
.sound {
  padding: 12px 0;
}
.sound label {
  font-weight: 600;
}
.sound input {
  margin-right: 8px;
}
.sound small {
  color: #929bb6;
}
button {
  width: 100%;
  margin-top: 18px;
  padding: 15px;
  border: 0;
  border-radius: 13px;
  background: #6d5dfc;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
}
button:disabled {
  opacity: 0.55;
  cursor: wait;
}
.status {
  margin-top: 16px;
  padding: 13px;
  border-radius: 11px;
  background: #0d1324;
  color: #cbd3eb;
}
.hidden {
  display: none;
}
video {
  width: 100%;
  border-radius: 14px;
  background: #05070d;
  margin: 10px 0 15px;
  max-height: 650px;
}
.download {
  display: inline-block;
  background: #26314f;
  color: #fff;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 700;
}
.note {
  text-align: center;
  color: #7f89a5;
  font-size: 13px;
}
@media (max-width: 650px) {
  .grid {
    grid-template-columns: 1fr;
  }
  h1 {
    font-size: 23px;
  }
}
api/
    generate.js (Gemini API Key 4)
package.json
    {
  "name": "ai-video-generator",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "dependencies": {
    "@google/genai": "latest"
  }
}
.env.local

