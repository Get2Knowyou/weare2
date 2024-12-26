//방명록 작성 폼 보이게 하기기
document.getElementById("openWrite").addEventListener("click", function () {
    document.getElementById("sendMsg").classList.toggle('disBlock');
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {doc,deleteDoc} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3O1Ge73lYDpFLgHiyvu7j6opvOYHZgBU",
    authDomain: "weare2-99bb5.firebaseapp.com",
    projectId: "weare2-99bb5",
    storageBucket: "weare2-99bb5.firebasestorage.app",
    messagingSenderId: "325409435675",
    appId: "1:325409435675:web:f7309d3f8163e6b02548be",
    measurementId: "G-D5WVPX205K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);  // Firestore 초기화

//로드시 데이터 가져오기
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "visitors"));
    querySnapshot.forEach((doc) => {
        const visitor = doc.data();
        createLi(visitor);
    });
}

fetchData(); // 데이터 가져오기 실행

//추가 li태그 공통
function createLi(visitor) {
    const commentList = document.getElementById("commentList");
    let li = document.createElement("li");
    li.innerHTML = `
    <p class="name">${visitor.name}</p>
    <p class="memo">${visitor.message}</p>
    <button class="deleteBtn">삭제</button>`;
    commentList.appendChild(li);
}

//방명록 작성
const gestForm = document.getElementById("sendMsg").addEventListener("submit", async function (e) {
    e.preventDefault();
    const doc = {
        name: e.target.name.value,
        pw: e.target.pw.value,
        message: e.target.message.value
    };
    await addDoc(collection(db, "visitors"), doc);
    let name = document.getElementById("userId").value;
    let password = document.getElementById("userPw").value;
    let message = document.getElementById("msg").value;


    //유효성 검사
    if (name && message && password) {
        //컴포넌트 생성
        let li = document.createElement("li");
        li.innerHTML = `
        <p class="name">${name}</p>
        <p class="memo">${message}</p>
        <button class="deleteBtn">삭제</button>`;
        document.getElementById("commentList").prepend(li);
    } else {
        if (!name) {
            alert("작성자를 입력하세요.");
            return;
        }
        if (!message) {
            alert("내용을 입력하세요.");
            return;
        }
        if (!password) {
            alert("비밀번호를 입력하세요.");
            return;
        }
    }
    alert('작성완료!')


    // 값 비워주기
    e.target.name.value = '';
    e.target.pw.value = '';
    e.target.message.value = '';
})

//삭제버튼
async function deleteLi(id,pw,li){
    const userPw = prompt("비밀번호를 입력하세요");

    if( userPw !== pw){
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }
}

//삭제버튼
$("#deletebtn").click(async function () {
    let goal = $('${goalId}').val();
    console.log(goal);
    
    await deleteDoc(doc(db, "goals", "goal"));
    alert('삭제 완료!');
    window.location.reload();
})