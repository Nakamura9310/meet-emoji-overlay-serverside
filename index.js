// index.js
const Pusher = require('pusher');

// Pusherの設定
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

exports.handler = async (event) => {
  // イベントから絵文字データを取得
  const { emoji } = JSON.parse(event.body);

  // Pusherにイベントを発行
  pusher.trigger('emoji-channel', 'emoji-click', { emoji });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Emoji sent' }),
  };
};
