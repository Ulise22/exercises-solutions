function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourMin = yourLeft > yourRight ? yourRight : yourLeft;
    let yourMax = yourLeft > yourRight ? yourLeft : yourRight;
    let friendsMin = friendsLeft > friendsRight ? friendsRight : friendsLeft;
    let friendsMax = friendsLeft > friendsRight ? friendsLeft : friendsRight;
    
    return yourMin == friendsMin && yourMax == friendsMax;
}
