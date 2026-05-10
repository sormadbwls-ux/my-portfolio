document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");

    // [핵심] 개별 이미지가 아니라 '문서 전체'에서 클릭을 감시합니다.
    document.addEventListener('click', function(e) {
        // 클릭된 요소가 'clickable_img' 클래스를 가지고 있는지 확인
        if (e.target && e.target.classList.contains('clickable_img')) {
            console.log("클릭 감지 완료!"); // 브라우저 검사창(F12)에서 확인 가능
            modal.style.display = "flex"; // 중앙 정렬을 위해 flex 사용
            modalImg.src = e.target.src;
            document.body.style.overflow = "hidden"; // 배경 스크롤 방지
        }
    });

    // 모달 닫기 (배경 클릭 시)
    if (modal) {
        modal.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }
});