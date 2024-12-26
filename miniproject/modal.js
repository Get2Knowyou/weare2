document.addEventListener("DOMContentLoaded", function () {
  const teamContainer = document.querySelector(".team-container");
  const imagePath = "./image/";

  // 프로필
  const members = [
    {
      name: "김규철",
      github: `${imagePath}github-remove.png`,
      velog: `${imagePath}velog-remove.png`,
      githubLink: "https://github.com/chillax96/chillax96.github.io",
      velogLink: "https://velog.io/@chillax96/posts",
      backgroundImage: `${imagePath}q.jpg`,
      age: 23,
      advantages: "끈기 있다.",
      style: "꼼꼼하다.",
      tmi: "더위를 많이 타서 여름이 힘들다...",
      imgSrc: `${imagePath}q.jpg`,
    },
    {
      name: "김동우",
      github: `${imagePath}github-remove.png`,
      velog: `${imagePath}velog-remove.png`,
      githubLink: "https://github.com/noodlewd",
      velogLink: "https://velog.io/@duddlfkd02/posts",
      backgroundImage: `${imagePath}w.jpg`,
      age: 26,
      advantages: "해야하는 일에 대해 계획성 있게 처리 가능해요",
      style: "겁이 많지만 악바리로 해내는 스타일",
      tmi: "빨래를 했는데 비가 옵니다...",
      imgSrc: `${imagePath}w.jpg`,
    },
    {
      name: "강혜린",
      github: `${imagePath}github-remove.png`,
      velog: `${imagePath}tstory-remove.png`,
      githubLink: "https://github.com/hyerin-kang",
      tistroyLink: "https://rinny01.tistory.com/",
      backgroundImage: `${imagePath}r.jpg`,
      age: 28,
      advantages: "궁금증이 정말 많아서 이것저것 도전해본다.",
      style:
        "비전공자라 굉장히 꼼꼼하게 찾아보지만 결국엔 GPT 의 도움을 받는다.",
      tmi: "24시간 에어컨 틀고 있어서 전기세가 걱정됩니다. 그리고 지금 음악 듣고 싶네요.",
      imgSrc: `${imagePath}r.jpg`,
    },
    {
      name: "조영현",
      github: `${imagePath}github-remove.png`,
      velog: `${imagePath}tstory-remove.png`,
      githubLink: "https://github.com/joyounghyun550/sparta",
      tistoryLink: "https://yyy3489.tistory.com/",
      backgroundImage: `${imagePath}e.jpg`,
      age: 30,
      advantages: "마음먹은건 어떻게 해서든 꼭 해내요!",
      style: "계획적이고 체계적인걸 좋아하는 스타일",
      tmi: "강아지가 편식을 해요... 배가 불렀나봐요..",
      imgSrc: `${imagePath}e.jpg`,
    },
  ];

  members.forEach((member, idx) => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "member";

    memberDiv.innerHTML = `
            <div class="photo member_content" id="member_content_${idx}">
                <img src="${member.backgroundImage}" alt="${member.name}">
                <div class="overlay">${member.name}</div>
            </div>
            <div class="icons">
            <span class='background_name'>${member.name}</span>
                <a href="${member.githubLink}" target="_blank"><img src="${
      member.github
    }" alt="GitHub"></a>
                <a href="${member.velogLink}" target="_blank"><img src="${
      member.velog
    }" alt="${member.name === "조영현" ? "Tstory" : "Velog"}"></a>
            </div>
        `;

    teamContainer.appendChild(memberDiv);

    // Add event listener for each member to show modal
    const memberContent = document.getElementById(`member_content_${idx}`);
    memberContent.addEventListener("click", () => {
      showModal(members[idx]);
    });
  });

  const closeBtn = document.getElementById("close-modal");
  const teamModal = document.getElementById("modal_container");

  function showModal(member) {
    teamModal.style.display = "none";
    teamModal.style.display = "flex"; // flex로 변경하여 중앙에 위치하도록 함

    // 멤버 사진
    const imgBox = document.getElementById("member_image");
    imgBox.innerHTML = `<img src="${member.imgSrc}" alt="${member.name}">`;

    // 멤버 이름, 나이
    const memberName = document.getElementById("member_name");
    const memberAge = document.getElementById("member_age");
    memberName.innerText = member.name;
    memberAge.innerText = member.age + "살";

    // 멤버 내용
    const memberInfo = document.getElementById("member_content");
    memberInfo.innerHTML = `
            <div class="content_inner">
                <img src="${imagePath}icon-agree.png" alt="협업" class="modal_icon">
                ${member.style}
            </div>
            <div class="content_inner">
                <img src="${imagePath}icon-positive.png" alt="장점" class="modal_icon">
                ${member.advantages}
            </div>
            <div class="content_inner">
                <img src="${imagePath}icon-tmi.png" alt="tmi" class="modal_icon">
                ${member.tmi}
            </div>
        `;
    disableScroll();
  }

  // 닫기 버튼 누르면 모달 사라짐
  closeBtn.addEventListener("click", () => {
    teamModal.style.display = "none";
    enableScroll();
  });

  // 모달 바깥화면 클릭 시 모달 사라짐
  window.addEventListener("click", (event) => {
    if (event.target === teamModal) {
      teamModal.style.display = "none";
      enableScroll();
    }
  });
});
