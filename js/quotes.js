const quotes = [
  {
    quote:
      "거추장스러운 인간의 행동에 분노하는 일은 인도에 굴러온 돌을 보고 화내는 일만큼이나 어리석다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote: "현명한 자는 즐거운 것을 추구하지 않고 고통 없는 상태를 추구한다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "이 세상에는 운명에 맞서 갑옷을 입고 인간에 대항해 무장하는 불굴의 정신이 필요하다. 모든 인생은 투쟁이고 삶의 모든 단계는 논쟁의 연속이다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "어떤 일도 예민하게 받아들이거나 마음에 담아두고 내내 곱씹어서는 안 된다. 길 위에 놓인 돌멩이처럼 치워버려야 한다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "신중하면 손해와 상실을 막을 수 있고 관용을 베풀면 논쟁과 다툼을 피할 수 있다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "분노나 증오를 말이나 표정으로 나타내는 일은 쓸모없고, 위험하고, 어리석고, 가소롭다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "모든 불쾌한 일은 되도록 가볍게 받아들이고 단조롭고 절제된 방식으로 이해해야 한다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "다른 사람의 의견에 이의를 제기하지 마라. 대화할 때 아무리 우호적인 말이라도 지적하는 발언을 삼가야 한다.",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "허영심은 사람을 수다스럽게 하고 자존심은 침묵하게 한다. 침묵은 신중함의 문제이고 말은 허영심의 문제다. 원수가 알아선 안 될 일은 친구에게도 말하지 마라.",
    author: "Arthur Schopenhauer",
  },
  {
    quote: "모든 불행의 시작은 비교하는 것으로부터 시작된다.",
    author: "Arthur Schopenhauer",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
