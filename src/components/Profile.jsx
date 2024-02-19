import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const [isEdited, setIsEdited] = useState(false);
  const editBtnHandler = () => {
    setIsEdited(!isEdited);
  };

  const editConfirmHandler = () => {
    window.confirm("이대로 수정하시겠습니까?");
    setIsEdited(!isEdited);
  };

  // 유저정보 가져오기
  const loggedinUserInfo = useSelector((state) => state.userInfoReducer);
  console.log(loggedinUserInfo);

  return (
    <StContainer>
      <StProfileBox>
        <StH1>프로필 관리</StH1>
        <StProfileImg
          src="data:image/jpeg;base64,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"
          alt=""
        />
        {!isEdited ? (
          <StH2>nickname</StH2>
        ) : (
          <input type="text" value="nickname" />
        )}
        <StH3>userId</StH3>
        {!isEdited ? (
          <button onClick={editBtnHandler}>수정하기</button>
        ) : (
          <StEditConfirmBtns>
            <button onClick={editBtnHandler}>취소</button>
            <button onClick={editConfirmHandler}>수정완료</button>
          </StEditConfirmBtns>
        )}
      </StProfileBox>
    </StContainer>
  );
}

export default Profile;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #d2d2d2;
  border-radius: 2rem;
  padding: 20px;
  width: 500px;
  height: 300px;
`;

const StH1 = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const StProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StH2 = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const StH3 = styled.p`
  color: gray;
  font-size: 20px;
  font-weight: 400;
`;

const StEditConfirmBtns = styled.div`
  display: flex;
  gap: 10px;
`;
