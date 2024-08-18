// index.js
const Pusher = require('pusher');

// Pusherの設定
const pusher = new Pusher({
  appId: '1851248',
  key: '66bdac555308ef2ecf22',
  secret: 'a23c290cc5393afc0981',
  cluster: 'ap3',
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
