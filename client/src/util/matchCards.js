
export default function matchCards(user, cards) {

    //cycle through all cards in list and return if condition is true, based on user details passed in
    const result = cards.filter((card) => card.condition(user))

return result

}
