// 1. app.js ში მოძებნეთ წინადადება: "TODO: ამის ქვემოთ არის ინსტრუქცია" და
//  ამ ხაზის ქვემოთ ნახავთ დაუსრულებელ ფუნქციებს სადაც კომენტარების სახით არის ახსნილი 
// რა როგორ უნდა გააკეთოთ, სადაც TODO წერია ან დასასრულებელია ან გასაკეთებელი რაღაც.

//  2. შევქმნათ მომხმარებლების ცხრილი html table ან div ების გამოყენებით (ცხრილი.png)-ს მსგავსად


// 3. ცხრილში უნდა გამოვიტანოთ getUsers ფუნქციიდან დაბრუნებული მომხმარებლების დატა.


// 4. New User ღილაკზე დაჭერისას უნდა გამოჩნდეს მოდალი სადაც იქნება ფორმი (ფორმი-მოდალში.png). Submit-ზე გაიგზავნოს სერვერზე ინფორმაცია


// 5. Delete ღილაკზე დაჭერისას უნდა წაიშალოს მომხმარებელი როგორც html იდან ასევე სერვერს გაეგზავნოს წაშლის მოთხოვნა.


// 6. Edit ღილაკზე დაჭერისას უნდა ამოვიდეს მოდალი, (ფორმი-მოდალში.png) მაგრამ, იმ მონაცემით შევსებული რომელ მომხარებელზეც დავკლიკე.  
// Submit-ზე გაიგზავნოს სერვერზე ინფორმაცია არა შექმნის არამედ რედაქტირების.





const signupForm = document.querySelector('#user-signup-form');
// const username = document.querySelector('#username');
const email = document.querySelector('#email');
const personal_number = document.querySelector('#personal_number');
const mobile_number = document.querySelector('#mobile_number');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const zip = document.querySelector('#zip');
const gender = document.querySelector('#gender');
const status = document.querySelector('#status');
const user_id = document.querySelector('#user_id');
// const position = document.querySelector('#position');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    id: user_id.value,
    first_name: first_name.value,
    last_name: last_name.value,
    zip: zip.value,
    mobile: mobile_number.value,
    pn: personal_number.value,
    gender: gender.value,
    email: email.value,
    status: status.value,
  };
  // createUser(userData); TODO: თუ user_id.value არის ცარიელი მაშინ უნდა შევქმნათ
  // updateUser(userData); TODO: თუ user_id.value არის მაშინ უნდა დავაედიტოთ
  console.log('Save user');
});

// TODO: დაასრულეთ შემდეგი ფუნქციები
// დაგჭირდებათ მოდალი სადაც ფორმი უნდა ჩასვათ
function renderUsers(usersArray) {
  // TODO: usersArray არის სერვერიდან დაბრუნებული ობიექტების მასივი
  // TODO: ამ მონაცმების მიხედვით html ში ჩასვით ცხრილი როგორც "ცხრილი.png" შია
  console.log(usersArray);
  userActions(); // ყოველ რენდერზე ახლიდან უნდა მივაბათ ივენთ ლისნერები
}

// TODO: დაასრულე
function userActions(){
  // 1. ცხრილში ღილაკებზე უნდა მიამაგროთ event listener-ები
  // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა როგორც "ცხრილი.png" ში ჩანს
  // 3. id შეინახეთ data-user-id ატრიბუტად ღილაკებზე
  // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deleteUser ფუნქციის მეშვეობით) 
  // სერვერზე და გადაეცეს id
  // 5. ეიდტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი
  // ეიდტის ღილაკზე უნდა გამოიძახოთ getUser ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას (ობიექტს და არა მასივს)
  // ეს დატა უნდა შეივსოს ფორმში
}

async function getUsers(){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/index');
    const users = await response.json();
    renderUsers(users);
  } catch (e){
    console.log('Error - ', e);
  }
}
getUsers();
/**
 *
 * შეგიძლიათ await response.json() დააბრუნოთ და საიდანაც გამოიძახებთ ამ ფუნქციას,
 * ისიც async უნდა იყოს და იქაც await უნდა დაუწეროთ გამოძახების წინ რომ დატა დაგიბრუნოთ
 *
 * @param userId
 * @returns {Promise<void>}
 */
async function getUser(userId) {
  try {
    // TODO: დაასრულე
    // `http://api.kesho.me/v1/user-test/view?id=${userId}`
    // const data = await response.json();
  } catch (e) {
    console.log('Error - ', e);
  }
}
async function createUser(userData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/create', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
    });
    await response.json();
    getUsers(); // TODO: შენახვის ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
  }catch (e){
    console.log('Error - ', e);
  }
}
async function updateUser(userObject) {
  // TODO: დაასრულე
  // method POST http://api.kesho.me/v1/user-test/update?id=userObject.id
}
async function deleteUser(userId) {
  // TODO დაასრულე
  // method DELETE `http://api.kesho.me/v1/user-test/delete?id=${userId}`
}



//open modal

 const modalOpenBtn = document.querySelector('#open-modal');
 modalOpenBtn.addEventListener('click', () => {
   openModal('.my-modal');
 })

 function openModal(modalSelector){
   const modalNode = document.querySelector(modalSelector);
   modalNode.classList.add('visible');
   const modalCloseBtn = modalNode.querySelector('.modal-close');
   modalCloseBtn.addEventListener('click', () => {
     closeModal(modalSelector)
   })
 }

 function closeModal(modalSelector){
   const modalNode = document.querySelector(modalSelector);
   modalNode.classList.remove('visible');
 }






















