enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

enum SM {
  vk = "vk",
  fb = "facebook",
  inst = "instagram",
}

const social = SM.inst;
console.log(social);
