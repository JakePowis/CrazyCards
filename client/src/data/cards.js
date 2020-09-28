export default {
  cards: [
    {
      _id: "1",
      name: "Student Life",
      image: "images/studentLife.png",
      apr: 18.9,
      balanceTransferDur: 0,
      purchaseOfferDur: 6,
      credit: 1200,
      condition: function (user) {
        return user.occupation === "Student";
      },
    },
    {
      _id: "2",
      name: "Anywhere Card",
      image: "images/anywhereCard.png",
      apr: 33.9,
      balanceTransferDur: 0,
      purchaseOfferDur: 0,
      credit: 300,
      condition: function (user) {
        return user;
      },
    },
    {
      _id: "3",
      name: "Liquid Card",
      image: "images/liquidCard.png",
      apr: 33.9,
      balanceTransferDur: 12,
      purchaseOfferDur: 6,
      credit: 3000,
      condition: function (user) {
        return user.income > 16000;
      },
    },
  ],
};
