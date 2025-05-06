const idToName = {
  "123456789": "나",
  "987654321": "상대방"
};

document.getElementById("fileInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  const jsonData = JSON.parse(text.replace(/^.*?=\s*/, ''));
  const messages = [];

  jsonData.forEach(group => {
    group.dmConversation.messages.forEach(msg => {
      const data = msg.messageCreate;
      if (data) {
        const sender = idToName[data.senderId] || `ID:${data.senderId}`;
        const time = new Date(data.createdAt).toLocaleString();
        const text = data.text || "";
        messages.push({ sender, time, text });
      }
    });
  });

  // 시간순 정렬
  messages.sort((a, b) => new Date(a.time) - new Date(b.time));

  // 출력
  const container = document.getElementById("messages");
  container.innerHTML = "";
  messages.forEach(msg => {
    container.innerHTML += `
      <div class="message">
        <div class="sender">${msg.sender}</div>
        <div class="timestamp">${msg.time}</div>
        <div class="content">${msg.text}</div>
      </div>
    `;
  });
});
