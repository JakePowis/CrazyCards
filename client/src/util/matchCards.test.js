import matchCards from './matchCards';
import cardData from '../data/cards';


//USER ONE TESTS - Ollie Murphree

let testUserOne = {
    "prefix": "Mr",
    "firstName": "Ollie",
    "lastName": "Murphree",
    "dob": "01/07/1970",
    "occupation": "Full Time",
    "houseNumber": "700",
    "postCode": "BS14 9PR",
    "income": "34000"
}


let testCards = cardData.cards

test('presents Ollie (test user #1) with two cards', () => {
    //test returns two cards
    expect(matchCards(testUserOne, testCards).length).toBe(2);
    //card offered is Anywhere Card
    expect(matchCards(testUserOne, testCards)[0].name).toBe("Anywhere Card")
    //card offered is Liquid Card
    expect(matchCards(testUserOne, testCards)[1].name).toBe("Liquid Card")
    //Total credit limit offere is 3300
    expect(matchCards(testUserOne, testCards).reduce((a, cards) => a+cards.credit, 0)).toBe(3300)
  });



//USER TWO TESTS - Elizabeth Edmunson


  let testUserTwo = {
    "prefix": "Miss",
    "firstName": "Elizabeth ",
    "lastName": "Edmundson",
    "dob": "29/06/1984",
    "occupation": "Student",
    "houseNumber": "177",
    "postCode": "PH12 8UW",
    "income": "17000"
}


  test('presents Elizabeth (test user #2) with three cards', () => {
    //test returns two cards
    expect(matchCards(testUserTwo, testCards).length).toBe(3);
    //card offered is Student Life
    expect(matchCards(testUserTwo, testCards)[0].name).toBe("Student Life")
    //card offered is Anywhere Card
    expect(matchCards(testUserTwo, testCards)[1].name).toBe("Anywhere Card")
    //card offered is Liquid Card
    expect(matchCards(testUserTwo, testCards)[2].name).toBe("Liquid Card")
    //Total credit limit offere is 4500
    expect(matchCards(testUserTwo, testCards).reduce((a, cards) => a+cards.credit, 0)).toBe(4500)
  });


//USER THREE TESTS - Trevor Rieck


  let testUserThree = {
    "prefix": "Mr",
    "firstName": "Trevor",
    "lastName": "Rieck",
    "dob": "07/09/1990",
    "occupation": "Part Time",
    "houseNumber": "343",
    "postCode": "TS25 2NF",
    "income": "15000"
}


  test('presents Trevor (test user #3) with three cards', () => {
    //test return one card
    expect(matchCards(testUserThree, testCards).length).toBe(1);
    //card offered is Anywhere Card
    expect(matchCards(testUserThree, testCards)[0].name).toBe("Anywhere Card")
    //Total credit limit offere is 300
    expect(matchCards(testUserThree, testCards).reduce((a, cards) => a+cards.credit, 0)).toBe(300)
  });


  