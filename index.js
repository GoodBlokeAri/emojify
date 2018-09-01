var stronkEmojis = ["🙏🏽", "👐",
                    "🏽", "🙌",
                    "🏽", "💪",
                    "😪", "😤",
                    "😷", "😈",
                    "😝", "😫",
                    "💦", "🤸🏿‍♀️",
                    "🏋🏿‍♀️", "🎉",
                    "💯", "🔥"];

function emojify(str)
{
    var emoji       = stronkEmojis[Math.floor(Math.random() * stronkEmojis.length)];
    var emojiText   = str.replace(/\s+/g, emoji);
    document.getElementById('test').value = emojiText;
}
